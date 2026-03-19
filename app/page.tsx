import { ArrowRight } from "lucide-react";
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

const homeProjectGroups = [
  {
    title: "Interesting Things I Am Building",
    items: projectRows.filter(
      (project) => project.section === "Ongoing" || project.section === "Web3"
    ),
  },
  {
    title: "Data Projects",
    items: projectRows.filter((project) => project.section === "Data"),
  },
  {
    title: "Web2 Projects",
    items: projectRows.filter((project) => project.section === "Web2"),
  },
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <section id="home" className="bg-white text-zinc-900">
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
              CHIWAI
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

      <div id="about" className="bg-[#fafafa] font-mono text-[#23262f]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:h-[1572px] md:px-[150px] md:py-[120px]">
          <div className="mx-auto flex h-full w-full max-w-[1130px] flex-col gap-10 md:gap-[110px]">
            <div className="h-[2px] w-full max-w-[1120px] bg-[#e6e8ec]" />

            <div className="flex flex-1 flex-col gap-12 md:gap-[82px]">
              <div className="flex flex-col gap-5 md:w-[1130px] md:flex-row md:items-start md:justify-between">
                <h2 className="max-w-[640px] text-[44px] leading-[1.03] tracking-[-0.03em] md:text-[72px]">
                  <span className="block text-[#23262f]">We Make Things</span>
                  <span className="block text-[#b6b8bf]">Happen</span>
                </h2>
                <p className="text-[24px] leading-none text-[#272727] md:pt-1 md:text-[32px]">
                  ©{year}
                </p>
              </div>

              <div className="w-full max-w-[1120px]">
                <div className="flex flex-col gap-10 md:ml-[96px] md:h-[1010px] md:flex-row md:items-start md:gap-[128px]">
                  <div className="order-2 md:order-1 md:pt-[381px]">
                    <div className="h-[248px] w-full border border-white/40 bg-[#b9b9bb] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:w-[256px]" />
                  </div>

                  <div className="order-1 flex flex-col gap-10 md:order-2 md:h-[1010px] md:w-[640px] md:gap-[80px]">
                    <div className="flex flex-col gap-6 md:w-[643px] md:gap-8">
                      <p className="text-[40px] leading-none text-[#23262f] md:text-[56px]">
                        01
                      </p>
                      <p className="text-[16px] leading-[1.6] text-[#667085] md:text-[18px] md:leading-[1.5]">
                        Nothing is too hard to crack. I&apos;m driven by
                        chronic curiosity and a passion for telling stories
                        through code, pictures and data.
                      </p>
                    </div>

                    <div className="h-[300px] w-full border border-white/40 bg-[#b9b9bb] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:h-[458px] md:w-[640px]" />

                    <p className="text-[14px] leading-[1.7] text-[#667085] md:w-[643px] md:text-[15px] md:leading-[1.7]">
                      Building scalable creative solutions that go beyond the
                      hype. Sometimes I write, sometimes I code, other times I
                      am behind a lens, and most times I enjoy my own company.
                      Open to long-term meaningful projects across data, AI,
                      web2, and web3. Ardent love of African literature.
                      Perfect mind. Excellent spirit. I love math a lot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Projects
            </p>
          </div>

          <div className="border-y border-zinc-200">
            {homeProjectGroups.map((group) => (
              <details
                key={group.title}
                className="group border-b border-zinc-200 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xl font-semibold text-zinc-900 marker:content-none md:text-2xl">
                  <span>{group.title}</span>
                  <span className="text-sm font-mono font-medium text-zinc-500">
                    {group.items.length}
                  </span>
                </summary>

                <ul className="border-t border-zinc-200 pb-3">
                  {group.items.map((project) => (
                    <li key={project.name} className="border-b border-zinc-200 last:border-b-0">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/project relative block py-4 pr-2 transition-colors hover:bg-zinc-50 md:pr-44"
                      >
                        <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                          <span className="font-semibold text-zinc-900">
                            {project.name}
                          </span>
                          <span>{` — ${project.detail}`}</span>
                        </p>

                        <div className="pointer-events-none absolute right-4 top-1/2 hidden h-20 w-32 -translate-y-1/2 translate-x-2 overflow-hidden rounded-md border border-zinc-200 bg-zinc-100 opacity-0 shadow-lg transition-all duration-200 group-hover/project:translate-x-0 group-hover/project:opacity-100 md:block">
                          <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
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
