export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>

      {/* Ongoing Projects */}
      <div className="my-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight flex items-center gap-3">
          Ongoing Projects
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/artifyy.png"
                alt="Artify digital media agency"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Artify</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Digital media agency crafting creative solutions for brands and
                businesses with a focus on content creation, social media
                marketing, and brand identity.
              </p>
              <a
                href="https://artifyy.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Visit Site →
              </a>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/oyaah.png"
                alt="Oyaah automatic EDA platform"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Oyaah</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Automatic EDA platform that turns spreadsheets into insights in
                30 seconds. Upload CSV or Excel files and get instant analysis
              </p>
              <a
                href="https://www.oyaah.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Visit Site →
              </a>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/sql-ace.png"
                alt="SQLAce project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">SQLAce</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                A platform for mastering SQL for beginners, and also help with
                interview questions. Still in the kitchen
              </p>
              <a
                href="https://sql-ace.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Live Demo →
              </a>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/linspo.png"
                alt="Linspo UI project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Linspo UI</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                An open source component library for data scientists, analysts,
                and visualization specialists
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linspo-ui.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/Linspo-UI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Projects */}
      <div className="my-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Data Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/time-series.jpeg"
                alt="Time Series Library project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Time Series Library</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Building a time series library with rust for timeseries
                things/models like ARIMA, regression, all that. Code in
                progress.
              </p>
              <a
                href="https://github.com/jchiwaii/timeseries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                View Code →
              </a>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/forecast.png"
                alt="ARIMA Weather Forecast project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">ARIMA Weather Forecast</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Time series forecasting of Nairobi's temperature using ARIMA
                model, predicting weather patterns for the next 10 days.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://medium.com/@chiwai.kiriba/what-nairobis-weather-taught-me-about-time-series-forecasting-aaade4711b62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Read Report →
                </a>
                <a
                  href="https://github.com/jchiwaii/ARIMA-Weather-Forecast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/kcse.png"
                alt="KCSE Analysis 2024 project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">KCSE Analysis 2024</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Interactive dashboard analyzing KCSE 2024 results in Kenya,
                built with Python, deployed on Streamlit.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://kcse-analysis.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/kcse-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Web3 Projects */}
      <div className="my-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Web3 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/crepe.png"
                alt="CREPE meme coin project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">CREPE (BNB Meme Coin)</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                CREPE Coin - BNB Chain meme coin website. The next SHIB?
              </p>
              <a
                href="https://crepebnb.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Web2 Projects */}
      <div className="my-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Web2 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/bloodline.png"
                alt="Bloodline blood donation platform"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Bloodline</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Fullstack blood donation management system connecting donors
                with recipients through an admin-approved workflow.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://blood-donations-indol.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/blood-donations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/chatty.png"
                alt="Chatty messaging app"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Chatty</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                A fullstack, realtime messaging app featuring instant messaging
                and a modern, responsive interface for seamless chat
                communication.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://chatty-fullstack.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/chatty-fullstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/netflix.png"
                alt="Netflix Clone project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Netflix Clone</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                A video streaming web app powered by TMDB API, featuring a
                modern UI and responsive design.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ck-gpt.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/netflixCK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
            <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
              <img
                src="/assets/kanga.png"
                alt="Kanga project"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Kanga</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                A bespoke tailoring website celebrating Swahili elegance with
                modern design.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://kanga.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jchiwaii/kanga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
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
