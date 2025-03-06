'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, MoreHorizontal, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

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
  hasMore: boolean;
}

const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export function InstagramFeed({ username }: { username: string }) {
  const [profile, setProfile] = useState<InstagramProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const fetchInstagramData = async (page = 0) => {
    try {
      const isInitialFetch = page === 0;
      
      if (isInitialFetch) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      
      const apiUrl = `/api/instagram?username=${encodeURIComponent(username)}&page=${page}&limit=6`;
      console.log(`Fetching from: ${apiUrl}`);
      
      const response = await fetch(apiUrl);
      
      // Capture response details for debugging
      const responseStatus = response.status;
      const responseStatusText = response.statusText;
      let responseBody = null;
      
      try {
        // Try to get response as text first to avoid parsing errors
        const responseText = await response.text();
        try {
          // Then try to parse as JSON
          responseBody = JSON.parse(responseText);
        } catch (e) {
          // If parsing fails, use the text
          responseBody = responseText;
        }
      } catch (e) {
        responseBody = "Could not read response body";
      }
      
      // Log the response data
      const debugData = {
        url: apiUrl,
        status: responseStatus,
        statusText: responseStatusText,
        body: responseBody
      };
      
      console.log("API Response:", debugData);
      setDebugInfo(debugData);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch Instagram data: ${responseStatus} ${responseStatusText}`);
      }
      
      // If responseBody is already parsed, use it
      const data = typeof responseBody === 'object' ? responseBody : await response.json();

      if (isInitialFetch) {
        setProfile(data);
      } else {
        setProfile(prev => {
          if (!prev) return data;
          
          const newPosts = data.posts.filter(
            newPost => !prev.posts.some(existingPost => existingPost.id === newPost.id)
          );
          
          return {
            ...prev,
            posts: [...prev.posts, ...newPosts],
            hasMore: data.hasMore
          };
        });
      }
    } catch (err) {
      console.error("Error fetching Instagram data:", err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchInstagramData();
  }, [username]);

  const handleLoadMore = () => {
    setCurrentPage(prev => {
      const nextPage = prev + 1;
      fetchInstagramData(nextPage);
      return nextPage;
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-8">
            <Skeleton className="h-24 w-24 rounded-full" />
            <div className="space-y-4 flex-1">
              <Skeleton className="h-4 w-[200px]" />
              <div className="flex space-x-4">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="aspect-square rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 px-6 py-4 rounded-xl">
          <p className="font-medium">Error: {error}</p>
          <p className="mt-2 text-sm">Please ensure the Instagram username is correct and the profile is public.</p>
          
          {debugInfo && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-mono overflow-auto">
              <p>Debug Information:</p>
              <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}
          
          <div className="mt-4">
            <Button 
              onClick={() => fetchInstagramData()} 
              className="bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-800/30 dark:hover:bg-red-800/50 dark:text-red-300"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-200 px-6 py-4 rounded-xl">
          <p className="font-medium">No profile data found.</p>
          
          {debugInfo && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-mono overflow-auto">
              <p>Debug Information:</p>
              <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}
          
          <div className="mt-4">
            <Button 
              onClick={() => fetchInstagramData()} 
              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/50 dark:text-yellow-300"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                <Image 
                  src={profile.profilePicUrl} 
                  alt={`${profile.username}'s profile`} 
                  className="w-full h-full object-cover"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{profile.username}</h2>
                <div className="flex gap-2">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    <a href={`https://www.instagram.com/${profile.username}`} target="_blank" rel="noopener noreferrer">
                    Follow
                    </a>
                  </Button>
                  <Button variant="outline">
                  <a href={`https://www.instagram.com/${profile.username}`} target="_blank" rel="noopener noreferrer">
                    Message
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex gap-6 mb-4">
                <div className="text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{formatCount(profile.postsCount)}</span>
                  <span className="text-gray-600 dark:text-gray-400"> posts</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{formatCount(profile.followersCount)}</span>
                  <span className="text-gray-600 dark:text-gray-400"> followers</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{formatCount(profile.followingCount)}</span>
                  <span className="text-gray-600 dark:text-gray-400"> following</span>
                </div>
              </div>
              
              {/* Bio */}
              <div className="space-y-1">
                <p className="font-medium text-gray-900 dark:text-gray-100">{profile.fullName}</p>
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm">{profile.bio}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 bg-gray-200 dark:bg-gray-700">
          {profile.posts.map((post) => (
            <a 
              key={post.id} 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative group overflow-hidden bg-gray-100 dark:bg-gray-800"
            >
              <Image
                src={post.thumbnailUrl}
                alt={post.caption || `Instagram post by ${profile.username}`}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                width={400}
                height={400}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 fill-white" />
                    <span className="font-semibold">{formatCount(post.likes)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span className="font-semibold">{formatCount(post.comments)}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Load More Button */}
        {profile.hasMore && (
          <div className="p-6 flex justify-center">
            <Button
              onClick={handleLoadMore}
              disabled={loadingMore}
              variant="outline"
              className="min-w-[120px]"
            >
              {loadingMore ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                  Loading
                </div>
              ) : (
                'Load More'
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}