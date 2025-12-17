export const metadata = {
  title: "Musings",
  description: "Read my writing.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-4xl mb-8 tracking-tight md:text-5xl">Musings</h1>
      <p className="mb-16 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
        I write about various topics across different platforms.
      </p>

      <div className="grid grid-cols-1 gap-6">

        {/* Data Blog */}
        <a
          href="https://medium.com/@chiwai.kiriba"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm"
        >
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              Data →
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Everything data related.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
