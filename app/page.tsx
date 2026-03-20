import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectAccordion } from "./components/project-accordion";

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

const byName = (a: { name: string }, b: { name: string }) =>
  a.name.localeCompare(b.name);

const homeProjectGroups = [
  {
    title: "Interesting Things I Am Building",
    items: projectRows.filter((project) => project.section === "Ongoing").sort(byName),
  },
  {
    title: "Data Projects",
    items: projectRows.filter((project) => project.section === "Data").sort(byName),
  },
  {
    title: "Web2 Projects",
    items: projectRows.filter((project) => project.section === "Web2").sort(byName),
  },
  {
    title: "Web3",
    items: projectRows.filter((project) => project.section === "Web3").sort(byName),
  },
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <section
      id="home"
      className="bg-white pt-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="border-b border-zinc-200 dark:border-zinc-800 md:relative md:h-[679px]">
          <div className="flex items-center justify-center pt-4 md:absolute md:left-0 md:right-0 md:top-4 md:pt-0">
            <h1 className="text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[0.9] tracking-tight text-zinc-900 dark:text-zinc-100">
              CHIWAI
            </h1>
          </div>

          <div className="mt-7 py-3 md:absolute md:left-0 md:right-0 md:top-[208px] md:mt-0 md:flex md:justify-center md:py-0">
            <a
              href="mailto:chiwai.kiriba@gmail.com"
              className="truncate font-mono text-sm text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 md:text-lg"
            >
              📮 chiwai.kiriba@gmail.com
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-6 py-6 md:absolute md:left-0 md:right-0 md:top-[556px] md:mt-0 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
              . . .
            </h2>
            <div className="flex items-start gap-4 md:items-center md:gap-7">
              <span className="h-[42px] w-[42px] shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700 md:h-[54px] md:w-[54px]" />
              <p className="font-mono text-base leading-tight text-zinc-800 dark:text-zinc-300 md:max-w-[600px] md:text-lg">
                Fulltime founder, part-time developer, professional learner,
                avid thinker, and pure math connoisseur.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400 md:text-xl"
            >
              Let&apos;s Talk <ArrowRight size={20} strokeWidth={2.2} className="md:hidden" />
              <ArrowRight size={24} strokeWidth={2.2} className="hidden md:block" />
            </Link>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="bg-white font-mono text-[#23262f] dark:bg-zinc-950 dark:text-zinc-100"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[100px] md:pb-[56px] md:pt-[96px] lg:px-[150px]">
          <div className="mx-auto flex w-full max-w-[1130px] flex-col gap-10 md:gap-[84px]">
            <div className="h-[2px] w-full max-w-[1120px] bg-[#e6e8ec] dark:bg-zinc-800" />

            <div className="flex flex-col gap-12 md:gap-[64px]">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <h2 className="max-w-[640px] text-[34px] leading-[1.03] tracking-[-0.03em] md:text-[56px]">
                  <span className="block text-[#23262f] dark:text-zinc-100">
                    Minimalist in Chief
                  </span>
                </h2>
                <p className="text-[24px] leading-none text-zinc-400 dark:text-zinc-500 md:pt-1 md:text-[32px]" style={{ display: 'block' }}>
                  ©{year}
                </p>
              </div>

              <div className="w-full max-w-[1120px]">
                <div className="lg:ml-[96px] lg:max-w-[643px]">
                  <div className="flex flex-col gap-6 md:gap-8">
                    <p className="text-[34px] leading-none text-[#23262f] dark:text-zinc-100 md:text-[44px]">
                      01
                    </p>
                    <p className="text-[16px] leading-[1.6] text-[#667085] dark:text-zinc-400 md:text-[18px] md:leading-[1.5]">
                      Nothing is too hard to crack. I&apos;m driven by chronic
                      curiosity and a passion for telling stories through code,
                      pictures and data.
                    </p>
                    <p className="text-[16px] leading-[1.6] text-[#667085] dark:text-zinc-400 md:text-[18px] md:leading-[1.5]">
                      Building scalable creative solutions that go beyond the
                      hype. Sometimes I write, sometimes I code, other times I
                      am behind a lens, and most times I enjoy my own company.
                      Open to long-term meaningful projects across data, AI,
                      web2, and web3. Ardent love of African literature. Perfect
                      mind. Excellent spirit. I love math a lot.
                    </p>
                    <p className="text-[16px] leading-[1.6] text-[#667085] dark:text-zinc-400 md:text-[18px] md:leading-[1.5]">
                      Chief vibe coder with powerful benchmarks agains the best
                      of AI models. I write, sometimes. What else? I am here to
                      take AI&apos;s job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="bg-white font-mono dark:bg-zinc-950">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-6 md:px-[100px] md:pb-28 md:pt-8 lg:px-[150px]">
          <div className="mx-auto flex w-full max-w-[1130px] flex-col">
            <div className="mb-10 lg:ml-[96px] lg:max-w-[643px]">
              <p className="text-[34px] leading-none text-[#23262f] dark:text-zinc-100 md:text-[44px]">
                02
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Projects
              </p>
            </div>

            <ProjectAccordion groups={homeProjectGroups} />

            <div className="mt-12 flex flex-wrap items-center gap-4 lg:ml-[96px]">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-900 px-5 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
              >
                Explore all projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-100 dark:hover:text-zinc-100"
              >
                Let&apos;s collaborate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
