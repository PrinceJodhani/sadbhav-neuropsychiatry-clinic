import { Testimonial } from "@/types/testimonial";
import { User } from "lucide-react";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-6 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:p-4 xl:p-6">
        <div className="mb-3 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-4 border-b border-body-color border-opacity-10 pb-4 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
            <User size={24} className="text-gray-600 dark:text-gray-300" />
          </div>
          <div className="w-full">
            <h3 className="mb-0.5 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;