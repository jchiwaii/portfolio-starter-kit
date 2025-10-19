export const metadata = {
  title: "Musings",
  description: "Read my writing.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Musings
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        I write about various topics across different platforms.
      </p>

      <div className="space-y-8">
        {/* Random thoughts and Stories */}
        <div>
          <a
            href="https://chiwaii.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <h2 className="text-lg font-medium mb-1 group-hover:underline">
              Random thoughts and Stories →
            </h2>
          </a>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Personal essays, reflections, and creative writing
          </p>
        </div>

        {/* Data Blog */}
        <div>
          <a
            href="https://medium.com/@chiwai.kiriba"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <h2 className="text-lg font-medium mb-1 group-hover:underline">
              Data →
            </h2>
          </a>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Technical articles on data science, analytics, and engineering
          </p>
        </div>
      </div>
    </section>
  );
}
