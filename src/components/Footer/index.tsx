import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { clinicPages, conditions, guides, onlinePages, pathOf, treatments } from "@/content";
import type { ContentPage } from "@/content/types";
import { clinic } from "@/lib/clinic";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  XIcon,
  YouTubeIcon,
} from "../Common/BrandIcons";

const socials = [
  { label: "Facebook", href: clinic.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: clinic.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: clinic.social.youtube, Icon: YouTubeIcon },
  { label: "X", href: clinic.social.x, Icon: XIcon },
];

const linkClass = "transition-colors hover:text-white";
const pageLink = (page: ContentPage) => ({ label: page.name, href: pathOf(page) });
const headingClass = "text-xs font-semibold uppercase tracking-[0.18em] text-white";

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className={headingClass}>{title}</h2>
      <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 ${linkClass}`}
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
              </a>
            ) : (
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/65">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-lotus-600/10 blur-3xl"
      />

      <div className="container relative pb-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" aria-label={`${clinic.name} – home`} className="inline-block">
              <Image
                src="/images/sadbhav/logo.png"
                alt={clinic.name}
                width={960}
                height={349}
                sizes="122px"
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed">
              Compassionate, evidence-based psychiatric care in Surat and online, led by{" "}
              <Link
                href={clinic.doctor.profilePath}
                className="text-white/85 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
              >
                {clinic.doctor.name}
              </Link>
              , {clinic.doctor.credentials}.
            </p>

            <ul className="mt-6 space-y-3.5 text-[0.9375rem]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {clinic.address.full}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={clinic.phone.href} className={linkClass}>
                  {clinic.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={clinic.whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={`mailto:${clinic.email}`} className={`break-all ${linkClass}`}>
                  {clinic.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <LinkColumn title="Conditions" links={conditions.map(pageLink)} />
          </div>

          <div className="lg:col-span-2">
            <LinkColumn
              title="Care"
              links={[...treatments, ...onlinePages].map(pageLink)}
            />
          </div>

          <div className="space-y-10 lg:col-span-2">
            <nav aria-label="Clinics">
              <h2 className={headingClass}>Clinics</h2>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {clinicPages.map((page) => {
                  const branch = clinic.branches.find((b) => b.id === page.branchId)!;
                  return (
                    <li key={page.slug}>
                      <Link href={pathOf(page)} className={linkClass}>
                        <span className="block text-white/90">{page.name}</span>
                        <span className="block text-sm">{branch.days}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <LinkColumn
              title="About"
              links={[
                { label: "Dr. Jash Ajmera", href: clinic.doctor.profilePath },
                { label: "Patient reviews", href: "/#reviews" },
                { label: "Patient FAQs", href: "/faq" },
              ]}
            />
          </div>

          <div className="lg:col-span-2">
            <LinkColumn
              title="Learn"
              links={[
                ...guides.map(pageLink),
                { label: "Mental health articles", href: "/blogs" },
                ...clinic.resources.map((r) => ({ label: r.title, href: r.href, external: true })),
                { label: "Psychotherapy brochure (PDF)", href: clinic.brochureUrl },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Aarogya Minds. All rights reserved.</span>
            <Link href="/privacy-policy" className={`underline underline-offset-4 ${linkClass}`}>
              Privacy policy &amp; disclaimer
            </Link>
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://aarogyaminds.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/85 transition-colors hover:text-white"
            >
              Aarogya Minds
            </a>
          </p>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/55">
          The information on this website is for general awareness and is not a substitute for
          professional medical advice, diagnosis or treatment. In a crisis, call Tele-MANAS 14416
          (free, 24×7) or 112.
        </p>

        {/* Room for the mobile action bar */}
        <div aria-hidden="true" className="h-20 md:hidden" />
      </div>
    </footer>
  );
};

export default Footer;
