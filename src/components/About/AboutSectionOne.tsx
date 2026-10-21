import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, FileText, Languages } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon } from "../Common/BrandIcons";
import SectionHeading from "../Common/SectionHeading";

const highlights = [
  "Integrated psychotherapy and medication",
  "Active in community mental health",
  "Workshops for NGOs and corporates",
  `${clinic.doctor.yearsOfExperience} years of psychiatric expertise`,
];

const socials = [
  { label: "Facebook", href: clinic.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: clinic.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: clinic.social.youtube, Icon: YouTubeIcon },
  { label: "X", href: clinic.social.x, Icon: XIcon },
];

const AboutSectionOne = () => {
  // No overflow-hidden on this section: it would become the sticky card's scroll container.
  return (
    <section id="about" className="section bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Profile card */}
          <div className="lg:col-span-5">
            <div
              data-reveal
              className="relative overflow-hidden rounded-5xl border border-border/80 bg-background p-6 sm:p-9 lg:sticky lg:top-28"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-brand-100 via-brand-50 to-lotus-50 dark:from-brand-400/15 dark:via-transparent dark:to-lotus-400/10"
              />
              <div className="relative">
                <Image
                  src="/images/sadbhav/dr-jash-ajmera-avatar.jpg"
                  alt="Portrait of Dr. Jash Ajmera"
                  width={112}
                  height={112}
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-background sm:h-28 sm:w-28"
                />
                <p className="heading-display mt-5 text-3xl text-foreground">{clinic.doctor.name}</p>
                <p className="mt-1.5 font-semibold text-primary">{clinic.doctor.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{clinic.doctor.credentials}</p>

                <dl className="mt-7 grid grid-cols-2 gap-3">
                  {clinic.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse rounded-2xl border border-border/70 bg-card p-4"
                    >
                      <dt className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</dt>
                      <dd className="heading-display text-3xl leading-none text-foreground">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Languages className="h-4 w-4 shrink-0 text-primary" />
                  Consultations in {clinic.languages.join(", ").replace(/, ([^,]*)$/, " & $1")}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Dr. Jash Ajmera on ${label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-7 lg:pt-4">
            <SectionHeading
              eyebrow="Meet your psychiatrist"
              title={
                <>
                  Expert care, delivered with <em>compassion</em>.
                </>
              }
            />
            <div data-reveal className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Dr. Jash Ajmera is a trusted psychiatrist in Surat, specialising in personalised
                mental health care at {clinic.name}. He trained at GAIMS, Bhuj (M.B.B.S.) and
                Government Medical College, Rajkot (D.P.M. Psychiatry), and is a Fellow of the Indian
                Psychiatric Society.
              </p>
              <p>
                Since 2017, he has been actively involved in the National Mental Health Programme
                and community outreach across Gujarat — with a mission to make quality psychiatric
                services accessible to all.
              </p>
            </div>

            <ul data-reveal className="mt-9 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <figure data-reveal className="mt-10 border-l-2 border-highlight pl-6">
              <blockquote className="heading-display text-2xl italic leading-snug text-foreground sm:text-[1.75rem]">
                “Making quality psychiatric care accessible to all.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">Our mission</figcaption>
            </figure>

            <div data-reveal className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <a
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <CalendarCheck />
                Book an appointment
              </a>
              <Link href={clinic.doctor.profilePath} className="btn btn-secondary btn-lg group">
                Full profile
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a href={clinic.brochureUrl} className="btn btn-ghost btn-lg">
                <FileText />
                Psychotherapy brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
