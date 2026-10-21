import { ArrowUpRight, PenLine, Quote } from "lucide-react";
import reviewsData from "../../public/reviews.json";
import { googleReviewsUrl, googleWriteReviewUrl } from "@/lib/clinic";
import { GoogleIcon } from "./Common/BrandIcons";
import SectionHeading from "./Common/SectionHeading";
import Stars from "./Common/Stars";
import ExpandableText from "./ExpandableText";

const formatMonth = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric" }).format(new Date(iso));

// Rendered on the server from /public/reviews.json (Google reviews snapshot).
export default function ReviewsPage() {
  const place = reviewsData.place_info;
  const reviews = [...reviewsData.reviews].sort((a, b) => b.iso_date.localeCompare(a.iso_date));

  return (
    <section id="reviews" className="section overflow-hidden bg-card">
      <div className="container">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="Patient stories"
            title={
              <>
                Words from the people we <em>care</em> for
              </>
            }
            description="Real reviews from patients and families on Google."
          />

          <div data-reveal className="lg:col-span-5">
            <div className="flex flex-col gap-5 rounded-4xl border border-border/80 bg-background p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="heading-display text-6xl leading-none text-foreground">
                  {place.rating.toFixed(1)}
                </span>
                <div>
                  <Stars rating={place.rating} starClassName="h-5 w-5" />
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <GoogleIcon className="h-4 w-4" />
                    {place.reviews} Google reviews
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:flex-col">
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Read all
                  <ArrowUpRight />
                </a>
                <a
                  href={googleWriteReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <PenLine />
                  Write a review
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Swipeable on phones, masonry columns from tablet up. */}
        <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:mt-14 md:block md:columns-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:columns-3">
          {reviews.map((review) => (
            <figure
              key={review.review_id}
              className="flex w-[86%] shrink-0 snap-center flex-col rounded-4xl border border-border/70 bg-background p-6 xs:w-[70%] md:mb-5 md:w-auto md:break-inside-avoid"
            >
              <div className="flex items-center justify-between">
                <Stars rating={review.rating} />
                <Quote className="h-6 w-6 text-highlight/30" />
              </div>
              {/* Full text from tablet up; clamped with "Read more" on phones. */}
              <blockquote className="mb-5 mt-4 flex flex-col">
                <ExpandableText
                  text={review.snippet}
                  className="whitespace-pre-line text-[0.95rem] leading-relaxed text-foreground/85"
                  clampClassName="line-clamp-6 md:line-clamp-none"
                />
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border/60 pt-5">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-100 text-sm font-semibold text-brand-800 dark:bg-brand-400/15 dark:text-brand-200">
                  {review.user.name.charAt(0).toUpperCase()}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.user.thumbnail}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-semibold capitalize text-foreground">
                    {review.user.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {review.user.local_guide ? "Local Guide · " : ""}
                    {formatMonth(review.iso_date)}
                  </span>
                </span>
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${review.user.name}'s review on Google`}
                  className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-secondary"
                >
                  <GoogleIcon className="h-[1.1rem] w-[1.1rem]" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
