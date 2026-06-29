import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { domains } from "lib/portfolio-data";

const pages = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Info", href: "/info" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/jchiwaii" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/john-chiwai/" },
  { label: "Medium", href: "https://medium.com/@chiwai.kiriba" },
  { label: "Email", href: "mailto:chiwai.kiriba@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 pb-8 text-black md:px-12 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1920px] gap-10 border-t border-black pt-8 md:grid-cols-[minmax(260px,0.42fr)_repeat(3,minmax(0,1fr))]">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
            <span className="h-2 w-2 rounded-full bg-black" />
            Let&apos;s get in touch
          </p>
          <h2 className="max-w-[420px] text-[clamp(2rem,4vw,3.7rem)] font-semibold uppercase leading-[0.95]">
            Make the work useful
          </h2>
          <a
            href="mailto:chiwai.kiriba@gmail.com"
            className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 font-mono text-sm uppercase"
          >
            chiwai.kiriba@gmail.com <ArrowUpRight size={16} />
          </a>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-sm font-semibold uppercase">Pages</h3>
          <div className="flex flex-col gap-3">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="font-mono text-sm text-black/60 transition-colors hover:text-black"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-sm font-semibold uppercase">Domains</h3>
          <div className="flex flex-col gap-3">
            {domains.slice(0, 5).map((domain) => (
              <Link
                key={domain.slug}
                href={`/projects/${domain.slug}`}
                className="font-mono text-sm text-black/60 transition-colors hover:text-black"
              >
                {domain.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-sm font-semibold uppercase">Social</h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex w-fit items-center gap-2 font-mono text-sm text-black/60 transition-colors hover:text-black"
              >
                {item.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-[1920px] font-mono text-xs text-black/45">
        © {year}. Built by Chiwai.
      </p>
    </footer>
  );
}
