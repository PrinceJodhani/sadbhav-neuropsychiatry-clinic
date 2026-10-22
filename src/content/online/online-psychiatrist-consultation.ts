import { Video } from "lucide-react";
import type { ContentPage } from "../types";

const onlineConsultation: ContentPage = {
  kind: "online",
  slug: "online-psychiatrist-consultation",
  name: "Online consultation",
  tagline: "Private video consultations from anywhere in India",
  icon: Video,
  title: "Online Psychiatrist Consultation in India",
  description:
    "See psychiatrist Dr. Jash Ajmera by private video call from anywhere in India, in English, Hindi or Gujarati. Digital prescriptions, medicines delivered.",
  h1: "Online psychiatrist consultation, *anywhere in India*",
  eyebrow: "Online consultation · All India",
  summary:
    "You can consult psychiatrist Dr. Jash Ajmera (M.B.B.S., D.P.M.) by private video call from anywhere in India — for anxiety, depression, OCD, sleep problems, stress, addiction, sexual health and more. Consultations follow India’s Telemedicine Practice Guidelines, prescriptions are issued digitally when appropriate, and medicines can be delivered across India. Available in English, Hindi and Gujarati.",
  facts: [
    { label: "Mode", value: "Private video consultation" },
    { label: "Who", value: "Adults, teenagers and families anywhere in India" },
    { label: "Languages", value: "English, Hindi, Gujarati" },
    { label: "Prescriptions", value: "Digital, as per the Telemedicine Practice Guidelines" },
    { label: "Medicines", value: "Delivery available across India" },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "How an online consultation works",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Book a slot",
              text: "Choose a time on the [online booking page](https://sadbhavneuropsychiatryclinic.setmore.com), or call or WhatsApp [+91 78610 24557](tel:+917861024557).",
            },
            {
              title: "Get ready",
              text: "Keep your current medicines, past prescriptions and any test reports handy. Find a quiet, private place with a stable internet connection.",
            },
            {
              title: "Consult by video",
              text: "Talk to Dr. Ajmera privately, just as you would in the clinic: your concerns, history, sleep, stress, health and goals.",
            },
            {
              title: "Your plan and prescription",
              text: "You receive a clear explanation and treatment plan. When medicines are appropriate, a digital prescription is shared and medicines can be delivered to you.",
            },
            {
              title: "Follow-up",
              text: "Continue online, visit a clinic in Surat or Ankleshwar, or mix both — whatever suits you.",
            },
          ],
        },
      ],
    },
    {
      id: "what-can-be-treated",
      title: "What can be treated online",
      blocks: [
        {
          type: "checklist",
          items: [
            "[Depression](/conditions/depression) and [anxiety](/conditions/anxiety)",
            "[Panic attacks](/conditions/panic-attacks) and [OCD](/conditions/ocd)",
            "[Insomnia and sleep problems](/conditions/insomnia)",
            "[Stress, burnout and anger](/conditions/stress-burnout)",
            "[Psychotherapy and counselling](/treatments/psychotherapy)",
            "[Sexual health concerns](/treatments/sexual-health)",
            "Follow-ups for stable [bipolar disorder](/conditions/bipolar-disorder) or [psychosis](/conditions/schizophrenia)",
            "[De-addiction](/treatments/de-addiction) counselling and follow-up",
            "Second opinions on diagnosis or treatment",
            "Guidance for families worried about a loved one",
          ],
        },
      ],
    },
    {
      id: "when-to-visit",
      title: "When an in-person visit is better",
      blocks: [
        {
          type: "list",
          items: [
            "A first episode of psychosis, severe agitation or confusion",
            "When a physical examination is needed",
            "Planning detox for heavy alcohol use",
            "Medicines that India’s telemedicine rules do not allow to be prescribed online",
          ],
        },
        {
          type: "callout",
          tone: "urgent",
          title: "Online consultations are not for emergencies",
          text: "If someone is at immediate risk of harming themselves or others, call [112](tel:112) or go to the nearest hospital. For free 24×7 mental health support, call Tele-MANAS on [14416](tel:14416).",
        },
      ],
    },
    {
      id: "is-it-legal",
      title: "Is online psychiatric consultation legal and safe in India?",
      blocks: [
        {
          type: "p",
          text: "Yes. India’s **Telemedicine Practice Guidelines (2020)** allow registered medical practitioners to consult and prescribe through video, audio or text, and the **Telepsychiatry Operational Guidelines (2020)** — developed by the Indian Psychiatric Society, the Telemedicine Society of India and NIMHANS — set standards specifically for psychiatry.",
        },
        {
          type: "p",
          text: "Under these rules, most psychiatric medicines can be prescribed after a video consultation. Certain controlled medicines — those covered by the NDPS Act and Schedule X — cannot be prescribed online; if your treatment needs one, the doctor will ask you to visit a clinic.",
        },
        {
          type: "p",
          text: "Research shows that video consultations for common conditions such as anxiety, depression and insomnia work about as well as in-person visits — and they remove travel, waiting and the worry of being seen at a clinic.",
        },
      ],
    },
    {
      id: "prepare",
      title: "Preparing for your online consultation",
      blocks: [
        {
          type: "checklist",
          items: [
            "A quiet, private room — earphones help",
            "A charged phone or laptop with a stable connection",
            "A list of your main concerns and how long they have lasted",
            "Names and doses of all current medicines",
            "Previous prescriptions and blood test reports",
            "A family member nearby, if you would like their support",
          ],
        },
      ],
    },
    {
      id: "across-india",
      title: "Consult from any city in India",
      blocks: [
        {
          type: "p",
          text: "You can consult from any city or town in India — from Ahmedabad, Vadodara and Rajkot to Mumbai, Pune, Delhi NCR, Bengaluru, Hyderabad, Chennai and Kolkata — and from smaller towns where a psychiatrist may not be available locally.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Living in Gujarat?",
              text: "Consult in Gujarati with a psychiatrist trained and experienced across the state. See [online psychiatrist in Gujarat](/online-psychiatrist-gujarat).",
            },
            {
              title: "Living abroad?",
              text: "NRIs and international students can consult in Gujarati, Hindi or English. See [online psychiatrist for NRIs](/nri-online-psychiatrist).",
            },
          ],
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "ઓનલાઇન મનોચિકિત્સક પરામર્શ",
      text: "ભારતમાં ક્યાંય પણ રહેતા હો, તમે ડૉ. જશ અજમેરા સાથે વીડિયો કૉલ દ્વારા ગુજરાતી, હિન્દી કે અંગ્રેજીમાં ગોપનીય પરામર્શ કરી શકો છો. જરૂર પડે તો ડિજિટલ પ્રિસ્ક્રિપ્શન આપવામાં આવે છે અને દવાઓ આખા ભારતમાં પહોંચાડી શકાય છે.",
      points: [
        "ઓનલાઇન બુકિંગ અથવા WhatsApp પર સમય નક્કી કરો",
        "જૂના રિપોર્ટ અને દવાઓની યાદી તૈયાર રાખો",
        "શાંત અને ખાનગી જગ્યાએથી વીડિયો કૉલ કરો",
      ],
    },
    hi: {
      heading: "ऑनलाइन मनोचिकित्सक परामर्श",
      text: "भारत में कहीं भी रहते हों, आप डॉ. जश अजमेरा से वीडियो कॉल पर हिंदी, गुजराती या अंग्रेज़ी में गोपनीय परामर्श ले सकते हैं। ज़रूरत होने पर डिजिटल प्रिस्क्रिप्शन दिया जाता है और दवाएँ पूरे भारत में पहुँचाई जा सकती हैं।",
      points: [
        "ऑनलाइन बुकिंग या WhatsApp पर समय तय करें",
        "पुरानी रिपोर्ट और दवाओं की सूची तैयार रखें",
        "शांत और निजी जगह से वीडियो कॉल करें",
      ],
    },
  },
  faqs: [
    {
      q: "Can a psychiatrist prescribe medicines online in India?",
      a: "Yes. Under the Telemedicine Practice Guidelines (2020), a registered psychiatrist can prescribe most psychiatric medicines after a video consultation and share a digital prescription. Controlled medicines listed under the NDPS Act and Schedule X cannot be prescribed online.",
    },
    {
      q: "Is online psychiatric consultation as effective as visiting the clinic?",
      a: "For most conditions — including depression, anxiety, OCD, insomnia and stress — studies show video consultations are about as effective as in-person care. An in-person visit is advised when a physical examination is needed or in emergencies.",
    },
    {
      q: "Do I need to switch on my video?",
      a: "Video is strongly preferred, especially for the first consultation, because it helps the doctor understand you fully. If video is not possible, discuss alternatives when you book.",
    },
    {
      q: "Can I consult on behalf of a family member?",
      a: "Families can consult for guidance on how to help. For a diagnosis and prescription, the patient usually needs to join the call, unless they are a child or unable to participate.",
    },
    {
      q: "Will my online consultation be confidential?",
      a: "Yes. Online consultations are private and confidential, exactly like a clinic visit. Choose a private spot so you can speak freely.",
    },
    {
      q: "What if I need blood tests?",
      a: "The doctor can advise tests that you can do at a lab near you and review the reports in your next online consultation.",
    },
  ],
  related: [
    "/online-psychiatrist-gujarat",
    "/nri-online-psychiatrist",
    "/treatments/psychotherapy",
    "/conditions/depression",
    "/conditions/anxiety",
    "/guides/first-psychiatrist-visit",
  ],
  sources: [
    {
      label: "Telemedicine Practice Guidelines, 2020 — Ministry of Health and Family Welfare",
      url: "https://www.mohfw.gov.in/pdf/Telemedicine.pdf",
    },
    {
      label: "Telemedicine Practice Guidelines and Telepsychiatry Operational Guidelines, India — A Commentary (Indian Journal of Psychological Medicine, 2020)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7736743/",
    },
    { label: "Tele-MANAS — National Tele Mental Health Programme", url: "https://telemanas.mohfw.gov.in" },
  ],
  updated: "2026-10-21",
};

export default onlineConsultation;
