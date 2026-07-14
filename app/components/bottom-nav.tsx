import Link from "next/link";
import { BrandLockup } from "./brand-mark";

const navItems = [
  { href: "/info", label: "INFO" },
];

export function BottomNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-[1920px] items-center justify-between px-6 md:px-12">
        <Link href="/" aria-label="Chiwai home">
          <BrandLockup />
        </Link>

        <nav className="flex items-center gap-4 font-mono text-[16px] font-semibold uppercase leading-none text-black md:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-black">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
