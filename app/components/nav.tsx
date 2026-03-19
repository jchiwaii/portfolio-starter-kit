import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", name: "Home" },
  { href: "/#work", name: "Work" },
  { href: "/#about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/blog", name: "Musings" },
  { href: "/contact", name: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
        <ThemeToggle />
        <a
          href="mailto:chiwai.kiriba@gmail.com"
          className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          📮 chiwai.kiriba@gmail.com
        </a>
        <nav className="flex flex-wrap items-center text-sm text-zinc-600 dark:text-zinc-400" id="nav">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="px-2 py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {item.name}
              </Link>
              {index < navItems.length - 1 ? (
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
