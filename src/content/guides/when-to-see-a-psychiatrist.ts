import { Signpost } from "lucide-react";
import type { ContentPage } from "../types";

const whenToSeeAPsychiatrist: ContentPage = {
  kind: "guide",
  slug: "when-to-see-a-psychiatrist",
  name: "When to see a psychiatrist",
  tagline: "12 signs it’s time to get professional help",
  icon: Signpost,
  title: "When to See a Psychiatrist – 12 Signs You Shouldn’t Ignore",
  description:
    "How do you know when to see a psychiatrist? 12 warning signs in adults, teenagers and older adults, what stops people from getting help, and how to book a confidential consultation.",
  h1: "When to see a psychiatrist: *12 signs* not to ignore",
  eyebrow: "Guide · Getting help",
  summary:
    "See a psychiatrist when changes in mood, thinking, sleep or behaviour last more than two weeks, keep coming back, or start affecting your work, studies or relationships — and immediately if there are thoughts of suicide, hearing voices or severe confusion. You do not need a referral, and getting help early makes treatment simpler and faster.",
  sections: [
    {
      id: "signs",
      title: "12 signs it’s time to see a psychiatrist",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Low mood or loss of interest for more than two weeks", text: "Feeling sad, empty or flat, or no longer enjoying things you used to. See [depression](/conditions/depression)." },
            { title: "Worry you can’t switch off", text: "Constant anxiety, restlessness or a sense of dread. See [anxiety](/conditions/anxiety)." },
            { title: "Sudden attacks of fear", text: "A racing heart, breathlessness and fear of dying, with normal heart tests. See [panic attacks](/conditions/panic-attacks)." },
            { title: "Sleep problems for weeks", text: "Difficulty falling or staying asleep, early waking, or sleeping all day. See [insomnia](/conditions/insomnia)." },
            { title: "Big changes in appetite or weight", text: "Eating much more or much less without trying." },
            { title: "Intrusive thoughts or repeated rituals", text: "Washing, checking or counting you feel forced to do. See [OCD](/conditions/ocd)." },
            { title: "Unusual highs", text: "Very little sleep but lots of energy, racing thoughts, overspending. See [bipolar disorder](/conditions/bipolar-disorder)." },
            { title: "Hearing voices or strong suspicions", text: "Believing you are being followed, watched or harmed. See [psychosis](/conditions/schizophrenia)." },
            { title: "Using alcohol, drugs or pills to cope", text: "Needing a drink or tablet to sleep, calm down or get through the day. See [de-addiction](/treatments/de-addiction)." },
            { title: "Physical symptoms with normal tests", text: "Headaches, acidity, weakness or palpitations that doctors can’t explain." },
            { title: "Anger or irritability hurting relationships", text: "Frequent outbursts, regret and conflict at home or work. See [stress & anger](/conditions/stress-burnout)." },
            { title: "Thoughts of self-harm or suicide", text: "This needs help **today** — see below." },
          ],
        },
        {
          type: "callout",
          tone: "urgent",
          title: "If you are thinking about suicide",
          text: "Please talk to someone now. Call Tele-MANAS on [14416](tel:14416) (free, 24×7) or [112](tel:112) in an emergency, or call the clinic on [+91 78610 24557](tel:+917861024557). You deserve support, and things can get better.",
        },
      ],
    },
    {
      id: "children-and-teens",
      title: "Signs in children and teenagers",
      blocks: [
        {
          type: "list",
          items: [
            "A sudden drop in marks or refusing to go to school",
            "Withdrawing from friends, spending all day in their room or on screens",
            "Irritability, anger outbursts or aggression",
            "Not eating, not sleeping, or sleeping all day",
            "Self-harm marks or talk about life being pointless",
          ],
        },
        {
          type: "p",
          text: "See [child & adolescent mental health](/treatments/child-adolescent-psychiatry) for more.",
        },
      ],
    },
    {
      id: "older-adults",
      title: "Signs in older adults",
      blocks: [
        {
          type: "p",
          text: "Low mood in older people often looks like poor appetite, sleep problems, body pains or forgetfulness. New confusion, memory loss, suspiciousness or personality change should always be checked by a doctor — sometimes the cause is depression, sometimes a medical problem, and sometimes dementia.",
        },
      ],
    },
    {
      id: "what-stops-people",
      title: "What stops people from getting help",
      blocks: [
        {
          type: "mythfacts",
          items: [
            {
              myth: "“Log kya kahenge?” — people will think I am mad.",
              fact: "Psychiatrists mainly see everyday problems such as stress, sleep, anxiety and depression. Consultations are private and confidential.",
            },
            {
              myth: "It will pass on its own if I stay strong.",
              fact: "Some problems pass, but symptoms lasting weeks usually need treatment — and the earlier it starts, the faster recovery is.",
            },
            {
              myth: "The doctor will put me on medicines for life.",
              fact: "Many people are treated with therapy alone, and most medicines are taken for months, not life. You decide together. Read [psychiatric medicines: myths and facts](/guides/psychiatric-medicines-facts).",
            },
          ],
        },
      ],
    },
    {
      id: "next-steps",
      title: "How to take the first step",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Write down what you have noticed and for how long.",
            "Book a consultation — in person in Surat or Ankleshwar, or [online](/online-psychiatrist-consultation).",
            "Bring any medicines and reports, and a trusted person if you like.",
          ],
        },
        {
          type: "p",
          text: "Not sure whether to see a psychiatrist or a psychologist? Read [psychiatrist vs psychologist](/guides/psychiatrist-vs-psychologist). Wondering what happens at the appointment? Read [your first psychiatrist visit](/guides/first-psychiatrist-visit).",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "મનોચિકિત્સકને ક્યારે મળવું જોઈએ?",
      text: "જ્યારે મૂડ, વિચારો, ઊંઘ કે વર્તનમાં ફેરફાર બે અઠવાડિયાથી વધુ રહે, વારંવાર થાય અથવા કામ, અભ્યાસ કે સંબંધો પર અસર કરે — ત્યારે મનોચિકિત્સકને મળો. આત્મહત્યાના વિચારો, અવાજો સંભળાવા કે ગંભીર મૂંઝવણ હોય તો તરત મદદ લો.",
      points: [
        "બે અઠવાડિયાથી વધુ ઉદાસી કે રસ ન રહેવો",
        "સતત ચિંતા, ગભરાટ કે ઊંઘ ન આવવી",
        "દારૂ કે ગોળીઓથી મન શાંત કરવું",
        "રેફરલની જરૂર નથી — સીધી એપોઇન્ટમેન્ટ લઈ શકાય",
      ],
    },
    hi: {
      heading: "मनोचिकित्सक से कब मिलना चाहिए?",
      text: "जब मूड, विचार, नींद या व्यवहार में बदलाव दो हफ़्ते से ज़्यादा रहे, बार-बार हो या काम, पढ़ाई या रिश्तों पर असर डाले — तब मनोचिकित्सक से मिलें। आत्महत्या के विचार, आवाज़ें सुनाई देना या गंभीर उलझन हो तो तुरंत मदद लें।",
      points: [
        "दो हफ़्ते से ज़्यादा उदासी या रुचि न रहना",
        "लगातार चिंता, घबराहट या नींद न आना",
        "शराब या गोलियों से मन शांत करना",
        "रेफ़रल की ज़रूरत नहीं — सीधे अपॉइंटमेंट ले सकते हैं",
      ],
    },
  },
  faqs: [
    {
      q: "Do I need a referral to see a psychiatrist?",
      a: "No. In India you can book directly with a psychiatrist, in person or online.",
    },
    {
      q: "Is it okay to see a psychiatrist just for stress or sleep problems?",
      a: "Yes. Stress and sleep problems are among the most common reasons people see a psychiatrist, and early help often prevents them from turning into anxiety or depression.",
    },
    {
      q: "Will seeing a psychiatrist go on my record or affect my job?",
      a: "Your consultation is confidential and is not shared with your employer or anyone else without your consent, except where the law requires it for safety. Read [your rights as a patient](/guides/mental-health-rights-india).",
    },
    {
      q: "Can I talk to a psychiatrist without taking medicines?",
      a: "Yes. You can discuss your concerns and options; medicines are suggested only when they are likely to help, and the choice is yours.",
    },
  ],
  related: [
    "/guides/psychiatrist-vs-psychologist",
    "/guides/first-psychiatrist-visit",
    "/guides/helping-a-loved-one",
    "/conditions/depression",
    "/conditions/anxiety",
    "/online-psychiatrist-consultation",
  ],
  sources: [
    {
      label: "World Health Organization — Mental disorders, fact sheet",
      url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
    },
    { label: "Tele-MANAS — National Tele Mental Health Programme", url: "https://telemanas.mohfw.gov.in" },
  ],
  updated: "2026-10-21",
};

export default whenToSeeAPsychiatrist;
