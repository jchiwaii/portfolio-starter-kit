export type PortfolioLink = {
  label: string;
  href: string;
};

export type Domain = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
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
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  links: PortfolioLink[];
  screenshots: string[];
};

export const domains: Domain[] = [
  {
    slug: "data-insights",
    index: "01",
    title: "Data & Insights",
    eyebrow: "Analysis, science, dashboards",
    summary:
      "I turn messy datasets into practical stories, dashboards, forecasts, and decisions.",
    description:
      "This domain brings together data analysis and data science work: cleaning raw data, finding useful patterns, building visual interfaces, and writing the story behind the numbers.",
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
    summary:
      "I build fast interfaces that make products, tools, and ideas easier to use.",
    description:
      "Frontend work lives here: websites, UI kits, component libraries, interactive learning tools, and polished experiences that help users move through a task with less friction.",
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
    summary:
      "I connect interfaces, data, auth, and backend logic into working products.",
    description:
      "This is where the end-to-end systems sit: dashboards, messaging apps, admin workflows, data tools, and products that need more than a pretty screen.",
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
    summary:
      "I explore useful AI and automation patterns that reduce cognitive load.",
    description:
      "AI work here focuses on practical systems: filtering, summarizing, classifying, assisting, and turning model capabilities into tools people can actually trust.",
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
    summary:
      "I am shaping mobile projects for learning, utility, and everyday workflows.",
    description:
      "Mobile is the home for Android and iOS work: compact experiences, offline-friendly thinking, and app flows that need to feel natural in the hand.",
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
    kicker: "Labour market research, dashboards",
    summary:
      "An analysis of 60,000 MyJobMag Kenya listings to understand roles, degree requirements, remote work, and visible AI demand.",
    problem:
      "People in Kenya are making career decisions with noisy signals: tech hype, AI anxiety, remote-work assumptions, and frustration around entry-level roles. The project asks what the job market is actually rewarding.",
    approach:
      "I organized more than a year of listings, grouped roles by field, checked education requirements, compared remote and hybrid roles, and built a dashboard so the patterns could be explored instead of only summarized.",
    outcome:
      "The analysis showed a market that is not primarily built for beginners, where sales and business development lead the field mix, degrees still matter heavily, and remote or hybrid roles remain a small slice of demand.",
    stack: ["Python", "Pandas", "Data cleaning", "Dashboarding", "Research writing"],
    links: [
      {
        label: "Dashboard",
        href: "https://job-market-analyzer-lime.vercel.app/",
      },
    ],
    screenshots: ["Dashboard overview", "Role distribution", "Remote work breakdown"],
  },
  {
    slug: "cbk-data-analysis",
    domainSlug: "data-insights",
    name: "CBK Data Analysis",
    year: "2025",
    kicker: "Macroeconomic analysis",
    summary:
      "A dashboard and written analysis exploring Kenyan macroeconomic indicators through public CBK data.",
    problem:
      "Economic conversations often become abstract quickly. I wanted to make inflation, exchange rates, and other indicators easier to inspect and explain.",
    approach:
      "I cleaned the public data, shaped it for dashboard use, visualized the major movements, and wrote a plain-language breakdown of the story behind the numbers.",
    outcome:
      "The project turned raw macroeconomic series into an accessible dashboard and article for readers who want context without losing the data.",
    stack: ["Python", "Pandas", "Visualization", "Dashboards"],
    links: [
      { label: "Dashboard", href: "https://cbk-data-project.onrender.com/" },
      {
        label: "Report",
        href: "https://medium.com/@chiwai.kiriba/the-shilling-the-strain-and-the-dream-kenyas-economy-in-numbers-2dd273d03d05",
      },
    ],
    screenshots: ["Indicator dashboard", "Trend view", "Written insight"],
  },
  {
    slug: "kcse-2025-analysis",
    domainSlug: "data-insights",
    name: "KCSE 2025 Analysis",
    year: "2025",
    kicker: "Education data dashboard",
    summary:
      "Interactive analysis of KCSE result patterns with charts and exploratory views.",
    problem:
      "National exam results generate many claims, but the useful patterns can be hard to see without a focused interface.",
    approach:
      "I structured the results into chart-ready data, built views for comparison, and prioritized simple interactions that help users scan outcomes quickly.",
    outcome:
      "The dashboard gives students, parents, and observers a clearer way to explore performance patterns.",
    stack: ["Next.js", "Charts", "Data modeling", "TypeScript"],
    links: [
      { label: "Dashboard", href: "https://kcse-2025.vercel.app/" },
      { label: "Code", href: "https://github.com/jchiwaii/kcse-2025" },
    ],
    screenshots: ["Results overview", "Comparison chart", "School-level view"],
  },
  {
    slug: "arima-weather-forecast",
    domainSlug: "data-insights",
    name: "ARIMA Weather Forecast",
    year: "2025",
    kicker: "Forecasting, time series",
    summary:
      "A Nairobi weather forecasting project that uses ARIMA to reason about seasonal movement and prediction limits.",
    problem:
      "Forecasting looks magical from the outside, but the useful lesson is knowing what a model can and cannot tell you.",
    approach:
      "I cleaned weather observations, explored trend and seasonality, fitted ARIMA models, and documented the forecasting tradeoffs.",
    outcome:
      "The project became both a forecast and a learning artifact about how time-series assumptions behave in practice.",
    stack: ["Python", "ARIMA", "Time series", "Statistics"],
    links: [
      {
        label: "Report",
        href: "https://medium.com/@chiwai.kiriba/what-nairobis-weather-taught-me-about-time-series-forecasting-aaade4711b62",
      },
      { label: "Code", href: "https://github.com/jchiwaii/ARIMA-Weather-Forecast" },
    ],
    screenshots: ["Forecast plot", "Residual checks", "Model notes"],
  },
  {
    slug: "afcon-visualization",
    domainSlug: "data-insights",
    name: "AFCON Visualization",
    year: "2025",
    kicker: "Sports data storytelling",
    summary:
      "A race-bar visualization that turns AFCON outcomes into a moving story.",
    problem:
      "Tournament histories are easier to feel when movement, momentum, and ranking shifts are visible together.",
    approach:
      "I shaped the AFCON data into an animation-friendly format and built a focused visual story around outcomes.",
    outcome:
      "The result is a lightweight visual piece that makes the tournament history easier to compare and remember.",
    stack: ["JavaScript", "Visualization", "Data storytelling"],
    links: [
      { label: "Visit", href: "https://afcon-eta.vercel.app/" },
      { label: "Code", href: "https://github.com/jchiwaii/afcon" },
    ],
    screenshots: ["Race bar view", "Country comparison", "Final state"],
  },
  {
    slug: "time-series-library",
    domainSlug: "data-insights",
    name: "Time Series Library",
    year: "2025",
    kicker: "Forecasting tools",
    summary:
      "A Rust library experiment for time-series models and forecasting workflows.",
    problem:
      "I wanted to understand forecasting internals beyond notebooks and move closer to reusable tooling.",
    approach:
      "I explored model structure, typed APIs, and how forecasting utilities can be represented in a systems language.",
    outcome:
      "The work sharpened my understanding of statistical modeling, performance, and API design for analytical tools.",
    stack: ["Rust", "Forecasting", "Library design"],
    links: [{ label: "Code", href: "https://github.com/jchiwaii/timeseries" }],
    screenshots: ["API sketch", "Model output", "Library notes"],
  },
  {
    slug: "linspo-ui",
    domainSlug: "web-interfaces",
    name: "Linspo UI",
    year: "2026",
    kicker: "Open source UI",
    summary:
      "A component system for data science and visualization teams building analytical interfaces.",
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
    screenshots: ["Component gallery", "Dashboard primitives", "Docs view"],
  },
  {
    slug: "sqlace",
    domainSlug: "web-interfaces",
    name: "SQLAce",
    year: "2026",
    kicker: "Learning interface",
    summary:
      "A SQL learning platform for beginners and interview preparation.",
    problem:
      "People learning SQL need practice that is focused, approachable, and organized around real query thinking.",
    approach:
      "I designed the product around clear exercises, beginner-friendly structure, and a learning flow that reduces intimidation.",
    outcome:
      "The project gives learners a cleaner path into SQL practice and interview readiness.",
    stack: ["Next.js", "React", "Learning UX", "SQL"],
    links: [{ label: "Visit", href: "https://sql-ace.netlify.app/" }],
    screenshots: ["Lesson view", "Practice prompt", "Progress state"],
  },
  {
    slug: "artify",
    domainSlug: "web-interfaces",
    name: "Artify",
    year: "2026",
    kicker: "Creative web presence",
    summary:
      "A digital media agency website shaped around brand clarity and service discovery.",
    problem:
      "Creative businesses need a web presence that explains what they do without becoming generic agency noise.",
    approach:
      "I structured the site around services, proof, and direct navigation so a visitor can quickly understand the offer.",
    outcome:
      "The result is a direct, modern site for presenting creative work and converting attention into inquiries.",
    stack: ["Next.js", "Brand UI", "Responsive design"],
    links: [{ label: "Visit", href: "https://artifyy.online" }],
    screenshots: ["Homepage", "Services section", "Contact flow"],
  },
  {
    slug: "kanga",
    domainSlug: "web-interfaces",
    name: "Kanga",
    year: "2025",
    kicker: "Brand website",
    summary:
      "A tailoring website blending Swahili elegance with a modern responsive interface.",
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
    screenshots: ["Homepage", "Service area", "Mobile layout"],
  },
  {
    slug: "concrete-ui",
    domainSlug: "web-interfaces",
    name: "Concrete UI",
    year: "2026",
    kicker: "UI library",
    summary:
      "A neo-brutalism component library with bold raw aesthetics and reusable interface pieces.",
    problem:
      "Many UI systems optimize for softness. This project explores a louder visual language while keeping components usable.",
    approach:
      "I built a component direction around hard edges, contrast, and expressive layout rules.",
    outcome:
      "Concrete UI works as a visual sandbox for a stronger, more opinionated component language.",
    stack: ["React", "UI systems", "Design language"],
    links: [],
    screenshots: ["Component overview", "Button states", "Layout samples"],
  },
  {
    slug: "netflix-clone",
    domainSlug: "web-interfaces",
    name: "Netflix Clone",
    year: "2024",
    kicker: "Media UI practice",
    summary:
      "A TMDB-powered streaming interface built to practice responsive media browsing patterns.",
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
    screenshots: ["Browse page", "Movie row", "Detail preview"],
  },
  {
    slug: "oyaah",
    domainSlug: "fullstack-systems",
    name: "Oyaah",
    year: "2026",
    kicker: "Data product, automation",
    summary:
      "An automatic EDA platform for uploading spreadsheets and getting instant analytical insight.",
    problem:
      "Many people have useful spreadsheets but no easy way to move from raw rows to an analytical starting point.",
    approach:
      "I shaped the product around upload, profiling, quick visual summaries, and a workflow that reduces the blank-page problem.",
    outcome:
      "Oyaah helps users get the first layer of analysis faster so they can decide what questions to ask next.",
    stack: ["Fullstack", "Data profiling", "Dashboards", "Product UX"],
    links: [{ label: "Visit", href: "https://www.oyaah.cloud/" }],
    screenshots: ["Upload flow", "EDA summary", "Chart recommendations"],
  },
  {
    slug: "bloodline",
    domainSlug: "fullstack-systems",
    name: "Bloodline",
    year: "2025",
    kicker: "Donation workflows",
    summary:
      "A fullstack blood donation platform with user-facing flows and admin workflows.",
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
    screenshots: ["Public flow", "Admin dashboard", "Donor records"],
  },
  {
    slug: "chatty",
    domainSlug: "fullstack-systems",
    name: "Chatty",
    year: "2025",
    kicker: "Realtime messaging",
    summary:
      "A realtime messaging app focused on modern chat UX and fullstack communication features.",
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
    screenshots: ["Conversation view", "User state", "Mobile chat"],
  },
  {
    slug: "safe-browse",
    domainSlug: "ai-systems",
    name: "Safe Browse",
    year: "2026",
    kicker: "Browser safety, filtering",
    summary:
      "A Chrome extension for safer browsing and language filtering.",
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
    screenshots: ["Extension popup", "Filter settings", "Blocked content state"],
  },
];

export const capabilityList = [
  "Data analysis",
  "Data science",
  "Dashboards",
  "Frontend development",
  "Fullstack products",
  "AI systems",
  "Mobile apps",
  "Research writing",
  "Product thinking",
  "Visual interfaces",
  "Automation",
  "Decision tools",
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

