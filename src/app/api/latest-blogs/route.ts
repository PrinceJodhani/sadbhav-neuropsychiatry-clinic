import { getLatestThreeBlogs } from '@/app/blogs/actions';

export async function GET(request: Request) {
  try {
    const blogs = await getLatestThreeBlogs();
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response("Error fetching blogs", { status: 500 });
  }
}
