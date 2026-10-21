import { RefreshCcw } from "lucide-react";
import type { ContentPage } from "../types";

const ocd: ContentPage = {
  kind: "condition",
  slug: "ocd",
  name: "OCD",
  tagline: "Unwanted intrusive thoughts and repetitive rituals",
  icon: RefreshCcw,
  title: "OCD Treatment in Surat – Symptoms, Causes & ERP Therapy",
  description:
    "Intrusive thoughts, repeated washing or checking? Learn OCD symptoms, causes and how ERP therapy and medicines help. OCD treatment in Surat and online with Dr. Jash Ajmera.",
  h1: "OCD treatment in *Surat* & online",
  eyebrow: "Condition guide · Obsessive-compulsive disorder",
  summary:
    "Obsessive-compulsive disorder (OCD) is a treatable condition in which unwanted, distressing thoughts (obsessions) drive repetitive actions or mental rituals (compulsions) such as washing, checking or counting. It is not about being tidy. Exposure and response prevention (ERP) therapy and SSRI medicines help most people take back control. Dr. Jash Ajmera treats OCD in Surat and online.",
  facts: [
    { label: "How common", value: "About 1–3 in 100 people at some point in life" },
    { label: "Usual onset", value: "Childhood, teens or early twenties" },
    { label: "Treatment", value: "ERP therapy (a form of CBT) and SSRI medicines" },
    { label: "Response time", value: "Medicines often take 8–12 weeks for full effect" },
    { label: "Consult", value: "Vesu & Katargam (Surat), Ankleshwar or online" },
  ],
  sections: [
    {
      id: "what-is-ocd",
      title: "What is OCD?",
      blocks: [
        {
          type: "p",
          text: "OCD has two parts. **Obsessions** are unwanted thoughts, images or urges that pop into the mind again and again and cause intense anxiety, disgust or doubt. **Compulsions** are the things a person does — physically or in their head — to reduce that distress or prevent something bad from happening.",
        },
        {
          type: "p",
          text: "Compulsions bring short-term relief, which teaches the brain to repeat them. Over time the rituals take more and more time — often hours a day — and the obsessions grow stronger. Most people with OCD know their fears are excessive, which makes the condition especially frustrating and isolating.",
        },
        {
          type: "callout",
          tone: "info",
          text: "Liking things neat or being “a bit OCD” is not OCD. The disorder involves real distress, lost time and interference with daily life.",
        },
      ],
    },
    {
      id: "symptoms",
      title: "Common types of OCD",
      blocks: [
        {
          type: "table",
          head: ["Theme", "Obsession", "Typical compulsion"],
          rows: [
            ["Contamination", "Fear of germs, dirt, body fluids or “impurity”", "Excessive hand-washing, bathing, cleaning, avoiding touching things"],
            ["Doubt and checking", "“Did I lock the door / switch off the gas?”", "Checking repeatedly, asking family for reassurance"],
            ["Harm", "Fear of accidentally or impulsively harming someone", "Avoiding knives, mental reviewing, seeking reassurance"],
            ["Religious or moral", "Blasphemous thoughts, fear of sin or doing something wrong", "Praying or confessing repeatedly, mental neutralising"],
            ["Sexual or relationship", "Unwanted sexual images; constant doubts about a partner", "Checking feelings, avoiding people, mental analysis"],
            ["Order and symmetry", "Things must feel “just right”", "Arranging, repeating actions, counting"],
          ],
        },
        {
          type: "p",
          text: "Some people have mostly mental compulsions — reviewing, counting, praying or arguing with thoughts — sometimes called “pure O”. It is still OCD and responds to the same treatment.",
        },
      ],
    },
    {
      id: "causes",
      title: "What causes OCD?",
      blocks: [
        {
          type: "list",
          items: [
            "**Brain circuits** — differences in the circuits linking the front of the brain with deeper structures that control habits and error-detection.",
            "**Genes** — OCD often runs in families.",
            "**Learning** — compulsions reduce anxiety for a moment, so the brain learns to repeat them.",
            "**Stress and life changes** — exams, a new baby, illness or loss can bring on or worsen symptoms.",
          ],
        },
        {
          type: "p",
          text: "OCD is not caused by bad parenting or weak willpower, and having intrusive thoughts does not mean you secretly want to act on them.",
        },
      ],
    },
    {
      id: "when-to-see-a-psychiatrist",
      title: "When to see a psychiatrist for OCD",
      blocks: [
        {
          type: "checklist",
          items: [
            "Thoughts or rituals take more than an hour a day",
            "You avoid places, people or objects because of fears",
            "Family members are drawn into rituals or reassurance",
            "Studies, work or relationships are suffering",
            "You feel low or hopeless because of the symptoms",
            "Symptoms began suddenly in a child",
          ],
        },
        {
          type: "p",
          text: "The psychiatrist will assess the type and severity of OCD (often using the Y-BOCS scale), check for depression, anxiety or tics, and plan treatment with you.",
        },
      ],
    },
    {
      id: "treatment",
      title: "Treatment for OCD",
      blocks: [
        { type: "h3", text: "Exposure and response prevention (ERP)" },
        {
          type: "p",
          text: "ERP is the most effective psychological treatment for OCD. With your therapist you build a ladder of feared situations, then face them step by step **without** doing the compulsion. The anxiety rises and then falls by itself, and the brain learns that the feared outcome does not happen. It is challenging, but it works — and you control the pace. Learn about [psychotherapy at the clinic](/treatments/psychotherapy).",
        },
        { type: "h3", text: "Medicines" },
        {
          type: "p",
          text: "SSRIs (such as fluoxetine, fluvoxamine, sertraline and escitalopram) and clomipramine reduce the intensity of obsessions. OCD often needs higher doses than depression, and the full effect can take 8–12 weeks. When OCD does not respond enough, psychiatrists may add an augmenting medicine.",
        },
        { type: "h3", text: "Family involvement" },
        {
          type: "p",
          text: "Families often help with rituals or give reassurance out of love — but this keeps OCD going. Part of treatment is guiding family members on how to support recovery without “feeding” the OCD.",
        },
        {
          type: "callout",
          tone: "tip",
          text: "Combining ERP with medicine works best for moderate to severe OCD. Most people improve substantially, even after living with OCD for years.",
        },
      ],
    },
    {
      id: "myths-and-facts",
      title: "Myths and facts about OCD",
      blocks: [
        {
          type: "mythfacts",
          items: [
            {
              myth: "OCD just means being very clean and organised.",
              fact: "OCD is a distressing condition driven by intrusive fears. Many people with OCD are not tidy at all; their rituals may be checking, praying or mental reviewing.",
            },
            {
              myth: "Having violent or sexual intrusive thoughts means I am dangerous.",
              fact: "Intrusive thoughts in OCD are unwanted and go against a person’s values — that is exactly why they are so upsetting. They do not reflect hidden desires.",
            },
            {
              myth: "OCD cannot be treated; you have to live with it.",
              fact: "ERP therapy and medicines help most people reduce symptoms dramatically and get their time and life back.",
            },
          ],
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "ઓસીડી (OCD) એટલે શું?",
      text: "OCDમાં મનમાં વારંવાર અનિચ્છનીય અને બેચેન કરનારા વિચારો આવે છે, અને તેમાંથી રાહત મેળવવા વ્યક્તિ એક જ ક્રિયા ફરી ફરી કરે છે — જેમ કે વારંવાર હાથ ધોવા, તાળું કે ગેસ ચેક કરવો, ગણતરી કરવી. આ બીમારી ERP થેરાપી અને દવાઓથી સારી રીતે કાબૂમાં આવી શકે છે.",
      points: [
        "ગંદકી કે જંતુઓનો વધુ પડતો ડર અને વારંવાર હાથ ધોવા",
        "તાળું, ગેસ, દરવાજો વારંવાર ચેક કરવો",
        "મનમાં વારંવાર આવતા ખરાબ કે ધાર્મિક વિચારો",
        "વસ્તુઓ ‘બરાબર’ ન લાગે ત્યાં સુધી ક્રિયા ફરીથી કરવી",
      ],
    },
    hi: {
      heading: "ओसीडी (जुनूनी-बाध्यकारी विकार) क्या है?",
      text: "OCD में मन में बार-बार अनचाहे और परेशान करने वाले विचार आते हैं, और उनसे राहत पाने के लिए व्यक्ति एक ही काम बार-बार करता है — जैसे बार-बार हाथ धोना, ताला या गैस चेक करना, गिनती करना। यह बीमारी ERP थेरेपी और दवाओं से अच्छी तरह नियंत्रित हो सकती है।",
      points: [
        "गंदगी या कीटाणुओं का अत्यधिक डर और बार-बार हाथ धोना",
        "ताला, गैस, दरवाज़ा बार-बार चेक करना",
        "बार-बार आने वाले बुरे या धार्मिक विचार",
        "चीज़ें ‘ठीक’ न लगें तब तक काम दोहराना",
      ],
    },
  },
  faqs: [
    {
      q: "Is OCD curable?",
      a: "OCD is very treatable. With ERP therapy and/or medicines, most people experience a large reduction in symptoms, and many reach a point where OCD no longer controls their life. Some people need longer-term treatment and booster sessions during stressful periods.",
    },
    {
      q: "Can OCD be treated without medication?",
      a: "Yes. ERP therapy alone can be very effective, especially for mild to moderate OCD. For moderate to severe OCD, or when depression is also present, combining ERP with an SSRI usually gives the best results.",
    },
    {
      q: "Which doctor should I consult for OCD?",
      a: "A psychiatrist. They can confirm the diagnosis, measure its severity, prescribe medicines at the right dose and plan ERP therapy. Dr. Jash Ajmera treats OCD at the [Vesu clinic in Surat](/clinics/vesu-surat) and [online](/online-psychiatrist-consultation).",
    },
    {
      q: "How long does OCD treatment take?",
      a: "Medicines usually need 8–12 weeks at an adequate dose to show their full effect. A course of ERP typically runs over 12–20 sessions. Treatment is often continued for at least a year after improvement to prevent relapse.",
    },
    {
      q: "Can OCD turn into schizophrenia or madness?",
      a: "No. OCD is a separate condition. People with OCD usually recognise that their fears are excessive, and OCD does not turn into schizophrenia.",
    },
    {
      q: "What is the difference between OCD and OCPD?",
      a: "OCD involves unwanted obsessions and compulsions that cause distress. Obsessive-compulsive personality disorder (OCPD) is a long-standing personality style of perfectionism, rigidity and control, which the person often sees as correct rather than distressing.",
    },
  ],
  related: [
    "/conditions/anxiety",
    "/conditions/depression",
    "/treatments/psychotherapy",
    "/treatments/child-adolescent-psychiatry",
    "/guides/psychiatric-medicines-facts",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "NICE guideline CG31 — Obsessive-compulsive disorder and body dysmorphic disorder",
      url: "https://www.nice.org.uk/guidance/cg31",
    },
    {
      label: "National Institute of Mental Health — Obsessive-compulsive disorder",
      url: "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd",
    },
    {
      label: "International OCD Foundation — About OCD",
      url: "https://iocdf.org/about-ocd/",
    },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: [
      "Obsessive-compulsive disorder",
      "Obsessive compulsive disorder",
      "जुनूनी-बाध्यकारी विकार",
    ],
    symptoms: [
      "Intrusive unwanted thoughts",
      "Excessive hand-washing or cleaning",
      "Repeated checking",
      "Counting or ordering rituals",
      "Reassurance seeking",
      "Avoidance",
    ],
    treatments: [
      "Exposure and response prevention (ERP)",
      "Cognitive behavioural therapy",
      "SSRI medication",
      "Clomipramine",
    ],
    riskFactors: ["Family history of OCD", "Stressful life events", "Tic disorders"],
  },
};

export default ocd;
