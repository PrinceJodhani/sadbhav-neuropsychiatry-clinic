import { Flame } from "lucide-react";
import type { ContentPage } from "../types";

const stressBurnout: ContentPage = {
  kind: "condition",
  slug: "stress-burnout",
  name: "Stress & burnout",
  tagline: "Exhaustion, irritability and anger from constant pressure",
  icon: Flame,
  title: "Stress, Burnout & Anger Management in Surat",
  description:
    "Always tired, irritable or angry? Signs of chronic stress, burnout, exam stress and anger problems, and how a psychiatrist helps, in Surat and online.",
  h1: "Stress, burnout & anger management in *Surat*",
  eyebrow: "Condition guide · Stress",
  summary:
    "Stress becomes a health problem when pressure is constant and recovery never comes — showing up as exhaustion, poor sleep, irritability, anger, acidity, headaches or high blood pressure. Burnout is the exhaustion and detachment that follow long-term work stress. Structured stress management, treating any underlying anxiety or depression and practical changes help. Dr. Jash Ajmera helps adults, students and professionals in Surat and online.",
  facts: [
    { label: "Burnout (WHO)", value: "Exhaustion, cynicism about work, reduced performance" },
    { label: "Body signs", value: "Headaches, acidity, palpitations, poor sleep, high BP" },
    { label: "Treatment", value: "Stress-management therapy, sleep repair, treating anxiety or depression" },
    { label: "For students", value: "Help with exam stress, focus and motivation" },
    { label: "Consult", value: "Vesu & Katargam (Surat), Ankleshwar or online" },
  ],
  sections: [
    {
      id: "stress-vs-burnout",
      title: "Stress, chronic stress and burnout",
      blocks: [
        {
          type: "p",
          text: "Short bursts of stress can be useful — they sharpen focus before a deadline or exam. The problem is **chronic stress**: when demands never ease and the body’s alarm system stays switched on for months. It wears down sleep, mood, digestion, blood pressure and relationships.",
        },
        {
          type: "p",
          text: "**Burnout** is described by the World Health Organization as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed. It has three features: feeling drained and exhausted, feeling negative or distant about your work, and reduced effectiveness at work.",
        },
        {
          type: "p",
          text: "In a business city like Surat — with long hours in textiles, diamonds, trading, healthcare and IT — stress often appears as acidity, headaches, irritability and poor sleep long before anyone calls it a mental health issue.",
        },
      ],
    },
    {
      id: "signs",
      title: "Signs that stress is affecting your health",
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "Body",
              text: "Headaches, neck and back pain, acidity, palpitations, high blood pressure, frequent colds, tiredness that sleep doesn’t fix.",
            },
            {
              title: "Mind",
              text: "Irritability, anger outbursts, constant worry, feeling overwhelmed, forgetfulness, difficulty switching off.",
            },
            {
              title: "Behaviour",
              text: "Procrastination, withdrawing from family, smoking or drinking more, overeating or skipping meals, late-night scrolling.",
            },
          ],
        },
      ],
    },
    {
      id: "anger",
      title: "Anger and irritability",
      blocks: [
        {
          type: "p",
          text: "Frequent anger is often stress, anxiety or depression in disguise — especially in men. Shouting, breaking things or regretting what you said, followed by guilt, is a sign to seek help, not a personality you have to live with.",
        },
        {
          type: "list",
          items: [
            "Anger management therapy teaches you to recognise early body signals, pause, and respond rather than react.",
            "Treating underlying sleep problems, anxiety, depression, alcohol use or ADHD often reduces anger dramatically.",
            "If anger has led to violence at home, help is needed urgently — for the safety of everyone involved.",
          ],
        },
      ],
    },
    {
      id: "exam-stress",
      title: "Exam stress in students",
      blocks: [
        {
          type: "p",
          text: "Board exams, NEET, JEE and college entrance exams put enormous pressure on students and families. Some anxiety helps preparation; too much leads to blanking out, poor sleep, loss of appetite and hopelessness.",
        },
        {
          type: "checklist",
          items: [
            "Study in focused blocks of 45–50 minutes with short breaks",
            "Protect 7–8 hours of sleep, especially before exams",
            "Keep 30 minutes for physical activity every day",
            "Practise past papers under timed conditions to reduce fear",
            "Parents: praise effort, avoid comparisons with other children",
            "Watch for withdrawal, crying, not eating or talk of giving up",
          ],
        },
        {
          type: "callout",
          tone: "urgent",
          title: "If a student talks about not wanting to live",
          text: "Take it seriously, stay with them and get help immediately — call Tele-MANAS [14416](tel:14416) (free, 24×7), [112](tel:112), or the clinic on [+91 78610 24557](tel:+917861024557). Results can always be improved; a life cannot be replaced.",
        },
        {
          type: "p",
          text: "Dr. Ajmera works extensively with adolescents and young adults. See [child & adolescent psychiatry](/treatments/child-adolescent-psychiatry).",
        },
      ],
    },
    {
      id: "when-to-see-a-psychiatrist",
      title: "When stress needs professional help",
      blocks: [
        {
          type: "checklist",
          items: [
            "Stress symptoms have lasted more than a few weeks",
            "You can’t sleep, eat or concentrate properly",
            "You feel constantly low, anxious or hopeless",
            "You are drinking, smoking or using pills to cope",
            "Anger is damaging your relationships or work",
            "You have panic attacks or physical symptoms with normal tests",
          ],
        },
        {
          type: "p",
          text: "A psychiatrist will check whether stress has turned into an [anxiety disorder](/conditions/anxiety), [depression](/conditions/depression) or a [sleep problem](/conditions/insomnia), each of which has specific, effective treatment.",
        },
      ],
    },
    {
      id: "treatment",
      title: "How stress and burnout are treated",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Understand your stress map",
              text: "Identify the main sources of pressure, your warning signs and what currently helps or makes things worse.",
            },
            {
              title: "Psychotherapy and skills",
              text: "CBT and emotion-management techniques for worry, perfectionism and anger; problem-solving, boundary-setting and time-management skills.",
            },
            {
              title: "Repair the basics",
              text: "Sleep, movement, regular meals and cutting down alcohol, nicotine and caffeine — small changes with large effects.",
            },
            {
              title: "Medicines when needed",
              text: "If anxiety, depression or insomnia has developed, non-habit-forming medicines may be recommended for a period.",
            },
          ],
        },
        {
          type: "p",
          text: "Dr. Ajmera also provides mental-health workshops and guidance for schools and companies. Learn about [psychotherapy at the clinic](/treatments/psychotherapy).",
        },
      ],
    },
  ],
  local: {
    gu: {
      heading: "સ્ટ્રેસ (તણાવ) અને બર્નઆઉટ એટલે શું?",
      text: "જ્યારે કામ, પરીક્ષા કે પરિવારનું દબાણ સતત રહે અને આરામ ન મળે, ત્યારે તણાવ શરીર અને મન બંને પર અસર કરે છે — થાક, ગુસ્સો, ઊંઘ ન આવવી, ઍસિડિટી, માથાનો દુખાવો. લાંબા સમયના કામના તણાવથી થતો થાક અને કામ પ્રત્યે અરુચિ એ બર્નઆઉટ છે. કાઉન્સેલિંગ અને જરૂર પડે તો સારવારથી રાહત મળે છે.",
      points: [
        "સતત થાક અને ચીડિયાપણું",
        "નાની વાતમાં ગુસ્સો આવવો",
        "ઊંઘ, ભૂખ અને ધ્યાનમાં તકલીફ",
        "પરીક્ષાનો વધુ પડતો ડર",
      ],
    },
    hi: {
      heading: "स्ट्रेस (तनाव) और बर्नआउट क्या है?",
      text: "जब काम, परीक्षा या परिवार का दबाव लगातार बना रहे और आराम न मिले, तो तनाव शरीर और मन दोनों पर असर डालता है — थकान, गुस्सा, नींद न आना, एसिडिटी, सिरदर्द। लंबे समय के काम के तनाव से होने वाली थकान और काम से अरुचि बर्नआउट है। काउंसलिंग और ज़रूरत हो तो इलाज से राहत मिलती है।",
      points: [
        "लगातार थकान और चिड़चिड़ापन",
        "छोटी बात पर गुस्सा आना",
        "नींद, भूख और ध्यान में परेशानी",
        "परीक्षा का अत्यधिक डर",
      ],
    },
  },
  faqs: [
    {
      q: "Can a psychiatrist help with anger issues?",
      a: "Yes. A psychiatrist looks for what drives the anger — stress, anxiety, depression, sleep problems, alcohol or ADHD — and treats it, along with anger-management therapy that teaches practical skills to stay in control.",
    },
    {
      q: "Is burnout a medical diagnosis?",
      a: "The World Health Organization classifies burnout as an occupational phenomenon rather than a medical illness. But burnout often overlaps with depression, anxiety and insomnia, which are medical conditions and should be assessed and treated.",
    },
    {
      q: "How can I reduce stress quickly?",
      a: "Slow breathing (in for 4, out for 6), a brisk 10-minute walk, stepping away from screens and talking to someone you trust all calm the stress response quickly. For lasting change, address the sources of stress and protect sleep and exercise.",
    },
    {
      q: "Can stress cause physical illness?",
      a: "Long-term stress can contribute to high blood pressure, acidity, headaches, irritable bowel symptoms, poor immunity and sleep problems, and can worsen diabetes and heart disease. Managing stress is part of looking after your physical health.",
    },
    {
      q: "Do you help students with exam stress?",
      a: "Yes. Dr. Ajmera works extensively with adolescents and young adults on exam anxiety, focus, motivation, sleep and low mood — with sessions in person in Surat or [online](/online-psychiatrist-consultation).",
    },
  ],
  related: [
    "/conditions/anxiety",
    "/conditions/depression",
    "/conditions/insomnia",
    "/guides/how-to-stop-overthinking",
    "/treatments/psychotherapy",
    "/treatments/child-adolescent-psychiatry",
  ],
  sources: [
    {
      label: "World Health Organization — Burn-out an “occupational phenomenon”: International Classification of Diseases",
      url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases",
    },
    {
      label: "World Health Organization — Stress, questions and answers",
      url: "https://www.who.int/news-room/questions-and-answers/item/stress",
    },
    { label: "Tele-MANAS — National Tele Mental Health Programme", url: "https://telemanas.mohfw.gov.in" },
  ],
  updated: "2026-10-21",
  medical: {
    alternateName: ["Chronic stress", "Burnout", "Occupational burnout", "तनाव", "તણાવ"],
    symptoms: [
      "Exhaustion",
      "Irritability",
      "Anger outbursts",
      "Poor sleep",
      "Headaches",
      "Acidity",
      "Reduced concentration",
    ],
    treatments: [
      "Stress-management therapy",
      "Cognitive behavioural therapy",
      "Anger-management therapy",
      "Sleep interventions",
    ],
    riskFactors: ["Long working hours", "Financial pressure", "Exam pressure", "Lack of support"],
  },
};

export default stressBurnout;
