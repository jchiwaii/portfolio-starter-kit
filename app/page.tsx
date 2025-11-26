import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className="mb-16">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          chiwai
        </h1>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
          Fulltime founder, part-time developer, professional learner, avid
          thinker, and pure math connoisseur.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Portfolio <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 rounded-lg font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="my-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">About</h2>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            Nothing is too hard to crack. I'm driven by a chronic curiosity and
            a passion for telling stories through code, pictures and data.
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
          <p>Perfect mind. Excellent Spirit. I love math a lot.</p>
        </div>
      </div>

      <div className="my-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.oyaah.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm"
          >
            <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Oyaah</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Automatic EDA platform that turns spreadsheets into actionable
              insights in 30 seconds.
            </p>
          </a>
          <a
            href="https://artifyy.online"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm"
          >
            <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Artify</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Digital media agency crafting creative solutions for brands and
              businesses.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
