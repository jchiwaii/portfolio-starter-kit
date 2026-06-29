export type Domain = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
};

export const domains: Domain[] = [
  {
    slug: "data-insights",
    index: "01",
    title: "Data & Insights",
    eyebrow: "Analysis, science, dashboards",
  },
  {
    slug: "web-interfaces",
    index: "02",
    title: "Web Interfaces",
    eyebrow: "Frontend, UI systems, visual builds",
  },
  {
    slug: "fullstack-systems",
    index: "03",
    title: "Fullstack Systems",
    eyebrow: "Apps, workflows, databases",
  },
  {
    slug: "ai-systems",
    index: "04",
    title: "AI Systems",
    eyebrow: "Automation, safety, intelligent tools",
  },
  {
    slug: "mobile-apps",
    index: "05",
    title: "Mobile Apps",
    eyebrow: "Android, iOS, on-device products",
  },
];
