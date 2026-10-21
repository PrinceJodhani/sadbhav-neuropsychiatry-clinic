export type YoutubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
};

// The clinic's introduction video, with its custom thumbnail stored locally.
export const featuredVideo: YoutubeVideo = {
  id: "qs9D1kjHNwQ",
  title: "Mental health insights by Dr. Jash Ajmera",
  publishedAt: "2023-11-22T06:20:15Z",
  thumbnail: "/images/sadbhav/yt.jpg",
};

const cleanTitle = (title: string) => title.replace(/#\S+/g, "").replace(/\s+/g, " ").trim();

/** Latest uploads from the clinic channel. Fetched on the server and cached. */
export async function getChannelVideos(limit = 6): Promise<YoutubeVideo[]> {
  const key = process.env.YOUTUBE_API_KEY ?? process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID ?? process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  if (!key || !channelId) return [];

  try {
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${key}`,
      { next: { revalidate: 86400 } },
    );
    if (!channelRes.ok) return [];
    const channel = await channelRes.json();
    const uploads = channel?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploads) return [];

    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${limit}&playlistId=${uploads}&key=${key}`,
      { next: { revalidate: 21600 } },
    );
    if (!playlistRes.ok) return [];
    const playlist = await playlistRes.json();

    return (playlist?.items ?? [])
      .map((item: any) => {
        const snippet = item.snippet ?? {};
        const thumbs = snippet.thumbnails ?? {};
        return {
          id: snippet.resourceId?.videoId,
          title: cleanTitle(snippet.title ?? ""),
          publishedAt: snippet.publishedAt,
          thumbnail: (thumbs.maxres ?? thumbs.standard ?? thumbs.high ?? thumbs.medium)?.url,
        };
      })
      .filter(
        (video: YoutubeVideo) =>
          video.id && video.thumbnail && !/^(private|deleted) video$/i.test(video.title),
      );
  } catch (error) {
    console.error("Failed to load YouTube videos:", error);
    return [];
  }
}
