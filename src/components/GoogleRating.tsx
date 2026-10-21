import { googleReviewsUrl } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { GoogleIcon } from "./Common/BrandIcons";
import Stars from "./Common/Stars";

type GoogleRatingProps = {
  rating: number;
  reviewCount: number;
  className?: string;
};

export default function GoogleRating({ rating, reviewCount, className }: GoogleRatingProps) {
  return (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-card shadow-soft">
        <GoogleIcon className="h-6 w-6" />
      </span>
      <span className="flex flex-col">
        <span className="flex items-center gap-2">
          <span className="text-xl font-bold leading-none text-foreground">{rating.toFixed(1)}</span>
          <Stars rating={rating} />
        </span>
        <span className="mt-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
          {reviewCount} reviews on Google
        </span>
      </span>
    </a>
  );
}
