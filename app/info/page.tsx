import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Info",
  description:
    "Medium articles, Zindi profile, and verified certifications for John Chiwai.",
};

const colorDots = ["#d8ebff", "#efe6ff", "#dff7df", "#f4f4ef"];

const articles = [
  {
    title: "How I Built a Dashboard to Analyze 60K Job Listings",
    note: "Kenya jobs",
    href: "https://medium.com/@chiwai.kiriba/how-i-built-a-dashboard-to-analyze-60k-job-listings-8a7222f01954?sharedUserId=chiwai.kiriba",
  },
  {
    title: "The Shilling, The Strain, and The Dream",
    note: "CBK data",
    href: "https://medium.com/@chiwai.kiriba/the-shilling-the-strain-and-the-dream-kenyas-economy-in-numbers-2dd273d03d05",
  },
  {
    title: "What Nairobi's Weather Taught Me About Time Series Forecasting",
    note: "ARIMA",
    href: "https://medium.com/@chiwai.kiriba/what-nairobis-weather-taught-me-about-time-series-forecasting-aaade4711b62",
  },
  {
    title: "Box Plots Unboxed",
    note: "Statistics",
    href: "https://medium.com/@chiwai.kiriba/box-plots-unboxed-2dfe5aec46b7",
  },
  {
    title: "Why Power BI Feels Like Climbing a Greased Pole After Learning Tableau",
    note: "BI tools",
    href: "https://medium.com/@chiwai.kiriba/why-power-bi-feels-like-climbing-a-greased-pole-after-learning-tableau-3d40e5f51719",
  },
  {
    title: "I Designed This Simple Dashboard in Power BI and Figma - No DAX",
    note: "Dashboards",
    href: "https://medium.com/@chiwai.kiriba/i-designed-this-simple-dashboard-in-power-bi-and-figma-no-dax-4bda638d03d0",
  },
  {
    title: "AI Made Me a Beautiful Dashboard... and Zero Sales",
    note: "AI",
    href: "https://medium.com/@chiwai.kiriba/ai-made-me-a-beautiful-dashboard-and-zero-sales-75a48cd40bbd",
  },
  {
    title: "DataCamp Project | Analyzing Motorcycle Sales",
    note: "Analytics",
    href: "https://medium.com/@chiwai.kiriba/datacamp-project-analyzing-motorcycle-sales-b940d68ec255",
  },
];

const profiles = [
  {
    title: "Zindi",
    note: "Competitions portfolio",
    href: "https://zindi.africa/users/chiwai/competitions/portfolio",
  },
  {
    title: "Medium",
    note: "Writing archive",
    href: "https://medium.com/@chiwai.kiriba",
  },
  {
    title: "GitHub",
    note: "Code and projects",
    href: "https://github.com/jchiwaii",
  },
  {
    title: "LinkedIn",
    note: "Professional profile",
    href: "https://www.linkedin.com/in/john-chiwai/",
  },
];

const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    note: "Microsoft",
    href: "https://learn.microsoft.com/en-us/users/johnkiriba-6260/credentials/3504909743949539",
  },
];

function SmallWorkMark() {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <g clipPath="url(#info-work-mark-outer)">
        <g clipPath="url(#info-work-mark-inner)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.12649 -0.00556486C9.0667 -0.00156965 9.00851 0.0154172 8.95596 0.0442113L0.69865 4.57753C0.633987 4.61333 0.580117 4.66583 0.542663 4.72955C0.505209 4.79327 0.485544 4.86587 0.485719 4.93979V10.7101C0.48585 10.7821 0.504804 10.8528 0.5407 10.9153C0.576596 10.9777 0.628187 11.0296 0.690354 11.0659L5.64769 13.952C5.70938 13.9883 5.77944 14.008 5.85101 14.0091C5.92258 14.0103 5.99323 13.9928 6.05604 13.9585L14.3124 9.41964C14.3771 9.38384 14.431 9.33134 14.4684 9.26762C14.5059 9.2039 14.5255 9.13129 14.5254 9.05738V3.29164C14.5252 3.21964 14.5063 3.14893 14.4704 3.08652C14.4345 3.0241 14.3829 2.97216 14.3207 2.93584L9.36339 0.0506638C9.29186 0.00853876 9.20931 -0.011056 9.12649 -0.00556486ZM13.6967 3.98759V8.81772L6.26528 12.8975V8.06831L13.6967 3.98759ZM1.31532 5.65785L5.43937 8.06186V12.8772L1.31532 10.4742V5.65785Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="info-work-mark-outer">
          <rect width="15" height="14" fill="white" />
        </clipPath>
        <clipPath id="info-work-mark-inner">
          <rect width="14.0286" height="14" fill="white" transform="translate(0.485718)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DiamondMark() {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 0L5.02511 4.52511L0.5 7L5.02511 9.47489L7.5 14L9.97411 9.47489L14.5 7L9.97411 4.52511L7.5 0Z"
        fill="black"
      />
    </svg>
  );
}

function FourDotMark() {
  return (
    <span className="grid h-[14px] w-[15px] shrink-0 grid-cols-2 content-center gap-1">
      <span className="h-1 w-1 rounded-full bg-black" />
      <span className="h-1 w-1 rounded-full bg-black" />
      <span className="h-1 w-1 rounded-full bg-black" />
      <span className="h-1 w-1 rounded-full bg-black" />
    </span>
  );
}

function SectionLabel({
  children,
  mark = "small",
}: {
  children: string;
  mark?: "small" | "diamond" | "dots";
}) {
  return (
    <p className="mb-2 flex items-center gap-1 font-mono text-[8px] uppercase leading-none text-black">
      {mark === "small" && <SmallWorkMark />}
      {mark === "diamond" && <DiamondMark />}
      {mark === "dots" && <FourDotMark />}
      {children}
    </p>
  );
}

function TopBorder({ joinLeft = false }: { joinLeft?: boolean }) {
  return (
    <span
      className={`pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black ${
        joinLeft ? "md:border-l-0" : ""
      }`}
    />
  );
}

function LinkRow({
  title,
  note,
  href,
}: {
  title: string;
  note: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-cols-[minmax(0,1fr)_96px_24px] items-start gap-4 border-b border-black py-4 text-black transition-opacity hover:opacity-60 md:grid-cols-[minmax(0,1fr)_192px_40px] md:items-center"
    >
      <span className="text-[20px] font-normal uppercase leading-[22px] md:text-[28px] md:leading-[30px]">
        {title}
      </span>
      <span className="font-mono text-[10px] uppercase leading-[16px] text-black md:text-[12px]">
        {note}
      </span>
      <span className="flex justify-end pt-1 md:pt-0">
        <ArrowUpRight size={18} strokeWidth={2} />
      </span>
    </a>
  );
}

function LinkTable({
  items,
  noteLabel,
}: {
  items: Array<{ title: string; note: string; href: string }>;
  noteLabel: string;
}) {
  return (
    <div>
      <div className="grid grid-cols-[minmax(0,1fr)_96px_24px] gap-4 border-b border-black pb-4 font-mono text-[10px] uppercase leading-none text-black md:grid-cols-[minmax(0,1fr)_192px_40px] md:text-[12px]">
        <span>Title</span>
        <span>{noteLabel}</span>
        <span className="text-right">Open</span>
      </div>
      {items.map((item) => (
        <LinkRow key={item.href} {...item} />
      ))}
    </div>
  );
}

export default function InfoPage() {
  return (
    <section className="bg-white text-black">
      <div className="fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {colorDots.map((color) => (
          <span
            key={color}
            className="h-4 w-4 rounded-full border border-black"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-20 pt-40 md:px-12 md:pb-24 md:pt-56">
        <SectionLabel>Info</SectionLabel>
        <h1 className="text-[56px] font-normal uppercase leading-none text-black md:text-[88px]">
          Info
        </h1>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-24 md:px-12">
        <div className="grid gap-0 md:grid-cols-[minmax(280px,0.34fr)_minmax(0,1fr)]">
          <div className="relative pt-6">
            <TopBorder />
            <SectionLabel mark="dots">Medium</SectionLabel>
            <h2 className="text-[40px] font-normal uppercase leading-none text-black md:text-[64px]">
              Articles
            </h2>
          </div>
          <div className="relative pt-6 md:px-8">
            <TopBorder joinLeft />
            <LinkTable items={articles} noteLabel="Focus" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-24 md:px-12">
        <div className="grid gap-0 md:grid-cols-[minmax(280px,0.34fr)_minmax(0,1fr)]">
          <div className="relative pt-6">
            <TopBorder />
            <SectionLabel>Profiles</SectionLabel>
            <h2 className="text-[40px] font-normal uppercase leading-none text-black md:text-[64px]">
              Links
            </h2>
          </div>
          <div className="relative pt-6 md:px-8">
            <TopBorder joinLeft />
            <LinkTable items={profiles} noteLabel="Type" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-32 md:px-12">
        <div className="grid gap-0 md:grid-cols-[minmax(280px,0.34fr)_minmax(0,1fr)]">
          <div className="relative pt-6">
            <TopBorder />
            <SectionLabel mark="diamond">Certifications</SectionLabel>
            <h2 className="text-[40px] font-normal uppercase leading-none text-black md:text-[64px]">
              Verified
            </h2>
          </div>
          <div className="relative pt-6 md:px-8">
            <TopBorder joinLeft />
            <LinkTable items={certifications} noteLabel="Issuer" />
          </div>
        </div>
      </section>
    </section>
  );
}
