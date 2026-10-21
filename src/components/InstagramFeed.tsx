import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import instagram from "../../public/instaurl.json";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "./Common/BrandIcons";
import SectionHeading from "./Common/SectionHeading";

// Instagram CDN links carry a hex expiry timestamp (oe=…) and return 403 once it
// passes, so only show scraped posts while their images are still valid.
function isFresh(url: string) {
  const match = /[?&]oe=([0-9a-f]+)/i.exec(url);
  return !!match && parseInt(match[1], 16) * 1000 > Date.now() + 24 * 60 * 60 * 1000;
}

const channels = [
  {
    name: "Instagram",
    handle: "@sadbhav_clinic",
    description: "Clinic updates & mental health tips",
    href: clinic.social.instagramClinic,
    Icon: InstagramIcon,
    tile: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    name: "Instagram",
    handle: "@aarogya.minds",
    description: "Everyday wellbeing by Aarogya Minds",
    href: clinic.social.instagram,
    Icon: InstagramIcon,
    tile: "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5]",
  },
  {
    name: "YouTube",
    handle: "@Aarogyaminds",
    description: "Mental health videos in Gujarati",
    href: clinic.social.youtube,
    Icon: YouTubeIcon,
    tile: "bg-[#FF0033]",
  },
  {
    name: "Facebook",
    handle: "sadbhavpsychiatry",
    description: "News and awareness posts",
    href: clinic.social.facebook,
    Icon: FacebookIcon,
    tile: "bg-[#1877F2]",
  },
];

export function InstagramFeed() {
  const posts = instagram.posts.filter((post) => isFresh(post.thumbnailUrl)).slice(0, 6);

  return (
    <section id="social" className="section pt-0">
      <div className="container">
        <div className="surface overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Stay connected"
                title={
                  <>
                    Join our <em>community</em>
                  </>
                }
                description="Follow along for mental health awareness, practical tips and clinic updates."
              />
              <a
                href={clinic.social.instagramClinic}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-8"
              >
                <InstagramIcon />
                Follow @{instagram.username}
              </a>
            </div>

            <div className="lg:col-span-7">
              {posts.length >= 3 ? (
                <ul className="grid grid-cols-3 gap-2 sm:gap-3">
                  {posts.map((post) => (
                    <li key={post.id}>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block aspect-square overflow-hidden rounded-2xl bg-muted"
                      >
                        <Image
                          src={post.thumbnailUrl}
                          alt={post.caption?.slice(0, 120) || `Instagram post by @${instagram.username}`}
                          fill
                          sizes="(min-width: 992px) 14rem, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {channels.map(({ name, handle, description, href, Icon, tile }) => (
                    <li key={handle}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full items-center gap-4 rounded-3xl border border-border/70 bg-background p-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft"
                      >
                        <span className={cn("icon-tile text-white", tile)}>
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-semibold text-foreground">
                            <span className="sr-only">{name}: </span>
                            {handle}
                          </span>
                          <span className="block text-sm text-muted-foreground">{description}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
