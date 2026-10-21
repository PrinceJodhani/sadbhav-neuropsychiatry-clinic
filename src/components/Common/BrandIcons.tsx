import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** The three-petal lotus from the Sadbhav logo. */
export function LotusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 4.2c-2.15 2.2-3.25 4.65-3.25 7.15 0 2.55 1.1 5.05 3.25 7.45 2.15-2.4 3.25-4.9 3.25-7.45 0-2.5-1.1-4.95-3.25-7.15Z" />
      <path
        opacity=".72"
        d="M2.6 9.4c.15 4.3 2.1 7.55 6.4 9.05.95.33 1.95.5 2.6.55-1.9-2.25-2.95-4.7-3.05-7.3-1.55-1.4-3.6-2.15-5.95-2.3ZM21.4 9.4c-2.35.15-4.4.9-5.95 2.3-.1 2.6-1.15 5.05-3.05 7.3.65-.05 1.65-.22 2.6-.55 4.3-1.5 6.25-4.75 6.4-9.05Z"
      />
      <circle cx="7.4" cy="5.6" r="1.05" />
      <circle cx="16.6" cy="5.6" r="1.05" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.45 9.45 0 0 1-4.81-1.32l-.35-.2-3.58.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.46-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.77 6.68c0 5.21-4.24 9.45-9.45 9.45Zm8.04-17.49A11.3 11.3 0 0 0 12.05.67C5.78.67.67 5.77.67 12.05c0 2 .52 3.96 1.52 5.69L.57 23.6l6.01-1.58a11.33 11.33 0 0 0 5.46 1.39h.01c6.27 0 11.38-5.1 11.38-11.38 0-3.04-1.18-5.9-3.34-8.04Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.4 21.5v-7.7h2.6l.4-3h-3V8.9c0-.87.24-1.46 1.49-1.46h1.59V4.76a21 21 0 0 0-2.32-.12c-2.3 0-3.87 1.4-3.87 3.98v2.2H7.7v3h2.6v7.68h3.1Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.12C19.03 4.6 12 4.6 12 4.6s-7.03 0-8.9.48A3 3 0 0 0 1 7.2 31.3 31.3 0 0 0 .5 12c0 1.62.17 3.24.5 4.8a3 3 0 0 0 2.1 2.12c1.87.48 8.9.48 8.9.48s7.03 0 8.9-.48A3 3 0 0 0 23 16.8c.33-1.56.5-3.18.5-4.8 0-1.62-.17-3.24-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.84-6.32L5.45 21H2.37l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.73H5.58l11.09 14.44Z" />
    </svg>
  );
}
