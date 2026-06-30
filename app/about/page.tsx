import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PlaceholderMedia } from "../components/placeholder-media";

export const metadata: Metadata = {
  title: "About",
  description: "About Chiwai, the work he does, and his writing.",
};

const colorDots = ["#d8ebff", "#efe6ff", "#dff7df", "#f4f4ef"];

const values = [
  {
    title: "Vision",
    text: "Make confusing things clearer through data, software, writing, and useful interfaces.",
  },
  {
    title: "Mission",
    text: "Build work that helps people understand a problem, move faster, or make a better decision.",
  },
  {
    title: "Strategy",
    text: "Start from the question, shape the material, then turn it into something practical enough to use.",
  },
  {
    title: "Values",
    text: "Curiosity, clarity, usefulness, and a bias toward making ideas visible instead of leaving them abstract.",
  },
  {
    title: "Design",
    text: "Interfaces and visuals should carry the thinking, not decorate around it.",
  },
];

const mediumLinks = [
  {
    title: "Box Plots Unboxed",
    date: "Jun 16",
    href: "https://medium.com/@chiwai.kiriba/box-plots-unboxed-2dfe5aec46b7",
  },
  {
    title: "Why Power BI Feels Like Climbing a Greased Pole After Learning Tableau",
    date: "Jun 12",
    href: "https://medium.com/@chiwai.kiriba/why-power-bi-feels-like-climbing-a-greased-pole-after-learning-tableau-3d40e5f51719",
  },
  {
    title: "I designed this simple dashboard in Power BI and Figma - no DAX",
    date: "May 20",
    href: "https://medium.com/@chiwai.kiriba/i-designed-this-simple-dashboard-in-power-bi-and-figma-no-dax-4bda638d03d0",
  },
  {
    title: "What Nairobi's Weather Taught Me About Time Series Forecasting",
    date: "May 14",
    href: "https://medium.com/@chiwai.kiriba/what-nairobis-weather-taught-me-about-time-series-forecasting-aaade4711b62",
  },
  {
    title: "AI Made Me a Beautiful Dashboard... and Zero Sales",
    date: "May 2",
    href: "https://medium.com/@chiwai.kiriba/ai-made-me-a-beautiful-dashboard-and-zero-sales-75a48cd40bbd",
  },
  {
    title: "I used Figma and Power BI to design this weather dashboard",
    date: "Apr 6",
    href: "https://medium.com/@chiwai.kiriba/i-used-figma-and-power-bi-to-design-this-weather-dashboard-cea46c83dd12",
  },
  {
    title: "DataCamp Project | Analyzing Motorcycle Sales",
    date: "Mar 1",
    href: "https://medium.com/@chiwai.kiriba/datacamp-project-analyzing-motorcycle-sales-b940d68ec255",
  },
];

export default function AboutPage() {
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
        <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase leading-none text-black">
          <span className="h-2 w-2 rotate-45 bg-black" />
          Who I am
        </p>
        <h1 className="text-[56px] font-normal uppercase leading-none text-black md:text-[88px]">
          About me
        </h1>

        <div className="mx-auto mt-28 grid max-w-[1720px] gap-5 text-[18px] leading-[28px] text-black md:text-[20px] md:leading-[32px]">
          <p>
            Based actuarial graduate specialized in finding solutions between
            data and the web.
          </p>
          <p>
            Nothing is too hard to crack. I&apos;m driven by a chronic curiosity
            and a passion for telling stories through code, pictures and data.
          </p>
          <p>
            Building scalable creative solutions that at least go beyond the
            hype.
          </p>
          <p>
            Sometimes I write, sometimes I code, other times I am behind a lens,
            and most of the times, I enjoy my own company.
          </p>
          <p>
            Open to long term meaningful projects that involve data, AI, web2,
            and web3.
          </p>
          <p>Ardent love of African Literature.</p>
          <p>Perfect mind. Excellent Spirit.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-24 md:px-12">
        <div className="grid gap-0 md:grid-cols-[minmax(320px,0.34fr)_minmax(0,1fr)]">
          <div className="relative pt-7">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black md:border-r-0" />
            <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase leading-none text-black">
              <span className="h-2 w-2 rounded-full bg-black" />
              Core values
            </p>
            <h2 className="text-[40px] font-normal uppercase leading-none text-black md:text-[64px]">
              The
              <br />
              practice
            </h2>
          </div>

          <div className="relative pt-7 md:px-8">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black" />
            <div className="grid gap-x-16 gap-y-16 md:grid-cols-3">
              {values.map((item) => (
                <section key={item.title}>
                  <h3 className="text-[28px] font-normal uppercase leading-none text-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[20px] text-black">
                    {item.text}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>

        <PlaceholderMedia
          label="About image placeholder"
          className="mt-24 aspect-[3/1] min-h-[320px]"
        />
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-32 md:px-12">
        <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase leading-none text-black">
          <span className="grid h-3 w-3 grid-cols-2 gap-0.5">
            <span className="h-1 w-1 rounded-full bg-black" />
            <span className="h-1 w-1 rounded-full bg-black" />
            <span className="h-1 w-1 rounded-full bg-black" />
            <span className="h-1 w-1 rounded-full bg-black" />
          </span>
          Writing
        </p>
        <h2 className="text-[40px] font-normal uppercase leading-none text-black md:text-[64px]">
          Medium notes
        </h2>

        <div className="relative mt-16 pt-6">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black" />
          <div className="grid grid-cols-[112px_minmax(0,1fr)_40px] border-b border-black pb-4 text-[18px] uppercase leading-none text-black md:grid-cols-[240px_minmax(0,1fr)_64px]">
            <span>Date</span>
            <span>Article</span>
            <span className="text-right">Link</span>
          </div>

          {mediumLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[112px_minmax(0,1fr)_40px] items-center border-b border-black py-4 text-[18px] leading-[24px] text-black transition-opacity hover:opacity-60 md:grid-cols-[240px_minmax(0,1fr)_64px] md:text-[22px] md:leading-[28px]"
            >
              <span>{link.date}</span>
              <span>{link.title}</span>
              <span className="flex justify-end">
                <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
