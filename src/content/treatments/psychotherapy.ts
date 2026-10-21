import { MessagesSquare } from "lucide-react";
import type { ContentPage } from "../types";

const psychotherapy: ContentPage = {
  kind: "treatment",
  slug: "psychotherapy",
  name: "Psychotherapy & counselling",
  tagline: "Evidence-based talk therapy with a psychiatrist",
  icon: MessagesSquare,
  title: "Psychotherapy & Counselling in Surat – CBT & Talk Therapy",
  description:
    "Confidential psychotherapy and counselling in Surat and online with psychiatrist Dr. Jash Ajmera — CBT, ERP, emotion-management therapy for anxiety, depression, OCD, stress and relationships.",
  h1: "Psychotherapy & counselling in *Surat* & online",
  eyebrow: "Treatment · Psychotherapy",
  summary:
    "Psychotherapy (talk therapy) helps you understand and change the thoughts, emotions and patterns behind anxiety, depression, OCD, stress and relationship difficulties. At Sadbhav Neuropsychiatry Clinic, therapy is provided by psychiatrist Dr. Jash Ajmera, so therapy and medicines — when needed — come from one doctor who knows your full picture. Sessions are available in Surat and online, in English, Hindi and Gujarati.",
  facts: [
    { label: "Therapist", value: "Dr. Jash Ajmera, psychiatrist & psychotherapist" },
    { label: "Approaches", value: "CBT, ERP, emotion-management and integrative therapy" },
    { label: "Helps with", value: "Anxiety, depression, OCD, stress, relationships, self-growth" },
    { label: "Format", value: "In person in Surat or online by video" },
    { label: "Languages", value: "English, Hindi, Gujarati" },
  ],
  sections: [
    {
      id: "what-is-psychotherapy",
      title: "What is psychotherapy?",
      blocks: [
        {
          type: "p",
          text: "Psychotherapy is a structured, confidential conversation with a trained professional that uses proven techniques to help you navigate emotions, thoughts and behaviour. Unlike advice from friends, it follows a plan, has clear goals and builds skills you can use for life.",
        },
        {
          type: "p",
          text: "Its focus can range from uncovering the root causes of distress to building healthier patterns of thinking, feeling and relating — whatever fits your needs.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Counselling or psychotherapy?",
          text: "The words are often used interchangeably. Counselling usually means shorter, problem-focused support; psychotherapy goes deeper into patterns and uses specific evidence-based methods. Your plan can include both.",
        },
      ],
    },
    {
      id: "who-is-it-for",
      title: "Who can benefit from therapy?",
      blocks: [
        {
          type: "p",
          text: "People of any age can opt for psychotherapy — you do not need a diagnosis to benefit. It helps people who are:",
        },
        {
          type: "checklist",
          items: [
            "Living with [anxiety](/conditions/anxiety), [depression](/conditions/depression), [OCD](/conditions/ocd) or [panic attacks](/conditions/panic-attacks)",
            "Struggling with [stress, burnout or anger](/conditions/stress-burnout)",
            "Facing relationship or marital difficulties",
            "Coping with grief, a breakup, illness or a major life change",
            "Recovering from [addiction](/treatments/de-addiction)",
            "Wanting personal growth, confidence and better emotional balance",
          ],
        },
      ],
    },
    {
      id: "approach",
      title: "Dr. Ajmera’s approach to therapy",
      blocks: [
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Client-centred",
              text: "A supportive, non-judgemental space to explore your feelings and gain insight — built on empathy and active listening.",
            },
            {
              title: "Collaborative and non-directive",
              text: "You lead the conversation, with guidance where it helps, so that insights and solutions are truly your own.",
            },
            {
              title: "Neuroscience-informed",
              text: "Clear explanations of how the brain shapes emotions and behaviour, with techniques that target those processes for better emotional regulation.",
            },
            {
              title: "Emotion management",
              text: "Practical strategies to understand, tolerate and regulate emotions, leading to calmer responses and better wellbeing.",
            },
          ],
        },
        {
          type: "p",
          text: "Dr. Ajmera’s psychotherapy training was under the mentorship of Dr. M. J. Samani, founder of Integrative Psychotherapy for Emotion Management.",
        },
      ],
    },
    {
      id: "therapies",
      title: "Therapies we use",
      blocks: [
        {
          type: "table",
          head: ["Therapy", "Best for"],
          rows: [
            ["Cognitive behavioural therapy (CBT)", "Anxiety, depression, panic, stress, low self-esteem"],
            ["Exposure and response prevention (ERP)", "[OCD](/conditions/ocd) and phobias"],
            ["CBT for insomnia (CBT-I)", "Long-term [sleep problems](/conditions/insomnia)"],
            ["Behavioural activation", "Depression, low motivation"],
            ["Emotion-focused and integrative therapy", "Intense emotions, relationships, [personality difficulties](/conditions/personality-disorders)"],
            ["Motivational and relapse-prevention therapy", "[Alcohol](/conditions/alcohol-addiction), tobacco and other addictions"],
            ["Supportive therapy and psychoeducation", "Coping with illness, grief and life changes; families"],
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How therapy works at the clinic",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "First consultation",
              text: "We understand your concerns, history and goals, and check whether therapy alone or therapy with medicines would help most.",
            },
            {
              title: "A clear plan",
              text: "Agreed goals, the type of therapy, how often to meet and how progress will be measured.",
            },
            {
              title: "Regular sessions",
              text: "Usually weekly to begin with, in person or online, with practical exercises to try between sessions.",
            },
            {
              title: "Review and taper",
              text: "Progress is reviewed regularly. As you improve, sessions are spaced out, with booster sessions if needed.",
            },
          ],
        },
        {
          type: "p",
          text: "The number of sessions varies widely with your needs and the nature of the problem — from a few sessions to several months. Ask the clinic about therapy packages when you book.",
        },
      ],
    },
    {
      id: "psychiatrist-led",
      title: "Why see a psychiatrist for therapy?",
      blocks: [
        {
          type: "list",
          items: [
            "**One expert for the full picture** — a medical doctor who can tell when symptoms have a physical cause or need medicine.",
            "**Therapy and medicines together** when needed, without being passed between professionals.",
            "**Safety** — risk assessment and crisis planning are part of every plan.",
          ],
        },
        {
          type: "p",
          text: "Read more in [psychiatrist vs psychologist vs counsellor](/guides/psychiatrist-vs-psychologist).",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "સાયકોથેરાપી (કાઉન્સેલિંગ) એટલે શું?",
      text: "સાયકોથેરાપી એક ગોપનીય અને વ્યવસ્થિત વાતચીત છે, જેમાં નિષ્ણાત તમારી લાગણીઓ, વિચારો અને વર્તનને સમજવામાં તથા બદલવામાં મદદ કરે છે. ચિંતા, ડિપ્રેશન, OCD, તણાવ અને સંબંધોની તકલીફોમાં તે ખૂબ અસરકારક છે. ડૉ. જશ અજમેરા ગુજરાતી, હિન્દી અને અંગ્રેજીમાં સુરતમાં અને ઓનલાઇન થેરાપી આપે છે.",
      points: [
        "CBT, ERP અને લાગણી-વ્યવસ્થાપન થેરાપી",
        "દવા સાથે કે દવા વગર",
        "રૂબરૂ સુરતમાં અથવા વીડિયો કૉલ દ્વારા",
        "સંપૂર્ણ ગોપનીયતા",
      ],
    },
    hi: {
      heading: "साइकोथेरेपी (काउंसलिंग) क्या है?",
      text: "साइकोथेरेपी एक गोपनीय और व्यवस्थित बातचीत है, जिसमें विशेषज्ञ आपकी भावनाओं, विचारों और व्यवहार को समझने और बदलने में मदद करते हैं। चिंता, डिप्रेशन, OCD, तनाव और रिश्तों की परेशानियों में यह बहुत असरदार है। डॉ. जश अजमेरा गुजराती, हिंदी और अंग्रेज़ी में सूरत में और ऑनलाइन थेरेपी देते हैं।",
      points: [
        "CBT, ERP और भावना-प्रबंधन थेरेपी",
        "दवा के साथ या बिना दवा के",
        "सूरत में आमने-सामने या वीडियो कॉल से",
        "पूरी गोपनीयता",
      ],
    },
  },
  faqs: [
    {
      q: "How many therapy sessions will I need?",
      a: "It depends on your goals and the problem. Focused problems such as panic attacks or insomnia may need around 6–12 sessions; long-standing patterns may need several months. Your plan and progress are reviewed together regularly.",
    },
    {
      q: "Is online therapy as effective as in-person therapy?",
      a: "For most problems — including anxiety, depression, OCD, stress and insomnia — research shows video therapy works about as well as in-person sessions. Choose whichever helps you attend regularly. See [online consultation](/online-psychiatrist-consultation).",
    },
    {
      q: "Will I have to take medicines if I come for therapy?",
      a: "No. Many people do well with therapy alone. If your symptoms are severe or not improving, the doctor may suggest medicines — and the decision is always yours.",
    },
    {
      q: "Is what I say in therapy kept confidential?",
      a: "Yes. Therapy is confidential. The only exception is a serious risk to your life or someone else’s safety, when the doctor may need to involve others to keep people safe — and this is discussed openly with you.",
    },
    {
      q: "Can I come for therapy for relationship or family problems?",
      a: "Yes. Relationship difficulties are among the most common reasons people seek therapy. Sessions help you understand patterns, communicate better and manage conflict and emotions.",
    },
  ],
  related: [
    "/conditions/anxiety",
    "/conditions/depression",
    "/conditions/ocd",
    "/conditions/stress-burnout",
    "/guides/psychiatrist-vs-psychologist",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "Psychotherapy by Dr. Jash Ajmera — clinic brochure (PDF)",
      url: "https://psychiatristinsurat.in/Psychotherapy-by-Dr-Jash-Ajmera.pdf",
    },
    {
      label: "National Institute of Mental Health — Psychotherapies",
      url: "https://www.nimh.nih.gov/health/topics/psychotherapies",
    },
  ],
  updated: "2026-10-21",
};

export default psychotherapy;
