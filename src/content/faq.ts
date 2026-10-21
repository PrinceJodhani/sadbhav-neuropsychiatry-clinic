import type { Faq } from "./types";

// Patient FAQ page (/faq). Answers support **bold** and [links](/path).
export const faqGroups: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: "appointments",
    title: "Appointments & clinics",
    faqs: [
      {
        q: "How do I book an appointment with Dr. Jash Ajmera?",
        a: "Book online at [sadbhavneuropsychiatryclinic.setmore.com](https://sadbhavneuropsychiatryclinic.setmore.com), or call or WhatsApp [+91 78610 24557](tel:+917861024557).",
      },
      {
        q: "Where are the clinics and what are the timings?",
        a: "**Vesu, Surat (main clinic):** Monday–Saturday, 11 AM–1 PM and 4–8 PM. **Katargam, Surat:** Sunday, 11 AM–12 PM. **Ankleshwar:** Saturday, 9 AM–12 PM. See [clinics & timings](/clinics).",
      },
      {
        q: "What is the address of the Vesu clinic?",
        a: "208, 4th Floor, Someshwar Square, Opp. Aagam Heritage Bungalows, Near University Road, Vesu, Surat, Gujarat 395007. See [directions to the Vesu clinic](/clinics/vesu-surat).",
      },
      {
        q: "Do I need a referral to see a psychiatrist?",
        a: "No. You can book directly — no referral from another doctor is needed.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Your current medicines (or a list), previous prescriptions and test reports, and — if you like — a family member. Read [what to expect at your first visit](/guides/first-psychiatrist-visit).",
      },
      {
        q: "In which languages can I consult?",
        a: "English, Hindi and Gujarati — in person and online.",
      },
      {
        q: "What are the consultation fees?",
        a: "Fees depend on the type of consultation (first visit, follow-up or therapy session). Please call or WhatsApp [+91 78610 24557](tel:+917861024557) for current fees, and ask about therapy packages.",
      },
    ],
  },
  {
    id: "online",
    title: "Online consultations",
    faqs: [
      {
        q: "Can I consult Dr. Jash Ajmera online?",
        a: "Yes. Video consultations are available for patients anywhere in India and for NRIs abroad, in English, Hindi and Gujarati. See [online psychiatrist consultation](/online-psychiatrist-consultation).",
      },
      {
        q: "Can a psychiatrist prescribe medicines online in India?",
        a: "Yes. Under India’s Telemedicine Practice Guidelines (2020), most psychiatric medicines can be prescribed after a video consultation and shared as a digital prescription. Certain controlled medicines cannot be prescribed online and need a clinic visit.",
      },
      {
        q: "Can medicines be delivered after an online consultation?",
        a: "Yes — medicines can be delivered across India.",
      },
      {
        q: "I live outside India. Can I consult?",
        a: "Yes. NRIs and international students can consult for assessment, psychotherapy, second opinions and family guidance. Prescriptions depend on the rules of your country. See [online psychiatrist for NRIs](/nri-online-psychiatrist).",
      },
    ],
  },
  {
    id: "treatment",
    title: "Treatment & medicines",
    faqs: [
      {
        q: "What conditions do you treat?",
        a: "Depression, anxiety, panic attacks, OCD, bipolar disorder, schizophrenia and psychosis, alcohol and other addictions, insomnia, stress and burnout, ADHD, personality difficulties, postpartum depression, sexual health concerns, and mental health problems in children and teenagers. See [all conditions](/conditions).",
      },
      {
        q: "Will I have to take medicines?",
        a: "Not necessarily. Many people improve with [psychotherapy](/treatments/psychotherapy) alone. Medicines are recommended only when they are likely to help, after explaining the options — and the decision is yours.",
      },
      {
        q: "Are psychiatric medicines addictive?",
        a: "Most are not — including antidepressants, mood stabilisers and antipsychotics. Some sedatives and sleeping pills can cause dependence with long-term use, so they are used only for short periods. Read [psychiatric medicines: myths & facts](/guides/psychiatric-medicines-facts).",
      },
      {
        q: "How long does treatment take?",
        a: "It depends on the condition. Many people feel better within a few weeks; medicines for depression or anxiety are usually continued for 6–12 months after recovery, and some conditions need longer-term care. Your plan is reviewed at every follow-up.",
      },
      {
        q: "Do you provide counselling and psychotherapy?",
        a: "Yes. Dr. Ajmera provides psychotherapy himself — including CBT, ERP for OCD and emotion-management therapy — in person and online. See [psychotherapy & counselling](/treatments/psychotherapy).",
      },
      {
        q: "Do you treat alcohol and other addictions?",
        a: "Yes — alcohol, tobacco and gutkha, cannabis, opioids, sleeping pills, and behavioural addictions such as gaming and betting. See [de-addiction treatment](/treatments/de-addiction).",
      },
      {
        q: "Do you see children and teenagers?",
        a: "Yes. Dr. Ajmera works extensively with adolescents and young adults, and helps children and families with anxiety, low mood, exam stress, ADHD, anger and screen addiction. See [child & adolescent mental health](/treatments/child-adolescent-psychiatry).",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy, rights & insurance",
    faqs: [
      {
        q: "Will my consultation be kept confidential?",
        a: "Yes. Your consultation and records are confidential and are not shared with your employer, school or relatives without your consent, except where the law allows it to keep someone safe. Read [your mental health rights in India](/guides/mental-health-rights-india).",
      },
      {
        q: "Does health insurance cover psychiatric treatment?",
        a: "The Mental Healthcare Act, 2017 requires insurers to cover mental illness on the same basis as physical illness. Whether consultations and medicines (OPD) are covered depends on your policy — check with your insurer.",
      },
      {
        q: "Will seeing a psychiatrist affect my job or marriage prospects?",
        a: "There is no public record of psychiatric consultations, and your information is confidential. Seeking help early is a sign of strength — and treatment usually improves work and relationships.",
      },
    ],
  },
  {
    id: "families",
    title: "Families & emergencies",
    faqs: [
      {
        q: "My family member needs help but refuses to come. What can I do?",
        a: "You can consult first to get guidance on how to approach them. Read [how to help a loved one get mental health care](/guides/helping-a-loved-one).",
      },
      {
        q: "What should I do in a mental health emergency?",
        a: "If someone is at immediate risk of harming themselves or others, call [112](tel:112) or go to the nearest hospital. For free, confidential support 24×7, call Tele-MANAS on [14416](tel:14416).",
      },
      {
        q: "Is a psychiatrist different from a psychologist?",
        a: "Yes. A psychiatrist is a medical doctor who can diagnose, prescribe medicines and provide therapy; a psychologist provides testing and therapy but does not prescribe. Read [psychiatrist vs psychologist](/guides/psychiatrist-vs-psychologist).",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((group) => group.faqs);
