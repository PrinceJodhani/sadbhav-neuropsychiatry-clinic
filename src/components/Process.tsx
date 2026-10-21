import { CalendarCheck, ClipboardList, HeartHandshake, LineChart } from "lucide-react";
import SectionHeading from "./Common/SectionHeading";

const steps = [
  {
    icon: CalendarCheck,
    title: "Reach out",
    text: "Call, WhatsApp or book online. Visit us in Vesu, Katargam or Ankleshwar — or consult online from anywhere in India.",
  },
  {
    icon: ClipboardList,
    title: "Detailed assessment",
    text: "A confidential conversation to understand your concerns, your history and what you hope to change.",
  },
  {
    icon: HeartHandshake,
    title: "Your personalised plan",
    text: "Evidence-based treatment that may combine psychotherapy and medication, tailored to you.",
  },
  {
    icon: LineChart,
    title: "Ongoing support",
    text: "Regular follow-ups to track your progress and adjust care as you get better.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title={
            <>
              Your path to feeling <em>better</em>
            </>
          }
          description="Reaching out is often the hardest part. Here is what to expect once you do."
        />

        <div className="relative mt-14 lg:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                data-reveal
                className="relative rounded-4xl border border-border/70 bg-card p-7 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="icon-tile bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span aria-hidden="true" className="heading-display text-5xl leading-none text-foreground/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
