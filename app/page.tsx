import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const heroNavLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
];

const projectRows = [
  {
    section: "Ongoing",
    name: "Artify",
    href: "https://artifyy.online",
    image: "/assets/artifyy.png",
    detail: "Digital media agency for brands and businesses.",
  },
  {
    section: "Ongoing",
    name: "Oyaah",
    href: "https://www.oyaah.cloud/",
    image: "/assets/oyaah.png",
    detail: "Automatic EDA platform for instant spreadsheet insights.",
  },
  {
    section: "Ongoing",
    name: "SQLAce",
    href: "https://sql-ace.netlify.app/",
    image: "/assets/sql-ace.png",
    detail: "SQL learning platform for beginners and interview prep.",
  },
  {
    section: "Ongoing",
    name: "Linspo UI",
    href: "https://linspo-ui.vercel.app/",
    image: "/assets/linspo.png",
    detail: "Open source UI for data science and visualization teams.",
  },
  {
    section: "Ongoing",
    name: "Safe Browse",
    href: "https://chromewebstore.google.com/detail/safe-browse-content-filte/iipiknfekcemmookpphbkdiabdaiipje?authuser=1&hl=en",
    image: "/assets/content-filter.jpg",
    detail: "Chrome extension for safer browsing and language filtering.",
  },
  {
    section: "Data",
    name: "CBK Data Analysis",
    href: "https://cbk-data-project.onrender.com/",
    image: "/assets/cbk.png",
    detail: "Kenyan macroeconomic analysis with Python and dashboards.",
  },
  {
    section: "Data",
    name: "KCSE 2025 Analysis",
    href: "https://kcse-2025.vercel.app/",
    image: "/assets/kcse2025.png",
    detail: "Interactive KCSE results analytics with Next.js + charts.",
  },
  {
    section: "Data",
    name: "Time Series Library",
    href: "https://github.com/jchiwaii/timeseries",
    image: "/assets/time-series.jpeg",
    detail: "Rust library for time-series models and forecasting workflows.",
  },
  {
    section: "Data",
    name: "ARIMA Weather Forecast",
    href: "https://github.com/jchiwaii/ARIMA-Weather-Forecast",
    image: "/assets/forecast.png",
    detail: "Nairobi weather forecasting project using ARIMA.",
  },
  {
    section: "Data",
    name: "KCSE Analysis 2024",
    href: "https://kcse-analysis.streamlit.app/",
    image: "/assets/kcse.png",
    detail: "Python dashboard for national KCSE 2024 result exploration.",
  },
  {
    section: "Data",
    name: "AFCON Visualization",
    href: "https://afcon-eta.vercel.app/",
    image: "/assets/afcon.png",
    detail: "Race-bar visualization of AFCON storylines and outcomes.",
  },
  {
    section: "Web3",
    name: "CREPE (BNB Meme Coin)",
    href: "https://crepebnb.netlify.app/",
    image: "/assets/crepe.png",
    detail: "Brand and launch website for a BNB chain meme coin.",
  },
  {
    section: "Web2",
    name: "Beatrice Sada Portfolio",
    href: "https://beatrice-sada.vercel.app/",
    image: "/assets/sada.png",
    detail: "Personal portfolio system built with Next.js and Tailwind.",
  },
  {
    section: "Web2",
    name: "Bloodline",
    href: "https://blood-donations-indol.vercel.app/",
    image: "/assets/bloodline.png",
    detail: "Fullstack blood donation platform with admin workflows.",
  },
  {
    section: "Web2",
    name: "Chatty",
    href: "https://chatty-fullstack.vercel.app",
    image: "/assets/chatty.png",
    detail: "Realtime fullstack messaging app with modern UX.",
  },
  {
    section: "Web2",
    name: "Netflix Clone",
    href: "https://ck-gpt.web.app/",
    image: "/assets/netflix.png",
    detail: "TMDB-powered streaming interface with responsive design.",
  },
  {
    section: "Web2",
    name: "Kanga",
    href: "https://kanga.netlify.app/",
    image: "/assets/kanga.png",
    detail: "Tailoring website blending Swahili elegance and modern UI.",
  },
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <section
      id="home"
      className="bg-white text-zinc-900"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="border-b border-zinc-200 md:relative md:h-[679px]">
          <div className="grid items-center gap-6 pt-4 md:absolute md:left-0 md:right-0 md:top-4 md:grid-cols-[1fr_191px_1fr] md:gap-[33px] md:pt-0">
            <p className="font-sans text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[0.9] tracking-tight text-zinc-900">
              ©{year}
            </p>
            <div className="relative h-[118px] w-[160px] justify-self-start overflow-hidden md:h-[141px] md:w-[191px] md:justify-self-center">
              <img
                src="/assets/hero.jpg"
                alt="Hero"
                className="h-full w-full object-cover grayscale contrast-125 brightness-90 transition duration-700 hover:scale-105 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 mix-blend-multiply" />
            </div>
            <h1 className="justify-self-start text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[0.9] tracking-tight text-zinc-900 md:justify-self-end">
              JOHN
            </h1>
          </div>

          <div className="mt-7 grid gap-4 py-3 text-lg leading-none text-zinc-700 md:absolute md:left-0 md:right-0 md:top-[208px] md:mt-0 md:grid-cols-[1fr_auto_1fr] md:items-center md:py-0">
            <p className="font-mono font-medium">
              ☀️Light <span className="px-2 text-zinc-400">|</span>
              <span className="text-zinc-500">Dark</span>
            </p>

            <a
              href="mailto:chiwai.kiriba@gmail.com"
              className="font-mono text-zinc-700 transition-colors hover:text-zinc-900"
            >
              📮 chiwai.kiriba@gmail.com
            </a>

            <nav className="flex items-center gap-3 font-mono md:justify-end">
              {heroNavLinks.map((item, index) => (
                <div key={item.name} className="flex items-center gap-3">
                  <Link
                    href={item.href}
                    className={
                      index === 0
                        ? "font-mono font-semibold text-zinc-900"
                        : "font-mono text-zinc-500 transition-colors hover:text-zinc-900"
                    }
                  >
                    {item.name}
                  </Link>
                  {index < heroNavLinks.length - 1 ? (
                    <span className="text-zinc-400">|</span>
                  ) : null}
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-10 flex flex-row items-center justify-between gap-6 py-6 md:absolute md:left-0 md:right-0 md:top-[556px] md:mt-0 md:py-0">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              About Me.
            </h2>
            <div className="flex items-center gap-7">
              <span className="h-[54px] w-[54px] shrink-0 rounded-full bg-zinc-300" />
              <p className="max-w-[600px] font-mono text-lg leading-tight text-zinc-800">
                Fulltime founder, part-time developer, professional learner,
                avid thinker, and pure math connoisseur.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600"
            >
              Start A Project <ArrowRight size={24} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>

      <div id="about" className="bg-zinc-50">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 border-t border-zinc-200 pt-14 md:grid-cols-[1fr_auto] md:items-start">
            <h2 className="max-w-4xl text-[clamp(2.2rem,7vw,5.6rem)] font-semibold leading-[1.05] tracking-tight text-zinc-900">
              We Make Things Happen
            </h2>
            <p className="text-2xl font-semibold text-zinc-900 md:text-3xl">
              ©{year}
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[240px_1fr] md:gap-24">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200">
              <img
                src="/assets/sada.png"
                alt="Profile work sample"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
                  01
                </p>
                <p className="max-w-3xl text-xl leading-relaxed text-zinc-600 md:text-3xl">
                  Nothing is too hard to crack. I&apos;m driven by chronic
                  curiosity and a passion for telling stories through code,
                  pictures and data.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200">
                <img
                  src="/assets/linspo.png"
                  alt="Featured project snapshot"
                  className="h-[280px] w-full object-cover md:h-[430px]"
                />
              </div>

              <div className="max-w-3xl space-y-6 text-base leading-relaxed text-zinc-600 md:text-xl">
                <p>
                  Building scalable creative solutions that go beyond the hype.
                  Sometimes I write, sometimes I code, other times I am behind a
                  lens, and most times I enjoy my own company.
                </p>
                <p>
                  Open to long-term meaningful projects across data, AI, web2,
                  and web3. Ardent love of African literature. Perfect mind.
                  Excellent spirit. I love math a lot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-6 grid gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 md:grid-cols-[260px_1fr]">
            <p>Project Section</p>
            <p>Project Name</p>
          </div>

          <div className="border-y border-zinc-200">
            {projectRows.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block border-b border-zinc-200 py-6 last:border-b-0"
              >
                <div className="grid gap-4 md:grid-cols-[260px_1fr] md:items-center">
                  <p className="text-sm font-medium tracking-wide text-zinc-500">
                    {project.section}
                  </p>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-500 md:text-4xl">
                        {project.name}
                      </h3>
                      <ArrowUpRight
                        className="shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-900"
                        size={24}
                      />
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-500 md:text-base">
                      {project.detail}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none mt-5 overflow-hidden rounded-xl border border-zinc-200 md:hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-40 w-full object-cover"
                  />
                </div>

                <div className="pointer-events-none absolute right-4 top-1/2 hidden h-44 w-72 -translate-y-1/2 translate-x-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 opacity-0 shadow-2xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-900 px-5 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Explore all projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-900"
            >
              Let&apos;s collaborate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
