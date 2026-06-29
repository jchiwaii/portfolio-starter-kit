import { ImageIcon } from "lucide-react";

type PlaceholderMediaProps = {
  label: string;
  className?: string;
};

export function PlaceholderMedia({ label, className = "" }: PlaceholderMediaProps) {
  return (
    <div
      className={`flex aspect-[3/2] w-full items-center justify-center bg-[#c7c5ca] text-[#242326] ${className}`}
      aria-label={label}
    >
      <div className="relative flex h-20 w-20 items-center justify-center md:h-28 md:w-28">
        <div className="absolute h-[72%] w-[86%] translate-y-2 -rotate-12 rounded-md bg-[#242326]" />
        <div className="relative grid h-[72%] w-[86%] place-items-center rounded-md border-[10px] border-[#242326] bg-[#c7c5ca]">
          <ImageIcon size={44} strokeWidth={2.6} className="text-[#242326]" />
        </div>
      </div>
    </div>
  );
}

