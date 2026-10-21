import { Feature } from "@/types/feature";
import { Brain, HeartHandshake, MessagesSquare, Sprout } from "lucide-react";

// Online consultation is rendered separately as the featured card.
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Brain className="h-6 w-6" strokeWidth={1.75} />,
    title: "Psychiatry",
    paragraph:
      "Comprehensive evaluations and personalised treatment plans for mental health conditions, at every stage of life.",
    tone: "brand",
    highlights: [
      { label: "Depression", href: "/conditions/depression" },
      { label: "Anxiety", href: "/conditions/anxiety" },
      { label: "OCD", href: "/conditions/ocd" },
      { label: "Bipolar disorder", href: "/conditions/bipolar-disorder" },
      { label: "Schizophrenia", href: "/conditions/schizophrenia" },
      { label: "Sleep problems", href: "/conditions/insomnia" },
    ],
    link: { text: "All conditions we treat", href: "/conditions" },
  },
  {
    id: 2,
    icon: <MessagesSquare className="h-6 w-6" strokeWidth={1.75} />,
    title: "Psychotherapy",
    paragraph: "Evidence-based sessions that nurture emotional and behavioural wellness.",
    tone: "lotus",
    link: { text: "Psychotherapy & counselling", href: "/treatments/psychotherapy" },
  },
  {
    id: 3,
    icon: <Sprout className="h-6 w-6" strokeWidth={1.75} />,
    title: "De-addiction",
    paragraph:
      "Compassionate help to overcome substance and behavioural addictions with proven methods.",
    tone: "brand",
    link: { text: "De-addiction treatment", href: "/treatments/de-addiction" },
  },
  {
    id: 4,
    icon: <HeartHandshake className="h-6 w-6" strokeWidth={1.75} />,
    title: "Psychosexual health",
    paragraph:
      "Sexologist consultations for psychosexual concerns, in a safe and confidential environment.",
    tone: "lotus",
    link: { text: "Sexual health care", href: "/treatments/sexual-health" },
  },
];

export default featuresData;
