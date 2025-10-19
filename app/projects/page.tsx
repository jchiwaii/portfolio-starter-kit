export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      {/* Data Projects */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
            <img
              src="/assets/sql-ace.png"
              alt="SQLAce project"
              className="w-full h-42 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-2">SQLAce</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                A platform for mastering SQL for beginners, to interview
                questions.
              </p>
              <a
                href="https://sql-ace.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:no-underline"
              >
                Live Demo →
              </a>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
            <img
              src="/assets/linspo.png"
              alt="Linspo UI project"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-2">Linspo UI</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                An open source component library for data scientists, analysts,
                and visualization specialists
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linspo-ui.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:no-underline"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/Linspo-UI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:no-underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
            <img
              src="/assets/time-series.jpeg"
              alt="Time Series Library project"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-2">Time Series Library</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Building a time series library with rust for timeseries
                things/models like ARIMA, regression, all that.
              </p>
              <a
                href="https://github.com/jchiwaii/timeseries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:no-underline"
              >
                View Code →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Web3 Projects */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Web3</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
            <img
              src="/assets/crepe.png"
              alt="CREPE meme coin project"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-2">CREPE (BNB Meme Coin)</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                CREPE Coin - BNB Chain meme coin website. The next SHIB?
              </p>
              <a
                href="https://crepebnb.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:no-underline"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Web2 Projects */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Web2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
            <img
              src="/assets/kanga.png"
              alt="Kanga project"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-2">Kanga</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                A bespoke tailoring website celebrating Swahili elegance with
                modern design.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://kanga.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:no-underline"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/kanga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:no-underline"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
            <img
              src="/assets/netflix.png"
              alt="Netflix Clone project"
              className="w-full h-35 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium mb-2">Netflix Clone</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                A video streaming web app powered by TMDB API, featuring a
                modern UI and responsive design.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ck-gpt.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:no-underline"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/netflixCK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:no-underline"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
