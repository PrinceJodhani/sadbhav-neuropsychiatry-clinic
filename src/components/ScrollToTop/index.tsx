"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "../Common/BrandIcons";

// Desktop/tablet floating actions. Phones use the MobileActionBar instead.
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-center gap-3 md:flex">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        aria-hidden={!isVisible}
        tabIndex={isVisible ? undefined : -1}
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-card/90 text-foreground shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5",
          isVisible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <a
        href={clinic.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition duration-300 hover:-translate-y-0.5 hover:bg-[#1FBF5B]"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
