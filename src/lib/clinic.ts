// Single source of truth for clinic details shown across the site.

export const siteUrl = "https://psychiatristinsurat.in";

const whatsappMessage = "Hello, I would like to book an appointment with Dr. Jash Ajmera.";

// Headline numbers shown in the stats, the doctor profile, structured data and llms.txt.
// Update them as the years add up.
const yearsOfExperience = "9+";
const patientsHelped = "10,000+";

export type ScheduleRule = {
  /** 0 = Sunday … 6 = Saturday */
  days: number[];
  /** 24h "HH:MM" open/close pairs */
  slots: [string, string][];
};

export type Branch = {
  id: string;
  /** URL segment of the branch page under /clinics. */
  slug: string;
  name: string;
  tag?: string;
  address: string;
  /** Neighbourhoods and towns this branch is most convenient for. */
  areas: string[];
  days: string;
  times: string[];
  schedule: ScheduleRule[];
};

export const clinic = {
  name: "Sadbhav Neuropsychiatry Clinic",
  doctor: {
    name: "Dr. Jash Ajmera",
    role: "Psychiatrist & Psychotherapist",
    credentials: "M.B.B.S., D.P.M. (Psychiatry)",
    fullCredentials: "M.B.B.S., D.P.M. (Psychiatry), F.I.P.S.",
    practisingSince: 2017,
    yearsOfExperience,
    patientsHelped,
    profilePath: "/dr-jash-ajmera",
    // From Dr. Ajmera's psychotherapy brochure (public/Psychotherapy-by-Dr-Jash-Ajmera.pdf).
    education: [
      {
        degree: "M.B.B.S.",
        institution: "Gujarat Adani Institute of Medical Science (GAIMS), Bhuj",
      },
      {
        degree: "D.P.M. (Diploma in Psychological Medicine – Psychiatry)",
        institution: "Government Medical College, Rajkot",
      },
      {
        degree: "F.I.P.S. (Fellow of the Indian Psychiatric Society)",
        institution: "Indian Psychiatric Society",
      },
    ],
    experience: [
      { period: "Since 2017", text: "Practising psychiatry; active in the National Mental Health Programme" },
      { period: "2019", text: "District nodal officer for the Government of Gujarat, Bhuj (Kutch)" },
      { period: "2020", text: "District nodal officer for the Government of Gujarat, Bharuch" },
      { period: "Since 2021", text: "Sadbhav Neuropsychiatry Clinic, Surat" },
    ],
    media: ["Dainik Bhaskar", "Gujarat Samachar", "Loktej", "Radio City 91.1 FM"],
    therapyMentor:
      "Dr. M. J. Samani, founder of Integrative Psychotherapy for Emotion Management",
  },
  phone: {
    display: "+91 78610 24557",
    href: "tel:+917861024557",
  },
  whatsappUrl: `https://wa.me/917861024557?text=${encodeURIComponent(whatsappMessage)}`,
  email: "support@aarogyaminds.com",
  bookingUrl: "https://sadbhavneuropsychiatryclinic.setmore.com",
  address: {
    full: "208, 4th Floor, Someshwar Square, Opp. Aagam Heritage Bungalows, Near University Road, Vesu, Surat, Gujarat 395007",
    short: "Someshwar Square, Vesu, Surat",
  },
  mapUrl: "https://maps.app.goo.gl/reprPyC8r9cdeKjB7",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0587759001746!2d72.77868099999999!3d21.1500591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc44dfe42f3%3A0x623c23315a63d369!2sDr.%20Jash%20Ajmera%20%7C%20Psychiatrist%20and%20Psychotherapist%20in%20Surat%20%7C%20Sadbhav%20Neuropsychiatry%20Clinic!5e0!3m2!1sen!2sin!4v1763095117185!5m2!1sen!2sin",
  googlePlaceId: "ChIJ80L-TcRN4DsRadNjWjEjPGI",
  brochureUrl: "/Psychotherapy-by-Dr-Jash-Ajmera.pdf",
  languages: ["English", "Hindi", "Gujarati"],
  social: {
    facebook: "https://www.facebook.com/sadbhavpsychiatry/",
    instagram: "https://www.instagram.com/aarogya.minds/",
    instagramClinic: "https://www.instagram.com/sadbhav_clinic/",
    youtube: "https://www.youtube.com/@Aarogyaminds",
    x: "https://x.com/ajmerajash",
  },
  stats: [
    { value: patientsHelped, label: "Patients helped" },
    { value: yearsOfExperience, label: "Years of experience" },
    { value: "3", label: "Clinic branches" },
    { value: "5", label: "Hospital attachments" },
  ],
  conditions: [
    "Depression",
    "Anxiety & panic",
    "OCD",
    "Bipolar disorder",
    "Schizophrenia & psychosis",
    "Addiction & de-addiction",
    "Sleep problems",
    "Stress & burnout",
    "Personality concerns",
    "Psychosexual concerns",
    "Child & adolescent mental health",
  ],
  resources: [
    {
      title: "Mental health tests",
      description: "Free, confidential self-assessments",
      href: "https://www.aarogyaminds.com/mental-health-tests",
    },
    {
      title: "Mental health info",
      description: "Clear guides to common conditions",
      href: "https://www.aarogyaminds.com/info",
    },
    {
      title: "Self-help tools",
      description: "Guided exercises for everyday wellbeing",
      href: "https://www.aarogyaminds.com/selfhelptools",
    },
  ],
  branches: [
    {
      id: "vesu",
      slug: "vesu-surat",
      name: "Vesu, Surat",
      tag: "Main clinic",
      address:
        "208, 4th Floor, Someshwar Square, Opp. Aagam Heritage Bungalows, Near University Road, Vesu, Surat 395007",
      areas: [
        "Vesu",
        "VIP Road",
        "Althan",
        "Bhatar",
        "Piplod",
        "City Light",
        "Ghod Dod Road",
        "Athwa",
        "Parle Point",
        "Dumas Road",
        "Pal",
        "Adajan",
        "Udhna",
        "Pandesara",
        "Dindoli",
        "Bhestan",
        "Sachin",
      ],
      days: "Monday – Saturday",
      times: ["11:00 AM – 1:00 PM", "4:00 PM – 8:00 PM"],
      schedule: [
        {
          days: [1, 2, 3, 4, 5, 6],
          slots: [
            ["11:00", "13:00"],
            ["16:00", "20:00"],
          ],
        },
      ],
    },
    {
      id: "katargam",
      slug: "katargam-surat",
      name: "Katargam, Surat",
      address: "Katargam, Surat, Gujarat",
      areas: [
        "Katargam",
        "Ved Road",
        "Singanpore",
        "Amroli",
        "Utran",
        "Kosad",
        "Varachha",
        "Mota Varachha",
        "Kapodra",
        "Sarthana",
      ],
      days: "Sunday",
      times: ["11:00 AM – 12:00 PM"],
      schedule: [{ days: [0], slots: [["11:00", "12:00"]] }],
    },
    {
      id: "ankleshwar",
      slug: "ankleshwar",
      name: "Ankleshwar",
      address: "Ankleshwar, Gujarat",
      areas: [
        "Ankleshwar",
        "Ankleshwar GIDC",
        "Bharuch",
        "Jhagadia",
        "Hansot",
        "Valia",
        "Kosamba",
      ],
      days: "Saturday",
      times: ["9:00 AM – 12:00 PM"],
      schedule: [{ days: [6], slots: [["09:00", "12:00"]] }],
    },
  ] as Branch[],
  // Mirrors the FAQPage structured data on the home page — keep them in sync.
  faqs: [
    {
      question: "What conditions do you specialize in treating?",
      answer:
        "We treat a wide variety of psychiatric conditions, including depression, anxiety, OCD, schizophrenia, bipolar disorder, personality concerns, addictions, and psychosexual issues.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "Simply call +91 78610 24557 to book your session at any branch, or book online at sadbhavneuropsychiatryclinic.setmore.com.",
    },
    {
      question: "What is your treatment approach?",
      answer:
        "We rely on evidence-based methods, combining psychotherapy and safe, effective medications to ensure the best results for each individual.",
    },
    {
      question: "Do you prescribe medicines?",
      answer:
        "Yes, our treatment plans include medications whenever clinically indicated, customized to your needs and safety.",
    },
    {
      question: "Are there resources for managing mental health outside appointments?",
      answer:
        "Yes. Visit aarogyaminds.com for free mental health tests, self-help tools, and informative blogs.",
    },
    {
      question: "Will my consultations remain confidential?",
      answer:
        "Yes, we maintain strict confidentiality for all patient data and records, prioritizing your privacy at every step.",
    },
  ],
};

export const googleReviewsUrl = `https://search.google.com/local/reviews?placeid=${clinic.googlePlaceId}`;
export const googleWriteReviewUrl = `https://search.google.com/local/writereview?placeid=${clinic.googlePlaceId}`;
