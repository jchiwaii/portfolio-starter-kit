function ContactMark() {
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
      <g clipPath="url(#contact-mark-outer)">
        <g clipPath="url(#contact-mark-inner)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 0L5.02511 4.52511L0.5 7L5.02511 9.47489L7.5 14L9.97411 9.47489L14.5 7L9.97411 4.52511L7.5 0Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="contact-mark-outer">
          <rect width="15" height="14" fill="white" />
        </clipPath>
        <clipPath id="contact-mark-inner">
          <rect width="14" height="14" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-8 text-black md:px-12">
      <div className="mx-auto w-full max-w-[1920px] border-t border-black pt-8">
        <p className="mb-2 flex items-center gap-1 font-mono text-[8px] uppercase leading-none text-black">
          <ContactMark />
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
    </footer>
  );
}
