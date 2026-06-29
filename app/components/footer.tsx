import Link from "next/link";

const firstPages = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Info", href: "/info" },
  { label: "Contact Us", href: "/contact" },
];

const secondPages = [
  { label: "Data & Insights", href: "/projects/data-insights" },
  { label: "Web Interfaces", href: "/projects/web-interfaces" },
  { label: "Fullstack Systems", href: "/projects/fullstack-systems" },
  { label: "AI Systems", href: "/projects/ai-systems" },
];

const utility = ["Instructions", "Style Guide", "Licenses", "Changelog"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 pb-8 text-black md:px-12">
      <div className="mx-auto grid w-full max-w-[1920px] gap-8 border-t border-black pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.56fr)]">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[8px] uppercase leading-none text-black">
            <span className="text-[16px] leading-none">+</span>
            Let&apos;s get in touch
          </p>
          <h2 className="text-[32px] font-semibold uppercase leading-none text-black md:text-[40px]">
            Sign up now
            <br />
            and stay inspired!
          </h2>

          <form className="mt-16 flex max-w-[416px] items-end gap-8">
            <label className="flex-1 font-mono text-[8px] leading-none text-black">
              Enter your email
              <input
                type="email"
                aria-label="Enter your email"
                className="mt-4 w-full border-b border-black bg-transparent pb-2 text-[16px] outline-none"
              />
            </label>
            <button
              type="button"
              className="border-b border-black pb-2 font-mono text-[8px] uppercase leading-none text-black"
            >
              Submit
            </button>
          </form>

          <div className="mt-4 flex gap-4 font-mono text-[16px] leading-none text-black">
            <a href="https://github.com/jchiwaii" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/john-chiwai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <span>/</span>
            <a href="mailto:chiwai.kiriba@gmail.com">Email</a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-mono text-[16px] font-semibold uppercase leading-none text-black">
              Pages
            </h3>
            <div className="flex flex-col gap-4">
              {firstPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="font-mono text-[16px] leading-none text-black"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[16px] font-semibold uppercase leading-none text-black">
              Pages
            </h3>
            <div className="flex flex-col gap-4">
              {secondPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="font-mono text-[16px] leading-none text-black"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[16px] font-semibold uppercase leading-none text-black">
              Utility
            </h3>
            <div className="flex flex-col gap-4">
              {utility.map((item) => (
                <span key={item} className="font-mono text-[16px] leading-none text-black">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="font-mono text-[16px] leading-none text-black md:col-span-3">
            © {year}. All rights reserved. Designed by Chiwai.
          </p>
        </div>
      </div>
    </footer>
  );
}
