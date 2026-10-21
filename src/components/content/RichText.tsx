import Link from "next/link";
import { Fragment } from "react";

// Inline marks used in content strings: **bold** and [text](href).
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

// overflow-wrap:anywhere lets long URLs used as link text wrap on narrow screens.
export const linkClass =
  "font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors [overflow-wrap:anywhere] hover:decoration-primary";

export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/")) {
            return (
              <Link key={i} href={href} className={linkClass}>
                {label}
              </Link>
            );
          }
          const external = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              className={linkClass}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

/** Headings: *word* becomes the italic lotus accent used by .heading-display. */
export function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
