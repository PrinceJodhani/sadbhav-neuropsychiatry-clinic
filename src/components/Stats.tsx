"use client";

import React from "react";
import { Users, MapPin, Building, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const statItems = [
    {
      value: "+3000",
      label: "Happy Patients",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: "3",
      label: "Branches",
      icon: <MapPin className="h-8 w-8" />,
    },
    {
      value: "5",
      label: "Hospital Attachments",
      icon: <Building className="h-8 w-8" />,
    },
    {
      value: "7",
      label: "Years Experience",
      icon: <Clock className="h-8 w-8" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {statItems.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center group"
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with circular background */}
              <div className="relative mb-4 mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                {stat.icon}
              </div>
              
              {/* Value with animated counter */}
              <h2 className="relative dark:text-white text-4xl font-bold text-primary dark:text-primary-foreground mb-2">
                {stat.value}
              </h2>
              
              {/* Label */}
              <p className="relative mt-1 text-lg text-gray-700 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;