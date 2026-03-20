import { ProjectsAccordion } from "../components/projects-accordion";

const sections = [
  {
    num: "01",
    title: "Interesting Things I Am Building",
    items: [
      {
        name: "Artify",
        image: "/assets/artifyy.png",
        description: "Digital media agency for brands and businesses.",
        links: [{ label: "Visit", href: "https://artifyy.online" }],
      },
      {
        name: "Oyaah",
        image: "/assets/oyaah.png",
        description: "Automatic EDA platform for instant spreadsheet insights.",
        links: [{ label: "Visit", href: "https://www.oyaah.cloud/" }],
      },
      {
        name: "SQLAce",
        image: "/assets/sql-ace.png",
        description: "SQL learning platform for beginners and interview prep.",
        links: [{ label: "Visit", href: "https://sql-ace.netlify.app/" }],
      },
      {
        name: "Linspo UI",
        image: "/assets/linspo.png",
        description: "Open source UI for data science and visualization teams.",
        links: [
          { label: "Visit", href: "https://linspo-ui.vercel.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/Linspo-UI" },
        ],
      },
      {
        name: "Safe Browse",
        image: "/assets/content-filter.jpg",
        description: "Chrome extension for safer browsing and language filtering.",
        links: [
          { label: "Extension", href: "https://chromewebstore.google.com/detail/safe-browse-content-filte/iipiknfekcemmookpphbkdiabdaiipje?authuser=1&hl=en" },
          { label: "Code", href: "https://github.com/jchiwaii/content-filter-extension" },
        ],
      },
      {
        name: "Concrete UI",
        image: "/assets/concrete-ui.png",
        description: "Neo-brutalism component library with bold, raw aesthetics.",
        links: [
          { label: "Visit", href: "#" },
          { label: "Code", href: "#" },
        ],
      },
    ],
  },
  {
    num: "02",
    title: "Data Projects",
    items: [
      {
        name: "AFCON Visualization",
        image: "/assets/afcon.png",
        description: "Race-bar visualization of AFCON storylines and outcomes.",
        links: [
          { label: "Visit", href: "https://afcon-eta.vercel.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/afcon" },
        ],
      },
      {
        name: "ARIMA Weather Forecast",
        image: "/assets/forecast.png",
        description: "Nairobi weather forecasting project using ARIMA.",
        links: [
          { label: "Report", href: "https://medium.com/@chiwai.kiriba/what-nairobis-weather-taught-me-about-time-series-forecasting-aaade4711b62" },
          { label: "Code", href: "https://github.com/jchiwaii/ARIMA-Weather-Forecast" },
        ],
      },
      {
        name: "CBK Data Analysis",
        image: "/assets/cbk.png",
        description: "Kenyan macroeconomic analysis with Python and dashboards.",
        links: [
          { label: "Dashboard", href: "https://cbk-data-project.onrender.com/" },
          { label: "Report", href: "https://medium.com/@chiwai.kiriba/the-shilling-the-strain-and-the-dream-kenyas-economy-in-numbers-2dd273d03d05" },
        ],
      },
      {
        name: "KCSE 2025 Analysis",
        image: "/assets/kcse2025.png",
        description: "Interactive KCSE results analytics with Next.js + charts.",
        links: [
          { label: "Dashboard", href: "https://kcse-2025.vercel.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/kcse-2025" },
        ],
      },
      {
        name: "KCSE Analysis 2024",
        image: "/assets/kcse.png",
        description: "Python dashboard for national KCSE 2024 result exploration.",
        links: [
          { label: "Dashboard", href: "https://kcse-analysis.streamlit.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/kcse-analysis" },
        ],
      },
      {
        name: "Time Series Library",
        image: "/assets/time-series.jpeg",
        description: "Rust library for time-series models and forecasting workflows.",
        links: [{ label: "Code", href: "https://github.com/jchiwaii/timeseries" }],
      },
    ],
  },
  {
    num: "03",
    title: "Web2 Projects",
    items: [
      {
        name: "Beatrice Sada Portfolio",
        image: "/assets/sada.png",
        description: "Personal portfolio system built with Next.js and Tailwind.",
        links: [
          { label: "Visit", href: "https://beatrice-sada.vercel.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/sada-porfolio" },
        ],
      },
      {
        name: "Bloodline",
        image: "/assets/bloodline.png",
        description: "Fullstack blood donation platform with admin workflows.",
        links: [
          { label: "Visit", href: "https://blood-donations-indol.vercel.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/blood-donations" },
        ],
      },
      {
        name: "Chatty",
        image: "/assets/chatty.png",
        description: "Realtime fullstack messaging app with modern UX.",
        links: [
          { label: "Visit", href: "https://chatty-fullstack.vercel.app" },
          { label: "Code", href: "https://github.com/jchiwaii/chatty-fullstack" },
        ],
      },
      {
        name: "Kanga",
        image: "/assets/kanga.png",
        description: "Tailoring website blending Swahili elegance and modern UI.",
        links: [
          { label: "Visit", href: "https://kanga.netlify.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/kanga" },
        ],
      },
      {
        name: "Netflix Clone",
        image: "/assets/netflix.png",
        description: "TMDB-powered streaming interface with responsive design.",
        links: [
          { label: "Visit", href: "https://ck-gpt.web.app/" },
          { label: "Code", href: "https://github.com/jchiwaii/netflixCK" },
        ],
      },
    ],
  },
  {
    num: "04",
    title: "Web3",
    items: [
      {
        name: "CREPE (BNB Meme Coin)",
        image: "/assets/crepe.png",
        description: "Brand and launch website for a BNB chain meme coin.",
        links: [{ label: "Visit", href: "https://crepebnb.netlify.app/" }],
      },
    ],
  },
];

export default function ProjectsPage() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-white font-mono text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[150px] md:pb-[56px] md:pt-[96px]">
        <div className="mx-auto flex w-full max-w-[1130px] flex-col gap-10 md:gap-[84px]">

          <div className="h-[2px] w-full bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <h1 className="text-[34px] leading-[1.03] tracking-[-0.03em] text-zinc-900 dark:text-zinc-100 md:text-[56px]">
              Projects
            </h1>
            <p className="text-[24px] leading-none text-zinc-400 dark:text-zinc-600 md:pt-1 md:text-[32px]">
              ©{year}
            </p>
          </div>

          <div className="md:ml-[96px]">
            <ProjectsAccordion sections={sections} />
          </div>

        </div>
      </div>
    </section>
  );
}
