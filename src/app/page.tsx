// src/app/page.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import FindUs from "@/components/FindUs";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Jash Ajmera | Best Psychiatrist in Surat, Gujarat | Sadbhav Neuropsychiatry Clinic",
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
        url: "/images/sadbhav/team-itemm.jpg", // Make sure to create this image
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
    images: ["/images/twitter-image.jpg"], // Create this image
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
    google: "your-google-verification-code", // Replace with your verification code
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
        "logo": "https://psychiatristinsurat.in/images/sadbhav/main-logo.png", // Create this logo
        "image": "https://psychiatristinsurat.in/images/sadbhav/team-itemm.jpg", // Create this image
        "description": "Leading psychiatric clinic in Surat offering expert mental health care by Dr. Jash Ajmera.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Your clinic address", // Replace with actual address
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "Your postal code", // Replace with actual postal code
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.149622879128152, // Replace with actual coordinates
          "longitude": 72.77271745370379 // Replace with actual coordinates
        },
        
        "telephone": "+917861024557", // Replace with actual phone number
        "email": "support@aarogyaminds.com", // Replace with actual email
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
        "image": "https://psychiatristinsurat.in/images/sadbhav/team-itemm.jpg", // Create this image
        "description": "Dr. Jash Ajmera is a leading psychiatrist in Surat with expertise in treating various mental health conditions."
      }
    ])
  }
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Stats />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <FindUs />
      <Faqs />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}