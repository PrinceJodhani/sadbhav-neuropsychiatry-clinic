"use client";

import { Feature } from "@/types/feature";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, iconColor, bgColor, link } = feature;
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="w-full group"
    >
      <div className="h-full rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-800/20 dark:hover:shadow-gray-700/30 relative overflow-hidden">
        {/* Subtle background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon with animated background */}
        <div className="relative">
          <div
            className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${bgColor} bg-opacity-10 ${iconColor} transition-all duration-300 group-hover:scale-110`}
          >
            {icon}
          </div>
          
          {/* Title with hover effect */}
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          
          {/* Description */}
          <p className="mb-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {paragraph}
          </p>
          
          {/* Conditional link */}
          {link && (
            <Link
              href={link.href}
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              <span>{link.text}</span>
              <svg 
                className="ml-1 h-4 w-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;