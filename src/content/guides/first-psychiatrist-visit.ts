import { ClipboardList } from "lucide-react";
import type { ContentPage } from "../types";

const firstVisit: ContentPage = {
  kind: "guide",
  slug: "first-psychiatrist-visit",
  name: "Your first psychiatrist visit",
  tagline: "What happens, what to bring and questions to ask",
  icon: ClipboardList,
  title: "First Visit to a Psychiatrist – What to Expect & How to Prepare",
  description:
    "Nervous about your first psychiatrist appointment? What the doctor will ask, what to bring, whether you’ll get medicines, and questions to ask — explained by a Surat psychiatrist.",
  h1: "Your first visit to a psychiatrist: *what to expect*",
  eyebrow: "Guide · Getting help",
  summary:
    "Your first psychiatrist appointment is a private conversation about your symptoms, health, life and goals — usually longer than later follow-ups. There is no judgement, no “mind-reading” test and no obligation to start medicines. The doctor explains what may be going on and agrees a plan with you. Bring your current medicines, past reports and, if you like, someone you trust.",
  sections: [
    {
      id: "before",
      title: "Before the appointment",
      blocks: [
        {
          type: "checklist",
          items: [
            "Note your main concerns and when they started",
            "List all medicines, supplements and doses you take",
            "Bring past prescriptions, discharge summaries and blood reports",
            "Write down questions you want to ask",
            "Decide whether you’d like a family member or friend to come",
            "For online visits: a quiet, private place and earphones",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: "Keep taking your current medicines as usual unless a doctor has told you otherwise — the psychiatrist needs to see how you are on them.",
        },
      ],
    },
    {
      id: "during",
      title: "What happens during the consultation",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Your story",
              text: "What brings you in, how you have been feeling, and what has changed. You can share as much or as little as you are comfortable with.",
            },
            {
              title: "Questions about daily life",
              text: "Sleep, appetite, energy, concentration, work or studies, relationships, stress, and any alcohol, tobacco or other substance use.",
            },
            {
              title: "Background",
              text: "Past health problems, previous treatment, family history of mental health conditions, and important life events.",
            },
            {
              title: "Safety check",
              text: "You may be asked about thoughts of self-harm. This is routine and is asked of everyone — it helps the doctor keep you safe.",
            },
            {
              title: "Questionnaires or tests",
              text: "Short rating scales, and sometimes blood tests to rule out physical causes such as thyroid problems or vitamin deficiencies.",
            },
          ],
        },
      ],
    },
    {
      id: "end",
      title: "At the end of the first visit",
      blocks: [
        {
          type: "list",
          items: [
            "**An explanation** of what may be causing your symptoms — sometimes a clear diagnosis, sometimes a working diagnosis that becomes clearer over a few visits.",
            "**A plan** — therapy, lifestyle changes, medicines or a combination — discussed with you, not decided for you.",
            "**If medicines are suggested**, you will hear what they are for, how long they take to work, common side effects and how long to take them.",
            "**A follow-up date**, usually within a few weeks, to review how things are going.",
          ],
        },
      ],
    },
    {
      id: "questions",
      title: "Questions to ask your psychiatrist",
      blocks: [
        {
          type: "checklist",
          items: [
            "What do you think is causing my symptoms?",
            "What are my treatment options, including therapy?",
            "How long until I feel better?",
            "What side effects should I watch for?",
            "How long will I need treatment?",
            "What should I do if I feel worse?",
          ],
        },
      ],
    },
    {
      id: "family",
      title: "Should a family member come?",
      blocks: [
        {
          type: "p",
          text: "A family member can share useful observations and help remember the plan — this is especially helpful for children, older adults and conditions like bipolar disorder or psychosis. You can also ask for time alone with the doctor, and teenagers are usually offered some time on their own.",
        },
      ],
    },
    {
      id: "privacy",
      title: "Your privacy",
      blocks: [
        {
          type: "p",
          text: "What you share is confidential. It is not shared with your employer, school or relatives without your permission, except in an emergency where someone’s safety is at risk. Learn more about [your rights as a patient](/guides/mental-health-rights-india).",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "મનોચિકિત્સક પાસે પહેલી મુલાકાતમાં શું થાય છે?",
      text: "પહેલી મુલાકાત એક ગોપનીય વાતચીત છે — તમારી તકલીફ, ઊંઘ, ભૂખ, તણાવ, આરોગ્ય અને પરિવાર વિશે. કોઈ જજમેન્ટ નથી અને દવા શરૂ કરવી જ પડે એવું જરૂરી નથી. ડૉક્ટર સમજાવે છે કે શું થઈ રહ્યું છે અને તમારી સાથે મળીને સારવારનો પ્લાન નક્કી કરે છે.",
      points: [
        "હાલની દવાઓ અને જૂના રિપોર્ટ સાથે લાવો",
        "પૂછવાના પ્રશ્નો લખીને લાવો",
        "ઇચ્છો તો પરિવારના સભ્યને સાથે લાવી શકો",
      ],
    },
    hi: {
      heading: "मनोचिकित्सक के पास पहली मुलाक़ात में क्या होता है?",
      text: "पहली मुलाक़ात एक गोपनीय बातचीत है — आपकी परेशानी, नींद, भूख, तनाव, सेहत और परिवार के बारे में। कोई जजमेंट नहीं होता और दवा शुरू करना ज़रूरी नहीं है। डॉक्टर समझाते हैं कि क्या हो रहा है और आपके साथ मिलकर इलाज का प्लान तय करते हैं।",
      points: [
        "मौजूदा दवाएँ और पुरानी रिपोर्ट साथ लाएँ",
        "पूछने वाले सवाल लिखकर लाएँ",
        "चाहें तो परिवार के किसी सदस्य को साथ ला सकते हैं",
      ],
    },
  },
  faqs: [
    {
      q: "Do psychiatrists diagnose on the first visit?",
      a: "Often the psychiatrist can give a clear or working diagnosis at the first visit. For some conditions — such as bipolar disorder or ADHD — it may take more than one visit, information from family, or tests before the diagnosis is certain.",
    },
    {
      q: "Will I be given medicines at the first visit?",
      a: "Not necessarily. Medicines are suggested only if they are likely to help, and only after explaining the options. Many people start with therapy or lifestyle changes.",
    },
    {
      q: "How long is the first appointment?",
      a: "First consultations take longer than follow-ups because the doctor needs to understand your full history. Please allow enough time and arrive a little early.",
    },
    {
      q: "Can my first consultation be online?",
      a: "Yes. A first consultation by video works well for most concerns. An in-person visit is advised for emergencies or when a physical examination is needed. See [online consultation](/online-psychiatrist-consultation).",
    },
    {
      q: "What if I feel too nervous to talk?",
      a: "That is very common. You can bring notes, start with whatever feels easiest, or let a family member begin. The doctor will guide the conversation at your pace.",
    },
  ],
  related: [
    "/guides/when-to-see-a-psychiatrist",
    "/guides/psychiatrist-vs-psychologist",
    "/guides/psychiatric-medicines-facts",
    "/clinics",
    "/online-psychiatrist-consultation",
    "/faq",
  ],
  updated: "2026-10-21",
};

export default firstVisit;
