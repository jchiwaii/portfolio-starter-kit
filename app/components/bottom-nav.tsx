"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLockup } from "./brand-mark";

const navItems = [
  { href: "/", label: "1ST", exact: true },
  { href: "/#domains", label: "2ND", exact: false },
  { href: "/info", label: "INFO", exact: false },
  { href: "/projects", label: "PROJECTS", exact: false },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1920px] items-center justify-between px-6 md:px-12 lg:px-14">
        <Link href="/" aria-label="Chiwai home">
          <BrandLockup />
        </Link>

        <nav className="flex items-center gap-4 font-mono text-sm font-semibold uppercase md:gap-8">
          {navItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : item.href !== "/#domains" && pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-black"
                    : "text-black/35 transition-colors hover:text-black"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
