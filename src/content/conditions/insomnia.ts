import { Moon } from "lucide-react";
import type { ContentPage } from "../types";

const insomnia: ContentPage = {
  kind: "condition",
  slug: "insomnia",
  name: "Insomnia & sleep problems",
  tagline: "Trouble falling asleep, staying asleep or waking early",
  icon: Moon,
  title: "Insomnia & Sleep Problem Treatment in Surat",
  description:
    "Can’t sleep at night? Causes of insomnia, CBT for insomnia and safe use of sleeping pills. Sleep problem treatment in Surat and online.",
  h1: "Insomnia & sleep problem treatment in *Surat*",
  eyebrow: "Condition guide · Sleep",
  summary:
    "Insomnia means regular difficulty falling asleep, staying asleep or waking too early, with tiredness, irritability or poor concentration the next day. Stress, anxiety, depression, irregular routines and late-night screens are common causes. The most effective long-term treatment is CBT for insomnia (CBT-I), with medicines used carefully and for short periods. Dr. Jash Ajmera treats sleep problems in Surat and online.",
  facts: [
    { label: "How common", value: "About 1 in 10 adults has long-term insomnia" },
    { label: "Chronic insomnia", value: "3+ nights a week for 3+ months" },
    { label: "Best treatment", value: "CBT for insomnia (CBT-I) and treating the cause" },
    { label: "Sleeping pills", value: "Short-term only, under a doctor’s supervision" },
    { label: "Consult", value: "Vesu & Katargam (Surat), Ankleshwar or online" },
  ],
  sections: [
    {
      id: "what-is-insomnia",
      title: "What is insomnia?",
      blocks: [
        {
          type: "p",
          text: "Everyone has an occasional bad night. **Insomnia** is when poor sleep becomes a pattern — taking more than about 30 minutes to fall asleep, waking up often or very early, or sleeping but never feeling refreshed — and it affects how you function during the day.",
        },
        {
          type: "p",
          text: "Short-term insomnia often follows stress, illness or travel. When it happens at least three nights a week for three months or more, doctors call it **chronic insomnia**. By then, worrying about sleep itself usually keeps the problem going.",
        },
      ],
    },
    {
      id: "causes",
      title: "Common causes of sleep problems",
      blocks: [
        {
          type: "cards",
          columns: 2,
          items: [
            {
              title: "Mind",
              text: "Stress, overthinking, anxiety and depression are the most common causes. Early-morning waking is a classic sign of depression.",
            },
            {
              title: "Habits",
              text: "Irregular sleep times, long daytime naps, phones and laptops in bed, late heavy meals, tea or coffee after the afternoon.",
            },
            {
              title: "Body",
              text: "Pain, acidity, an overactive thyroid, frequent urination, menopause, and restless legs (an urge to move the legs at night).",
            },
            {
              title: "Substances and medicines",
              text: "Alcohol (it disrupts sleep later in the night), nicotine, cannabis, and some medicines such as steroids or decongestants.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Loud snoring and daytime sleepiness?",
          text: "Snoring with pauses in breathing, gasping at night and falling asleep during the day can be signs of obstructive sleep apnoea, which needs a sleep study. Sleeping pills can make sleep apnoea worse.",
        },
      ],
    },
    {
      id: "when-to-see-a-doctor",
      title: "When to see a doctor about sleep",
      blocks: [
        {
          type: "checklist",
          items: [
            "Poor sleep for more than a month",
            "You feel exhausted, irritable or unfocused during the day",
            "You depend on sleeping pills or alcohol to sleep",
            "Sleep problems come with low mood, worry or panic",
            "You snore loudly or stop breathing during sleep",
            "You have dozed off while driving",
          ],
        },
        {
          type: "p",
          text: "A psychiatrist treats insomnia together with the stress, anxiety or depression that so often drives it. Where sleep apnoea is suspected, you will be referred for a sleep study.",
        },
      ],
    },
    {
      id: "treatment",
      title: "Treatment for insomnia",
      blocks: [
        { type: "h3", text: "CBT for insomnia (CBT-I) — the first choice" },
        {
          type: "p",
          text: "CBT-I is a short, structured programme that retrains the brain to associate bed with sleep. It includes a fixed wake-up time, going to bed only when sleepy, getting up if you cannot sleep, temporarily limiting time in bed, calming a racing mind and correcting unhelpful beliefs about sleep. International guidelines recommend it as the first treatment for chronic insomnia because its benefits last.",
        },
        { type: "h3", text: "Treating the underlying cause" },
        {
          type: "p",
          text: "When insomnia comes with [depression](/conditions/depression) or [anxiety](/conditions/anxiety), treating that condition usually improves sleep. Some antidepressants also have a calming effect at night and are not habit-forming.",
        },
        { type: "h3", text: "Sleeping pills — used carefully" },
        {
          type: "p",
          text: "Medicines such as zolpidem or benzodiazepines can help for a short period, for example during a crisis. Taken nightly for months, they lose effect and can cause dependence, memory problems, daytime drowsiness and falls in older adults. If you have been taking sleeping pills for a long time, do not stop suddenly — a psychiatrist can help you reduce them safely.",
        },
      ],
    },
    {
      id: "sleep-tips",
      title: "Sleep habits that work",
      blocks: [
        {
          type: "checklist",
          items: [
            "Wake up at the same time every day, including Sundays",
            "Use the bed only for sleep — no phone, TV or work",
            "If you can’t sleep in 20–30 minutes, get up and do something calm",
            "No tea, coffee or cola after 2 pm",
            "Get morning daylight and exercise during the day",
            "Avoid long afternoon naps (keep them under 30 minutes)",
            "Have dinner 2–3 hours before bed and keep the room dark and cool",
            "Write tomorrow’s to-do list before bed to park your thoughts",
          ],
        },
        {
          type: "p",
          text: "Racing thoughts at night? Read [how to stop overthinking](/guides/how-to-stop-overthinking).",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "અનિદ્રા (ઊંઘ ન આવવી) એટલે શું?",
      text: "રાત્રે ઊંઘ ન આવવી, વારંવાર જાગી જવું કે વહેલી સવારે આંખ ખુલી જવી અને દિવસે થાક લાગવો — આ અનિદ્રાના લક્ષણો છે. મોટેભાગે તણાવ, ચિંતા, ડિપ્રેશન અને ખોટી આદતો તેનું કારણ હોય છે. ઊંઘની ગોળીઓ લાંબો સમય ન લેવી; CBT-I અને મૂળ કારણની સારવારથી કુદરતી ઊંઘ પાછી આવે છે.",
      points: [
        "રોજ એક જ સમયે ઊઠો",
        "પથારીમાં મોબાઇલનો ઉપયોગ ટાળો",
        "બપોર પછી ચા-કોફી ન લો",
        "જોરથી નસકોરાં બોલે તો સ્લીપ એપ્નિયાની તપાસ કરાવો",
      ],
    },
    hi: {
      heading: "अनिद्रा (नींद न आना) क्या है?",
      text: "रात में नींद न आना, बार-बार जाग जाना या सुबह बहुत जल्दी आँख खुल जाना और दिन में थकान रहना — ये अनिद्रा के लक्षण हैं। अक्सर तनाव, चिंता, डिप्रेशन और गलत आदतें इसका कारण होती हैं। नींद की गोलियाँ लंबे समय तक न लें; CBT-I और मूल कारण के इलाज से प्राकृतिक नींद लौट आती है।",
      points: [
        "रोज़ एक ही समय पर उठें",
        "बिस्तर पर मोबाइल का इस्तेमाल न करें",
        "दोपहर के बाद चाय-कॉफ़ी न लें",
        "ज़ोर से खर्राटे आते हों तो स्लीप एप्निया की जाँच करवाएँ",
      ],
    },
  },
  faqs: [
    {
      q: "Which doctor should I consult for insomnia?",
      a: "A psychiatrist is a good first choice, because most long-term insomnia is linked to stress, anxiety, depression or sleep habits, and psychiatrists are trained in both sleep medicines and CBT for insomnia. If loud snoring or breathing pauses suggest sleep apnoea, you may also need a sleep study with a pulmonologist or ENT specialist.",
    },
    {
      q: "What is the best medicine for sleep?",
      a: "There is no single best sleeping tablet. The safest long-term approach is CBT for insomnia and treating the cause. Medicines are chosen individually — for example, a short course of a sleep medicine, or a non-habit-forming medicine when anxiety or depression is present. Please avoid taking sleeping pills without a prescription.",
    },
    {
      q: "Are sleeping pills safe to take every night?",
      a: "Most sleeping pills are meant for short-term use. Nightly use for months can lead to tolerance, dependence, memory problems and falls. If you already take them regularly, a psychiatrist can help you taper off safely while improving your sleep in other ways.",
    },
    {
      q: "Can insomnia be cured without medicines?",
      a: "Yes. CBT for insomnia helps most people sleep better without medicines, and its effects last after treatment ends. Good sleep habits support it but are usually not enough on their own for chronic insomnia.",
    },
    {
      q: "Can I consult online for sleep problems?",
      a: "Yes. Insomnia can be assessed and treated very effectively through [online video consultations](/online-psychiatrist-consultation), including CBT-I sessions and follow-ups.",
    },
  ],
  related: [
    "/conditions/anxiety",
    "/conditions/depression",
    "/conditions/stress-burnout",
    "/guides/how-to-stop-overthinking",
    "/guides/psychiatric-medicines-facts",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "American Academy of Sleep Medicine — Behavioral and psychological treatments for chronic insomnia (clinical practice guideline, 2021)",
      url: "https://jcsm.aasm.org/doi/10.5664/jcsm.8986",
    },
    {
      label: "National Heart, Lung, and Blood Institute — Insomnia",
      url: "https://www.nhlbi.nih.gov/health/insomnia",
    },
    { label: "NHS — Insomnia", url: "https://www.nhs.uk/conditions/insomnia/" },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: ["Insomnia disorder", "Sleeplessness", "अनिद्रा", "અનિદ્રા"],
    symptoms: [
      "Difficulty falling asleep",
      "Frequent night waking",
      "Early-morning waking",
      "Non-restorative sleep",
      "Daytime fatigue",
      "Irritability",
    ],
    treatments: [
      "Cognitive behavioural therapy for insomnia (CBT-I)",
      "Sleep hygiene",
      "Short-term hypnotic medication",
      "Treatment of underlying anxiety or depression",
    ],
    riskFactors: ["Stress", "Anxiety", "Depression", "Shift work", "Caffeine", "Alcohol use"],
  },
};

export default insomnia;
