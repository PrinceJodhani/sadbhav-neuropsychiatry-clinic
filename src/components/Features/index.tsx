"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Our Best Services"
          paragraph="We offer a caring blend of psychotherapy and medication for truly holistic mental healthcare."
          center={true}
          mb="60px"
        />

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.a
            href="tel:+917861024557"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-flex dark:text-gray-900 items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg dark:hover:bg-primary/80"
          >
            <svg 
              className="mr-2 h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8631C12.428 14.0646 13.7867 15.0134 15.2363 15.7094C15.3612 15.7694 15.4235 15.7994 15.5024 15.8167C15.7828 15.8745 16.0885 15.7922 16.3237 15.6019C16.3841 15.5526 16.4379 15.4988 16.5456 15.3911C16.9271 15.0096 17.1178 14.8189 17.3107 14.7358C17.9099 14.4679 18.6089 14.5306 19.1533 14.8959C19.3384 15.0141 19.5051 15.1674 19.8385 15.4741L20.0657 15.6826C20.4732 16.0578 20.677 16.2454 20.8058 16.4505C21.0415 16.8217 21.0846 17.2792 20.9215 17.6841C20.8451 17.8739 20.7142 18.0573 20.4524 18.4242C20.1905 18.7911 20.0595 18.9745 19.9032 19.1263C19.5925 19.4273 19.2059 19.6458 18.7817 19.7585C18.5053 19.8344 18.2049 19.8496 17.6042 19.88C15.7593 19.9887 13.8518 19.4848 12.0044 18.3598C10.8647 17.6807 9.77387 16.8336 8.7556 15.8153C8.7365 15.7962 8.71764 15.7773 8.69902 15.7587C8.68016 15.7398 8.66131 15.721 8.64221 15.7019C7.62388 14.6836 6.77682 13.5928 6.09766 12.4531C4.97271 10.6057 4.46874 8.69815 4.57743 6.85326C4.60782 6.25257 4.62305 5.95222 4.69894 5.67578C4.81158 5.25164 5.03008 4.86504 5.33113 4.55432C5.48285 4.39803 5.66625 4.26706 6.03316 4.00516C6.40007 3.74326 6.58347 3.61229 6.77327 3.53587C7.17822 3.37277 7.63574 3.41585 8.00691 3.65161C8.21203 3.78039 8.39961 3.98419 8.77476 4.39172L8.98331 4.61893C9.29 4.95237 9.44335 5.11909 9.56152 5.30408C9.92684 5.84856 9.98953 6.54757 9.72164 7.14672C9.63852 7.33961 9.44784 7.53033 9.06647 7.91176C8.95876 8.01947 8.90491 8.07332 8.85557 8.13361C8.66534 8.36879 8.58299 8.67449 8.64078 8.95493C8.65809 9.03378 8.68816 9.09609 8.74831 9.22072C8.79458 9.31334 8.83374 9.39096 8.38028 8.85335Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Book a Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Features;