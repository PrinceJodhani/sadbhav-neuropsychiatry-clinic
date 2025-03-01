"use client";
import { InstagramIcon, PhoneCall, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-900 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
          {/* Logo and Address Section */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="mb-10">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/sadbhav/main-logo.png"
                  alt="logo"
                  className="w-40 dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/sadbhav/main-logo.png"
                  alt="logo"
                  className="hidden w-40 dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <div className="flex items-start space-x-3 mb-6">
                <p className="text-base text-gray-600 dark:text-gray-300">
                  209 Vesu Point, Vesu Main Road, above HDFC Bank,
                  opp. Vijya Laxmi Hall, Surat, Gujarat 395007.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/sadbhavpsychiatry/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/ajmerajash"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Aarogyaminds"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    className="fill-current"
                  >
                    <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/aarogya.minds/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Branch Timings Section */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="mb-10">
              <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Branch Timings
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="font-medium text-gray-900 dark:text-white">Vesu Branch</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Monday to Saturday<br />
                    Morning: 11:00 AM – 1:00 PM<br />
                    Evening: 4:00 PM – 8:00 PM
                  </p>
                </div>
                
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="font-medium text-gray-900 dark:text-white">Katargam Branch</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Monday to Friday<br />
                    Afternoon: 2:30 PM – 4:00 PM
                  </p>
                </div>
                
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="font-medium text-gray-900 dark:text-white">Ankleshwar Branch</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Saturdays<br />
                    Morning: 9:00 AM – 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="mb-10">
              <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Quick Links
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.aarogyaminds.com/mental-health-tests"
                    className="inline-flex items-center text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  >
                    <span className="h-1 w-2 rounded-full bg-primary mr-2"></span>
                    Mental Health Tests
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aarogyaminds.com/info"
                    className="inline-flex items-center text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  >
                    <span className="h-1 w-2 rounded-full bg-primary mr-2"></span>
                    Mental Health Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aarogyaminds.com/selfhelptools?product=Depression"
                    className="inline-flex items-center text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  >
                    <span className="h-1 w-2 rounded-full bg-primary mr-2"></span>
                    Self Help Tools
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support & Help Section */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="mb-10">
              <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
                Support & Help
              </h2>
              <Link
                href="tel:+917861024557"
                className="inline-flex items-center dark:text-white rounded-full bg-gray-50 px-4 py-2 text-gray-700 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-primary"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                +91 7861024557
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"></div>
        
        {/* Copyright Section */}
        <div className="py-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Aarogya Minds. All rights reserved. | Designed by{" "}
            <a
              href="http://aarogyaminds.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Aarogya Minds
            </a>
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute right-0 top-14 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="#4A6CF7"
            />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="79"
          height="94"
          viewBox="0 0 79 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_94:889)"
          />
          <rect
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            stroke="url(#paint1_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
            fill="url(#paint2_linear_94:889)"
          />
          <path
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
            stroke="url(#paint3_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
            fill="url(#paint4_linear_94:889)"
          />
          <path
            d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
            stroke="url(#paint5_linear_94:889)"
            strokeWidth="0.7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94:889"
              x1="-41"
              y1="21.8445"
              x2="36.9671"
              y2="59.8878"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_94:889"
              x1="25.6675"
              y1="95.9631"
              x2="-42.9608"
              y2="20.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_94:889"
              x1="20.325"
              y1="-3.98039"
              x2="90.6248"
              y2="25.1062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_94:889"
              x1="18.3642"
              y1="-1.59742"
              x2="113.9"
              y2="80.6826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_94:889"
              x1="61.1098"
              y1="62.3249"
              x2="-8.82468"
              y2="58.2156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_94:889"
              x1="65.4236"
              y1="65.0701"
              x2="24.0178"
              y2="41.6598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;