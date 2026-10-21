"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Play } from "lucide-react";
import type { YoutubeVideo } from "@/lib/youtube";
import { cn } from "@/lib/utils";
import { YouTubeIcon } from "./Common/BrandIcons";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric" }).format(new Date(iso));

/**
 * Click-to-play video gallery. Shows a thumbnail first and only loads the
 * YouTube iframe (≈1 MB of third-party JS) once the visitor presses play.
 */
export default function YoutubeWidget({
  videos,
  channelUrl,
  children,
}: {
  videos: YoutubeVideo[];
  channelUrl: string;
  children?: ReactNode;
}) {
  const [activeId, setActiveId] = useState(videos[0]?.id);
  const [playing, setPlaying] = useState(false);
  const active = videos.find((video) => video.id === activeId) ?? videos[0];
  if (!active) return null;

  const play = (id: string) => {
    setActiveId(id);
    setPlaying(true);
  };

  // Phones: heading → player → playlist. Desktop: heading and playlist on the left, player on the right.
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8">
      <div className="lg:col-span-5 lg:self-end">{children}</div>

      <div data-reveal className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center">
        <div className="relative aspect-video overflow-hidden rounded-4xl bg-black shadow-2xl ring-1 ring-white/10">
          {playing ? (
            <iframe
              key={active.id}
              src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${active.title}`}
              className="group absolute inset-0"
            >
              <Image
                src={active.thumbnail}
                alt=""
                fill
                sizes="(min-width: 992px) 55vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-2xl ring-8 ring-white/20 transition duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                <Play className="ml-1 h-7 w-7 fill-lotus-600 text-lotus-600 sm:h-8 sm:w-8" />
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="lg:col-span-5 lg:self-start">
        {videos.length > 1 && (
          <ul className="space-y-2">
            {videos.map((video) => {
              const isActive = video.id === active.id;
              return (
                <li key={video.id}>
                  <button
                    type="button"
                    onClick={() => play(video.id)}
                    aria-current={isActive || undefined}
                    className={cn(
                      "group flex w-full items-center gap-4 rounded-2xl p-2.5 pr-4 text-left transition-colors",
                      isActive ? "bg-white/10" : "hover:bg-white/5",
                    )}
                  >
                    <span className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-white/5">
                      <Image src={video.thumbnail} alt="" fill sizes="112px" className="object-cover" />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                        <Play className="h-5 w-5 fill-white text-white" />
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="line-clamp-2 text-sm font-medium leading-snug text-white">
                        {video.title}
                      </span>
                      <span className="mt-1 block text-xs text-white/50">
                        {formatDate(video.publishedAt)}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <a
          href={`${channelUrl}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light mt-8"
        >
          <YouTubeIcon className="text-[#FF3355]" />
          Subscribe on YouTube
        </a>
      </div>
    </div>
  );
}
