import { Github, Linkedin, Mail, Newspaper } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/jchiwaii",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/john-chiwai/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://medium.com/@chiwai.kiriba",
    label: "Medium",
    icon: Newspaper,
  },
  {
    href: "mailto:chiwai.kiriba@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 md:px-10">
        <div className="max-w-5xl">
          <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-zinc-700 dark:bg-zinc-400" />
            <span>Let&apos;s Work Together</span>
          </div>
          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl">
            Want to collaborate with me? Take your coffee and let&apos;s talk.
          </h2>
          <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
            1901 Ponorogo - Trenggalek, Bancangan, Sambit
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Copyright © {new Date().getFullYear()} John Chiwai.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700 transition-all hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
