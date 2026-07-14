export type PortfolioLink = {
  label: string;
  href: string;
};

export type Domain = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  heroImage: string;
  summary: string;
  description: string;
  services: string[];
  solving: string;
};

export type PortfolioProject = {
  slug: string;
  domainSlug: string;
  name: string;
  year: string;
  kicker: string;
  summary: string;
  note: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  links: PortfolioLink[];
  image: string;
};

export const domains: Domain[] = [
  {
    slug: "data-insights",
    index: "01",
    title: "Data & Insights",
    eyebrow: "Analysis, science, dashboards",
    heroImage: "/assets/hero-images/data.jpg",
    summary:
      "Messy datasets turned into practical stories, dashboards, forecasts, and decisions.",
    description:
      "Data analysis and data science work: cleaning raw data, finding useful patterns, building visual interfaces, and writing the story behind the numbers.",
    services: [
      "Exploratory analysis",
      "Dashboard design",
      "Forecasting",
      "Public data storytelling",
      "Decision support",
    ],
    solving:
      "For teams and readers who need to understand what is happening before deciding what to do next.",
  },
  {
    slug: "web-interfaces",
    index: "02",
    title: "Web Interfaces",
    eyebrow: "Frontend, UI systems, visual builds",
    heroImage: "/assets/hero-images/web.jpg",
    summary:
      "Fast interfaces that make products, tools, and ideas easier to use.",
    description:
      "Frontend work: websites, UI kits, component libraries, interactive learning tools, and polished experiences that help users move through a task with less friction.",
    services: [
      "Frontend development",
      "Design systems",
      "Component libraries",
      "Responsive UI",
      "Interaction design",
    ],
    solving:
      "For products that need to feel clear, trustworthy, and usable from the first screen.",
  },
  {
    slug: "fullstack-systems",
    index: "03",
    title: "Fullstack Systems",
    eyebrow: "Apps, workflows, databases",
    heroImage: "/assets/hero-images/fullstack.jpg",
    summary:
      "Interfaces, data, auth, and backend logic connected into working products.",
    description:
      "End-to-end systems: dashboards, messaging apps, admin workflows, data tools, and products that need more than a pretty screen.",
    services: [
      "Product architecture",
      "Backend APIs",
      "Database workflows",
      "Authentication",
      "Realtime features",
    ],
    solving:
      "For workflows where the real value is in making the whole system hold together.",
  },
  {
    slug: "ai-systems",
    index: "04",
    title: "AI Systems",
    eyebrow: "Automation, safety, intelligent tools",
    heroImage: "/assets/hero-images/ai.jpg",
    summary:
      "Useful AI and automation patterns that reduce cognitive load.",
    description:
      "Practical AI systems: filtering, summarizing, classifying, assisting, and turning model capabilities into tools people can actually trust.",
    services: [
      "AI product thinking",
      "Safety tooling",
      "Automation flows",
      "Prompted workflows",
      "Evaluation habits",
    ],
    solving:
      "For problems where software should help people move faster without giving up judgment.",
  },
  {
    slug: "mobile-apps",
    index: "05",
    title: "Mobile Apps",
    eyebrow: "Android, iOS, on-device products",
    heroImage: "/assets/hero-images/mobile.jpg",
    summary:
      "Mobile work for learning, utility, and everyday workflows.",
    description:
      "Android and iOS work: compact experiences, offline-friendly thinking, and app flows that need to feel natural in the hand.",
    services: [
      "React Native",
      "App prototyping",
      "Mobile UX",
      "Offline-first flows",
      "Release preparation",
    ],
    solving:
      "For problems that belong closer to the user than a browser tab.",
  },
];

export const projects: PortfolioProject[] = [
  {
    slug: "kenya-job-market-analysis",
    domainSlug: "data-insights",
    name: "Kenya Job Market Analysis",
    year: "2026",
    kicker: "Labour market research",
    summary:
      "A dashboard and technical report built from MyJobMag Kenya listings to understand role demand, experience, location, and hiring patterns.",
    note:
      "I had a simple question: what does the Kenyan job market actually look like? The final dataset came out to 68,648 job listings.",
    problem:
      "I could not find a clean public dataset that answered the market questions I had, so the project became a full build: scrape the listings, store the data, and turn it into a dashboard people could explore.",
    approach:
      "I scraped MyJobMag with TypeScript, Cheerio, JSON-LD parsing, slug-based deduplication, and SQLite, then moved the deployed database to Turso so the Next.js dashboard could run cleanly on Vercel.",
    outcome:
      "The finished app exposes fields, companies, locations, industries, trends, insights, and all jobs, while the write-up documents the scraping, database, deployment, and performance decisions behind it.",
    stack: ["Next.js", "TypeScript", "Cheerio", "Turso", "Recharts"],
    links: [
      {
        label: "Dashboard",
        href: "https://job-market-analyzer-lime.vercel.app/",
      },
      {
        label: "Full article",
        href: "https://medium.com/@chiwai.kiriba/how-i-built-a-dashboard-to-analyze-60k-job-listings-8a7222f01954?sharedUserId=chiwai.kiriba",
      },
    ],
    image: "/assets/myjobmag.png",
  },
  {
    slug: "cbk-data-analysis",
    domainSlug: "data-insights",
    name: "CBK Data Analysis",
    year: "2025",
    kicker: "Macroeconomic analysis",
    summary:
      "A dashboard and written analysis connecting Kenya's GDP, debt, inflation, fiscal pressure, and public data into one economic story.",
    note:
      "I wanted to perform a quick health check of the Kenyan economy's current status.",
    problem:
      "Economic conversations often become abstract quickly, so this project turns CBK indicators and supporting public sources into a clearer picture of Kenya's current economic strain.",
    approach:
      "I used time-series trends, GDP movement, public debt, inflation, revenue, expenditure, and fiscal deficit views to make the macroeconomic story easier to inspect.",
    outcome:
      "The analysis points to cautious optimism: stable inflation and growth exist beside heavy debt servicing, tax pressure, and a long road toward the big national dream.",
    stack: ["Python", "Pandas", "Visualization", "Dashboards"],
    links: [
      { label: "Dashboard", href: "https://cbk-data-project-production.up.railway.app/" },
      {
        label: "Full article",
        href: "https://medium.com/@chiwai.kiriba/the-shilling-the-strain-and-the-dream-kenyas-economy-in-numbers-2dd273d03d05",
      },
    ],
    image: "/assets/cbk.png",
  },
  {
    slug: "arima-weather-forecast",
    domainSlug: "data-insights",
    name: "ARIMA Weather Forecast",
    year: "2025",
    kicker: "Forecasting, time series",
    summary:
      "A Nairobi weather forecasting project using ARIMA to test how parameter choices affect temperature forecasts.",
    note:
      "I decided to try forecasting the local area weather with an ARIMA model.",
    problem:
      "The weather dataset had more than 20 variables, so I focused on average temperature and used the project to understand stationarity, differencing, and forecast reliability.",
    approach:
      "I compared an initial ARIMA (5, 1, 2) model with a grid-searched order, tracked MAE, MSE, and RMSE, then checked whether the forecasts looked realistic.",
    outcome:
      "The exercise showed that small changes in p, d, and q can shift the forecast meaningfully, and that visual inspection still matters beside metrics.",
    stack: ["Python", "ARIMA", "Time series", "Statistics"],
    links: [
      {
        label: "Full article",
        href: "https://medium.com/@chiwai.kiriba/what-nairobis-weather-taught-me-about-time-series-forecasting-aaade4711b62",
      },
      { label: "Code", href: "https://github.com/jchiwaii/ARIMA-Weather-Forecast" },
    ],
    image: "/assets/forecast.png",
  },
  {
    slug: "linspo-ui",
    domainSlug: "web-interfaces",
    name: "Linspo UI",
    year: "2026",
    kicker: "Open source UI",
    summary:
      "A component system for data science and visualization teams building analytical interfaces.",
    note:
      "The system focuses on interface pieces data-heavy teams actually need: charts, dense layouts, filters, empty states, and composable UI.",
    problem:
      "Analytical tools often need tables, charts, filters, empty states, and dense layouts, but teams still rebuild the same UI primitives.",
    approach:
      "I built reusable interface pieces around the patterns data teams actually need, with a focus on clarity and composability.",
    outcome:
      "Linspo gives data-heavy teams a starting point for interfaces that are practical instead of decorative.",
    stack: ["React", "TypeScript", "Tailwind", "Component systems"],
    links: [
      { label: "Visit", href: "https://linspo-ui.vercel.app/" },
      { label: "Code", href: "https://github.com/jchiwaii/Linspo-UI" },
    ],
    image: "/assets/linspo.png",
  },
  {
    slug: "sqlace",
    domainSlug: "web-interfaces",
    name: "SQLAce",
    year: "2026",
    kicker: "Learning interface",
    summary:
      "A SQL learning platform for beginners and interview preparation.",
    note:
      "The product is organized around clear exercises, beginner-friendly structure, and a learning flow that reduces intimidation.",
    problem:
      "People learning SQL need practice that is focused, approachable, and organized around real query thinking.",
    approach:
      "I designed the product around clear exercises, beginner-friendly structure, and a learning flow that reduces intimidation.",
    outcome:
      "The project gives learners a cleaner path into SQL practice and interview readiness.",
    stack: ["Next.js", "React", "Learning UX", "SQL"],
    links: [{ label: "Visit", href: "https://sql-ace.netlify.app/" }],
    image: "/assets/sql-ace.png",
  },
  {
    slug: "artify",
    domainSlug: "web-interfaces",
    name: "Artify",
    year: "2026",
    kicker: "Creative web presence",
    summary:
      "A digital media agency website shaped around brand clarity and service discovery.",
    note:
      "The site is structured around services, proof, and direct navigation so a visitor can quickly understand the offer.",
    problem:
      "Creative businesses need a web presence that explains what they do without becoming generic agency noise.",
    approach:
      "I structured the site around services, proof, and direct navigation so a visitor can quickly understand the offer.",
    outcome:
      "The result is a direct, modern site for presenting creative work and converting attention into inquiries.",
    stack: ["Next.js", "Brand UI", "Responsive design"],
    links: [{ label: "Visit", href: "https://artifyy.online" }],
    image: "/assets/artifyy.png",
  },
  {
    slug: "kanga",
    domainSlug: "web-interfaces",
    name: "Kanga",
    year: "2025",
    kicker: "Brand website",
    summary:
      "A tailoring website blending Swahili elegance with a modern responsive interface.",
    note:
      "The build gives the tailoring brand a polished digital front door without losing the texture of the local craft.",
    problem:
      "Local craft businesses need a digital front door that feels polished without losing cultural texture.",
    approach:
      "I built a clean responsive site around brand language, service clarity, and visual rhythm.",
    outcome:
      "The site gives the tailoring brand a stronger online presence and a clearer path for customer interest.",
    stack: ["Frontend", "Responsive design", "Brand direction"],
    links: [
      { label: "Visit", href: "https://kanga.netlify.app/" },
      { label: "Code", href: "https://github.com/jchiwaii/kanga" },
    ],
    image: "/assets/kanga.png",
  },
  {
    slug: "concrete-ui",
    domainSlug: "web-interfaces",
    name: "Concrete UI",
    year: "2026",
    kicker: "UI library",
    summary:
      "A neo-brutalism component library with bold raw aesthetics and reusable interface pieces.",
    note:
      "Concrete UI explores a louder visual language while keeping the components organized enough to use in real interfaces.",
    problem:
      "Many UI systems optimize for softness. This project explores a louder visual language while keeping components usable.",
    approach:
      "I built a component direction around hard edges, contrast, and expressive layout rules.",
    outcome:
      "Concrete UI works as a visual sandbox for a stronger, more opinionated component language.",
    stack: ["React", "UI systems", "Design language"],
    links: [],
    image: "/assets/concrete.png",
  },
  {
    slug: "netflix-clone",
    domainSlug: "web-interfaces",
    name: "Netflix Clone",
    year: "2024",
    kicker: "Media UI practice",
    summary:
      "A TMDB-powered streaming interface built to practice responsive media browsing patterns.",
    note:
      "The project strengthened my frontend fundamentals around layout, API data, content hierarchy, and media-heavy UI.",
    problem:
      "Media apps require fast scanning, strong hierarchy, and clear content previews.",
    approach:
      "I built a browsing interface using movie data, responsive rows, and familiar content discovery patterns.",
    outcome:
      "The project strengthened my frontend fundamentals around layout, API data, and media-heavy UI.",
    stack: ["React", "Firebase", "TMDB API", "Responsive UI"],
    links: [
      { label: "Visit", href: "https://ck-gpt.web.app/" },
      { label: "Code", href: "https://github.com/jchiwaii/netflixCK" },
    ],
    image: "/assets/netflix.png",
  },
  {
    slug: "oyaah",
    domainSlug: "fullstack-systems",
    name: "Oyaah",
    year: "2026",
    kicker: "Data product, automation",
    summary:
      "An automatic EDA platform for uploading spreadsheets and getting instant analytical insight.",
    note:
      "Oyaah reduces the blank-page problem by turning raw spreadsheet uploads into profiles, summaries, and chart directions.",
    problem:
      "Many people have useful spreadsheets but no easy way to move from raw rows to an analytical starting point.",
    approach:
      "I shaped the product around upload, profiling, quick visual summaries, and a workflow that reduces the blank-page problem.",
    outcome:
      "Oyaah helps users get the first layer of analysis faster so they can decide what questions to ask next.",
    stack: ["Fullstack", "Data profiling", "Dashboards", "Product UX"],
    links: [{ label: "Visit", href: "https://www.oyaah.cloud/" }],
    image: "/assets/oyaah.png",
  },
  {
    slug: "bloodline",
    domainSlug: "fullstack-systems",
    name: "Bloodline",
    year: "2025",
    kicker: "Donation workflows",
    summary:
      "A fullstack blood donation platform with user-facing flows and admin workflows.",
    note:
      "The system organizes public donation requests, donor information, and admin management into one clearer workflow.",
    problem:
      "Donation coordination needs clear data, trust, and workflows that separate public requests from admin management.",
    approach:
      "I built a fullstack system around donor information, platform actions, and management screens.",
    outcome:
      "The product demonstrates how a social-good workflow can be organized into a usable digital system.",
    stack: ["Fullstack", "Authentication", "Admin workflows", "Database"],
    links: [
      { label: "Visit", href: "https://blood-donations-indol.vercel.app/" },
      { label: "Code", href: "https://github.com/jchiwaii/blood-donations" },
    ],
    image: "/assets/bloodline.png",
  },
  {
    slug: "chatty",
    domainSlug: "fullstack-systems",
    name: "Chatty",
    year: "2025",
    kicker: "Realtime messaging",
    summary:
      "A realtime messaging app focused on modern chat UX and fullstack communication features.",
    note:
      "The app is a practical system for thinking through conversations, user state, message flow, auth, and responsive layouts.",
    problem:
      "Realtime products are a good test of state, feedback, auth, and data consistency.",
    approach:
      "I built the app around conversations, user state, message flow, and responsive layouts.",
    outcome:
      "The project gave me a practical system for thinking through realtime UI and backend synchronization.",
    stack: ["Fullstack", "Realtime", "Authentication", "Messaging UX"],
    links: [
      { label: "Visit", href: "https://chatty-fullstack.vercel.app" },
      { label: "Code", href: "https://github.com/jchiwaii/chatty-fullstack" },
    ],
    image: "/assets/chatty.png",
  },
  {
    slug: "safe-browse",
    domainSlug: "ai-systems",
    name: "Safe Browse",
    year: "2026",
    kicker: "Browser safety, filtering",
    summary:
      "A Chrome extension for safer browsing and language filtering.",
    note:
      "The extension turns content filtering into a lightweight browser layer instead of asking users to manage a separate workflow.",
    problem:
      "The web exposes people to content they may not want to see, especially when browsing quickly or sharing devices.",
    approach:
      "I built a browser extension that filters unwanted language and creates a safer browsing layer at the point of use.",
    outcome:
      "Safe Browse turns content filtering into a lightweight tool that works inside the browser instead of requiring a separate workflow.",
    stack: ["Chrome Extension", "Content scripts", "Filtering logic", "UX"],
    links: [
      {
        label: "Extension",
        href: "https://chromewebstore.google.com/detail/safe-browse-content-filte/iipiknfekcemmookpphbkdiabdaiipje?authuser=1&hl=en",
      },
      { label: "Code", href: "https://github.com/jchiwaii/content-filter-extension" },
    ],
    image: "/assets/filter.png",
  },
];

export function getDomain(slug: string) {
  return domains.find((domain) => domain.slug === slug);
}

export function getProjectsByDomain(domainSlug: string) {
  return projects.filter((project) => project.domainSlug === domainSlug);
}

export function getProject(domainSlug: string, projectSlug: string) {
  return projects.find(
    (project) => project.domainSlug === domainSlug && project.slug === projectSlug,
  );
}
