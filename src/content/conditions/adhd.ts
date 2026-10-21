import { Zap } from "lucide-react";
import type { ContentPage } from "../types";

const adhd: ContentPage = {
  kind: "condition",
  slug: "adhd",
  name: "ADHD",
  tagline: "Inattention, restlessness and impulsivity in children and adults",
  icon: Zap,
  title: "ADHD Treatment in Surat – Child & Adult ADHD Assessment",
  description:
    "Trouble focusing, restlessness or impulsivity? Learn ADHD symptoms in children and adults, how ADHD is assessed and treated. ADHD assessment and treatment in Surat.",
  h1: "ADHD assessment & treatment in *Surat*",
  eyebrow: "Condition guide · ADHD",
  summary:
    "ADHD (attention-deficit/hyperactivity disorder) is a neurodevelopmental condition that makes it hard to pay attention, sit still or control impulses. It starts in childhood and often continues into adulthood, affecting studies, work and relationships. ADHD is not caused by bad parenting, and a combination of practical strategies, school or workplace support and medicines helps most people thrive. Dr. Jash Ajmera assesses and treats ADHD in Surat.",
  facts: [
    { label: "How common", value: "About 5 in 100 children; many continue into adulthood" },
    { label: "Main types", value: "Inattentive, hyperactive-impulsive or combined" },
    { label: "Assessment", value: "History, rating scales, school reports, ruling out look-alikes" },
    { label: "Treatment", value: "Parent and behavioural strategies, CBT, medicines" },
    { label: "Consult", value: "Vesu & Katargam (Surat) and Ankleshwar" },
  ],
  sections: [
    {
      id: "what-is-adhd",
      title: "What is ADHD?",
      blocks: [
        {
          type: "p",
          text: "ADHD is a difference in how the brain develops, particularly in the systems that manage attention, planning and self-control. Symptoms begin in childhood — usually before the age of 12 — and appear in more than one setting, such as at home and at school.",
        },
        {
          type: "list",
          items: [
            "**Inattentive type** — difficulty focusing, careless mistakes, losing things, forgetfulness, not finishing tasks. Often missed in girls and quiet children.",
            "**Hyperactive-impulsive type** — constant movement, fidgeting, talking excessively, interrupting, difficulty waiting.",
            "**Combined type** — features of both.",
          ],
        },
      ],
    },
    {
      id: "symptoms",
      title: "ADHD symptoms in children and adults",
      blocks: [
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "In children",
              text: "Cannot sit through class, runs around, does not follow instructions, makes careless mistakes, loses books and pencils, frequent complaints from school, homework takes hours, accidents from impulsive behaviour.",
            },
            {
              title: "In adults",
              text: "Chronic procrastination, missed deadlines, disorganisation, restlessness, impulsive spending or decisions, frequent job changes, losing focus in meetings, forgetting appointments, quick temper.",
            },
          ],
        },
        {
          type: "p",
          text: "Many adults are diagnosed only when their own child is assessed, or after years of being called lazy or careless. ADHD often comes with anxiety, low mood, learning difficulties or sleep problems.",
        },
      ],
    },
    {
      id: "causes",
      title: "What causes ADHD?",
      blocks: [
        {
          type: "list",
          items: [
            "**Genes** — ADHD is strongly inherited and often runs in families.",
            "**Brain development** — differences in brain networks that control attention and self-regulation.",
            "**Early factors** — premature birth, low birth weight and exposure to tobacco or alcohol during pregnancy increase the risk.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: "ADHD is not caused by poor parenting, too much sugar or watching TV. Heavy screen use can worsen attention, but it does not create ADHD.",
        },
      ],
    },
    {
      id: "assessment",
      title: "How ADHD is assessed",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Detailed history",
              text: "Development, behaviour at home and school or work, and how long symptoms have been present — with parents, teachers or a partner where possible.",
            },
            {
              title: "Rating scales and reports",
              text: "Standard questionnaires for parents, teachers or adults (such as the adult ADHD self-report scale), plus school reports and notebooks.",
            },
            {
              title: "Ruling out look-alikes",
              text: "Hearing and vision problems, learning disabilities, anxiety, depression, sleep problems, thyroid disorders and stressful situations can all affect attention.",
            },
            {
              title: "A clear plan",
              text: "An explanation for the family, school recommendations and a treatment plan.",
            },
          ],
        },
      ],
    },
    {
      id: "treatment",
      title: "Treatment for ADHD",
      blocks: [
        { type: "h3", text: "For children" },
        {
          type: "p",
          text: "Parent training (clear routines, praise for effort, consistent consequences), classroom strategies (front-row seating, short tasks, frequent breaks, extra exam time where available) and, for moderate to severe ADHD, medicines. Medicines help the brain focus — they do not sedate a child or change their personality.",
        },
        { type: "h3", text: "For adults" },
        {
          type: "p",
          text: "Medicines, CBT focused on ADHD (planning, organisation, managing procrastination), and practical tools such as reminders, planners and breaking work into steps.",
        },
        { type: "h3", text: "About ADHD medicines" },
        {
          type: "p",
          text: "Options include stimulant medicines (such as methylphenidate) and non-stimulant medicines (such as atomoxetine). They are started at a low dose and adjusted, with monitoring of appetite, sleep, growth, heart rate and blood pressure.",
        },
        {
          type: "callout",
          tone: "info",
          title: "In-person visit needed for some medicines",
          text: "Some ADHD medicines, including methylphenidate, are controlled medicines in India and cannot be prescribed through an online consultation. An in-clinic visit is needed to start them.",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "ADHD (ધ્યાનની ખામી અને અતિસક્રિયતા) એટલે શું?",
      text: "ADHD મગજના વિકાસ સાથે જોડાયેલી સ્થિતિ છે, જેમાં બાળક કે મોટી વ્યક્તિને ધ્યાન આપવામાં, એક જગ્યાએ શાંત બેસવામાં અને આવેગ પર કાબૂ રાખવામાં તકલીફ પડે છે. આ ખરાબ ઉછેરને કારણે નથી થતું. યોગ્ય માર્ગદર્શન, શાળાનો સહકાર અને દવાઓથી બાળકો અને મોટા સારી પ્રગતિ કરી શકે છે.",
      points: [
        "ભણવામાં ધ્યાન ન રહેવું, વારંવાર ભૂલો",
        "સતત દોડધામ, ચંચળતા, વધુ પડતું બોલવું",
        "વસ્તુઓ ખોવાઈ જવી, કામ અધૂરું છોડવું",
        "મોટામાં: કામ ટાળવું, અવ્યવસ્થા અને ઉતાવળા નિર્ણયો",
      ],
    },
    hi: {
      heading: "ADHD (ध्यान की कमी और अतिसक्रियता) क्या है?",
      text: "ADHD दिमाग के विकास से जुड़ी स्थिति है, जिसमें बच्चे या बड़े को ध्यान लगाने, एक जगह शांत बैठने और आवेग पर काबू रखने में परेशानी होती है। यह खराब परवरिश की वजह से नहीं होता। सही मार्गदर्शन, स्कूल के सहयोग और दवाओं से बच्चे और बड़े अच्छी प्रगति कर सकते हैं।",
      points: [
        "पढ़ाई में ध्यान न लगना, बार-बार गलतियाँ",
        "लगातार भाग-दौड़, चंचलता, ज़्यादा बोलना",
        "चीज़ें खो देना, काम अधूरा छोड़ना",
        "बड़ों में: काम टालना, अव्यवस्था और जल्दबाज़ी में फ़ैसले",
      ],
    },
  },
  faqs: [
    {
      q: "Can adults have ADHD?",
      a: "Yes. ADHD starts in childhood, but symptoms continue into adulthood for many people. Adults often show it as disorganisation, procrastination, restlessness and impulsive decisions rather than obvious hyperactivity. It can be assessed and treated at any age.",
    },
    {
      q: "Do children outgrow ADHD?",
      a: "Hyperactivity often reduces with age, but attention and organisation difficulties frequently continue. Early support helps children develop skills that serve them for life.",
    },
    {
      q: "Are ADHD medicines safe for children?",
      a: "When prescribed and monitored by a specialist, ADHD medicines are well studied and generally safe. Common side effects such as reduced appetite or sleep changes are managed by adjusting the dose or timing. They do not cause addiction when taken as prescribed.",
    },
    {
      q: "Which doctor should I see for ADHD?",
      a: "A psychiatrist (or a child psychiatrist for children) can assess ADHD, rule out other causes and prescribe medicines. Paediatricians and psychologists are often involved too. See [child & adolescent psychiatry](/treatments/child-adolescent-psychiatry).",
    },
    {
      q: "Is ADHD the same as autism or a learning disability?",
      a: "No, but they can occur together. Autism mainly affects social communication and involves restricted interests; learning disabilities affect specific skills such as reading or maths. A careful assessment identifies which apply.",
    },
  ],
  related: [
    "/treatments/child-adolescent-psychiatry",
    "/conditions/anxiety",
    "/conditions/stress-burnout",
    "/guides/when-to-see-a-psychiatrist",
    "/guides/psychiatric-medicines-facts",
    "/clinics/vesu-surat",
  ],
  sources: [
    {
      label: "NICE guideline NG87 — Attention deficit hyperactivity disorder: diagnosis and management",
      url: "https://www.nice.org.uk/guidance/ng87",
    },
    {
      label: "National Institute of Mental Health — Attention-deficit/hyperactivity disorder",
      url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
    },
    {
      label: "Telemedicine Practice Guidelines, 2020 — Ministry of Health and Family Welfare",
      url: "https://www.mohfw.gov.in/pdf/Telemedicine.pdf",
    },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: [
      "Attention-deficit/hyperactivity disorder",
      "Attention deficit disorder",
      "ADD",
      "Adult ADHD",
    ],
    symptoms: [
      "Inattention",
      "Hyperactivity",
      "Impulsivity",
      "Disorganisation",
      "Forgetfulness",
      "Restlessness",
    ],
    treatments: [
      "Parent training",
      "Classroom accommodations",
      "Stimulant medication",
      "Non-stimulant medication",
      "CBT for adult ADHD",
    ],
    riskFactors: [
      "Family history of ADHD",
      "Premature birth",
      "Low birth weight",
      "Prenatal tobacco or alcohol exposure",
    ],
  },
};

export default adhd;
