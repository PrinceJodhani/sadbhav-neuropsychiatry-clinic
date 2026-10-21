"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  Menu as MenuIcon,
  Phone,
  X,
} from "lucide-react";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "../Common/BrandIcons";
import ThemeToggler from "./ThemeToggler";
import type { NavItem, NavLink } from "./nav";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

function MenuLink({
  link,
  compact,
  onClick,
}: {
  link: NavLink;
  compact?: boolean;
  onClick?: () => void;
}) {
  const className = cn(
    "group/item flex gap-3 rounded-2xl transition-colors hover:bg-secondary",
    link.description ? "items-start" : "items-center",
    compact ? "p-2.5" : "p-3",
  );
  const body = (
    <>
      {link.icon && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground dark:bg-brand-400/10 dark:text-brand-300">
          {link.icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
          {link.label}
          {link.external && <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />}
        </span>
        {link.description && (
          <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted-foreground">
            {link.description}
          </span>
        )}
      </span>
    </>
  );
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {body}
    </a>
  ) : (
    <Link href={link.href} className={className} onClick={onClick}>
      {body}
    </Link>
  );
}

const Header = ({ nav }: { nav: NavItem[] }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  // Solid, blurred bar once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus after navigating. A clicked dropdown link keeps focus after client-side
  // navigation, which would hold its panel open through :focus-within, so drop that focus too.
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    const active = document.activeElement;
    if (active instanceof HTMLElement && navRef.current?.contains(active)) active.blur();
  }, [pathname]);

  // Mobile menu: lock page scroll and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Desktop dropdowns: close on outside click or Escape.
  useEffect(() => {
    if (!openDropdown) return;
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenDropdown(null);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      {/* Backdrop for the mobile menu */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "pointer-events-auto relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-full border pl-4 pr-2 transition-all duration-300 sm:pl-6 lg:h-[4.25rem]",
          scrolled || menuOpen
            ? "border-border/70 bg-card/80 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" aria-label={`${clinic.name} – home`} className="shrink-0">
          <Image
            src="/images/sadbhav/logo.png"
            alt={clinic.name}
            width={960}
            height={349}
            priority
            sizes="122px"
            className="h-9 w-auto sm:h-10 lg:h-11"
          />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul ref={navRef} className="flex items-center gap-0.5">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              const itemClass = cn(
                "flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors",
                active
                  ? "bg-secondary text-foreground"
                  : "text-foreground/70 hover:bg-secondary hover:text-foreground",
              );
              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={itemClass}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const open = openDropdown === item.label;
              const panelId = `menu-${item.label.toLowerCase()}`;
              return (
                <li key={item.href} className="group relative">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenDropdown(open ? null : item.label)}
                    className={itemClass}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200 group-hover:rotate-180",
                        open && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    id={panelId}
                    className={cn(
                      "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition duration-200",
                      item.wide ? "w-[42rem]" : "w-[22rem]",
                      open
                        ? "visible opacity-100"
                        : "invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
                    )}
                  >
                    <div className="rounded-3xl border border-border/80 bg-popover p-2 shadow-lift">
                      <ul className={cn("grid gap-0.5", item.wide && "grid-cols-2")}>
                        {item.children.map((link) => (
                          <li key={link.href}>
                            <MenuLink link={link} compact />
                          </li>
                        ))}
                      </ul>
                      {item.footer && (
                        <Link
                          href={item.footer.href}
                          className="mx-1 mb-1 mt-2 flex items-center justify-between rounded-2xl bg-secondary/70 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                        >
                          {item.footer.label}
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <a
            href={clinic.phone.href}
            className="hidden items-center gap-2 rounded-full py-2 pl-1 pr-3 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground 2xl:inline-flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
              <Phone className="h-4 w-4" />
            </span>
            {clinic.phone.display}
          </a>
          <ThemeToggler />
          <a
            href={clinic.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden h-11 px-5 text-sm sm:inline-flex"
          >
            <CalendarCheck />
            Book appointment
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-3 top-full mx-auto mt-2 max-w-xl origin-top overflow-hidden rounded-4xl border border-border/70 bg-card shadow-lift transition duration-300 sm:inset-x-5 xl:hidden",
          menuOpen
            ? "pointer-events-auto visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-[0.98] opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="max-h-[calc(100dvh-7rem)] overflow-y-auto p-3">
          <ul>
            {nav.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-secondary [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <ul className="grid gap-0.5 px-1 pb-2 sm:grid-cols-2">
                      {item.children.map((link) => (
                        <li key={link.href}>
                          <MenuLink
                            link={{ ...link, description: undefined }}
                            compact
                            onClick={closeMenu}
                          />
                        </li>
                      ))}
                      {item.footer && (
                        <li className="sm:col-span-2">
                          <Link
                            href={item.footer.href}
                            onClick={closeMenu}
                            className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold text-primary"
                          >
                            {item.footer.label}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.label}
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border/70 px-1 pb-1 pt-4">
            <a href={clinic.phone.href} className="btn btn-secondary">
              <Phone />
              Call
            </a>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <WhatsAppIcon className="text-[#1DA851]" />
              WhatsApp
            </a>
            <a
              href={clinic.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary col-span-2"
            >
              <CalendarCheck />
              Book an appointment
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
