import { Scale } from "lucide-react";
import type { ContentPage } from "../types";

const psychiatristVsPsychologist: ContentPage = {
  kind: "guide",
  slug: "psychiatrist-vs-psychologist",
  name: "Psychiatrist vs psychologist",
  tagline: "And counsellors, therapists and neurologists — who does what",
  icon: Scale,
  title: "Psychiatrist vs Psychologist – Who to See?",
  description:
    "Psychiatrist, psychologist, counsellor or neurologist? Training, who can prescribe medicines, and who to see first in India, explained by a psychiatrist.",
  h1: "Psychiatrist vs psychologist: *who should you see?*",
  eyebrow: "Guide · Getting help",
  summary:
    "A psychiatrist is a medical doctor (MBBS plus MD, DNB or DPM in psychiatry) who diagnoses mental health conditions, checks for physical causes, prescribes medicines and can provide therapy. A clinical psychologist provides psychological testing and therapy but does not prescribe medicines. Counsellors offer supportive talk therapy for everyday problems. If symptoms are severe, long-lasting or affect sleep, appetite or daily life, start with a psychiatrist.",
  facts: [
    { label: "Psychiatrist", value: "Medical doctor · diagnoses · prescribes · therapy" },
    { label: "Clinical psychologist", value: "Testing and therapy · does not prescribe" },
    { label: "Counsellor", value: "Supportive talk therapy for everyday problems" },
    { label: "Neurologist", value: "Brain and nerve diseases such as epilepsy, stroke, migraine" },
  ],
  sections: [
    {
      id: "comparison",
      title: "The differences at a glance",
      blocks: [
        {
          type: "table",
          head: ["", "Psychiatrist", "Clinical psychologist", "Counsellor"],
          rows: [
            ["Training in India", "MBBS + MD/DNB/DPM in psychiatry (medical degree)", "Postgraduate degree in psychology + M.Phil. or professional doctorate in clinical psychology; registered with the RCI", "Varies widely — degree or diploma in psychology, social work or counselling"],
            ["Diagnoses mental illness", "Yes", "Yes (psychological assessment)", "No formal diagnosis"],
            ["Prescribes medicines", "Yes", "No", "No"],
            ["Checks physical causes", "Yes — orders blood tests, reviews medical conditions", "No", "No"],
            ["Therapy", "Yes — many psychiatrists also provide psychotherapy", "Yes — main focus", "Yes — supportive counselling"],
            ["Best for", "Moderate to severe symptoms, medicines, complex or unclear problems", "Therapy, IQ and personality testing", "Everyday stress, adjustment and life problems"],
          ],
        },
        {
          type: "p",
          text: "In India, the title “clinical psychologist” is regulated through the Rehabilitation Council of India (RCI), while “counsellor” and “therapist” are general terms without a single regulating body — so it is worth checking qualifications.",
        },
      ],
    },
    {
      id: "who-to-see-first",
      title: "Who should you see first?",
      blocks: [
        { type: "h3", text: "Start with a psychiatrist if…" },
        {
          type: "checklist",
          items: [
            "Symptoms have lasted more than two weeks and affect daily life",
            "Sleep, appetite or energy have changed a lot",
            "You have panic attacks, intrusive thoughts or rituals",
            "There are mood highs, suspiciousness or hearing voices",
            "You are using alcohol, drugs or pills to cope",
            "There are thoughts of self-harm or suicide",
          ],
        },
        { type: "h3", text: "A psychologist or counsellor may be enough if…" },
        {
          type: "list",
          items: [
            "you are coping with a specific stress, a breakup or a life change,",
            "symptoms are mild and your sleep and daily functioning are mostly fine,",
            "you want to work on confidence, communication or personal growth.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Not sure? A psychiatrist can guide you",
          text: "A psychiatrist can assess you and tell you whether you need medicines, therapy or both — and many psychiatrists, including Dr. Jash Ajmera, provide [psychotherapy](/treatments/psychotherapy) themselves.",
        },
      ],
    },
    {
      id: "psychiatrist-vs-neurologist",
      title: "Psychiatrist vs neurologist",
      blocks: [
        {
          type: "p",
          text: "Both are medical doctors who work with the brain, but they focus on different problems:",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Neurologist",
              text: "Diseases of the brain, spinal cord and nerves — epilepsy, stroke, migraine, Parkinson’s disease, neuropathy, multiple sclerosis. Uses tests such as MRI, CT and EEG.",
            },
            {
              title: "Psychiatrist",
              text: "Conditions of mood, thinking, behaviour and perception — depression, anxiety, OCD, bipolar disorder, psychosis, addiction, sleep and sexual problems.",
            },
          ],
        },
        {
          type: "p",
          text: "Some problems need both — for example dementia, epilepsy with depression, or headaches driven by anxiety. A **neuropsychiatrist** is a psychiatrist with a special interest in the links between brain conditions and mental health.",
        },
      ],
    },
    {
      id: "therapist",
      title: "What about a “therapist”?",
      blocks: [
        {
          type: "p",
          text: "“Therapist” is an umbrella word for anyone who provides therapy — psychiatrists, clinical psychologists, counsellors, and in some contexts occupational or speech therapists. When choosing a therapist for mental health, ask about their qualifications and what type of therapy they use (for example CBT or ERP).",
        },
      ],
    },
    {
      id: "working-together",
      title: "They often work together",
      blocks: [
        {
          type: "p",
          text: "Good mental health care is a team effort. A psychiatrist may manage diagnosis and medicines while a psychologist provides weekly therapy or testing — or one psychiatrist may provide both. What matters is that your care is coordinated and that you understand the plan.",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "મનોચિકિત્સક (સાયકિયાટ્રિસ્ટ) અને મનોવૈજ્ઞાનિક (સાયકોલોજિસ્ટ) વચ્ચે શું ફરક છે?",
      text: "મનોચિકિત્સક એક MBBS ડૉક્ટર છે જેણે માનસિક રોગોમાં વિશેષ અભ્યાસ (MD/DPM) કર્યો હોય છે — તે નિદાન કરે છે, શારીરિક કારણો તપાસે છે, દવા લખી શકે છે અને થેરાપી પણ આપી શકે છે. મનોવૈજ્ઞાનિક ટેસ્ટ અને થેરાપી આપે છે પણ દવા લખી શકતા નથી. લક્ષણો ગંભીર કે લાંબા સમયથી હોય તો પહેલા મનોચિકિત્સકને મળો.",
      points: [
        "મનોચિકિત્સક: ડૉક્ટર, નિદાન, દવા અને થેરાપી",
        "મનોવૈજ્ઞાનિક: ટેસ્ટ અને થેરાપી, દવા નહીં",
        "ન્યુરોલોજિસ્ટ: વાઈ, લકવો, માઇગ્રેન જેવી ચેતાતંત્રની બીમારીઓ",
      ],
    },
    hi: {
      heading: "मनोचिकित्सक (साइकियाट्रिस्ट) और मनोवैज्ञानिक (साइकोलॉजिस्ट) में क्या अंतर है?",
      text: "मनोचिकित्सक एक MBBS डॉक्टर होते हैं जिन्होंने मानसिक रोगों में विशेष पढ़ाई (MD/DPM) की होती है — वे निदान करते हैं, शारीरिक कारण जाँचते हैं, दवा लिख सकते हैं और थेरेपी भी दे सकते हैं। मनोवैज्ञानिक टेस्ट और थेरेपी देते हैं लेकिन दवा नहीं लिख सकते। लक्षण गंभीर या लंबे समय से हों तो पहले मनोचिकित्सक से मिलें।",
      points: [
        "मनोचिकित्सक: डॉक्टर, निदान, दवा और थेरेपी",
        "मनोवैज्ञानिक: टेस्ट और थेरेपी, दवा नहीं",
        "न्यूरोलॉजिस्ट: मिर्गी, लकवा, माइग्रेन जैसी तंत्रिका तंत्र की बीमारियाँ",
      ],
    },
  },
  faqs: [
    {
      q: "Is a psychiatrist a real doctor?",
      a: "Yes. A psychiatrist is a medical doctor who has completed MBBS and then specialised in psychiatry (MD, DNB or DPM). That is why psychiatrists can diagnose medical causes, order tests and prescribe medicines.",
    },
    {
      q: "Do psychiatrists only prescribe medicines?",
      a: "No. Psychiatrists are trained in psychotherapy too, and many provide it themselves. Medicines are recommended only when they are likely to help.",
    },
    {
      q: "Do I need a referral to see a psychiatrist in India?",
      a: "No. You can book an appointment with a psychiatrist directly — in person or online.",
    },
    {
      q: "Should I see a psychiatrist or psychologist for anxiety or depression?",
      a: "For mild symptoms, therapy with a psychologist may be enough. If symptoms are moderate or severe, affect sleep or daily functioning, or have not improved with therapy, see a psychiatrist, who can offer both medicines and therapy.",
    },
    {
      q: "Who should I see for my child’s behaviour or attention problems?",
      a: "A psychiatrist (ideally with experience in children and adolescents) can assess conditions such as ADHD, anxiety or depression and prescribe if needed, while a psychologist can do IQ and learning assessments. See [child & adolescent mental health](/treatments/child-adolescent-psychiatry).",
    },
  ],
  related: [
    "/guides/when-to-see-a-psychiatrist",
    "/guides/first-psychiatrist-visit",
    "/treatments/psychotherapy",
    "/dr-jash-ajmera",
    "/conditions",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "The Mental Healthcare Act, 2017 (definitions of psychiatrist and clinical psychologist) — India Code",
      url: "https://www.indiacode.nic.in/handle/123456789/2249",
    },
    { label: "Rehabilitation Council of India", url: "https://rehabcouncil.nic.in" },
    { label: "Indian Psychiatric Society", url: "https://indianpsychiatricsociety.org" },
  ],
  updated: "2026-10-21",
};

export default psychiatristVsPsychologist;
