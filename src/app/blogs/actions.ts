'use server';

import { query } from '@/lib/db';

/**
 * Fetch blogs with optional search logic:
 * - If `searchQuery` starts with '#' => do a partial/insensitive hashtag-based filter.
 * - Else do a basic text search (case-insensitive) in the title.
 */
export async function getBlogs(searchQuery?: string) {
  try {
    // If no search query, fetch all
    if (!searchQuery) {
      const allBlogs = await query(`
        SELECT * 
        FROM mentalhealth 
        WHERE email = 'ajmera.jash@gmail.com'
        ORDER BY id DESC
      `);
      return allBlogs.rows;
    }

    // If searchQuery starts with '#', do partial match in tags
    if (searchQuery.startsWith('#')) {
      // Remove the leading '#' and do partial match
      const partialTag = searchQuery.slice(1).toLowerCase();

      // Example: if partialTag = "mental", we match all tags that contain "#mental" (case-insensitive)
      // In DB, you might have "#mentalhealth, #anxiety"
      // => We'll do: LOWER(tags) LIKE '%#mental%'
      // or if your DB doesn't always store a leading #, adjust as needed.
      const byHashtag = await query(
        `
        SELECT *
        FROM mentalhealth
        WHERE email = 'ajmera.jash@gmail.com'
        AND LOWER(tags) LIKE LOWER($1)
        ORDER BY id DESC
        `,
        [`%${partialTag}%`]
      );
      return byHashtag.rows;
    }

    // Otherwise, search by title (partial + case-insensitive)
    const byText = await query(
      `
      SELECT *
      FROM mentalhealth
      WHERE LOWER(title) LIKE LOWER($1)
      AND email = 'ajmera.jash@gmail.com'
      ORDER BY id DESC
      `,
      [`%${searchQuery}%`],
    );
    return byText.rows;
  } catch (error) {
    console.error("Error getting blogs:", error);
    throw new Error("Failed to get blogs");
  }
}

export async function getLatestThreeBlogs() {
    try {
      const result = await query(`
        SELECT *
        FROM mentalhealth
        WHERE email = 'ajmera.jash@gmail.com'
        ORDER BY id DESC
        LIMIT 3
      `);
      return result.rows;
    } catch (error) {
      console.error("Error fetching latest blogs:", error);
      throw new Error("Failed to fetch latest blogs");
    }
  }