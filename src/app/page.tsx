// src/app/page.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import BlogSection from "@/components/BlogSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import FindUs from "@/components/FindUs";
import GoogleRating from "@/components/GoogleRating";
import Hero from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import InstagramFeedFinal from "@/components/InstagramFeedFinal";
import ReviewsPage from "@/components/reviews";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Psychiatrist in Surat, Gujarat | Dr. Jash Ajmera | Sadbhav Neuropsychiatry Clinic",
  description: "Dr. Jash Ajmera is a leading psychiatrist in Surat, Gujarat providing expert mental health care at Sadbhav Neuropsychiatry Clinic. Book an appointment with the best psychiatrist in Surat today.",
  keywords: "psychiatrist in surat, best psychiatrist in surat, psychiatrist in gujarat, dr jash ajmera, sadbhav neuropsychiatry clinic, top psychiatrist in surat, mental health specialist surat, psychiatrist near me, depression treatment surat, anxiety treatment gujarat",
  
  // Basic meta tags
  authors: [{ name: "Dr. Jash Ajmera" }],
  category: "Healthcare, Mental Health, Psychiatry",
  creator: "Dr. Jash Ajmera",
  publisher: "Sadbhav Neuropsychiatry Clinic",
  
  // Open Graph meta tags for social sharing
  openGraph: {
    type: "website",
    url: "https://psychiatristinsurat.in",
    title: "Dr. Jash Ajmera | Top Psychiatrist in Surat | Sadbhav Neuropsychiatry Clinic",
    description: "Experienced psychiatrist in Surat offering comprehensive mental health services. Dr. Jash Ajmera provides expert care at Sadbhav Neuropsychiatry Clinic in Surat, Gujarat.",
    siteName: "Sadbhav Neuropsychiatry Clinic",
    images: [
      {
        url: "https://www.psychiatristinsurat.in/images/sadbhav/team-itemm.jpg", // Make sure to create this image
        width: 630,
        height: 630,
        alt: "Dr. Jash Ajmera - Sadbhav Neuropsychiatry Clinic in Surat",
      },
    ],
    locale: "en_IN",
  },
  
  // Twitter meta tags
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jash Ajmera | Best Psychiatrist in Surat, Gujarat",
    description: "Leading psychiatrist in Surat offering expert mental health care at Sadbhav Neuropsychiatry Clinic. Book an appointment today.",
    images: ["https://www.psychiatristinsurat.in/images/twitter-image.jpg"], 
  },
  
  // Other important meta tags
  alternates: {
    canonical: "https://psychiatristinsurat.in",
    languages: {
      "en-IN": "https://psychiatristinsurat.in",
      "gu-IN": "https://psychiatristinsurat.in/gu",
    },
  },
  
  // Location-specific metadata
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  
  // Verification for search engines
  verification: {
    google: "3qDat_WFqV5e8yN7FV2Sr2Qc7m6SLUg4Z2xYJO0U2kQ", 
  },
  
  // Apple web app capabilities
  appleWebApp: {
    capable: true,
    title: "Dr. Jash Ajmera",
    statusBarStyle: "black-translucent",
  },
  
  // Mobile app configuration
  applicationName: "Sadbhav Neuropsychiatry Clinic",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#4F46E5", // Customize with your brand color

  // Robots directives for search engines
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // JSON-LD structured data
  other: {
    "script:ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Sadbhav Neuropsychiatry Clinic",
        "url": "https://psychiatristinsurat.in",
        "logo": "https://psychiatristinsurat.in/images/sadbhav/favicon_io/apple-touch-icon.png",  
        "image": "https://psychiatristinsurat.in/images/sadbhav/team-itemm.jpg", 
        "description": "Leading psychiatric clinic in Surat offering expert mental health care by Dr. Jash Ajmera.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "209 vesu point, Vesu Main Road, above HDFC Bank, opp. vijya laxmi hall, Surat, Gujarat 395007", 
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395007", 
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.149622879128152, 
          "longitude": 72.77271745370379 
        },
        
        "telephone": "+917861024557",
        "email": "support@aarogyaminds.com", 
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "priceRange": "₹₹"
      },
      {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Jash Ajmera",
        "medicalSpecialty": "Psychiatry",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "Sadbhav Neuropsychiatry Clinic"
        },
        "knowsAbout": ["Depression", "Anxiety", "Bipolar Disorder", "Schizophrenia", "Mental Health"],
        "image": "https://psychiatristinsurat.in/images/sadbhav/team-itemm.jpg",
        "description": "Dr. Jash Ajmera is a leading psychiatrist in Surat with expertise in treating various mental health conditions.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 278
        }
      }
    ])
  }
};




export default async function Home() {

  


const rating = 4.9;
const reviewCount = 278;

  return (
    <>
        <a 
  style={{
    position: "fixed",
    bottom: "20px", 
    left: "20px",
    zIndex: "999",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "7px",
    backgroundColor: "white"

  }} 
  target="_blank" 
  href="https://sadbhavneuropsychiatryclinic.setmore.com"
>
  <img  
    src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg" 
    alt="Click here to book the appointment using setmore" 
  />
</a>
      <ScrollUp />
      <Hero />
     
      <GoogleRating rating={rating} reviewCount={reviewCount} /> {/* Add GoogleRating here */}
      <Stats />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <FindUs />
      <BlogSection />
       {/* <InstagramFeed username={'sadbhav_clinic'} /> */}
       <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
        <p className="text-gray-600 mt-2">Stay updated with our latest news and events</p>
      </div>
      <InstagramFeed username={'sadbhav_clinic'} />
    </div>

       {/* <InstagramFeedFinal />  */}
      <Faqs />
      <ReviewsPage />
      
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}