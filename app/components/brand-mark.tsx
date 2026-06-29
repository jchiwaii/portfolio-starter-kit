type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 389 367"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M194.222 0L38.4332 72.7222L-0.00317383 236.014L107.799 367H280.645L388.447 236.014L350.014 72.7222L194.222 0Z"
        fill="black"
      />
    </svg>
  );
}

export function BrandLockup() {
  return (
    <span className="inline-flex items-center gap-2 font-sans text-[16px] font-semibold leading-none text-black">
      <BrandMark className="h-6 w-6" />
      <span>
        chi:wai<sup className="ml-1 text-[8px] leading-none">©</sup>
      </span>
    </span>
  );
}
