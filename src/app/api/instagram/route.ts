import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

// Define interfaces for our data
interface InstagramPost {
  id: string;
  url: string;
  thumbnailUrl: string;
  caption?: string;
  likes: number;
  comments: number;
}

interface InstagramProfile {
  username: string;
  fullName: string;
  profilePicUrl: string;
  bio: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  posts: InstagramPost[];
}

interface CachedData {
    profile: InstagramProfile;
    servedPages: Set<number>;
    timestamp: number;
  }
// Replace existing cache variables:
let cachedData: CachedData | null = null;
let lastFetched = 0;
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const page = parseInt(searchParams.get('page') || '0');
  const postsPerPage = parseInt(searchParams.get('limit') || '6');
  
  if (!username) {
    return NextResponse.json({ error: 'Username parameter is required' }, { status: 400 });
  }

try {
  // Check if we have cached data that's still valid
  const now = Date.now();
  if (cachedData && cachedData.profile.username === username && now - cachedData.timestamp < CACHE_TTL) {
    if (cachedData.servedPages.has(page)) {
      return NextResponse.json({ error: 'Page already served' }, { status: 400 });
    }
    cachedData.servedPages.add(page);
    
    const paginatedPosts = cachedData.profile.posts.slice(
      page * postsPerPage, 
      (page + 1) * postsPerPage
    );
    
    return NextResponse.json({
      ...cachedData.profile,
      posts: paginatedPosts,
      hasMore: (page + 1) * postsPerPage < cachedData.profile.posts.length
    });
  }
  
  // No valid cache; scrape Instagram
  const profileData = await scrapeInstagramProfile(username);
  lastFetched = now;
  
  // Store new scraped data in cache
  cachedData = {
    profile: profileData,
    servedPages: new Set([page]),
    timestamp: now
  };
  
  const paginatedPosts = profileData.posts.slice(
    page * postsPerPage,
    (page + 1) * postsPerPage
  );
  
  return NextResponse.json({
    ...profileData,
    posts: paginatedPosts,
    hasMore: (page + 1) * postsPerPage < profileData.posts.length
  });
} catch (error) {
  console.error(error);
  return NextResponse.json({ error: 'Failed to load Instagram profile' }, { status: 500 });
}

async function scrapeInstagramProfile(username: string): Promise<InstagramProfile> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');

    // Navigate to the profile page with an increased timeout
    await page.goto(`https://www.instagram.com/${username}/`, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });
    
    // Dismiss potential login popup
    try {
      const loginPopup = await page.$('div[role="dialog"]');
      if (loginPopup) {
        const closeButton = await loginPopup.$('button');
        if (closeButton) {
          await closeButton.click();
        } else {
          await page.mouse.click(10, 10);
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.log('No login popup found or unable to dismiss:', error);
    }
    
    // Ensure page has loaded the main content
    await page.waitForSelector('img', { timeout: 30000 });
    
    // Scroll a few times to load posts (adjust the number of iterations if needed)
    let previousHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newHeight = await page.evaluate(() => document.body.scrollHeight);
      if (newHeight === previousHeight) break;
      previousHeight = newHeight;
    }
    
    // Extract profile data in one evaluate call
    const profileData: InstagramProfile = await page.evaluate(() => {
      const parseCount = (countStr: string): number => {
        if (!countStr) return 0;
        countStr = countStr.replace(',', '').trim();
        if (countStr.includes('K')) return parseFloat(countStr.replace('K', '')) * 1000;
        if (countStr.includes('M')) return parseFloat(countStr.replace('M', '')) * 1000000;
        return parseInt(countStr);
      };

      // Try to get the profile picture
      const profilePicElement = document.querySelector('img[alt*="profile picture"]') as HTMLImageElement;
      const profilePicUrl = profilePicElement ? profilePicElement.src : '';

      // Get the username from the meta tag
      const metaUsername = document.querySelector('meta[property="og:username"]') as HTMLMetaElement;
      const username = metaUsername ? metaUsername.content : '';

      // Get the full name (using <h1> as a simple selector)
      const fullNameElement = document.querySelector('h1');
      const fullName = fullNameElement ? fullNameElement.textContent || username : username;

      // Extract counts for posts, followers, and following using list items
      const countEls = document.querySelectorAll('ul li span');
      let postsCount = 0, followersCount = 0, followingCount = 0;
      if (countEls.length >= 3) {
        postsCount = parseCount(countEls[0].getAttribute('title') || countEls[0].textContent || '');
        followersCount = parseCount(countEls[1].getAttribute('title') || countEls[1].textContent || '');
        followingCount = parseCount(countEls[2].getAttribute('title') || countEls[2].textContent || '');
      }
      
      // Get bio text (selector may need adjustment based on current Instagram layout)
      const bioElement = document.querySelector('div.-vDIg span');
      const bio = bioElement ? (bioElement as HTMLElement).innerText : '';

      // Get posts by selecting anchors in the article
      const postElements = document.querySelectorAll('article a');
      const posts = Array.from(postElements).map((el, index) => {
        const img = el.querySelector('img') as HTMLImageElement;
        const url = el.getAttribute('href') || '';
        return {
          id: `post-${index}`,
          url: url.startsWith('http') ? url : `https://instagram.com${url}`,
          thumbnailUrl: img ? img.src : '',
          caption: img ? img.alt : '',
          likes: 0,    // Placeholder values; you can update if needed
          comments: 0  // Placeholder values; you can update if needed
        };
      }).filter(post => post.thumbnailUrl);
      
      return {
        username,
        fullName,
        profilePicUrl,
        bio,
        postsCount,
        followersCount,
        followingCount,
        posts
      };
    });
    
    return profileData;
  } catch (error) {
    console.error('Error scraping Instagram profile:', error);
    throw new Error('Failed to load Instagram profile');
  } finally {
    await browser.close();
  }
}
}
