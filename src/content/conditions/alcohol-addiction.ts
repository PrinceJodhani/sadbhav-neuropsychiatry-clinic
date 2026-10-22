import { Wine } from "lucide-react";
import type { ContentPage } from "../types";

const alcoholAddiction: ContentPage = {
  kind: "condition",
  slug: "alcohol-addiction",
  name: "Alcohol addiction",
  tagline: "Craving, loss of control and withdrawal symptoms",
  icon: Wine,
  title: "Alcohol Addiction Treatment & Detox in Surat",
  description:
    "Can’t stop drinking? Signs of alcohol addiction, the dangers of sudden withdrawal and how medical treatment helps. Confidential de-addiction in Surat.",
  h1: "Alcohol addiction treatment in *Surat*",
  eyebrow: "Condition guide · Alcohol use disorder",
  summary:
    "Alcohol addiction (alcohol use disorder) means you keep drinking despite harm — with strong craving, difficulty cutting down and withdrawal symptoms such as shaking, sweating and sleeplessness when you stop. It is a treatable medical condition. Safe, supervised detox, anti-craving medicines and counselling help most people stop or cut down for good. Dr. Jash Ajmera offers confidential alcohol de-addiction treatment in Surat.",
  facts: [
    { label: "In India", value: "About 5.7 crore people need help for alcohol use (2019 national survey)" },
    { label: "Key signs", value: "Craving, loss of control, morning drinking, withdrawal" },
    { label: "Treatment", value: "Supervised detox, anti-craving medicines, counselling" },
    { label: "Warning", value: "Stopping heavy drinking suddenly can be dangerous" },
    { label: "Consult", value: "Vesu & Katargam (Surat), Ankleshwar or online" },
  ],
  sections: [
    {
      id: "what-is-alcohol-addiction",
      title: "What is alcohol addiction?",
      blocks: [
        {
          type: "p",
          text: "Alcohol addiction — called **alcohol use disorder** or alcohol dependence by doctors — is a condition in which drinking takes control. Repeated heavy drinking changes the brain’s reward and stress systems, so the body starts to need alcohol to feel normal and the mind keeps returning to it even when it is causing serious problems.",
        },
        {
          type: "p",
          text: "It is common. India’s national survey on the extent of substance use (2019) estimated that about **5.7 crore people** needed help for harmful or dependent alcohol use — and very few receive treatment. Addiction is not a lack of willpower or a moral failure; it is a health condition that responds to treatment.",
        },
      ],
    },
    {
      id: "signs",
      title: "Signs of alcohol addiction",
      blocks: [
        {
          type: "checklist",
          items: [
            "Strong cravings or urges to drink",
            "Drinking more or for longer than you planned",
            "Failed attempts to cut down or stop",
            "Needing more alcohol to get the same effect",
            "Shaking, sweating, anxiety or poor sleep when you don’t drink",
            "Drinking in the morning to steady yourself",
            "Problems at work, home or with money because of drinking",
            "Continuing despite liver, health or family problems",
          ],
        },
        {
          type: "p",
          text: "Long-term heavy drinking can damage the liver (fatty liver, hepatitis, cirrhosis), pancreas, heart, stomach and brain, and is linked to depression, anxiety, accidents and violence at home.",
        },
      ],
    },
    {
      id: "withdrawal",
      title: "Alcohol withdrawal: why stopping suddenly can be dangerous",
      blocks: [
        {
          type: "p",
          text: "After long-term heavy drinking, the brain adapts to alcohol. Stopping suddenly can cause **withdrawal**, which usually begins within 6–24 hours of the last drink:",
        },
        {
          type: "list",
          items: [
            "**Mild to moderate:** tremors, sweating, anxiety, restlessness, nausea, fast heartbeat, poor sleep.",
            "**Severe:** seizures (fits), usually within 12–48 hours.",
            "**Delirium tremens (DTs):** confusion, seeing or hearing things, high fever and agitation, usually 2–3 days after stopping. This is a medical emergency.",
          ],
        },
        {
          type: "callout",
          tone: "urgent",
          title: "Do not stop heavy drinking abruptly without medical advice",
          text: "Detox should be planned and supervised by a doctor. If someone has a seizure, becomes confused or sees things after stopping alcohol, call [112](tel:112) or go to the nearest hospital immediately.",
        },
      ],
    },
    {
      id: "treatment",
      title: "How alcohol addiction is treated",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Assessment",
              text: "How much and how long you have been drinking, past withdrawal or fits, physical health (liver tests and others), mental health, and family situation.",
            },
            {
              title: "Safe detoxification",
              text: "Medicines to prevent withdrawal symptoms and seizures, given in tapering doses for about a week, along with vitamins such as thiamine to protect the brain. Mild cases can be managed at home with daily monitoring; severe cases may need admission.",
            },
            {
              title: "Relapse prevention medicines",
              text: "Anti-craving medicines such as naltrexone or acamprosate reduce urges to drink. Disulfiram may be used only with the person’s full knowledge and consent.",
            },
            {
              title: "Counselling",
              text: "Motivational counselling and relapse-prevention therapy help you understand your triggers, handle cravings and stressful situations, and rebuild routine.",
            },
            {
              title: "Family support and follow-up",
              text: "Family sessions, treatment of any depression or anxiety, regular follow-ups and support groups keep recovery on track.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Never give anti-alcohol medicines secretly",
          text: "Mixing “secret” anti-alcohol powders or tablets into food is unsafe — some can cause a severe reaction if the person drinks — and it destroys trust. Effective treatment works with the person, not behind their back.",
        },
        {
          type: "p",
          text: "Alcohol often goes together with tobacco, cannabis or other substances. See our [de-addiction treatment](/treatments/de-addiction) page for help with all addictions.",
        },
      ],
    },
    {
      id: "family",
      title: "If your husband, father or son drinks",
      blocks: [
        {
          type: "p",
          text: "Most people who seek help for someone else’s drinking in India are wives and mothers. You cannot force someone to stop, but you can change the situation:",
        },
        {
          type: "list",
          items: [
            "Talk when he is sober, calmly, using specific examples of how drinking affects the family.",
            "Avoid covering up — paying debts, making excuses — which protects the drinking.",
            "Meet a psychiatrist yourself first; you will get a plan for how to approach him.",
            "Look after your own safety. If there is violence, call [112](tel:112) or the women’s helpline [181](tel:181).",
          ],
        },
        {
          type: "p",
          text: "More guidance: [how to help a loved one get mental health care](/guides/helping-a-loved-one).",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "દારૂની લત (આલ્કોહોલનું વ્યસન) એટલે શું?",
      text: "દારૂની લતમાં વ્યક્તિ નુકસાન થવા છતાં દારૂ છોડી શકતી નથી — વારંવાર તલબ લાગે, ઓછો કરવાની કોશિશ નિષ્ફળ જાય અને દારૂ ન મળે ત્યારે હાથ ધ્રૂજે, પરસેવો થાય કે ઊંઘ ન આવે. આ સારવાર થઈ શકે તેવી બીમારી છે. ડૉક્ટરની દેખરેખમાં ડિટોક્સ, દવાઓ અને કાઉન્સેલિંગથી દારૂ છોડી શકાય છે.",
      points: [
        "વધુ દારૂ પીતા હોય તો અચાનક બંધ ન કરો — ખેંચ (આંચકી) આવી શકે",
        "તલબ ઘટાડતી દવાઓ ઉપલબ્ધ છે",
        "દર્દીની જાણ બહાર ખોરાકમાં દવા ન આપો",
        "સારવાર સંપૂર્ણ ગોપનીય રાખવામાં આવે છે",
      ],
    },
    hi: {
      heading: "शराब की लत (अल्कोहल एडिक्शन) क्या है?",
      text: "शराब की लत में व्यक्ति नुकसान होने के बावजूद शराब नहीं छोड़ पाता — बार-बार तलब लगती है, कम करने की कोशिश नाकाम होती है और शराब न मिलने पर हाथ काँपते हैं, पसीना आता है या नींद नहीं आती। यह इलाज योग्य बीमारी है। डॉक्टर की निगरानी में डिटॉक्स, दवाओं और काउंसलिंग से शराब छोड़ी जा सकती है।",
      points: [
        "ज़्यादा शराब पीते हों तो अचानक बंद न करें — दौरे पड़ सकते हैं",
        "तलब कम करने वाली दवाएँ उपलब्ध हैं",
        "मरीज़ की जानकारी के बिना खाने में दवा न मिलाएँ",
        "इलाज पूरी तरह गोपनीय रखा जाता है",
      ],
    },
  },
  faqs: [
    {
      q: "Which doctor should I consult to quit alcohol?",
      a: "A psychiatrist — especially one experienced in addiction (de-addiction) treatment. They can plan a safe detox, prescribe anti-craving medicines, treat related depression or anxiety and provide counselling. A physician or hepatologist may also be involved if there is liver damage.",
    },
    {
      q: "Is there medicine to stop drinking alcohol?",
      a: "Yes. Medicines such as naltrexone and acamprosate reduce craving, and disulfiram can help some people who want to stay completely abstinent. They work best alongside counselling and must be prescribed and monitored by a doctor.",
    },
    {
      q: "Can I stop drinking at home?",
      a: "People with mild dependence can often detox at home with medicines and daily check-ins. If you drink heavily every day, have had fits or confusion during withdrawal before, or have other medical problems, supervised or inpatient detox is safer. Always plan detox with a doctor.",
    },
    {
      q: "How long does alcohol de-addiction treatment take?",
      a: "Detox usually takes about 5–7 days. Recovery — staying away from alcohol and rebuilding life — is a longer process, with medicines and counselling typically continued for at least 6–12 months.",
    },
    {
      q: "Will my treatment be kept confidential?",
      a: "Yes. Your consultation and records are confidential. Many people delay seeking help because of fear or shame — please don’t. Treatment works best when started early.",
    },
    {
      q: "Can I get alcohol addiction treatment online?",
      a: "Counselling, follow-ups and many medicines can be managed online. A first in-person assessment is often advisable for heavy drinkers to plan a safe detox. Ask the clinic when you book — see [online consultation](/online-psychiatrist-consultation).",
    },
  ],
  related: [
    "/treatments/de-addiction",
    "/conditions/depression",
    "/conditions/anxiety",
    "/conditions/insomnia",
    "/guides/helping-a-loved-one",
    "/clinics/vesu-surat",
  ],
  sources: [
    {
      label: "Magnitude of Substance Use in India 2019 — Ministry of Social Justice & Empowerment / NDDTC, AIIMS",
      url: "https://socialjustice.gov.in/writereaddata/UploadFile/Survey%20Report.pdf",
    },
    {
      label: "World Health Organization — Alcohol, fact sheet",
      url: "https://www.who.int/news-room/fact-sheets/detail/alcohol",
    },
    {
      label: "NICE guideline CG115 — Alcohol-use disorders: diagnosis, assessment and management",
      url: "https://www.nice.org.uk/guidance/cg115",
    },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: [
      "Alcohol use disorder",
      "Alcohol dependence",
      "Alcoholism",
      "शराब की लत",
      "દારૂનું વ્યસન",
    ],
    symptoms: [
      "Craving for alcohol",
      "Loss of control over drinking",
      "Tolerance",
      "Withdrawal tremors",
      "Morning drinking",
      "Continued drinking despite harm",
    ],
    treatments: [
      "Medically supervised detoxification",
      "Naltrexone",
      "Acamprosate",
      "Disulfiram (with consent)",
      "Relapse-prevention counselling",
    ],
    riskFactors: [
      "Family history of alcohol problems",
      "Early start of drinking",
      "Depression or anxiety",
      "Chronic stress",
    ],
  },
};

export default alcoholAddiction;
