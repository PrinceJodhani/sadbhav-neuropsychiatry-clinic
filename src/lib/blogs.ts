import { query } from "@/lib/db";

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string | null;
  author: string;
  createdAt: string;
  url: string;
};

const AUTHOR_EMAIL = "ajmera.jash@gmail.com";
// Only the columns the UI needs — never ship full_html_blog to listing pages.
const COLUMNS = "id, title, short_summary, tags, img_url, author, created_at, slug";

function cleanTitle(title: string) {
  const trimmed = title.trim();
  // Drop a stray unmatched leading quote, e.g. `"Celebrating Neurodiversity…`
  const quotes = (trimmed.match(/"/g) || []).length;
  return trimmed.startsWith('"') && quotes % 2 === 1 ? trimmed.slice(1).trim() : trimmed;
}

function toPost(row: any): BlogPost {
  return {
    id: String(row.id),
    title: cleanTitle(String(row.title ?? "")),
    summary: String(row.short_summary ?? "").trim(),
    tags: String(row.tags ?? "")
      .split(",")
      .map((tag) => tag.trim().replace(/^#/, ""))
      .filter(Boolean),
    image: row.img_url ? String(row.img_url).replace(/^http:\/\//, "https://") : null,
    author: row.author || "Dr. Jash Ajmera",
    createdAt: new Date(row.created_at).toISOString(),
    url: `https://aarogyaminds.com/blogs/${row.slug}`,
  };
}

export async function getLatestBlogs(limit = 3): Promise<BlogPost[]> {
  try {
    const result = await query(
      `SELECT ${COLUMNS} FROM mentalhealth WHERE email = $1 ORDER BY id DESC LIMIT $2`,
      [AUTHOR_EMAIL, limit],
    );
    return result.rows.map(toPost);
  } catch (error) {
    console.error("Failed to load latest blogs:", error);
    return [];
  }
}

/**
 * - Empty query: every post.
 * - "#tag": partial, case-insensitive match on tags (falls back to a text search if no tag matches).
 * - Anything else: partial match on title, tags or summary.
 */
export async function searchBlogs(q: string): Promise<{ posts: BlogPost[]; failed: boolean }> {
  const textSearch = (text: string) =>
    query(
      `SELECT ${COLUMNS} FROM mentalhealth
       WHERE email = $1 AND (title ILIKE $2 OR tags ILIKE $2 OR short_summary ILIKE $2)
       ORDER BY id DESC`,
      [AUTHOR_EMAIL, `%${text}%`],
    );

  try {
    let result;
    if (!q) {
      result = await query(
        `SELECT ${COLUMNS} FROM mentalhealth WHERE email = $1 ORDER BY id DESC`,
        [AUTHOR_EMAIL],
      );
    } else if (q.startsWith("#")) {
      result = await query(
        `SELECT ${COLUMNS} FROM mentalhealth WHERE email = $1 AND tags ILIKE $2 ORDER BY id DESC`,
        [AUTHOR_EMAIL, `%${q.slice(1)}%`],
      );
      if (!result.rows.length && q.length > 1) result = await textSearch(q.slice(1));
    } else {
      result = await textSearch(q);
    }
    return { posts: result.rows.map(toPost), failed: false };
  } catch (error) {
    console.error("Failed to search blogs:", error);
    return { posts: [], failed: true };
  }
}

/** Most-used tags across all posts, for quick-filter chips. */
export async function getPopularTags(limit = 6): Promise<string[]> {
  try {
    const result = await query(`SELECT tags FROM mentalhealth WHERE email = $1`, [AUTHOR_EMAIL]);
    const counts = new Map<string, number>();
    for (const row of result.rows) {
      for (const raw of String(row.tags ?? "").split(",")) {
        const tag = raw.trim().replace(/^#/, "").toLowerCase();
        if (tag && !tag.includes(" ")) counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([tag]) => tag);
  } catch (error) {
    console.error("Failed to load blog tags:", error);
    return [];
  }
}
