"use client";

import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionTitle = ({ title, paragraph, mb = "" }) => {
  return (
    <div className={`wow fadeInUp w-full ${mb}`} data-wow-delay=".1s">
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

const AboutSectionOne = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const List = ({ text }) => (
    <motion.div 
      variants={itemVariants}
      className="mb-5 flex items-center text-lg font-medium text-gray-700 dark:text-gray-300"
    >
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary/10 text-primary">
        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
        </svg>
      </span>
      {text}
    </motion.div>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200/50 dark:border-gray-700/50 pb-16 md:pb-20 lg:pb-28">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="-mx-4 flex flex-wrap items-center"
          >
            {/* Image Section - Left */}
            <motion.div 
              variants={itemVariants}
              className="w-full px-4 lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 z-[-1] h-40 w-40 rounded-full bg-primary/5 dark:bg-primary/10"></div>
                <div className="absolute -bottom-10 -right-10 z-[-1] h-40 w-40 rounded-full bg-primary/5 dark:bg-primary/10"></div>
                
                {/* Main image with frame */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-60"></div>
                  <Image
                    src="/images/sadbhav/team-itemm.jpg"
                    alt="Dr. Jash Ajmera, Psychiatrist in Surat"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Experience badge */}
                <div className="absolute -right-4 bottom-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                  <div className="text-center dark:text-gray-900">
                    <span className="block text-xl  font-bold">7+</span>
                    <span className="block text-xs">Years Exp.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Section - Right */}
            <div className="w-full px-4 lg:w-1/2 mt-12 lg:mt-0">
              <motion.div variants={itemVariants}>
              <div className="inline-flex items-center rounded-full mt-2 bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-6">
                  <span className="mr-2">✦</span>
                  Psychiatrist & Psychotherapist, <br></br> M.B.B.S., D.P.M. (PSYCHIATRY)
                </div>
                <SectionTitle
                  title="About Dr. Jash Ajmera"
                  paragraph="A leading psychiatrist in Surat, dedicated to providing holistic mental health care at Sadbhav Neuropsychiatry Clinic."
                  mb="44px"
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mb-12 max-w-[570px] lg:mb-0"
              >
               
                
                <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                  Dr. Jash Ajmera is a trusted psychiatrist in Surat, specializing in personalized mental health care. Since 2017, he has been actively involved in the National Mental Health Programme and community outreach across Gujarat, with a mission to make quality psychiatric services accessible to all.
                </p>
                
                {/* Key Highlights as List */}
                <motion.div 
                  variants={containerVariants}
                  className="mx-[-12px] flex flex-wrap mb-8"
                >
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Integrated psychotherapy and medication" />
                    <List text="Active in community mental health" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Workshops for NGOs and corporates" />
                    <List text="7+ years of psychiatric expertise" />
                  </div>
                </motion.div>
                
                {/* Social Media Links */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-8"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Connect with Dr. Jash</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/sadbhavpsychiatry/"
                      aria-label="Visit Dr. Jash Ajmera on Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/aarogya.minds/"
                      aria-label="Visit Dr. Jash Ajmera on Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-colors hover:bg-pink-600 hover:text-white dark:bg-pink-900/30 dark:text-pink-400 dark:hover:bg-pink-600 dark:hover:text-white"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.youtube.com/@Aarogyaminds"
                      aria-label="Visit Dr. Jash Ajmera on YouTube"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 transition-colors hover:bg-red-600 hover:text-white dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </motion.div>
                
                {/* CTA Button */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-8"
                >
                  <a
                    href="tel:+917861024557"
                    className="inline-flex dark:text-gray-900 items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90 dark:hover:bg-primary/80"
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
                    Book an Appointment
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;