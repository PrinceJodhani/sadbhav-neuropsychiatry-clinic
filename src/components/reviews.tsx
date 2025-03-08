'use client'
import { useEffect, useState } from "react";
import { Star, ChevronDown, ThumbsUp } from "lucide-react";

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
    <div className="max-w-3xl mx-auto p-4 dark:bg-gray-900 dark:text-white relative overflow-hidden">
      {/* Top-right SVG Background */}
      <div className="absolute right-0 top-0 z-0 opacity-50">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Bottom-left SVG Background */}
      <div className="absolute bottom-0 left-0 z-0 opacity-50">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main content with higher z-index */}
      <div className="relative z-10">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">{data.place_info.title}</h1>
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400 mb-2 text-sm">
            
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
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all hover:shadow-md"
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
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
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
                      View on Google
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
    </div>
  );
}