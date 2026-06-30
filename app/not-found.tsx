import Link from "next/link";

export default function NotFound() {
  return (
    <section className="fixed inset-0 z-[60] flex min-h-screen items-center justify-center bg-white px-6 text-black">
      <div className="relative flex w-full max-w-[720px] flex-col items-center pt-20 text-center">
        <span className="absolute left-1/2 top-0 h-5 w-full -translate-x-1/2 rounded-t-[10px] border-x border-t border-black" />

        <h1 className="text-[120px] font-normal leading-none tracking-normal text-[#101318] md:text-[192px]">
          404
        </h1>
        <h2 className="mt-7 text-[36px] font-semibold uppercase leading-none text-[#101318] md:text-[52px]">
          Page not found
        </h2>
        <p className="mt-5 max-w-[560px] text-[15px] leading-[24px] text-black md:text-[16px]">
          The page you are looking for doesn&apos;t exist or has been moved
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex h-12 min-w-[176px] items-center justify-center rounded-full bg-[#101318] px-8 text-[16px] leading-none text-white transition-opacity hover:opacity-80"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
