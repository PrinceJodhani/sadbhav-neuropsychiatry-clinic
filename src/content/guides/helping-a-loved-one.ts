import { HandHeart } from "lucide-react";
import type { ContentPage } from "../types";

const helpingALovedOne: ContentPage = {
  kind: "guide",
  slug: "helping-a-loved-one",
  name: "Helping a loved one",
  tagline: "How to talk to family about seeing a psychiatrist",
  icon: HandHeart,
  title: "How to Convince Someone to See a Psychiatrist",
  description:
    "Worried about a family member’s mental health or drinking? How to start the talk, what to say, what to do if they refuse, and when to get help.",
  h1: "How to help a loved one *get mental health care*",
  eyebrow: "Guide · For families",
  summary:
    "Start with care, not labels: choose a calm moment, describe the specific changes you have noticed, listen more than you talk, and suggest help for something they already accept — such as poor sleep, stress or tiredness. Offer to book the appointment and go with them. If they refuse, you can consult a psychiatrist yourself for guidance. If there is any risk of suicide or violence, seek emergency help immediately.",
  sections: [
    {
      id: "signs",
      title: "Signs your loved one may need help",
      blocks: [
        {
          type: "checklist",
          items: [
            "Withdrawn, tearful or not enjoying anything for weeks",
            "Sleeping very little or all the time",
            "New suspiciousness, strange beliefs or talking to themselves",
            "Drinking or using substances more and more",
            "Angry outbursts or big personality changes",
            "Talking about death, hopelessness or being a burden",
          ],
        },
      ],
    },
    {
      id: "conversation",
      title: "How to start the conversation",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Pick the right moment",
              text: "Choose a calm, private time — not during an argument, and not when they have been drinking.",
            },
            {
              title: "Start with care and specifics",
              text: "“I’ve noticed you haven’t been sleeping and you seem very low. I’m worried about you.” Describe what you have seen, not what you think they “are”.",
            },
            {
              title: "Listen",
              text: "Let them talk. Acknowledge their feelings even if you don’t agree with their view of the problem.",
            },
            {
              title: "Suggest a first step they can accept",
              text: "Many people refuse “mental” help but accept help for sleep, stress, headaches or tiredness. That is a fine place to start.",
            },
            {
              title: "Make it easy",
              text: "Offer to book, come along, or arrange an [online consultation](/online-psychiatrist-consultation) from home.",
            },
          ],
        },
        {
          type: "table",
          head: ["Helpful to say", "Best to avoid"],
          rows: [
            ["“I care about you and I’m worried.”", "“You’re being dramatic.”"],
            ["“You don’t have to go through this alone.”", "“Just think positive / pray more / stay busy.”"],
            ["“A doctor can help with your sleep and stress.”", "“You’ve gone mad.”"],
            ["“I’ll come with you.”", "“What will people say?”"],
          ],
        },
      ],
    },
    {
      id: "if-they-refuse",
      title: "If they say no",
      blocks: [
        {
          type: "list",
          items: [
            "**Be patient.** It often takes several conversations. Keep the door open.",
            "**Consult on their behalf first.** Families can meet a psychiatrist to understand the problem and plan the best approach.",
            "**Involve someone they trust** — a sibling, friend, family doctor or elder.",
            "**Never trick them or give medicines secretly in food.** It is unsafe and destroys trust when discovered.",
            "**Look after the basics** — regular meals, sleep, and reducing conflict at home.",
          ],
        },
      ],
    },
    {
      id: "crisis",
      title: "When it is an emergency",
      blocks: [
        {
          type: "callout",
          tone: "urgent",
          title: "Get help immediately if there is a risk to life",
          text: "If your loved one talks about suicide, has harmed themselves, is threatening others, or is too confused to care for themselves — do not leave them alone. Call [112](tel:112), Tele-MANAS [14416](tel:14416), or go to the nearest hospital emergency department.",
        },
        {
          type: "p",
          text: "India’s Mental Healthcare Act, 2017 allows treatment without full consent only in specific situations — for example, when a person with severe mental illness is at risk and cannot make decisions — and with legal safeguards. Read [mental health rights in India](/guides/mental-health-rights-india).",
        },
      ],
    },
    {
      id: "specific-situations",
      title: "Specific situations",
      blocks: [
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "A husband or father who drinks",
              text: "Talk when he is sober, stop covering up, and consult for yourself first. See [alcohol addiction](/conditions/alcohol-addiction).",
            },
            {
              title: "A family member hearing voices",
              text: "Don’t argue about the beliefs; focus on sleep, fear and stress. Early treatment matters. See [psychosis](/conditions/schizophrenia).",
            },
            {
              title: "A teenager who has withdrawn",
              text: "Choose informal moments, listen without lectures, and offer online sessions. See [child & adolescent care](/treatments/child-adolescent-psychiatry).",
            },
            {
              title: "An elderly parent who seems low or forgetful",
              text: "Depression in older adults often looks like body pain, poor appetite or memory complaints. A check-up is the first step.",
            },
          ],
        },
      ],
    },
    {
      id: "self-care",
      title: "Look after yourself too",
      blocks: [
        {
          type: "p",
          text: "Caring for someone with a mental health problem is demanding. Share responsibilities, take breaks, keep up your own routine and social contacts, and consider talking to a professional yourself. A supported carer is a better support.",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "પરિવારના સભ્યને મનોચિકિત્સક પાસે જવા કેવી રીતે સમજાવવા?",
      text: "શાંત સમય પસંદ કરો, ‘પાગલ’ જેવા શબ્દો વાપરવાને બદલે તમે જોયેલા ફેરફારો પ્રેમથી કહો — જેમ કે ઊંઘ ન આવવી કે થાક લાગવો. વધુ સાંભળો, ઓછું બોલો. એપોઇન્ટમેન્ટ લઈ આપવાની અને સાથે આવવાની ઓફર કરો. તેઓ ના પાડે તો તમે પોતે ડૉક્ટરની સલાહ લઈ શકો છો.",
      points: [
        "દોષારોપણ નહીં, ચિંતા વ્યક્ત કરો",
        "ઊંઘ કે તણાવ માટે ડૉક્ટરને મળવાનું સૂચવો",
        "જાણ બહાર ખોરાકમાં દવા ક્યારેય ન આપો",
        "આત્મહત્યાની વાત કરે તો તરત 112 કે 14416 પર કૉલ કરો",
      ],
    },
    hi: {
      heading: "परिवार के सदस्य को मनोचिकित्सक के पास जाने के लिए कैसे मनाएँ?",
      text: "शांत समय चुनें, ‘पागल’ जैसे शब्दों के बजाय आपने जो बदलाव देखे हैं उन्हें प्यार से बताएँ — जैसे नींद न आना या थकान। ज़्यादा सुनें, कम बोलें। अपॉइंटमेंट लेने और साथ चलने की पेशकश करें। अगर वे मना करें तो आप खुद डॉक्टर से सलाह ले सकते हैं।",
      points: [
        "दोष न दें, चिंता जताएँ",
        "नींद या तनाव के लिए डॉक्टर से मिलने का सुझाव दें",
        "बिना बताए खाने में दवा कभी न मिलाएँ",
        "आत्महत्या की बात करें तो तुरंत 112 या 14416 पर कॉल करें",
      ],
    },
  },
  faqs: [
    {
      q: "Can I force an adult family member to see a psychiatrist?",
      a: "Generally, adults have the right to make their own treatment decisions. The Mental Healthcare Act, 2017 allows treatment without full consent only in specific situations involving severe mental illness and risk, with legal safeguards. In an emergency, call 112.",
    },
    {
      q: "Can I consult a psychiatrist on behalf of my family member?",
      a: "Yes. Families can consult for guidance on understanding the problem and approaching their loved one. A diagnosis and prescription usually require the patient to be seen.",
    },
    {
      q: "Is it okay to mix medicine into their food without telling them?",
      a: "No. It is unsafe — the dose cannot be monitored and some medicines can cause serious reactions — and it destroys trust when discovered. Treatment works best with the person’s involvement.",
    },
    {
      q: "How can I support someone with depression?",
      a: "Listen without judging, help with small practical tasks, encourage treatment and follow-ups, and take any talk of suicide seriously. See [depression](/conditions/depression).",
    },
  ],
  related: [
    "/conditions/depression",
    "/conditions/alcohol-addiction",
    "/conditions/schizophrenia",
    "/guides/when-to-see-a-psychiatrist",
    "/guides/mental-health-rights-india",
    "/treatments/de-addiction",
  ],
  sources: [
    { label: "Tele-MANAS — National Tele Mental Health Programme", url: "https://telemanas.mohfw.gov.in" },
    {
      label: "The Mental Healthcare Act, 2017 — India Code",
      url: "https://www.indiacode.nic.in/handle/123456789/2249",
    },
  ],
  updated: "2026-10-21",
};

export default helpingALovedOne;
