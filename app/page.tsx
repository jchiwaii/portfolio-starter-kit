import Link from "next/link";
import { Plus } from "lucide-react";
import { BrandMark } from "./components/brand-mark";
import { PlaceholderMedia } from "./components/placeholder-media";
import { domains } from "lib/portfolio-data";

const colorDots = ["#d8ebff", "#efe6ff", "#dff7df", "#f4f4ef"];

const serviceLine =
  "Data Analysis / Data Science / Frontend Development / Fullstack Systems / AI Systems / Mobile Apps / Dashboards / Product Systems / Research / Interfaces / Automation";

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

function SelectedWorkArrow() {
  return (
    <svg
      width="57"
      height="60"
      viewBox="0 0 57 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="hidden shrink-0 md:block"
    >
      <g clipPath="url(#selected-work-arrow)">
        <path
          d="M52.7628 55.3858C52.7628 54.9823 52.7628 54.8814 52.7628 54.6796C52.7628 54.4779 52.6619 54.377 52.6619 54.0743C51.8549 54.5787 51.2496 54.1752 50.6442 53.6708C48.6265 51.9557 46.9115 49.938 45.1965 47.8195C42.1699 43.8849 39.1434 39.8495 36.1168 35.915C35.108 34.6035 33.9982 33.292 32.7876 32.1823C31.2743 30.7699 30.7699 30.8708 29.5593 32.6867C29.2566 33.0903 28.954 33.5947 28.6513 33.9982C27.3398 35.6124 25.5239 35.8141 24.0106 34.4018C23.0018 33.5947 22.1947 32.4849 21.4885 31.4761C19.3699 28.4495 17.6549 25.1203 16.0407 21.7911C13.8212 17.0495 11.6018 12.2071 9.3823 7.46548C8.97876 6.45663 8.47433 5.54866 7.86902 4.6407C7.66725 4.6407 7.46548 4.33805 7.16283 3.93451C6.86017 4.6407 6.55752 5.24601 6.35575 5.85132C5.24601 9.58406 4.53982 13.4177 4.03539 17.3522C3.43008 22.0938 3.22831 26.8354 3.43008 31.577C3.43008 31.9805 3.53097 32.3841 3.43008 32.6867C3.3292 33.3929 3.02654 33.7964 2.42123 33.9982C1.81592 34.0991 1.10973 33.8973 0.907959 33.1911C0.706189 32.7876 0.504419 32.2832 0.504419 31.6779C0.302649 30.2655 0.100879 28.7522 0.100879 27.2389C-0.100891 20.177 0.807074 13.0142 2.623 6.15397C2.92566 5.04424 3.43008 3.83362 3.83362 2.72389C3.93451 2.623 4.03539 2.42123 4.13628 2.21946C5.75044 -0.504433 8.27256 -0.807088 9.98761 1.91681C11.1982 3.83362 12.308 5.85132 13.2159 7.86902C15.9398 13.4177 18.3611 19.0672 21.1858 24.515C22.2956 26.7345 23.708 28.7522 24.9186 30.7699C25.2212 31.1734 25.6248 31.577 26.0283 32.0814C26.5327 31.3752 26.9363 30.7699 27.3398 30.1646C29.0549 27.7434 31.0726 27.3398 33.5947 28.8531C35.5115 29.9628 36.9239 31.577 38.1345 33.292C42.4726 39.446 46.7097 45.6 50.9469 51.8549C51.3504 52.3593 51.6531 52.9646 52.0566 53.6708C52.4602 53.0655 52.1575 52.6619 52.0566 52.2584C51.2496 48.9292 50.7451 45.6 50.4425 42.1699C50.4425 41.5646 50.4425 40.9593 50.4425 40.1522C51.2496 40.6566 51.5522 41.1611 51.8549 41.7664C52.7628 44.0867 53.7717 46.4071 54.5788 48.8283C55.3858 51.1487 55.8903 53.6708 56.4956 55.9911C56.5965 56.4956 56.6973 57.1009 56.7982 57.6053C56.7982 59.0177 55.6885 59.9257 54.2761 59.7239C53.9734 59.7239 53.7717 59.623 53.5699 59.5221C51.0478 58.5133 48.5257 57.6053 46.1044 56.4956C45.2973 56.1929 44.5911 55.6885 43.9858 55.2849C43.6832 55.0832 43.3805 54.7805 43.0779 54.377C42.6743 53.8726 42.6743 53.2672 43.0779 52.7628C43.4814 52.1575 43.9858 52.0566 44.5911 52.2584C44.9947 52.3593 45.3982 52.5611 45.8018 52.7628C48.0212 53.5699 50.2407 54.4779 52.7628 55.3858Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="selected-work-arrow">
          <rect width="57" height="59.623" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ServicesMark() {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="15" height="14" fill="url(#services-mark-pattern)" />
      <defs>
        <pattern
          id="services-mark-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#services-mark-image" transform="scale(0.0588235 0.0555556)" />
        </pattern>
        <image
          id="services-mark-image"
          width="17"
          height="18"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAABZElEQVR4AZSSO0sDQRSF1zeIaGMjsRLBxy8QsVEbS0WxExELRTtBBLGzEES0EbGw0lLUzs5Ugv4CFRQbFeuEJISQ13eWnTCEHSYJ55t7Z+7MyezubQ38vzW29INTPhPV9zm9CU5pk7NIYR6GYQs6IVY+k93o1ABxBWIlkzYqG7AAE5CAdlAuSEPtMLZAN4zCNMh4RiYlJh1wDy/wC3l4AlvjTNKQhXdIwil8yoQYnDPcgZFup380cxN7TEKswCr8GBPyYJ3hGxrVMRsfIbBNUiwsQwF8embDAYSyTbSgKyo2hW3Sx8lbcPYDNaMpkkMIZZtcsTIEjWqPjXNQeyfbTJbAqEySg3plrAX1zA3zhG6iz6leWWRhEgahC2bB1huTXtBnHiOqrgYckYkMLlk0zfZHXoTXCEKoM0a9eDXbB7maTTdJyoS5UydR5Z94DbHymTxw6gsuwNk/PhO94CMM9LiEeFUBAAD//2E2VtEAAAAGSURBVAMANKo5m3SdG1gAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

function ServicesArrow() {
  return (
    <svg
      width="140"
      height="135"
      viewBox="0 0 140 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="hidden shrink-0 md:block"
    >
      <g clipPath="url(#services-arrow)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.61998 0.0100098C3.44074 0.549939 2.32402 1.21723 1.2899 2C-0.910099 4.07 -0.230069 6.9999 2.56993 8.1499C2.70993 8.2099 2.83987 8.28987 3.00987 8.36987C2.47987 10.8399 1.89981 13.28 1.44981 15.74C-0.398321 26.2306 -0.102254 36.9867 2.31993 47.3599C7.03993 68.2699 17.0098 86.49 31.4698 102.26C38.4098 109.84 46.5699 115.95 56.4899 119.09C68.7699 122.99 80.7399 122.21 92.0099 115.44C92.1888 115.35 92.3853 115.299 92.5856 115.292C92.7858 115.286 92.9853 115.322 93.17 115.4C102.42 120.28 112.38 122.06 122.72 122.14C124.87 122.16 127.03 122.15 129.48 122.15C127.67 123.34 126.09 124.36 124.52 125.42C122.4 126.85 120.27 128.27 118.18 129.75C116.18 131.15 116.1 132.44 117.84 134.09H119.28C124.68 130.49 130.08 126.897 135.48 123.31C136.993 122.498 138.223 121.246 139.01 119.72C139.01 119.16 139.01 118.6 139.02 118.04C138.645 117.262 138.094 116.581 137.41 116.054C136.726 115.526 135.928 115.165 135.08 115C131.628 114.096 128.336 112.666 125.32 110.76C123.902 109.796 122.546 108.743 121.26 107.61C120.735 107.131 120.404 106.477 120.33 105.77C120.29 104.85 120.24 104.15 119.19 104.03C118.691 104.051 118.214 104.243 117.841 104.575C117.467 104.906 117.22 105.357 117.14 105.85C117.17 106.525 117.312 107.191 117.56 107.82C118.487 110.013 120.078 111.859 122.11 113.1C124.53 114.71 127.09 116.1 129.73 117.68C118.11 118.27 106.82 117.41 96.18 112.2C97.18 110.95 98.1999 109.82 99.0499 108.57C102.2 103.95 103.77 98.9799 102 93.3999C100.79 89.5799 98.53 86.6899 94.37 85.9299C89.94 85.1399 86.4299 86.8899 83.7899 90.3899C82.0127 92.6841 81.0063 95.4815 80.9147 98.3821C80.8231 101.283 81.651 104.138 83.2799 106.54C84.7829 108.61 86.4022 110.593 88.13 112.48C87.25 112.95 86.21 113.58 85.1 114.07C76.13 118.04 66.9999 118.08 57.7999 115.01C50.2706 112.427 43.423 108.174 37.7699 102.57C21.3899 86.6898 10.1198 67.81 4.94981 45.53C2.14189 33.9112 2.10778 21.7945 4.84996 10.1599C4.94996 9.77991 5.06004 9.38992 5.18004 8.91992C5.57004 8.91992 5.95996 8.92992 6.34996 8.91992C7.15981 8.8914 7.93762 8.59675 8.5631 8.08154C9.18857 7.56634 9.6268 6.85921 9.80992 6.06982C10.0516 4.7092 10.038 3.31563 9.76988 1.95996C9.63355 1.44836 9.32805 0.997814 8.90318 0.681885C8.47831 0.365956 7.95923 0.203246 7.43004 0.219971C7.05004 0.179971 6.67991 0.0800098 6.29991 0.0100098H4.61998ZM91.91 109.71C89.5536 108.209 87.5838 106.174 86.16 103.77C85.051 101.826 84.6723 99.5504 85.0921 97.3523C85.512 95.1542 86.7025 93.1782 88.4498 91.78C91.8598 88.96 95.78 89.74 97.65 93.72C98.2122 94.8628 98.5127 96.1164 98.5299 97.3899C98.4399 102.56 95.5 106.27 91.91 109.71Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="services-arrow">
          <rect width="139.03" height="134.1" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function WorkRow({ domain }: { domain: (typeof domains)[number] }) {
  return (
    <Link
      href={`/projects/${domain.slug}`}
      className="grid gap-0 py-4 md:grid-cols-[minmax(0,1fr)_minmax(320px,640px)]"
    >
      <div className="relative pt-6">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black md:border-r-0" />
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_128px]">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[8px] uppercase leading-none text-black">
              <span className="h-2 w-2 rounded-full bg-black" />
              {domain.eyebrow}
            </p>
            <h3 className="text-[24px] font-normal uppercase leading-none text-black md:text-[32px]">
              {domain.title}
            </h3>
          </div>

          <div className="flex items-start gap-2 font-mono text-[16px] leading-none text-black md:justify-end">
            Info <Plus size={16} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="relative pt-6 md:px-4">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black" />
        <PlaceholderMedia
          label={`${domain.title} image placeholder`}
          className="min-h-[216px] md:min-h-[272px]"
        />
      </div>
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
            <p className="mb-2 flex items-center gap-1 font-mono text-[8px] uppercase leading-none text-black">
              <SmallWorkMark />
              Some of what I do
            </p>
            <div className="flex items-end gap-8">
              <h2 className="text-[40px] font-normal uppercase leading-none text-black md:text-[64px]">
                Selected
                <br />
                Work
              </h2>
              <SelectedWorkArrow />
            </div>
          </div>
        </div>

        <div>
          {domains.map((domain) => (
            <WorkRow key={domain.slug} domain={domain} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 py-16 md:px-12">
        <div className="grid gap-0 py-8 md:grid-cols-[minmax(360px,0.84fr)_minmax(0,1fr)]">
          <div className="relative pt-6">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black md:border-r-0" />
            <p className="mb-2 flex items-center gap-1 font-mono text-[8px] uppercase leading-none text-black">
              <ServicesMark />
              Services
            </p>
            <h2 className="text-[32px] font-normal uppercase leading-none text-black md:text-[64px]">
              What I do
              <br />
              day to day
            </h2>
            <div className="ml-32 mt-8">
              <ServicesArrow />
            </div>
          </div>

          <div className="relative pt-6 md:px-8 lg:pr-24">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-5 rounded-t-[10px] border-x border-t border-black" />
            <p className="mb-8 max-w-[760px] font-mono text-[8px] leading-[16px] text-black">
              Nothing is too hard to crack. I&apos;m driven by chronic curiosity
              and a passion for telling stories through code, pictures and data.
              Building scalable creative solutions that go beyond the hype.
            </p>
            <p className="max-w-[976px] text-[24px] font-semibold leading-[40px] text-black md:text-[32px] md:leading-[48px]">
              {serviceLine}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
