import { Feature } from "@/types/feature";
import { Brain, MessageSquare, Droplet, Heart, Video } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Brain size={40} />,
    title: "Psychiatry",
    paragraph: "Comprehensive evaluations & personalized treatments.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    icon: <MessageSquare size={40} />,
    title: "Psychotherapy",
    paragraph: "Sessions that nurture emotional and behavioral wellness.",
    iconColor: "text-green-600",
    bgColor: "bg-green-600",
    link: {
      text: "Download Brochure",
      href: "/path-to-brochure.pdf",
    },
  },
  {
    id: 3,
    icon: <Droplet size={40}  />,
    title: "De-Addiction",
    paragraph: "Compassionate help to overcome substance & behavioral addictions.",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-600",
  },
  {
    id: 4,
    icon: <Heart size={40}  />,
    title: "Sexologist",
    paragraph: "Targeted interventions for psychosexual challenges.",
    iconColor: "text-red-600",
    bgColor: "bg-red-600",
  },
  {
    id: 5,
    icon: <Video size={40} />,
    title: "Online Consultation",
    paragraph: "Discreet, professional e-consults with pan-India medicine delivery.",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-600",
  },
];

export default featuresData;