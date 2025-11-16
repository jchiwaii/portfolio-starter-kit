export const metadata = {
  title: "Musings",
  description: "Read my writing.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Musings</h1>
      <p className="mb-8">
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
            <h2 className="text-lg font-medium mb-1 underline">
              Random boring thoughts →
            </h2>
          </a>
          <p className="text-sm">
            This is like my public journal.
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
            <h2 className="text-lg font-medium mb-1 underline">
              Data →
            </h2>
          </a>
          <p className="text-sm">
            Everything data related.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
