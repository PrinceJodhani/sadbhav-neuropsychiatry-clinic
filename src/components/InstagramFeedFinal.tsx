// components/InstagramFeedFinal.tsx
"use client";

import { useEffect, useRef } from 'react';
import Script from 'next/script';

const InstagramFeedFinal = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to handle iframe resize
    const resizeIframe = () => {
      if (iframeRef.current) {
        // Set initial height
        iframeRef.current.style.height = '800px';
        
        // Try to listen for window resize events to adjust the iframe height if needed
        const handleResize = () => {
          const width = iframeRef.current?.offsetWidth || 0;
          // Instagram typically uses square or 4:5 ratio for posts
          // We're estimating height based on width for a responsive layout
          const estimatedHeight = Math.max(800, width * 1.2); // At least 800px or proportional to width
          if (iframeRef.current) {
            iframeRef.current.style.height = `${estimatedHeight}px`;
          }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize(); // Call once initially
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    };

    // Initialize after LightWidget script loads
    const handleScriptLoad = () => {
      setTimeout(resizeIframe, 1000); // Delay to allow widget to initialize
    };

    // Start the process
    if (typeof window !== 'undefined') {
      if ((window as any).lightwidget) {
        handleScriptLoad();
      } else {
        document.addEventListener('lightwidget:rendered', handleScriptLoad);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('lightwidget:rendered', handleScriptLoad);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
        <p className="text-gray-600 mt-2">Stay updated with our latest news and events</p>
      </div>
      <div className="instagram-feed-wrapper">
        <Script 
          src="https://cdn.lightwidget.com/widgets/lightwidget.js" 
          strategy="afterInteractive"
          onLoad={() => console.log('LightWidget script loaded')}
        />
        <iframe 
          ref={iframeRef}
          src="//lightwidget.com/widgets/c912712027e254a48aea095f07719671.html" 
          scrolling="no"
          className="lightwidget-widget" 
          style={{ 
            width: "100%", 
            minHeight: "600px",
            border: 0, 
            overflow: "hidden" 
          }}
          title="Instagram Feed"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default InstagramFeedFinal;