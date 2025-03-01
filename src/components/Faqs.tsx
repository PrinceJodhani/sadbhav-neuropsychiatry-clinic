"use client";

import { PlusIcon, MinusIcon } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      question: "What conditions do you specialize in treating?",
      answer: "We handle a wide variety of psychiatric conditions, including depression, anxiety, OCD, schizophrenia, bipolar disorder, personality concerns, addictions, and psychosexual issues."
    },
    {
      question: "How can I schedule an appointment?",
      answer: <>Simply call <a href="tel:+917861024557" className="text-primary hover:underline font-medium">+91 7861024557</a> to book your session at any branch.</>
    },
    {
      question: "What is your treatment approach?",
      answer: "We rely on evidence-based methods, combining psychotherapy and safe, effective medications to ensure the best results for each individual."
    },
    {
      question: "Do you prescribe medicines?",
      answer: "Yes, our treatment plans include medications whenever clinically indicated, customized to your needs and safety."
    },
    {
      question: "Are there resources for managing mental health outside appointments?",
      answer: <>Definitely. Check out <a href="https://aarogyaminds.com" className="text-primary hover:underline font-medium">aarogyaminds.com</a> for free tests, self-help tools, and informative blogs.</>
    },
    {
      question: "Will my consultations remain confidential?",
      answer: "Yes, we maintain strict confidentiality for all patient data and records, prioritizing your privacy at every step."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path 
                d="M9.09 9C9.09 7.34903 10.4305 6 12.09 6C13.7495 6 15.09 7.34903 15.09 9C15.09 10.651 13.7495 12 12.09 12C10.4305 12 9.09 10.651 9.09 9Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 16.5C14.3 16.5 16.3 17.3 17.5 18.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M6.5 18.5C7.7 17.3 9.7 16.5 12 16.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            We&apos;ve Got Answers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our mental health services and treatment approaches.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={index !== faqs.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-left font-medium text-gray-900 dark:text-white group">
                  <span className="text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-600 dark:text-gray-300">
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Still have questions? Contact us directly at{" "}
            <a 
              href="tel:+917861024557" 
              className="text-primary hover:underline font-medium"
            >
              +91 7861024557
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}