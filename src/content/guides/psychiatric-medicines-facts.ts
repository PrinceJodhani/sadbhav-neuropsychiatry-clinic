import { Pill } from "lucide-react";
import type { ContentPage } from "../types";

const medicinesFacts: ContentPage = {
  kind: "guide",
  slug: "psychiatric-medicines-facts",
  name: "Psychiatric medicines: myths & facts",
  tagline: "Are they addictive? Side effects, safety and stopping",
  icon: Pill,
  title: "Are Psychiatric Medicines Addictive? The Facts",
  description:
    "Are antidepressants addictive? Do psychiatric medicines damage kidneys or need to be taken for life? A psychiatrist explains safety and side effects.",
  h1: "Are psychiatric medicines *addictive?* Myths & facts",
  eyebrow: "Guide · Medicines",
  summary:
    "Most psychiatric medicines — including antidepressants, mood stabilisers and antipsychotics — are not addictive. A few groups, mainly benzodiazepine sedatives and some sleeping pills, can cause dependence when used for long periods, which is why psychiatrists prescribe them briefly. Side effects are usually mild and manageable, and when it is time to stop, medicines are reduced gradually under supervision.",
  sections: [
    {
      id: "which-are-habit-forming",
      title: "Which psychiatric medicines are habit-forming?",
      blocks: [
        {
          type: "table",
          head: ["Medicine group", "Commonly used for", "Habit-forming?"],
          rows: [
            ["Antidepressants (SSRIs, SNRIs and others)", "Depression, anxiety, panic, OCD", "**No.** Stopping suddenly can cause temporary discontinuation symptoms, so doses are reduced gradually."],
            ["Mood stabilisers (lithium, valproate, lamotrigine)", "Bipolar disorder", "**No.** Some need periodic blood tests."],
            ["Antipsychotics", "Psychosis, bipolar disorder, sometimes severe anxiety or OCD", "**No.** Weight, blood sugar and cholesterol are monitored."],
            ["Benzodiazepines (alprazolam, clonazepam, lorazepam)", "Short-term anxiety, sleep, alcohol detox", "**Yes, with regular long-term use.** Used for short periods only."],
            ["Sleeping pills such as zolpidem", "Short-term insomnia", "**Can be,** with nightly long-term use."],
            ["ADHD stimulants (methylphenidate)", "ADHD", "Low risk when taken as prescribed; they are controlled medicines."],
          ],
        },
      ],
    },
    {
      id: "myths",
      title: "Common myths — and the facts",
      blocks: [
        {
          type: "mythfacts",
          items: [
            {
              myth: "All psychiatric medicines are sleeping pills that make you dull.",
              fact: "Most psychiatric medicines are not sedatives. The goal is to help you think clearly and function better. If a medicine makes you drowsy, the dose or timing can be adjusted.",
            },
            {
              myth: "Once you start, you have to take them for life.",
              fact: "Many people take medicines for months — for example 6–12 months after recovery from depression — and then stop gradually. Some long-term conditions, such as bipolar disorder, benefit from longer treatment.",
            },
            {
              myth: "Psychiatric medicines damage the kidneys and liver.",
              fact: "Most are safe for the kidneys and liver at prescribed doses. For the few that need monitoring, simple blood tests keep treatment safe.",
            },
            {
              myth: "They change your personality.",
              fact: "Medicines treat symptoms — they do not change who you are. Most people say they feel more like themselves again.",
            },
            {
              myth: "If I feel better, I can stop on my own.",
              fact: "Feeling better means the treatment is working. Stopping early or suddenly is the most common reason for relapse. Always reduce with your doctor’s guidance.",
            },
            {
              myth: "Herbal or “natural” remedies are always safer.",
              fact: "Herbal products can have side effects and interact with prescribed medicines, and their contents are not always tested. Tell your doctor about everything you take.",
            },
          ],
        },
      ],
    },
    {
      id: "side-effects",
      title: "Side effects: what is common and what to do",
      blocks: [
        {
          type: "p",
          text: "Side effects depend on the medicine. Many are mild and settle within one to two weeks, such as nausea, headache, mild drowsiness or restlessness. Others — such as weight gain or sexual side effects — can often be managed by adjusting the dose or switching medicines.",
        },
        {
          type: "checklist",
          items: [
            "Tell your doctor about any side effect — don’t just stop",
            "Take medicines at the same time every day",
            "Avoid alcohol, which can worsen side effects and symptoms",
            "Check before taking new medicines or supplements",
            "Keep follow-up appointments, even when you feel well",
            "Store medicines safely, away from children",
          ],
        },
        {
          type: "callout",
          tone: "urgent",
          title: "Seek urgent advice if you notice",
          text: "Rash with fever, severe restlessness, very high fever with stiffness, fainting, or new thoughts of self-harm after starting a medicine. Contact your doctor immediately or call [112](tel:112).",
        },
      ],
    },
    {
      id: "stopping",
      title: "How to stop psychiatric medicines safely",
      blocks: [
        {
          type: "p",
          text: "When you and your doctor agree it is time to stop, the dose is reduced step by step over weeks (sometimes longer). This avoids discontinuation symptoms — such as dizziness, irritability, poor sleep or flu-like feelings — and lets you both watch for early signs of relapse. Discontinuation symptoms are not the same as addiction: there is no craving and no need to increase the dose.",
        },
      ],
    },
    {
      id: "special-situations",
      title: "Pregnancy, breastfeeding, children and older adults",
      blocks: [
        {
          type: "list",
          items: [
            "**Pregnancy and breastfeeding:** many medicines can be used safely, but some must be changed. Plan ahead with your psychiatrist — see [postpartum depression](/conditions/postpartum-depression).",
            "**Children and teenagers:** medicines are used when clearly needed, at careful doses, with close monitoring.",
            "**Older adults:** lower starting doses, and extra care with sedatives because of the risk of falls and confusion.",
          ],
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "શું માનસિક રોગની દવાઓની આદત પડી જાય છે?",
      text: "મોટાભાગની માનસિક રોગની દવાઓ — જેમ કે ડિપ્રેશનની દવાઓ, મૂડ સ્ટેબિલાઇઝર અને એન્ટિસાયકોટિક — આદત પાડતી નથી. માત્ર અમુક ઊંઘ અને બેચેનીની ગોળીઓ લાંબો સમય લેવાથી આદત પડી શકે છે, તેથી ડૉક્ટર તેને ટૂંકા સમય માટે જ આપે છે. દવા ક્યારેય અચાનક બંધ ન કરો — ડૉક્ટરની સલાહથી ધીમે ધીમે ઘટાડો.",
      points: [
        "ડિપ્રેશનની દવાઓ આદત પાડતી નથી",
        "આડઅસર મોટેભાગે હળવી અને કાબૂમાં રહે તેવી હોય છે",
        "સારું લાગે ત્યારે પણ દવા અચાનક બંધ ન કરો",
      ],
    },
    hi: {
      heading: "क्या मानसिक रोग की दवाओं की आदत लग जाती है?",
      text: "ज़्यादातर मानसिक रोग की दवाएँ — जैसे डिप्रेशन की दवाएँ, मूड स्टेबलाइज़र और एंटीसाइकोटिक — आदत नहीं डालतीं। केवल कुछ नींद और बेचैनी की गोलियाँ लंबे समय तक लेने से आदत लग सकती है, इसलिए डॉक्टर इन्हें कम समय के लिए ही देते हैं। दवा कभी अचानक बंद न करें — डॉक्टर की सलाह से धीरे-धीरे कम करें।",
      points: [
        "डिप्रेशन की दवाएँ आदत नहीं डालतीं",
        "साइड इफ़ेक्ट अक्सर हल्के और संभालने योग्य होते हैं",
        "बेहतर महसूस होने पर भी दवा अचानक बंद न करें",
      ],
    },
  },
  faqs: [
    {
      q: "Are antidepressants addictive?",
      a: "No. Antidepressants do not cause craving or a need to keep increasing the dose. Stopping them suddenly can cause temporary discontinuation symptoms, which is why they are reduced gradually.",
    },
    {
      q: "Can psychiatric medicines be stopped?",
      a: "Yes, most can — at the right time and gradually, with your doctor. The right time depends on the condition, how long you have been well and your risk of relapse.",
    },
    {
      q: "Are psychiatric medicines safe for long-term use?",
      a: "Most are well studied and safe over years when monitored. Your psychiatrist will review the dose, any side effects and blood tests (for medicines that need them) at follow-ups.",
    },
    {
      q: "Do psychiatric medicines cause weight gain?",
      a: "Some can, especially certain antipsychotics and mood stabilisers; many others do not. If weight gain is a concern, discuss it — there are often alternatives, and diet and exercise help.",
    },
    {
      q: "Can I drink alcohol while taking psychiatric medicines?",
      a: "It is best to avoid alcohol. It can increase drowsiness and side effects, interact with some medicines, and worsen depression, anxiety and sleep.",
    },
    {
      q: "Do these medicines affect sexual function?",
      a: "Some antidepressants can reduce desire or delay orgasm. Tell your doctor — it can usually be managed by adjusting the dose, timing or medicine. See [sexual health](/treatments/sexual-health).",
    },
  ],
  related: [
    "/conditions/depression",
    "/conditions/anxiety",
    "/conditions/insomnia",
    "/guides/first-psychiatrist-visit",
    "/guides/when-to-see-a-psychiatrist",
    "/faq",
  ],
  sources: [
    {
      label: "Royal College of Psychiatrists — Antidepressants",
      url: "https://www.rcpsych.ac.uk/mental-health/treatments-and-wellbeing/antidepressants",
    },
    {
      label: "National Institute of Mental Health — Mental health medications",
      url: "https://www.nimh.nih.gov/health/topics/mental-health-medications",
    },
    {
      label: "NICE guideline NG215 — Medicines associated with dependence or withdrawal symptoms",
      url: "https://www.nice.org.uk/guidance/ng215",
    },
  ],
  updated: "2026-10-21",
};

export default medicinesFacts;
