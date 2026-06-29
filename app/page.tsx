import Link from "next/link";
import { MoveDownRight, Plus } from "lucide-react";
import { BrandMark } from "./components/brand-mark";
import { PlaceholderMedia } from "./components/placeholder-media";
import { domains } from "lib/portfolio-data";

const colorDots = ["#d8ebff", "#efe6ff", "#dff7df", "#f4f4ef"];

const serviceLine =
  "Data Analysis / Data Science / Frontend Development / Fullstack Projects / AI Projects / Mobile Apps / Dashboards / Product Systems / Research / Interfaces / Automation";

function SmallWorkMark() {
  return (
    <svg
      width="25"
      height="14"
      viewBox="0 0 25 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <g clipPath="url(#small-work-mark-outer)">
        <g clipPath="url(#small-work-mark-inner)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.12649 -0.00556486C9.0667 -0.00156965 9.00851 0.0154172 8.95596 0.0442113L0.69865 4.57753C0.633987 4.61333 0.580117 4.66583 0.542663 4.72955C0.505209 4.79327 0.485544 4.86587 0.485719 4.93979V10.7101C0.48585 10.7821 0.504804 10.8528 0.5407 10.9153C0.576596 10.9777 0.628187 11.0296 0.690354 11.0659L5.64769 13.952C5.70938 13.9883 5.77944 14.008 5.85101 14.0091C5.92258 14.0103 5.99323 13.9928 6.05604 13.9585L14.3124 9.41964C14.3771 9.38384 14.431 9.33134 14.4684 9.26762C14.5059 9.2039 14.5255 9.13129 14.5254 9.05738V3.29164C14.5252 3.21964 14.5063 3.14893 14.4704 3.08652C14.4345 3.0241 14.3829 2.97216 14.3207 2.93584L9.36339 0.0506638C9.29186 0.00853876 9.20931 -0.011056 9.12649 -0.00556486ZM13.6967 3.98759V8.81772L6.26528 12.8975V8.06831L13.6967 3.98759ZM1.31532 5.65785L5.43937 8.06186V12.8772L1.31532 10.4742V5.65785Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="small-work-mark-outer">
          <rect width="15" height="14" fill="white" />
        </clipPath>
        <clipPath id="small-work-mark-inner">
          <rect width="14.0286" height="14" fill="white" transform="translate(0.485718)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function WorkRow({ domain }: { domain: (typeof domains)[number] }) {
  return (
    <Link
      href={`/projects/${domain.slug}`}
      className="grid gap-4 border-t border-black py-4 md:grid-cols-[minmax(0,1fr)_128px_minmax(320px,640px)] md:gap-4 md:py-6"
    >
      <div>
        <p className="mb-2 flex items-center gap-2 font-mono text-[8px] uppercase leading-none text-black">
          <span className="h-2 w-2 rounded-full bg-black" />
          {domain.eyebrow}
        </p>
        <h3 className="text-[24px] font-semibold uppercase leading-none text-black md:text-[32px]">
          {domain.title}
        </h3>
      </div>

      <div className="flex items-start gap-2 font-mono text-[16px] leading-none text-black md:justify-end">
        Info <Plus size={16} strokeWidth={2} />
      </div>

      <PlaceholderMedia
        label={`${domain.title} image placeholder`}
        className="min-h-[216px] md:min-h-[272px]"
      />
    </Link>
  );
}

export default function Page() {
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

      <section
        id="first"
        className="mx-auto flex min-h-[640px] w-full max-w-[1920px] items-center justify-center px-6 pt-16 md:min-h-[800px] md:px-12"
      >
        <div className="flex w-fit items-center justify-center gap-8 md:gap-16">
          <BrandMark className="h-[96px] w-[96px] md:h-[240px] md:w-[240px]" />
          <h1 className="text-center text-[80px] font-semibold leading-none text-black md:text-[224px]">
            chi:wai<sup className="ml-2 align-top text-[40px] md:text-[72px]">©</sup>
          </h1>
        </div>
      </section>

      <section
        id="domains"
        className="mx-auto w-full max-w-[1920px] px-6 py-16 md:px-12"
      >
        <div className="mb-8 grid gap-8 md:grid-cols-[minmax(240px,0.36fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[8px] uppercase leading-none text-black">
              <SmallWorkMark />
              Some of what I do
            </p>
            <div className="flex items-end gap-8">
              <h2 className="text-[40px] font-semibold uppercase leading-none text-black md:text-[64px]">
                Selected
                <br />
                Work
              </h2>
              <MoveDownRight
                size={48}
                strokeWidth={1.75}
                className="mb-2 hidden md:block"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-black">
          {domains.map((domain) => (
            <WorkRow key={domain.slug} domain={domain} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 py-16 md:px-12">
        <div className="grid gap-8 border-y border-black py-8 md:grid-cols-[minmax(240px,0.36fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[8px] uppercase leading-none text-black">
              <span className="text-[16px] leading-none">*</span>
              Services
            </p>
            <h2 className="text-[40px] font-semibold uppercase leading-none text-black md:text-[64px]">
              What we do
              <br />
              for the clients
            </h2>
            <MoveDownRight
              size={56}
              strokeWidth={1.75}
              className="ml-32 mt-8 hidden md:block"
            />
          </div>

          <div className="pt-0 md:pt-8">
            <p className="mb-8 max-w-[760px] font-mono text-[8px] leading-[16px] text-black">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="max-w-[976px] text-[24px] font-semibold leading-[40px] text-black md:text-[40px] md:leading-[56px]">
              {serviceLine}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
