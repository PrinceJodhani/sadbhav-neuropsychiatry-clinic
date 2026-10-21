import { clinic } from "@/lib/clinic";
import { featuredVideo, getChannelVideos } from "@/lib/youtube";
import YoutubeWidget from "../YoutubeWidget";

const Video = async () => {
  const latest = await getChannelVideos(6);
  // Keep the custom local thumbnail for the featured video, but use its live title.
  const featuredTitle = latest.find((video) => video.id === featuredVideo.id)?.title;
  const videos = [
    { ...featuredVideo, title: featuredTitle || featuredVideo.title },
    ...latest.filter((video) => video.id !== featuredVideo.id),
  ];

  return (
    <section id="videos" className="section bg-night overflow-hidden">
      <div className="container">
        <YoutubeWidget videos={videos} channelUrl={clinic.social.youtube}>
          <div data-reveal>
            <p className="eyebrow text-brand-300">Watch &amp; learn</p>
            <h2 className="heading-section mt-4 text-white [&_em]:text-lotus-300">
              Mental health, explained in <em>your language</em>.
            </h2>
            <p className="lead mt-5 text-white/70">
              Videos by Dr. Jash Ajmera — in Gujarati — on understanding mental illness and
              knowing when to seek help.
            </p>
          </div>
        </YoutubeWidget>
      </div>
    </section>
  );
};

export default Video;
