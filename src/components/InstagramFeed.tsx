// src/components/InstagramFeed.tsx
import Image from "next/image";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
};

type InstagramFeedProps = {
  posts: InstagramPost[];
};

export default function InstagramFeed({ posts }: InstagramFeedProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No Instagram posts available at this time.</p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Follow Us on Instagram</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="relative aspect-square">
            {post.media_type === "IMAGE" ? (
              <Image
                src={post.media_url}
                alt={post.caption || "Instagram post"}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            ) : (
              <p className="text-center text-gray-500">Media type not supported</p>
            )}
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-all duration-300 rounded-lg"
            >
              <span className="text-sm font-semibold">View on Instagram</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}