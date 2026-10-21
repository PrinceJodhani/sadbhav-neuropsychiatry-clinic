import { HeartPulse } from "lucide-react";
import type { ContentPage } from "../types";

const panicAttacks: ContentPage = {
  kind: "condition",
  slug: "panic-attacks",
  name: "Panic attacks",
  tagline: "Sudden surges of fear with a pounding heart",
  icon: HeartPulse,
  title: "Panic Attack Treatment in Surat – Symptoms & Panic Disorder",
  description:
    "Racing heart, breathlessness and fear of dying? Learn panic attack symptoms, how they differ from a heart attack, and panic disorder treatment in Surat and online.",
  h1: "Panic attack treatment in *Surat* & online",
  eyebrow: "Condition guide · Panic disorder",
  summary:
    "A panic attack is a sudden wave of intense fear with a pounding heart, breathlessness, sweating and a feeling of losing control or dying. It peaks within about 10 minutes and passes. Panic attacks are frightening but not dangerous, and panic disorder is highly treatable with CBT and non-addictive medicines. Dr. Jash Ajmera treats panic disorder in Surat and online.",
  facts: [
    { label: "Peak", value: "Within minutes; most attacks settle in 10–30 minutes" },
    { label: "Key signs", value: "Palpitations, breathlessness, dizziness, fear of dying" },
    { label: "Treatment", value: "CBT for panic and SSRI medicines" },
    { label: "Outlook", value: "Most people become attack-free with treatment" },
    { label: "Consult", value: "Vesu & Katargam (Surat), Ankleshwar or online" },
  ],
  sections: [
    {
      id: "what-is-a-panic-attack",
      title: "What is a panic attack?",
      blocks: [
        {
          type: "p",
          text: "A panic attack is the body’s alarm system going off when there is no real danger. Adrenaline floods the body, the heart races and breathing speeds up — and the mind interprets these sensations as a catastrophe: “I am having a heart attack”, “I will faint”, “I am going mad”. That fear releases even more adrenaline, and the attack builds.",
        },
        {
          type: "p",
          text: "A single panic attack can happen to anyone during extreme stress. When attacks keep coming out of the blue and you start living in fear of the next one — or avoiding places where they happened — it is called **panic disorder**. Some people also develop **agoraphobia**: avoiding crowds, travel or being far from home.",
        },
      ],
    },
    {
      id: "symptoms",
      title: "Symptoms of a panic attack",
      blocks: [
        {
          type: "p",
          text: "A panic attack usually includes four or more of these, coming on suddenly:",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Heart and breathing",
              text: "Pounding or racing heart, chest tightness or pain, shortness of breath, a choking feeling.",
            },
            {
              title: "Body",
              text: "Sweating, trembling, hot flushes or chills, nausea, dizziness, numbness or tingling in hands and face.",
            },
            {
              title: "Mind",
              text: "Intense fear of dying, losing control or “going mad”; feeling unreal or detached from yourself or your surroundings.",
            },
            {
              title: "Afterwards",
              text: "Exhaustion, worry about the next attack, repeated hospital or ECG visits, avoiding places where attacks happened.",
            },
          ],
        },
        {
          type: "p",
          text: "Attacks can also wake people from sleep (nocturnal panic attacks). They are not caused by dreams and respond to the same treatment.",
        },
      ],
    },
    {
      id: "panic-vs-heart-attack",
      title: "Panic attack or heart attack?",
      blocks: [
        {
          type: "p",
          text: "This is the most common worry — and an important one. The table shows typical differences, but **when in doubt, get checked**.",
        },
        {
          type: "table",
          head: ["", "Panic attack", "Heart attack"],
          rows: [
            ["Onset", "Sudden, often at rest or during stress", "Often during exertion, but can occur at rest"],
            ["Pain", "Sharp or stabbing, often with tingling and fear", "Pressure, squeezing or heaviness that may spread to the arm, jaw or back"],
            ["Duration", "Peaks within ~10 minutes, then eases", "Usually persists or worsens beyond 15–20 minutes"],
            ["Who", "Any age; often young adults", "Higher risk with age, diabetes, high BP, smoking, family history"],
          ],
        },
        {
          type: "callout",
          tone: "urgent",
          title: "If you are not sure, treat it as an emergency",
          text: "Call [112](tel:112) or go to the nearest emergency department for an ECG — especially if this is your first episode, the pain is crushing or spreading, or you have heart risk factors. Once the heart is cleared, panic disorder can be treated with confidence.",
        },
      ],
    },
    {
      id: "causes",
      title: "Why do panic attacks happen?",
      blocks: [
        {
          type: "list",
          items: [
            "**A sensitive alarm system** — genetics and temperament make some people’s fight-or-flight response quicker to fire.",
            "**Stress** — a period of heavy pressure, loss, illness or conflict often comes before the first attack.",
            "**Misreading body signals** — normal sensations like a fast heartbeat are interpreted as danger, which triggers more panic.",
            "**Stimulants and substances** — excess caffeine, energy drinks, nicotine, cannabis and withdrawal from alcohol or sedatives.",
            "**Medical conditions** — an overactive thyroid, heart rhythm problems, asthma and low blood sugar can mimic or trigger panic, so they are checked.",
          ],
        },
      ],
    },
    {
      id: "during-an-attack",
      title: "What to do during a panic attack",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Name it",
              text: "Tell yourself: “This is a panic attack. It is uncomfortable but not dangerous, and it will pass in a few minutes.”",
            },
            {
              title: "Breathe out slowly",
              text: "Breathe in through the nose for 4 counts and out through pursed lips for 6–8 counts. Slow, long out-breaths calm the heart.",
            },
            {
              title: "Stay where you are",
              text: "Running away teaches the brain the place was dangerous. If you can, stay and let the wave rise and fall.",
            },
            {
              title: "Ground yourself",
              text: "Press your feet into the floor and name five things you can see. Focus on the present rather than on your heartbeat.",
            },
          ],
        },
        {
          type: "p",
          text: "Helping someone else? Stay calm, speak slowly, breathe along with them and remind them that it will pass.",
        },
      ],
    },
    {
      id: "treatment",
      title: "Treatment for panic disorder",
      blocks: [
        { type: "h3", text: "CBT for panic" },
        {
          type: "p",
          text: "Cognitive behavioural therapy teaches you how the panic cycle works, how to reinterpret body sensations and how to safely bring on mild sensations (like a fast heartbeat) until they no longer cause fear. Gradually returning to avoided places treats agoraphobia. Most people need around 8–12 sessions.",
        },
        { type: "h3", text: "Medicines" },
        {
          type: "p",
          text: "SSRIs such as escitalopram, sertraline or paroxetine are the first-choice medicines. They prevent attacks rather than stopping one in progress, take 4–6 weeks to work fully and are not addictive. Fast-acting sedatives are sometimes used for a short time at the start, under close supervision, because long-term use can lead to dependence.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Repeated ECGs and emergency visits?",
          text: "That pattern is very common in panic disorder. Once a doctor has ruled out heart disease, treating the panic itself is what stops the cycle.",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "પેનિક એટેક (ગભરાટનો હુમલો) એટલે શું?",
      text: "પેનિક એટેકમાં અચાનક ખૂબ જ ડર લાગે છે — ધબકારા વધી જાય, શ્વાસ ચઢે, પરસેવો થાય અને મરી જવાનો કે કાબૂ ગુમાવવાનો ડર લાગે. થોડી મિનિટોમાં તે શાંત થઈ જાય છે. તે ડરામણો છે પણ જીવલેણ નથી, અને સારવારથી સંપૂર્ણ રીતે કાબૂમાં આવી શકે છે.",
      points: [
        "અચાનક ધબકારા વધવા અને છાતીમાં ભાર",
        "શ્વાસ ચઢવો, ચક્કર આવવા, હાથ-પગમાં ઝણઝણાટી",
        "મરી જવાનો કે પાગલ થઈ જવાનો ડર",
        "પહેલી વખત છાતીમાં દુખાવો થાય તો પહેલા ECG કરાવો",
      ],
    },
    hi: {
      heading: "पैनिक अटैक (घबराहट का दौरा) क्या है?",
      text: "पैनिक अटैक में अचानक बहुत तेज़ डर लगता है — दिल की धड़कन बढ़ जाती है, साँस फूलती है, पसीना आता है और मरने या नियंत्रण खोने का डर लगता है। कुछ ही मिनटों में यह शांत हो जाता है। यह डरावना है लेकिन जानलेवा नहीं, और इलाज से पूरी तरह नियंत्रित हो सकता है।",
      points: [
        "अचानक धड़कन तेज़ होना और सीने में भारीपन",
        "साँस फूलना, चक्कर आना, हाथ-पैरों में झुनझुनी",
        "मरने या पागल हो जाने का डर",
        "पहली बार सीने में दर्द हो तो पहले ECG करवाएँ",
      ],
    },
  },
  faqs: [
    {
      q: "Can a panic attack kill you?",
      a: "No. A panic attack feels terrifying, but the attack itself is not life-threatening and passes on its own. However, because symptoms overlap with heart problems, a first episode of chest pain — or any chest pain with heart risk factors — should be checked with an ECG.",
    },
    {
      q: "How long does a panic attack last?",
      a: "Symptoms usually peak within about 10 minutes and settle within 20–30 minutes, although you may feel shaky and tired for some time afterwards.",
    },
    {
      q: "Can panic disorder be cured?",
      a: "Panic disorder is one of the most treatable mental health conditions. With CBT and/or SSRI medicines, most people stop having attacks and return to the places and activities they had been avoiding.",
    },
    {
      q: "Why do I get panic attacks at night?",
      a: "Night-time (nocturnal) panic attacks wake people suddenly with a racing heart and fear. They are linked to the same sensitive alarm system as daytime attacks and respond to the same treatment. Sleep apnoea and reflux can also wake people at night, so your doctor may check for these.",
    },
    {
      q: "Which doctor should I see for panic attacks?",
      a: "First rule out heart and other medical causes with your physician or in an emergency department if needed. For ongoing panic attacks, a psychiatrist can diagnose panic disorder and plan treatment with therapy and non-addictive medicines.",
    },
    {
      q: "Should I keep alprazolam or another tablet for panic attacks?",
      a: "Only if a psychiatrist has advised it, and only for short-term use. Relying on fast-acting sedatives can lead to dependence and keeps the fear of panic going. Long-term recovery comes from CBT and preventive medicines such as SSRIs.",
    },
  ],
  related: [
    "/conditions/anxiety",
    "/conditions/depression",
    "/conditions/stress-burnout",
    "/treatments/psychotherapy",
    "/guides/psychiatric-medicines-facts",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "NICE guideline CG113 — Generalised anxiety disorder and panic disorder in adults",
      url: "https://www.nice.org.uk/guidance/cg113",
    },
    {
      label: "National Institute of Mental Health — Panic disorder: when fear overwhelms",
      url: "https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms",
    },
    {
      label: "World Health Organization — Anxiety disorders, fact sheet",
      url: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
    },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: ["Panic disorder", "Anxiety attack", "घबराहट का दौरा", "ગભરાટનો હુમલો"],
    symptoms: [
      "Palpitations",
      "Shortness of breath",
      "Chest discomfort",
      "Sweating",
      "Trembling",
      "Dizziness",
      "Fear of dying",
      "Derealisation",
    ],
    treatments: [
      "Cognitive behavioural therapy for panic",
      "Interoceptive exposure",
      "SSRI medication",
    ],
    riskFactors: [
      "Family history of anxiety",
      "Major life stress",
      "Stimulant or cannabis use",
      "Alcohol or sedative withdrawal",
    ],
  },
};

export default panicAttacks;
