'use client'
import { useEffect, useState } from "react";
import { Star, ChevronDown, MapPin, ThumbsUp } from "lucide-react";

interface Review {
  link: string;
  rating: number;
  date: string;
  iso_date: string;
  iso_date_of_last_edit: string;
  source: string;
  review_id: string;
  user: {
    name: string;
    link: string;
    contributor_id: string;
    thumbnail: string;
    local_guide?: boolean;
    reviews?: number;
    photos?: number;
  };
  snippet: string;
  extracted_snippet: {
    original: string;
  };
  likes: number;
}

interface ReviewsData {
  search_metadata: any;
  search_parameters: any;
  place_info: {
    title: string;
    address: string;
    rating: number;
    reviews: number;
    type: string;
  };
  topics: any[];
  reviews: Review[];
  serpapi_pagination: any;
}

const ITEMS_PER_PAGE = 4;

export default function ReviewsPage() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [visibleReviews, setVisibleReviews] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((json: ReviewsData) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleReviews((prev) => Math.min(prev + ITEMS_PER_PAGE, data?.reviews.length || 0));
  };

  if (loading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading reviews...</div>
      </div>
    );
  }

  if (!data) return <p>No reviews data found.</p>;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 dark:bg-gray-900 dark:text-white">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">{data.place_info.title}</h1>
        <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400 mb-2 text-sm">
          <MapPin className="w-3 h-3" />
          <p>{data.place_info.address}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">{renderStars(data.place_info.rating)}</div>
          <p className="text-sm">
            {data.place_info.rating.toFixed(1)} ({data.place_info.reviews} reviews)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {data.reviews.slice(0, visibleReviews).map((review) => (
          <div
            key={review.review_id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all"
          >
            <div className="flex items-start gap-3">
              <img
                src={review.user.thumbnail}
                alt={`${review.user.name} thumbnail`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-sm truncate">{review.user.name}</p>
                  {review.user.local_guide && (
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      Local Guide
                    </span>
                  )}
                </div>
                <div className="flex mt-0.5 mb-1">{renderStars(review.rating)}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {review.date}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {review.snippet}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{review.likes}</span>
                  </div>
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleReviews < (data.reviews.length || 0) && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMore}
            className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition-colors"
          >
            View more reviews
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}