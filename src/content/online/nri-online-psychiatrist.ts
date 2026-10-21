import { Globe2 } from "lucide-react";
import type { ContentPage } from "../types";

const nriOnline: ContentPage = {
  kind: "online",
  slug: "nri-online-psychiatrist",
  name: "NRIs & international",
  tagline: "Gujarati and Hindi-speaking psychiatrist for Indians abroad",
  icon: Globe2,
  title: "Indian Psychiatrist Online for NRIs – Gujarati & Hindi Speaking",
  description:
    "Living in the USA, UK, Canada, Australia or the Gulf? Consult Indian psychiatrist Dr. Jash Ajmera online in Gujarati, Hindi or English — therapy, second opinions and family guidance.",
  h1: "An Indian psychiatrist online, *wherever you live*",
  eyebrow: "Online consultation · NRIs & international",
  summary:
    "Living in the USA, UK, Canada, Australia, the UAE or anywhere abroad? You can consult Dr. Jash Ajmera, a psychiatrist from Surat, by video in Gujarati, Hindi or English — someone who understands Indian families, culture and the pressures of life away from home. Online consultations for people abroad focus on assessment, psychotherapy, second opinions and family guidance.",
  facts: [
    { label: "For", value: "NRIs, OCI card holders, international students, families abroad" },
    { label: "Languages", value: "Gujarati, Hindi, English" },
    { label: "Services", value: "Assessment, psychotherapy, second opinions, family guidance" },
    { label: "Time zone", value: "Appointments are in Indian Standard Time (IST)" },
    { label: "Parents in India?", value: "They can visit in Surat or Ankleshwar, or consult online" },
  ],
  sections: [
    {
      id: "why",
      title: "Why NRIs consult a psychiatrist from India",
      blocks: [
        {
          type: "list",
          items: [
            "**Language and culture** — expressing emotions in Gujarati or Hindi, to someone who understands Indian family life without needing it explained.",
            "**Family involvement** — parents and relatives in India can be included in the conversation where you want them to be.",
            "**Privacy** — consulting from home, away from your local community.",
            "**Continuity** — staying with one psychiatrist through moves between countries or visits home.",
            "**Access** — public mental health services in some countries have long waiting lists.",
          ],
        },
      ],
    },
    {
      id: "concerns",
      title: "Common concerns we help with",
      blocks: [
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Loneliness and adjustment",
              text: "Homesickness, isolation, culture shock and the stress of building a life far from family.",
            },
            {
              title: "Work, visa and study pressure",
              text: "Job insecurity, visa worries, long hours and academic pressure on international students.",
            },
            {
              title: "Relationships and family",
              text: "Marital stress, inter-cultural relationships, parenting across cultures and expectations from family back home.",
            },
            {
              title: "Anxiety, depression and OCD",
              text: "Assessment and psychotherapy for [anxiety](/conditions/anxiety), [depression](/conditions/depression), [OCD](/conditions/ocd) and [sleep problems](/conditions/insomnia).",
            },
            {
              title: "Caring for parents in India",
              text: "Guidance when an elderly parent in India shows memory problems, low mood or changed behaviour — with in-person care available in Surat.",
            },
            {
              title: "Second opinions",
              text: "A fresh review of a diagnosis or treatment plan, explained in your language.",
            },
          ],
        },
      ],
    },
    {
      id: "prescriptions",
      title: "About prescriptions if you live abroad",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Medicines are prescribed under the rules of your country",
          text: "An Indian prescription is generally not valid at pharmacies outside India, and medicine delivery is available only within India. If medicines are recommended, you can share the consultation summary with your local doctor, who can prescribe locally.",
        },
        {
          type: "p",
          text: "If you are visiting India, you can also book an in-person appointment at the [Vesu clinic in Surat](/clinics/vesu-surat).",
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How it works",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Book",
              text: "Choose a slot on the [online booking page](https://sadbhavneuropsychiatryclinic.setmore.com) or message on [WhatsApp](https://wa.me/917861024557). Times are in Indian Standard Time (IST) — please check your local time.",
            },
            {
              title: "Consult",
              text: "A private video call in the language you prefer. Keep any reports and medicine names handy.",
            },
            {
              title: "Plan and follow-up",
              text: "A clear plan, therapy sessions if needed, and a written summary you can share with your local doctor.",
            },
          ],
        },
      ],
    },
    {
      id: "emergencies",
      title: "In an emergency abroad",
      blocks: [
        {
          type: "p",
          text: "Online consultations cannot provide emergency care. If you or someone near you is in immediate danger, contact local services:",
        },
        {
          type: "table",
          head: ["Country", "Emergency", "Crisis support"],
          rows: [
            ["USA", "911", "988 Suicide & Crisis Lifeline (call or text 988)"],
            ["Canada", "911", "988 (call or text)"],
            ["United Kingdom", "999", "Samaritans 116 123"],
            ["Australia", "000", "Lifeline 13 11 14"],
            ["United Arab Emirates", "999 (police) · 998 (ambulance)", "Contact your nearest hospital"],
          ],
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "વિદેશમાં રહેતા ગુજરાતીઓ માટે ઓનલાઇન મનોચિકિત્સક",
      text: "અમેરિકા, યુકે, કેનેડા, ઑસ્ટ્રેલિયા કે દુબઈમાં રહેતા હો — તમે ડૉ. જશ અજમેરા સાથે ગુજરાતીમાં વીડિયો કૉલ દ્વારા વાત કરી શકો છો. એકલતા, તણાવ, ચિંતા, ડિપ્રેશન, સંબંધોની તકલીફ કે ભારતમાં રહેતા માતા-પિતાની ચિંતા — ભારતીય પરિવાર અને સંસ્કૃતિને સમજનાર ડૉક્ટર સાથે ખુલીને વાત કરો.",
      points: [
        "ગુજરાતી, હિન્દી અને અંગ્રેજીમાં પરામર્શ",
        "થેરાપી, સેકન્ડ ઓપિનિયન અને પરિવાર માટે માર્ગદર્શન",
        "સમય ભારતીય સમય (IST) મુજબ",
      ],
    },
    hi: {
      heading: "विदेश में रहने वाले भारतीयों के लिए ऑनलाइन मनोचिकित्सक",
      text: "अमेरिका, यूके, कनाडा, ऑस्ट्रेलिया या खाड़ी देशों में रहते हों — आप डॉ. जश अजमेरा से हिंदी या गुजराती में वीडियो कॉल पर बात कर सकते हैं। अकेलापन, तनाव, चिंता, डिप्रेशन, रिश्तों की परेशानी या भारत में रह रहे माता-पिता की चिंता — भारतीय परिवार और संस्कृति को समझने वाले डॉक्टर से खुलकर बात करें।",
      points: [
        "हिंदी, गुजराती और अंग्रेज़ी में परामर्श",
        "थेरेपी, सेकंड ओपिनियन और परिवार के लिए मार्गदर्शन",
        "समय भारतीय मानक समय (IST) के अनुसार",
      ],
    },
  },
  faqs: [
    {
      q: "Can you prescribe medicines if I live outside India?",
      a: "Prescription rules depend on the country you live in, and Indian prescriptions are generally not accepted by pharmacies abroad. Consultations for people living abroad focus on assessment, psychotherapy, second opinions and guidance; you can share the consultation summary with your local doctor for prescriptions.",
    },
    {
      q: "What time zone are appointments in?",
      a: "All appointments are scheduled in Indian Standard Time (IST, UTC+5:30). Please convert to your local time when booking.",
    },
    {
      q: "Can my parents in India also consult?",
      a: "Yes. They can visit the clinics in Surat (Vesu or Katargam) or Ankleshwar, or consult online from anywhere in India — and you can join the call from abroad if they wish.",
    },
    {
      q: "Do you see international students?",
      a: "Yes. Students abroad often face academic pressure, loneliness and visa stress. Online sessions in Hindi, Gujarati or English can be a helpful source of support alongside services at your university.",
    },
    {
      q: "Is the consultation confidential?",
      a: "Yes. Your consultation is private and confidential. Information is shared with family members only with your permission, except in an emergency where safety is at risk.",
    },
  ],
  related: [
    "/online-psychiatrist-consultation",
    "/online-psychiatrist-gujarat",
    "/treatments/psychotherapy",
    "/conditions/anxiety",
    "/conditions/depression",
    "/dr-jash-ajmera",
  ],
  sources: [
    {
      label: "988 Suicide & Crisis Lifeline (USA)",
      url: "https://988lifeline.org",
    },
    { label: "Samaritans (UK & Ireland)", url: "https://www.samaritans.org" },
    { label: "Lifeline Australia", url: "https://www.lifeline.org.au" },
  ],
  updated: "2026-10-21",
};

export default nriOnline;
