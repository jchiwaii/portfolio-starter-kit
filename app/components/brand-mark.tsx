type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`block shrink-0 bg-black ${className}`}
      style={{
        clipPath:
          "polygon(50% 0%, 85% 14%, 100% 50%, 85% 86%, 50% 100%, 15% 86%, 0% 50%, 15% 14%)",
      }}
      aria-hidden="true"
    />
  );
}

export function BrandLockup() {
  return (
    <span className="inline-flex items-center gap-2 font-sans text-lg font-semibold leading-none text-black">
      <BrandMark className="h-7 w-7" />
      <span>
        chiwai<sup className="ml-0.5 text-[10px] leading-none">©</sup>
      </span>
    </span>
  );
}

