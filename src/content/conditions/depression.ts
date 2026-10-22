import { CloudRain } from "lucide-react";
import type { ContentPage } from "../types";

const depression: ContentPage = {
  kind: "condition",
  slug: "depression",
  name: "Depression",
  tagline: "Persistent low mood, loss of interest and exhaustion",
  icon: CloudRain,
  title: "Depression Treatment in Surat: Symptoms & Care",
  description:
    "Learn the symptoms, causes and treatment of depression. Confidential depression treatment in Surat and online with psychiatrist Dr. Jash Ajmera (MBBS, DPM).",
  h1: "Depression treatment in *Surat* & online",
  eyebrow: "Condition guide · Depression",
  summary:
    "Depression is a common, treatable medical condition in which low mood, loss of interest and tiredness last for at least two weeks and affect daily life. Most people improve with psychotherapy, medicines or both. Dr. Jash Ajmera treats depression at Sadbhav Neuropsychiatry Clinic in Surat and online across India — in English, Hindi and Gujarati.",
  facts: [
    { label: "How common", value: "About 1 in 20 adults worldwide (WHO)" },
    { label: "Key signs", value: "Low mood or loss of interest on most days for 2+ weeks" },
    { label: "Treatment", value: "Psychotherapy (such as CBT), antidepressants, lifestyle care" },
    { label: "Outlook", value: "Most people improve with the right treatment" },
    { label: "Consult", value: "Vesu & Katargam (Surat), Ankleshwar or online" },
  ],
  selfTest: {
    label: "Take a free, confidential mental health self-test",
    href: "https://www.aarogyaminds.com/mental-health-tests",
  },
  sections: [
    {
      id: "what-is-depression",
      title: "What is depression?",
      blocks: [
        {
          type: "p",
          text: "Depression — also called clinical depression or major depressive disorder — is much more than feeling sad for a day or two. It is a health condition that changes how you feel, think, sleep, eat and function. Doctors diagnose it when low mood or a loss of interest in things you normally enjoy is present for most of the day, nearly every day, for **at least two weeks**.",
        },
        {
          type: "p",
          text: "It is one of the most common health problems in the world. The World Health Organization estimates that about **5% of adults** live with depression, and that women are affected about 1.5 times more often than men. India’s National Mental Health Survey (2015–16) found that roughly 1 in 20 people had experienced depression at some point in life — and that most people with common mental disorders were not getting any treatment.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Depression is not a weakness",
          text: "It has biological, psychological and social causes, just like diabetes or high blood pressure. It is not a sign of a weak character, and it responds well to treatment.",
        },
      ],
    },
    {
      id: "symptoms",
      title: "Symptoms of depression",
      blocks: [
        {
          type: "p",
          text: "Symptoms vary from person to person. A psychiatrist looks for persistent low mood **or** loss of interest, together with several of the following:",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "Emotional",
              text: "Sadness, emptiness or hopelessness; irritability; feeling guilty or worthless; crying easily or feeling numb.",
            },
            {
              title: "Physical",
              text: "Tiredness and low energy; sleeping too little or too much; changes in appetite or weight; aches, headaches or heaviness in the body.",
            },
            {
              title: "Thinking & behaviour",
              text: "Poor concentration and memory; difficulty taking decisions; withdrawing from family and friends; losing interest in work, studies or hobbies.",
            },
          ],
        },
        { type: "h3", text: "How depression can look different" },
        {
          type: "list",
          items: [
            "**Women** may notice symptoms around periods, during pregnancy, after childbirth ([postpartum depression](/conditions/postpartum-depression)) or around menopause.",
            "**Men** more often show irritability, anger, overwork, risk-taking or increased alcohol use — and are less likely to ask for help.",
            "**Teenagers** may seem irritable rather than sad, withdraw into their phones, lose interest in studies or see their marks drop.",
            "**Older adults** may complain mainly of poor sleep, low appetite, body pain or forgetfulness, which is easily mistaken for “just ageing”.",
          ],
        },
        {
          type: "p",
          text: "In India, many people first visit a doctor for headaches, body ache, weakness, acidity or sleep problems. When tests keep coming back normal, depression is worth considering.",
        },
        {
          type: "callout",
          tone: "urgent",
          title: "Thoughts of suicide or self-harm need urgent help",
          text: "If you or someone close to you is thinking about ending their life, call Tele-MANAS on [14416](tel:14416) (free, 24×7) or dial [112](tel:112) in an emergency. You can also call the clinic on [+91 78610 24557](tel:+917861024557).",
        },
      ],
    },
    {
      id: "causes",
      title: "What causes depression?",
      blocks: [
        {
          type: "p",
          text: "There is rarely a single cause. Depression usually develops from a combination of factors, and it can start after a stressful event or appear without any obvious reason.",
        },
        {
          type: "list",
          items: [
            "**Biology and genes** — a family history of depression, changes in the brain’s mood and stress systems, thyroid problems, anaemia or vitamin deficiencies, chronic illnesses and some medicines.",
            "**Stress and life events** — bereavement, relationship or marital conflict, job loss, financial pressure, exam stress or caring for an ill family member.",
            "**Psychological patterns** — perfectionism, constant self-criticism, low self-esteem or long-standing negative thinking.",
            "**Early experiences** — childhood adversity, abuse, bullying or trauma.",
            "**Alcohol and drugs** — alcohol, cannabis and other substances can trigger or worsen depression.",
            "**Life stages** — pregnancy and the year after childbirth, menopause, retirement and older age.",
          ],
        },
      ],
    },
    {
      id: "types",
      title: "Types of depression",
      blocks: [
        {
          type: "table",
          head: ["Type", "What it means"],
          rows: [
            [
              "Major depressive disorder",
              "Episodes of at least two weeks of depressive symptoms that affect daily life. Can be mild, moderate or severe.",
            ],
            [
              "Persistent depressive disorder (dysthymia)",
              "Milder but long-lasting low mood, present for two years or more.",
            ],
            [
              "Postpartum (perinatal) depression",
              "Depression during pregnancy or in the year after childbirth. See [postpartum depression](/conditions/postpartum-depression).",
            ],
            [
              "Bipolar depression",
              "Depressive episodes in someone who also has periods of high mood (mania or hypomania). It needs different treatment — see [bipolar disorder](/conditions/bipolar-disorder).",
            ],
            [
              "Depression with anxiety",
              "A very common combination of low mood with worry, restlessness or panic. See [anxiety disorders](/conditions/anxiety).",
            ],
            [
              "Psychotic depression",
              "Severe depression with delusions or hallucinations. It needs urgent specialist care.",
            ],
          ],
        },
      ],
    },
    {
      id: "when-to-see-a-psychiatrist",
      title: "When should you see a psychiatrist for depression?",
      blocks: [
        {
          type: "p",
          text: "Book a consultation if low mood or loss of interest has lasted more than two weeks — or sooner if any of these apply:",
        },
        {
          type: "checklist",
          items: [
            "It is affecting your work, studies or relationships",
            "Your sleep or appetite has changed a lot",
            "You are using alcohol, sleeping pills or other substances to cope",
            "You have had depression before, or it runs in your family",
            "Symptoms began during pregnancy or after childbirth",
            "Self-help has not worked after a few weeks",
          ],
        },
        {
          type: "p",
          text: "A **psychiatrist** is a medical doctor who specialises in mental health. They can diagnose depression, check for physical causes, prescribe medicines when needed and provide or guide psychotherapy. Not sure who to see? Read [psychiatrist vs psychologist](/guides/psychiatrist-vs-psychologist) and [signs it’s time to see a psychiatrist](/guides/when-to-see-a-psychiatrist).",
        },
      ],
    },
    {
      id: "diagnosis",
      title: "How depression is diagnosed",
      blocks: [
        {
          type: "p",
          text: "There is no single blood test or brain scan for depression. The diagnosis is made in a careful clinical consultation, which usually includes:",
        },
        {
          type: "steps",
          items: [
            {
              title: "A detailed conversation",
              text: "Your symptoms and how long they have lasted, sleep, appetite, energy, stress, life events, alcohol or substance use, medical history and family history.",
            },
            {
              title: "Rating scales",
              text: "Short questionnaires such as the PHQ-9 help measure how severe the depression is and track progress over time.",
            },
            {
              title: "Ruling out physical causes",
              text: "Where needed, blood tests for thyroid function, haemoglobin, vitamin B12 or vitamin D — conditions that can mimic or worsen depression.",
            },
            {
              title: "Checking related conditions",
              text: "Anxiety, OCD, bipolar disorder, substance use and suicide risk are assessed, because they change the treatment plan.",
            },
            {
              title: "A plan made together",
              text: "You leave with a clear explanation and a treatment plan that fits your situation and preferences.",
            },
          ],
        },
        {
          type: "p",
          text: "Wondering what the first appointment is like? Read [what to expect at your first psychiatrist visit](/guides/first-psychiatrist-visit).",
        },
      ],
    },
    {
      id: "treatment",
      title: "Treatment for depression",
      blocks: [
        {
          type: "p",
          text: "Treatment depends on how severe the depression is and what you prefer. Mild depression often improves with psychotherapy and lifestyle changes alone. For moderate to severe depression, **a combination of medicine and psychotherapy works best**.",
        },
        { type: "h3", text: "Psychotherapy (talk therapy)" },
        {
          type: "p",
          text: "Structured therapies such as cognitive behavioural therapy (CBT), behavioural activation and interpersonal therapy help you change unhelpful thinking patterns, rebuild routine and handle relationships and stress. Dr. Ajmera also uses integrative, emotion-focused techniques. Learn more about [psychotherapy at the clinic](/treatments/psychotherapy).",
        },
        { type: "h3", text: "Antidepressant medicines" },
        {
          type: "p",
          text: "Commonly used antidepressants include SSRIs (such as escitalopram, sertraline and fluoxetine) and other groups such as SNRIs, mirtazapine and bupropion. The choice depends on your symptoms, other health conditions and possible side effects. Benefits usually begin within 2–4 weeks and build up over 6–8 weeks. To prevent relapse, medicines are usually continued for **6 to 12 months after you feel well**.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Do not stop antidepressants suddenly",
          text: "Antidepressants are not habit-forming, but stopping them abruptly can cause dizziness, irritability or a return of symptoms. Your doctor will reduce the dose gradually when it is time. Read [myths and facts about psychiatric medicines](/guides/psychiatric-medicines-facts).",
        },
        { type: "h3", text: "Severe or difficult-to-treat depression" },
        {
          type: "p",
          text: "If depression does not improve after adequate trials of treatment, options include changing or combining medicines, adding augmenting medicines, intensive psychotherapy and — in selected cases — hospital-based treatments such as ECT or rTMS, for which you would be referred.",
        },
        { type: "h3", text: "How long does recovery take?" },
        {
          type: "p",
          text: "Many people notice better sleep and energy within a few weeks of starting treatment, with mood improving over the following weeks. Full recovery from an episode usually takes a few months. Regular follow-ups help adjust the plan and catch early warning signs.",
        },
      ],
    },
    {
      id: "self-help",
      title: "Self-care that supports recovery",
      blocks: [
        {
          type: "p",
          text: "Self-care does not replace treatment for moderate or severe depression, but it makes treatment work better:",
        },
        {
          type: "checklist",
          items: [
            "Keep a fixed wake-up time and a simple daily routine",
            "Move your body for 20–30 minutes on most days",
            "Break tasks into small, doable steps",
            "Tell one trusted person how you are really feeling",
            "Cut down alcohol and avoid cannabis and other drugs",
            "Eat regular meals and get some daylight every morning",
            "Keep screens out of bed and limit late-night scrolling",
            "Take medicines as prescribed and keep follow-ups",
          ],
        },
      ],
    },
    {
      id: "myths-and-facts",
      title: "Myths and facts about depression",
      blocks: [
        {
          type: "mythfacts",
          items: [
            {
              myth: "Depression is just sadness — you can snap out of it with willpower.",
              fact: "Depression is a health condition that affects the brain and body. Willpower alone rarely works, just as it would not cure a thyroid problem.",
            },
            {
              myth: "Antidepressants are addictive and change your personality.",
              fact: "Antidepressants are not habit-forming and do not change who you are. They help you return to your usual self. They are reduced gradually when it is time to stop.",
            },
            {
              myth: "Only people with big problems in life get depressed.",
              fact: "Anyone can develop depression — including people who seem successful, busy or happy from the outside.",
            },
            {
              myth: "Seeing a psychiatrist means you are “mad”.",
              fact: "Psychiatrists treat common problems such as stress, sleep difficulties, anxiety and depression every day. Consultations are private and confidential.",
            },
          ],
        },
      ],
    },
    {
      id: "helping-someone",
      title: "How to help someone with depression",
      blocks: [
        {
          type: "list",
          items: [
            "**Listen without judging.** Avoid advice like “just think positive” or “everyone has problems”.",
            "**Encourage professional help** and offer to make the appointment or come along.",
            "**Help with small practical tasks** — meals, errands, getting outside for a walk.",
            "**Take any talk of suicide seriously.** Stay with the person and call Tele-MANAS (14416) or 112.",
            "**Look after yourself too.** Supporting someone with depression can be exhausting.",
          ],
        },
        {
          type: "p",
          text: "More ideas in our guide on [how to help a loved one get mental health care](/guides/helping-a-loved-one).",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "ડિપ્રેશન (હતાશા) એટલે શું?",
      text: "ડિપ્રેશન એક સામાન્ય અને સારવાર થઈ શકે તેવી માનસિક બીમારી છે. જ્યારે બે અઠવાડિયાથી વધુ સમય સુધી મન ઉદાસ રહે, કોઈ કામમાં રસ ન પડે અને રોજિંદા જીવન પર અસર થાય, ત્યારે તે ડિપ્રેશન હોઈ શકે છે. યોગ્ય દવા અને કાઉન્સેલિંગથી મોટાભાગના લોકો સાજા થઈ જાય છે.",
      points: [
        "સતત ઉદાસી, ખાલીપણું અથવા નિરાશા",
        "કોઈ પણ કામમાં રસ કે આનંદ ન આવવો",
        "ઊંઘ અને ભૂખમાં ફેરફાર, સતત થાક",
        "ધ્યાન કેન્દ્રિત ન થવું, પોતાને દોષી કે નકામા સમજવું",
        "મરવાના કે પોતાને નુકસાન પહોંચાડવાના વિચારો — તરત મદદ લો (Tele-MANAS 14416)",
      ],
    },
    hi: {
      heading: "डिप्रेशन (अवसाद) क्या है?",
      text: "डिप्रेशन एक आम और इलाज योग्य मानसिक बीमारी है। जब दो हफ़्ते से ज़्यादा समय तक मन उदास रहे, किसी काम में रुचि न रहे और रोज़मर्रा की ज़िंदगी पर असर पड़े, तो यह डिप्रेशन हो सकता है। सही दवा और काउंसलिंग से ज़्यादातर लोग पूरी तरह ठीक हो जाते हैं।",
      points: [
        "लगातार उदासी, खालीपन या निराशा",
        "किसी भी काम में रुचि या आनंद न आना",
        "नींद और भूख में बदलाव, हर समय थकान",
        "ध्यान न लगना, खुद को दोषी या बेकार समझना",
        "मरने या खुद को नुकसान पहुँचाने के विचार — तुरंत मदद लें (Tele-MANAS 14416)",
      ],
    },
  },
  faqs: [
    {
      q: "Can depression be cured permanently?",
      a: "Most people recover fully from an episode of depression with the right treatment. Some people have more than one episode in life, so completing the recommended course of treatment, keeping follow-ups and learning your early warning signs greatly lowers the chance of it coming back.",
    },
    {
      q: "Can depression be treated without medicines?",
      a: "Yes, mild depression often improves with psychotherapy (such as CBT), regular exercise, a good sleep routine and support from family. Moderate and severe depression usually needs medicines along with therapy. Your psychiatrist will explain the options and respect your preferences.",
    },
    {
      q: "Which doctor should I consult for depression?",
      a: "A psychiatrist — a medical doctor with specialist training in mental health (MD or DPM in psychiatry). A psychiatrist can diagnose depression, rule out physical causes, prescribe medicines and offer psychotherapy. In Surat, you can consult Dr. Jash Ajmera at the [Vesu clinic](/clinics/vesu-surat) or [online](/online-psychiatrist-consultation).",
    },
    {
      q: "How long do antidepressants take to work?",
      a: "Sleep, appetite and energy often start improving within 2–4 weeks; the full effect on mood usually takes 6–8 weeks. Keep taking the medicine as prescribed during this time and tell your doctor about any side effects.",
    },
    {
      q: "What is the best medicine for depression?",
      a: "There is no single best antidepressant for everyone. The right medicine depends on your symptoms, age, other health conditions, other medicines you take and how you responded in the past. Please do not start, stop or change antidepressants without a doctor’s advice.",
    },
    {
      q: "Can I consult a psychiatrist online for depression?",
      a: "Yes. Dr. Ajmera offers video consultations for patients across India and abroad, in English, Hindi and Gujarati. Medicines can be prescribed online when appropriate. See [online psychiatrist consultation](/online-psychiatrist-consultation).",
    },
    {
      q: "Will my depression treatment be kept confidential?",
      a: "Yes. Your consultation and records are confidential. India’s Mental Healthcare Act, 2017 gives every person receiving mental health care a right to confidentiality. Read [your rights as a patient](/guides/mental-health-rights-india).",
    },
  ],
  related: [
    "/conditions/anxiety",
    "/conditions/postpartum-depression",
    "/conditions/bipolar-disorder",
    "/treatments/psychotherapy",
    "/guides/psychiatric-medicines-facts",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "World Health Organization — Depressive disorder (depression), fact sheet",
      url: "https://www.who.int/news-room/fact-sheets/detail/depression",
    },
    {
      label: "National Mental Health Survey of India 2015–16, Summary (NIMHANS / MoHFW)",
      url: "https://mohfw.gov.in/sites/default/files/National%20Mental%20Health%20Survey%2C%202015-16%20-%20Summary%20Report_0.pdf",
    },
    {
      label: "Clinical practice guideline for assessment and management of depression in India — Indian Journal of Psychiatry (2026)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12900049/",
    },
    {
      label: "NICE guideline NG222 — Depression in adults: treatment and management",
      url: "https://www.nice.org.uk/guidance/ng222",
    },
    { label: "Tele-MANAS — National Tele Mental Health Programme", url: "https://telemanas.mohfw.gov.in" },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: [
      "Clinical depression",
      "Major depressive disorder",
      "Depressive disorder",
      "अवसाद",
      "હતાશા",
    ],
    symptoms: [
      "Persistent low mood",
      "Loss of interest or pleasure",
      "Fatigue and low energy",
      "Sleep disturbance",
      "Appetite or weight change",
      "Poor concentration",
      "Feelings of guilt or worthlessness",
      "Thoughts of death or suicide",
    ],
    treatments: [
      "Cognitive behavioural therapy (CBT)",
      "Antidepressant medication",
      "Behavioural activation",
      "Interpersonal therapy",
    ],
    riskFactors: [
      "Family history of depression",
      "Chronic stress",
      "Childhood adversity or trauma",
      "Chronic physical illness",
      "Alcohol or substance use",
      "Childbirth (postpartum period)",
    ],
  },
};

export default depression;
