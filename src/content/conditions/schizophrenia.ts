import { Brain } from "lucide-react";
import type { ContentPage } from "../types";

const schizophrenia: ContentPage = {
  kind: "condition",
  slug: "schizophrenia",
  name: "Schizophrenia & psychosis",
  tagline: "Hearing voices, suspiciousness and losing touch with reality",
  icon: Brain,
  title: "Schizophrenia & Psychosis Treatment in Surat",
  description:
    "Hearing voices, suspiciousness or strange behaviour? Signs of psychosis and schizophrenia, and how early treatment helps. Treatment in Surat.",
  h1: "Schizophrenia & psychosis treatment in *Surat*",
  eyebrow: "Condition guide · Psychotic disorders",
  summary:
    "Psychosis means losing touch with reality — hearing voices, holding fixed false beliefs or thinking in a confused way. Schizophrenia is a long-term illness in which psychotic episodes are combined with reduced motivation and social withdrawal. It is a medical condition, not black magic or a weak mind, and early, continuous treatment helps many people recover well. Dr. Jash Ajmera treats psychosis in Surat.",
  facts: [
    { label: "How common", value: "About 1 in 300 people worldwide (WHO)" },
    { label: "Usual onset", value: "Late teens to early thirties" },
    { label: "Key signs", value: "Hearing voices, suspiciousness, withdrawal, odd behaviour" },
    { label: "Treatment", value: "Antipsychotic medicines, family support, rehabilitation" },
    { label: "Consult", value: "Vesu & Katargam (Surat) and Ankleshwar" },
  ],
  sections: [
    {
      id: "what-is-psychosis",
      title: "What are psychosis and schizophrenia?",
      blocks: [
        {
          type: "p",
          text: "**Psychosis** is a state in which the brain misreads reality. A person may hear voices others cannot hear, become convinced they are being watched, followed or poisoned, or speak and behave in confused ways. Psychosis can occur in several conditions — including severe depression, bipolar disorder, drug use and some medical illnesses.",
        },
        {
          type: "p",
          text: "**Schizophrenia** is a specific, long-term illness in which psychotic episodes occur along with “negative” symptoms (loss of motivation, emotional flatness, social withdrawal) and difficulties with attention and memory. The World Health Organization estimates it affects about 1 in 300 people worldwide.",
        },
        {
          type: "callout",
          tone: "info",
          text: "Schizophrenia does **not** mean a “split personality”, and most people with schizophrenia are not violent. They are far more likely to be harmed or exploited than to harm others.",
        },
      ],
    },
    {
      id: "symptoms",
      title: "Symptoms and early warning signs",
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "Positive symptoms",
              text: "Hearing voices (hallucinations); fixed false beliefs such as being followed, poisoned or controlled (delusions); muttering or laughing to oneself; confused speech.",
            },
            {
              title: "Negative symptoms",
              text: "Withdrawal from family and friends, poor self-care, reduced speech, loss of interest and motivation, flat or blunted emotions.",
            },
            {
              title: "Cognitive symptoms",
              text: "Poor concentration and memory, difficulty planning or following conversations, falling performance at work or college.",
            },
          ],
        },
        { type: "h3", text: "Early signs families often notice first" },
        {
          type: "list",
          items: [
            "Becoming unusually suspicious, fearful or secretive",
            "Staying awake at night, staying in the room, dropping out of studies or work",
            "Strange new beliefs, or talking about things that do not make sense",
            "Neglecting bathing, eating or appearance",
            "Unexplained anger or fear towards family members",
          ],
        },
        {
          type: "callout",
          tone: "urgent",
          title: "Seek urgent help if there is risk",
          text: "Aggression, threats, talk of suicide, refusing food and water, or a person who is very confused needs emergency care. Call [112](tel:112), Tele-MANAS [14416](tel:14416) or the clinic on [+91 78610 24557](tel:+917861024557).",
        },
      ],
    },
    {
      id: "causes",
      title: "What causes schizophrenia?",
      blocks: [
        {
          type: "list",
          items: [
            "**Genes** — the risk is higher if a close relative has schizophrenia, though most people with a relative never develop it.",
            "**Brain development** — differences in how the brain develops and in dopamine signalling.",
            "**Cannabis and other drugs** — regular cannabis (ganja, charas, bhang) use, especially in the teenage years, increases the risk of psychosis. Stimulants can also trigger it.",
            "**Stress** — major stress can trigger an episode in someone who is vulnerable.",
          ],
        },
        {
          type: "p",
          text: "In India, families sometimes first take a loved one to faith healers or believe symptoms are due to black magic or spirits. This is understandable, but psychosis is a treatable medical condition, and every month of delay makes recovery harder. You can respect your beliefs and still seek medical care.",
        },
      ],
    },
    {
      id: "treatment",
      title: "Treatment and recovery",
      blocks: [
        { type: "h3", text: "Antipsychotic medicines" },
        {
          type: "p",
          text: "Antipsychotic medicines reduce hallucinations, delusions and confusion, usually over days to weeks. Options include tablets and **long-acting injections** given every few weeks — helpful for people who find daily tablets difficult. For illness that does not respond to two adequate trials, clozapine, with regular blood monitoring, can be very effective.",
        },
        { type: "h3", text: "Family involvement" },
        {
          type: "p",
          text: "Families are partners in care. Learning about the illness, spotting early relapse signs, reducing criticism and conflict at home, and supporting medicines lowers relapse rates significantly.",
        },
        { type: "h3", text: "Rehabilitation and therapy" },
        {
          type: "p",
          text: "Once symptoms settle, the focus moves to rebuilding routine, social skills, studies or work. Psychotherapy helps with stress, coping with residual voices and building confidence.",
        },
        { type: "h3", text: "When hospital care is needed" },
        {
          type: "p",
          text: "Sometimes admission is needed for safety or to start treatment. India’s Mental Healthcare Act, 2017 protects the rights of people receiving such care. Read [your rights as a patient](/guides/mental-health-rights-india).",
        },
      ],
    },
    {
      id: "family-guide",
      title: "If your family member refuses treatment",
      blocks: [
        {
          type: "list",
          items: [
            "Stay calm and avoid arguing about the voices or beliefs — focus on how they feel (scared, tired, unable to sleep).",
            "Suggest a doctor’s visit for sleep, stress or tiredness, which the person may accept more easily.",
            "Meet the psychiatrist yourself first — families can consult to plan the next steps.",
            "If there is immediate risk, call 112 for emergency help.",
          ],
        },
        {
          type: "p",
          text: "More guidance: [how to help a loved one get mental health care](/guides/helping-a-loved-one).",
        },
      ],
    },
    {
      id: "myths-and-facts",
      title: "Myths and facts about schizophrenia",
      blocks: [
        {
          type: "mythfacts",
          items: [
            {
              myth: "Schizophrenia is caused by black magic, spirits or sins.",
              fact: "Schizophrenia is a brain-based illness influenced by genes, development and environment. It responds to medical treatment.",
            },
            {
              myth: "People with schizophrenia can never work, marry or live normally.",
              fact: "With early and continuous treatment, many people study, work, marry and live independently.",
            },
            {
              myth: "Marriage will cure the illness.",
              fact: "Marriage does not treat schizophrenia. Stopping treatment or hiding the illness can lead to relapse and great distress for both partners.",
            },
          ],
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "સ્કિઝોફ્રેનિયા એટલે શું?",
      text: "સ્કિઝોફ્રેનિયા મગજની એક લાંબી બીમારી છે જેમાં વ્યક્તિ વાસ્તવિકતાથી દૂર થઈ જાય છે — બીજાને ન સંભળાય તેવા અવાજો સંભળાય, કોઈ પીછો કરે છે કે ઝેર આપે છે તેવી ખોટી શંકા થાય. આ મેલી વિદ્યા કે ભૂત-પ્રેત નથી, પરંતુ સારવાર થઈ શકે તેવી બીમારી છે. વહેલી અને નિયમિત સારવારથી ઘણા દર્દીઓ સામાન્ય જીવન જીવે છે.",
      points: [
        "કાનમાં અવાજો સંભળાવા, એકલા એકલા બોલવું કે હસવું",
        "વધુ પડતી શંકા અને ડર",
        "લોકોથી દૂર રહેવું, પોતાની સંભાળ ન લેવી",
        "ઊંઘ ન આવવી અને અભ્યાસ કે કામ છોડી દેવું",
      ],
    },
    hi: {
      heading: "सिज़ोफ्रेनिया क्या है?",
      text: "सिज़ोफ्रेनिया दिमाग की एक लंबी बीमारी है जिसमें व्यक्ति वास्तविकता से दूर हो जाता है — दूसरों को न सुनाई देने वाली आवाज़ें सुनाई देती हैं, कोई पीछा कर रहा है या ज़हर दे रहा है ऐसा गलत शक होता है। यह जादू-टोना या भूत-प्रेत नहीं, बल्कि इलाज योग्य बीमारी है। जल्दी और नियमित इलाज से कई मरीज़ सामान्य जीवन जीते हैं।",
      points: [
        "कानों में आवाज़ें आना, अकेले में बोलना या हँसना",
        "बहुत ज़्यादा शक और डर",
        "लोगों से दूर रहना, अपनी देखभाल न करना",
        "नींद न आना और पढ़ाई या काम छोड़ देना",
      ],
    },
  },
  faqs: [
    {
      q: "Can schizophrenia be cured?",
      a: "Schizophrenia is usually a long-term illness, but it is treatable. Many people have few or no symptoms with regular treatment, and some recover substantially. Starting treatment early and continuing it gives the best chance of a good recovery.",
    },
    {
      q: "Is schizophrenia caused by black magic or spirits?",
      a: "No. Schizophrenia is a medical condition of the brain. Beliefs about black magic are common and understandable, but delaying medical treatment can make the illness harder to treat.",
    },
    {
      q: "Do people with schizophrenia have to take medicines lifelong?",
      a: "Many people need long-term treatment to prevent relapse, especially after more than one episode. The dose and plan are reviewed regularly. Long-acting injections can make treatment easier.",
    },
    {
      q: "Is schizophrenia the same as split personality?",
      a: "No. “Split personality” refers to a rare and different condition (dissociative identity disorder). Schizophrenia involves psychosis — hallucinations, delusions and confused thinking.",
    },
    {
      q: "Can someone with schizophrenia get married?",
      a: "Yes, many people do, once the illness is stable and with honest discussion between families. Marriage is not a treatment, and stopping medicines around marriage often leads to relapse.",
    },
    {
      q: "Can cannabis (ganja or bhang) cause psychosis?",
      a: "Yes. Regular cannabis use — particularly high-strength cannabis and use during the teenage years — raises the risk of psychosis and schizophrenia and makes existing illness worse. Stopping cannabis is an important part of recovery.",
    },
  ],
  related: [
    "/conditions/bipolar-disorder",
    "/treatments/de-addiction",
    "/guides/helping-a-loved-one",
    "/guides/mental-health-rights-india",
    "/guides/psychiatric-medicines-facts",
    "/clinics",
  ],
  sources: [
    {
      label: "World Health Organization — Schizophrenia, fact sheet",
      url: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia",
    },
    {
      label: "NICE guideline CG178 — Psychosis and schizophrenia in adults",
      url: "https://www.nice.org.uk/guidance/cg178",
    },
    {
      label: "National Institute of Mental Health — Schizophrenia",
      url: "https://www.nimh.nih.gov/health/topics/schizophrenia",
    },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: ["Psychosis", "Psychotic disorder", "सिज़ोफ्रेनिया", "સ્કિઝોફ્રેનિયા"],
    symptoms: [
      "Auditory hallucinations",
      "Delusions",
      "Disorganised speech",
      "Social withdrawal",
      "Reduced motivation",
      "Poor self-care",
    ],
    treatments: [
      "Antipsychotic medication",
      "Long-acting injectable antipsychotics",
      "Clozapine",
      "Family psychoeducation",
      "Psychosocial rehabilitation",
    ],
    riskFactors: [
      "Family history of psychosis",
      "Cannabis use in adolescence",
      "Stimulant drug use",
      "Major stress",
    ],
  },
};

export default schizophrenia;
