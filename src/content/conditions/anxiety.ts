import { Waves } from "lucide-react";
import type { ContentPage } from "../types";

const anxiety: ContentPage = {
  kind: "condition",
  slug: "anxiety",
  name: "Anxiety disorders",
  tagline: "Constant worry, restlessness and physical tension",
  icon: Waves,
  title: "Anxiety Treatment in Surat: Symptoms & Care",
  description:
    "Constant worry, restlessness or a racing heart? Learn about anxiety symptoms, causes and treatment. Anxiety treatment in Surat and online with Dr. Jash Ajmera.",
  h1: "Anxiety treatment in *Surat* & online",
  eyebrow: "Condition guide · Anxiety",
  summary:
    "Anxiety disorders cause worry, fear and physical symptoms such as a racing heart, restlessness and poor sleep that are out of proportion to the situation and last for months. They are the most common mental health conditions in the world — and among the most treatable, usually with CBT, medicines or both. Dr. Jash Ajmera treats anxiety in Surat and online across India.",
  facts: [
    { label: "How common", value: "The world’s most common mental disorders (WHO)" },
    { label: "Key signs", value: "Excessive worry, restlessness, tension, poor sleep" },
    { label: "Treatment", value: "CBT, relaxation skills and non-addictive medicines" },
    { label: "Outlook", value: "Highly treatable; most people improve within months" },
    { label: "Consult", value: "Vesu & Katargam (Surat), Ankleshwar or online" },
  ],
  selfTest: {
    label: "Take a free, confidential mental health self-test",
    href: "https://www.aarogyaminds.com/mental-health-tests",
  },
  sections: [
    {
      id: "what-is-anxiety",
      title: "What is an anxiety disorder?",
      blocks: [
        {
          type: "p",
          text: "Everyone feels anxious before an exam, an interview or a big decision. That kind of anxiety is normal and passes. In an **anxiety disorder**, the worry or fear is much stronger than the situation calls for, it keeps coming back, and it starts to control your choices — what you avoid, how you sleep and how you feel in your body.",
        },
        {
          type: "p",
          text: "According to the World Health Organization, anxiety disorders are the world’s most common mental disorders — yet only about 1 in 4 people who need treatment receive any. The good news: anxiety responds very well to treatment, and you do not have to “just live with it”.",
        },
      ],
    },
    {
      id: "symptoms",
      title: "Symptoms of anxiety",
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "In the mind",
              text: "Constant worry about health, family, money or work; fearing the worst; feeling on edge; difficulty concentrating; irritability.",
            },
            {
              title: "In the body",
              text: "Racing or pounding heart, breathlessness, sweating, trembling, dry mouth, headaches, muscle tension, “gas” or stomach upset, frequent urination.",
            },
            {
              title: "In behaviour",
              text: "Avoiding situations, asking for reassurance again and again, checking, over-planning, procrastinating, trouble falling or staying asleep.",
            },
          ],
        },
        {
          type: "p",
          text: "Many people with anxiety first see a cardiologist, a physician or a gastroenterologist because the physical symptoms feel so real. They are real — they come from the body’s stress response. When tests are normal and the symptoms continue, it is time to look at anxiety.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "New chest pain? Get it checked first",
          text: "Anxiety can cause chest discomfort, but new or severe chest pain — especially with exertion, sweating, or if you have diabetes, high blood pressure, smoke or are over 40 — needs an urgent ECG and medical check before it is put down to anxiety.",
        },
      ],
    },
    {
      id: "types",
      title: "Types of anxiety disorders",
      blocks: [
        {
          type: "table",
          head: ["Type", "What it feels like"],
          rows: [
            [
              "Generalised anxiety disorder (GAD)",
              "Excessive, hard-to-control worry about many everyday things on most days for several months, with tension, tiredness and poor sleep.",
            ],
            [
              "Panic disorder",
              "Repeated, sudden attacks of intense fear with a pounding heart and breathlessness, and constant fear of the next attack. See [panic attacks](/conditions/panic-attacks).",
            ],
            [
              "Social anxiety disorder",
              "Intense fear of being judged or embarrassed — speaking in class or meetings, eating in front of others, meeting new people.",
            ],
            [
              "Specific phobias",
              "Strong fear of a particular thing — heights, flying, injections, dogs, closed spaces — leading to avoidance.",
            ],
            [
              "Agoraphobia",
              "Fear of places where escape feels difficult, such as crowds, buses, trains or being far from home.",
            ],
            [
              "Health anxiety",
              "Persistent fear of having a serious illness despite normal tests; frequent checking, searching online and seeking reassurance.",
            ],
          ],
        },
        {
          type: "p",
          text: "[OCD](/conditions/ocd) and post-traumatic stress disorder (PTSD) also involve high anxiety and are treated by psychiatrists, but they are classified separately.",
        },
      ],
    },
    {
      id: "causes",
      title: "What causes anxiety?",
      blocks: [
        {
          type: "list",
          items: [
            "**Genes and temperament** — anxiety often runs in families, and some people are naturally more sensitive to threat.",
            "**Stress and life events** — work or exam pressure, relationship problems, illness in the family, financial worries, trauma.",
            "**Thinking habits** — overestimating danger, intolerance of uncertainty and constant “what if” thinking keep anxiety going.",
            "**Medical causes** — an overactive thyroid, heart rhythm problems, anaemia or low blood sugar can cause anxiety-like symptoms.",
            "**Substances** — too much tea, coffee or energy drinks, nicotine, cannabis, and withdrawal from alcohol or sleeping pills.",
          ],
        },
        {
          type: "p",
          text: "Avoidance is what turns ordinary fear into a disorder: every time you avoid something, the brain learns it was dangerous, and the anxiety grows. Treatment reverses this cycle.",
        },
      ],
    },
    {
      id: "when-to-see-a-psychiatrist",
      title: "When to see a psychiatrist for anxiety",
      blocks: [
        {
          type: "checklist",
          items: [
            "Worry or fear has lasted for weeks and is hard to control",
            "You are avoiding places, people or tasks because of anxiety",
            "Physical symptoms continue even though tests are normal",
            "Sleep, work, studies or relationships are suffering",
            "You rely on alcohol or sleeping pills to calm down",
            "You also feel low, hopeless or have panic attacks",
          ],
        },
        {
          type: "p",
          text: "A psychiatrist can confirm the type of anxiety, check for medical causes and combine therapy with medicines where needed. Read [psychiatrist vs psychologist](/guides/psychiatrist-vs-psychologist) if you are unsure whom to see.",
        },
      ],
    },
    {
      id: "treatment",
      title: "Treatment for anxiety",
      blocks: [
        { type: "h3", text: "Cognitive behavioural therapy (CBT)" },
        {
          type: "p",
          text: "CBT is the most researched talk therapy for anxiety. You learn to spot anxious thoughts, test them against the evidence, and face feared situations step by step (exposure) so the fear fades. Relaxation, breathing and mindfulness skills are added. Most people need a set number of weekly sessions. See [psychotherapy at the clinic](/treatments/psychotherapy).",
        },
        { type: "h3", text: "Medicines" },
        {
          type: "p",
          text: "The first-choice medicines for long-term anxiety are **SSRIs and SNRIs** (for example escitalopram, sertraline, paroxetine, venlafaxine or duloxetine). They are not addictive and usually take 4–6 weeks to show full benefit. Other options such as buspirone or pregabalin may be used in some situations.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "About sleeping pills and “anxiety tablets”",
          text: "Benzodiazepines such as alprazolam, clonazepam and lorazepam work quickly but can cause dependence when taken for long periods. A psychiatrist uses them only for short periods, if at all, alongside a long-term plan.",
        },
        { type: "h3", text: "Lifestyle changes that genuinely help" },
        {
          type: "p",
          text: "Regular exercise, fixed sleep timings, less caffeine, avoiding alcohol and nicotine, and a daily slow-breathing practice all reduce baseline anxiety and make therapy work faster.",
        },
      ],
    },
    {
      id: "self-help",
      title: "Quick techniques for anxious moments",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Slow your breathing",
              text: "Breathe in gently through the nose for 4 counts and out slowly for 6 counts. Repeat for 2–3 minutes; the longer out-breath calms the heart.",
            },
            {
              title: "Ground yourself (the 3-3-3 rule)",
              text: "Name 3 things you can see, 3 sounds you can hear, and move 3 parts of your body. It pulls attention back to the present.",
            },
            {
              title: "Name the worry, then schedule it",
              text: "Write the worry down and set a fixed 15-minute “worry time” later in the day instead of worrying all day.",
            },
            {
              title: "Do the thing you are avoiding — in small steps",
              text: "Pick the easiest step on your list and repeat it until it feels boring. Then move up a step.",
            },
          ],
        },
        {
          type: "p",
          text: "If overthinking keeps you awake, read [how to stop overthinking](/guides/how-to-stop-overthinking).",
        },
      ],
    },
    {
      id: "myths-and-facts",
      title: "Myths and facts about anxiety",
      blocks: [
        {
          type: "mythfacts",
          items: [
            {
              myth: "Anxiety is just weakness — strong people don’t get it.",
              fact: "Anxiety disorders are common health conditions that affect confident, successful people too. They are not a character flaw.",
            },
            {
              myth: "All anxiety medicines are addictive.",
              fact: "The main long-term medicines for anxiety (SSRIs and SNRIs) are not addictive. Only some fast-acting sedatives carry that risk, which is why they are used briefly and carefully.",
            },
            {
              myth: "Avoiding stressful situations will make anxiety go away.",
              fact: "Avoidance brings short-term relief but makes anxiety stronger over time. Gradually facing fears with support is what reduces it.",
            },
          ],
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "એન્ઝાઇટી (ચિંતા અને ગભરાટ) એટલે શું?",
      text: "જ્યારે ચિંતા કે ડર પરિસ્થિતિ કરતાં ઘણો વધારે હોય, મહિનાઓ સુધી રહે અને રોજિંદા કામમાં અડચણ ઊભી કરે, ત્યારે તે એન્ઝાઇટી ડિસઓર્ડર હોઈ શકે છે. આ બીમારી ખૂબ સામાન્ય છે અને કાઉન્સેલિંગ (CBT) તથા સુરક્ષિત દવાઓથી સારી રીતે મટી શકે છે.",
      points: [
        "સતત ચિંતા અને ખરાબ થવાનો ડર",
        "ધબકારા વધી જવા, પરસેવો, શ્વાસ ચઢવો, ધ્રુજારી",
        "બેચેની, ચીડિયાપણું અને ઊંઘ ન આવવી",
        "અમુક જગ્યા, લોકો કે કામથી દૂર ભાગવું",
      ],
    },
    hi: {
      heading: "एंग्जायटी (चिंता और घबराहट) क्या है?",
      text: "जब चिंता या डर स्थिति से कहीं ज़्यादा हो, महीनों तक बना रहे और रोज़मर्रा के काम में रुकावट डाले, तो यह एंग्जायटी डिसऑर्डर हो सकता है। यह बहुत आम है और काउंसलिंग (CBT) व सुरक्षित दवाओं से अच्छी तरह ठीक हो सकता है।",
      points: [
        "लगातार चिंता और कुछ बुरा होने का डर",
        "दिल की धड़कन तेज़ होना, पसीना, साँस फूलना, कंपकंपी",
        "बेचैनी, चिड़चिड़ापन और नींद न आना",
        "कुछ जगहों, लोगों या कामों से बचना",
      ],
    },
  },
  faqs: [
    {
      q: "Can anxiety be cured permanently?",
      a: "Most people with an anxiety disorder improve a great deal, and many become symptom-free with treatment. CBT teaches skills that keep working after therapy ends, which lowers the chance of relapse. Some people have phases of higher anxiety during stressful times; knowing your early signs and returning for a few sessions early keeps them short.",
    },
    {
      q: "Which doctor should I consult for anxiety?",
      a: "A psychiatrist is the right specialist: a medical doctor who can diagnose the type of anxiety, rule out physical causes such as thyroid problems, prescribe non-addictive medicines when needed and provide therapy. A psychologist can provide therapy but cannot prescribe medicines.",
    },
    {
      q: "Can anxiety be treated without medicines?",
      a: "Yes. Mild to moderate anxiety often improves with CBT and lifestyle changes alone. Medicines are recommended when anxiety is severe, long-standing, or when depression or panic attacks are also present. Your psychiatrist will discuss both options.",
    },
    {
      q: "Are anxiety medicines addictive?",
      a: "SSRIs and SNRIs — the usual long-term medicines for anxiety — are not addictive. Benzodiazepines (such as alprazolam or clonazepam) can cause dependence with regular use, so a psychiatrist limits them to short periods. Never stop any psychiatric medicine suddenly without advice.",
    },
    {
      q: "Can anxiety cause physical symptoms like chest pain or breathlessness?",
      a: "Yes. Anxiety can cause palpitations, chest tightness, breathlessness, dizziness, headaches and stomach upset. Because these can also come from heart or lung problems, new or severe chest pain should always be checked by a doctor first.",
    },
    {
      q: "How long does anxiety treatment take?",
      a: "Many people notice improvement within 4–8 weeks of starting CBT or medicine. A typical course of CBT runs for a few months, and medicines are usually continued for 6–12 months after you feel well before being reduced gradually.",
    },
    {
      q: "Can I get anxiety treatment online?",
      a: "Yes — video consultations work very well for anxiety. Dr. Ajmera consults online with patients across India and abroad in English, Hindi and Gujarati. See [online psychiatrist consultation](/online-psychiatrist-consultation).",
    },
  ],
  related: [
    "/conditions/panic-attacks",
    "/conditions/ocd",
    "/conditions/depression",
    "/conditions/insomnia",
    "/guides/how-to-stop-overthinking",
    "/treatments/psychotherapy",
  ],
  sources: [
    {
      label: "World Health Organization — Anxiety disorders, fact sheet",
      url: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
    },
    {
      label: "NICE guideline CG113 — Generalised anxiety disorder and panic disorder in adults",
      url: "https://www.nice.org.uk/guidance/cg113",
    },
    {
      label: "National Institute of Mental Health — Anxiety disorders",
      url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
    },
    { label: "Tele-MANAS — National Tele Mental Health Programme", url: "https://telemanas.mohfw.gov.in" },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: [
      "Generalised anxiety disorder",
      "GAD",
      "Anxiety neurosis",
      "चिंता",
      "ગભરાટ",
    ],
    symptoms: [
      "Excessive worry",
      "Restlessness",
      "Palpitations",
      "Muscle tension",
      "Sleep disturbance",
      "Irritability",
      "Difficulty concentrating",
      "Avoidance",
    ],
    treatments: [
      "Cognitive behavioural therapy (CBT)",
      "Exposure therapy",
      "SSRI or SNRI medication",
      "Relaxation and breathing training",
    ],
    riskFactors: [
      "Family history of anxiety",
      "Chronic stress",
      "Traumatic experiences",
      "Thyroid overactivity",
      "Excess caffeine or stimulant use",
    ],
  },
};

export default anxiety;
