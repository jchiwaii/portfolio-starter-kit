export default function Footer() {
  return (
    <footer className="bg-white px-6 py-8 text-black md:px-12">
      <div className="mx-auto flex w-full max-w-[1920px] justify-center">
        <div className="flex gap-4 font-mono text-[16px] leading-none text-black">
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
