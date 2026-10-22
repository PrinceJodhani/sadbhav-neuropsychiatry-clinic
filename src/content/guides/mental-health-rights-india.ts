import { ShieldCheck } from "lucide-react";
import type { ContentPage } from "../types";

const rights: ContentPage = {
  kind: "guide",
  slug: "mental-health-rights-india",
  name: "Your mental health rights",
  tagline: "Confidentiality, insurance and the Mental Healthcare Act",
  icon: ShieldCheck,
  title: "Mental Health Rights in India (MHCA 2017)",
  description:
    "Is psychiatric treatment confidential in India? Does health insurance cover mental illness? Your rights under the Mental Healthcare Act, 2017, explained simply.",
  h1: "Your mental health rights in *India*",
  eyebrow: "Guide · Rights & privacy",
  summary:
    "India’s Mental Healthcare Act, 2017 gives every person the right to affordable mental health care, to confidentiality, to be treated with dignity and to make an advance directive about future treatment. It requires health insurers to cover mental illness on the same basis as physical illness, and it presumes that a person who attempts suicide is under severe stress and needs care — not punishment.",
  sections: [
    {
      id: "key-rights",
      title: "Your key rights under the Mental Healthcare Act, 2017",
      blocks: [
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Access to care",
              text: "The right to access mental health care and treatment from services run or funded by the government, of good quality and without discrimination.",
            },
            {
              title: "Confidentiality",
              text: "The right to confidentiality about your mental health, treatment and records. Information can be released only in limited situations set out in the law.",
            },
            {
              title: "Dignity and protection",
              text: "The right to live with dignity and to be protected from cruel, inhuman or degrading treatment in any mental health establishment.",
            },
            {
              title: "Information",
              text: "The right to know about your diagnosis, proposed treatment and possible side effects, in a language you understand.",
            },
            {
              title: "Equality",
              text: "The right to be treated as equal to people with physical illness — including in health insurance.",
            },
            {
              title: "Advance directive and nominee",
              text: "You can write down how you wish (and do not wish) to be treated if you become unwell, and nominate a representative to support decisions.",
            },
          ],
        },
      ],
    },
    {
      id: "confidentiality",
      title: "Is psychiatric treatment confidential?",
      blocks: [
        {
          type: "p",
          text: "Yes. What you discuss with your psychiatrist and your medical records are confidential. They are not shared with your employer, school, college, relatives or anyone else without your consent. The law allows limited exceptions — for example, sharing information with those involved in your care, or when there is a serious risk to your safety or someone else’s.",
        },
        {
          type: "p",
          text: "The Act also restricts publishing photographs or information about a person receiving mental health care without their consent.",
        },
      ],
    },
    {
      id: "insurance",
      title: "Does health insurance cover psychiatric treatment?",
      blocks: [
        {
          type: "p",
          text: "Section 21(4) of the Mental Healthcare Act requires every insurer to provide medical insurance for the treatment of mental illness on the same basis as for physical illness, and the Insurance Regulatory and Development Authority of India (IRDAI) has directed insurers to comply.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Check your policy",
          text: "Many health policies in India cover hospital admission but not outpatient consultations or medicines. Read the outpatient (OPD) section of your policy or ask your insurer, and keep your prescriptions and bills.",
        },
      ],
    },
    {
      id: "suicide",
      title: "Suicide attempts: care, not punishment",
      blocks: [
        {
          type: "p",
          text: "Under Section 115 of the Mental Healthcare Act, a person who attempts suicide is presumed to be under severe stress and is not to be tried or punished; the government has a duty to provide care and rehabilitation. India’s new criminal code, the Bharatiya Nyaya Sanhita (in force since July 2024), does not carry over the old IPC Section 309 offence of attempting suicide.",
        },
        {
          type: "callout",
          tone: "urgent",
          title: "If you are struggling now",
          text: "Call Tele-MANAS on [14416](tel:14416) (free, confidential, 24×7, in many Indian languages) or [112](tel:112) in an emergency.",
        },
      ],
    },
    {
      id: "admission",
      title: "Admission to hospital",
      blocks: [
        {
          type: "list",
          items: [
            "**Independent admission** — most people who need hospital care choose it themselves and can ask to leave.",
            "**Supported admission** — in specific circumstances, when a person with severe mental illness is at risk and unable to make treatment decisions, the law allows admission without full consent, with strict safeguards, time limits and review.",
            "**Prohibited practices** — the Act bans chaining and certain procedures, such as ECT without anaesthesia and muscle relaxants.",
          ],
        },
      ],
    },
    {
      id: "fears",
      title: "Common worries",
      blocks: [
        {
          type: "mythfacts",
          items: [
            {
              myth: "Seeing a psychiatrist will go on a public record and affect my job or marriage.",
              fact: "There is no public register of psychiatric patients. Your consultation is confidential and shared only with your consent or where the law allows for safety.",
            },
            {
              myth: "Insurance never pays for mental illness.",
              fact: "The law requires insurers to cover mental illness on par with physical illness. What is covered (for example, OPD or only hospitalisation) depends on your policy.",
            },
          ],
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "ભારતમાં માનસિક આરોગ્ય અંગેના તમારા અધિકારો",
      text: "મેન્ટલ હેલ્થકેર એક્ટ, 2017 મુજબ દરેક વ્યક્તિને માનસિક આરોગ્ય સારવાર મેળવવાનો, ગોપનીયતાનો અને ગૌરવપૂર્ણ વર્તનનો અધિકાર છે. વીમા કંપનીઓએ માનસિક બીમારીને શારીરિક બીમારી જેટલું જ કવર આપવું જરૂરી છે. તમારી સારવારની માહિતી તમારી મંજૂરી વિના નોકરીદાતા કે અન્ય કોઈને આપવામાં આવતી નથી.",
      points: [
        "સારવાર અને રેકોર્ડ ગોપનીય રહે છે",
        "હેલ્થ ઇન્શ્યોરન્સમાં માનસિક બીમારીનું કવર",
        "આત્મહત્યાનો પ્રયાસ — સજા નહીં, સારવાર",
        "મદદ માટે Tele-MANAS: 14416",
      ],
    },
    hi: {
      heading: "भारत में मानसिक स्वास्थ्य से जुड़े आपके अधिकार",
      text: "मेंटल हेल्थकेयर एक्ट, 2017 के अनुसार हर व्यक्ति को मानसिक स्वास्थ्य इलाज पाने, गोपनीयता और सम्मानजनक व्यवहार का अधिकार है। बीमा कंपनियों को मानसिक बीमारी को शारीरिक बीमारी के बराबर कवर देना ज़रूरी है। आपके इलाज की जानकारी आपकी अनुमति के बिना नियोक्ता या किसी और को नहीं दी जाती।",
      points: [
        "इलाज और रिकॉर्ड गोपनीय रहते हैं",
        "हेल्थ इंश्योरेंस में मानसिक बीमारी का कवर",
        "आत्महत्या का प्रयास — सज़ा नहीं, इलाज",
        "मदद के लिए Tele-MANAS: 14416",
      ],
    },
  },
  faqs: [
    {
      q: "Is psychiatric treatment confidential in India?",
      a: "Yes. The Mental Healthcare Act, 2017 gives every person receiving mental health care the right to confidentiality. Your information is shared only with your consent or in limited situations allowed by law, such as preventing serious harm.",
    },
    {
      q: "Does health insurance cover psychiatric treatment in India?",
      a: "The law requires insurers to cover mental illness on the same basis as physical illness, and IRDAI has directed insurers to comply. Whether outpatient consultations and medicines are covered depends on your specific policy, so check its OPD terms.",
    },
    {
      q: "Is attempting suicide a crime in India?",
      a: "Under the Mental Healthcare Act, 2017, a person who attempts suicide is presumed to be under severe stress and should receive care rather than punishment, and the general IPC offence of attempting suicide was not carried into the Bharatiya Nyaya Sanhita. If you are struggling, please call Tele-MANAS on 14416.",
    },
    {
      q: "Can someone be admitted to a psychiatric hospital against their will?",
      a: "Only in specific circumstances defined by the Mental Healthcare Act — when a person with severe mental illness is at significant risk and cannot make treatment decisions — and with safeguards, time limits and independent review.",
    },
    {
      q: "What is an advance directive?",
      a: "It is a written statement, made while you are well, about how you want to be cared for — and not cared for — if you become unwell in future, and who you want as your nominated representative.",
    },
  ],
  related: [
    "/guides/when-to-see-a-psychiatrist",
    "/guides/helping-a-loved-one",
    "/guides/first-psychiatrist-visit",
    "/conditions/depression",
    "/faq",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "The Mental Healthcare Act, 2017 — India Code",
      url: "https://www.indiacode.nic.in/handle/123456789/2249",
    },
    { label: "Insurance Regulatory and Development Authority of India (IRDAI)", url: "https://irdai.gov.in" },
    { label: "Tele-MANAS — National Tele Mental Health Programme", url: "https://telemanas.mohfw.gov.in" },
  ],
  updated: "2026-10-21",
};

export default rights;
