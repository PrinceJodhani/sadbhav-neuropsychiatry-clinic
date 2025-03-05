// src/components/GoogleRating.tsx
type GoogleRatingProps = {
    rating: number;
    reviewCount: number;
  };
  
  export default function GoogleRating({ rating, reviewCount }: GoogleRatingProps) {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-semibold">
          {rating} ⭐ ({reviewCount} reviews)
        </p>
      </div>
    );
  }