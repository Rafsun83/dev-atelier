// Portfolio data — Rafsun Jani
export const PORTFOLIO_DATA = {
  profile: {
    name: "Rafsun Jani",
    handle: "rafsun7774",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    tagline: "Frontend-leaning software engineer shipping scalable web apps with React, Next.js & TypeScript.",
    email: "rafsun7774@gmail.com",
    phone: "+8801834390150",
    links: {
      github:   "https://github.com/Rafsun83",
      linkedin: "https://www.linkedin.com/in/rafsun-jani/",
      medium:   "https://medium.com/@rafsun7774",
    },
    status: "Open to remote frontend roles",
  },

  skills: {
    stack: [
      { k: "JavaScript",          v: 95 },
      { k: "TypeScript",          v: 90 },
      { k: "React",               v: 92 },
      { k: "Next.js",             v: 90 },
      { k: "Redux / Toolkit",     v: 82 },
      { k: "React Query",         v: 80 },
      { k: "Tailwind / Polaris",  v: 88 },
      { k: "Vitest / Playwright", v: 85 },
      { k: "MSW",                 v: 80 },
      { k: "Node / Express",      v: 72 },
      { k: "Java / SpringBoot",   v: 60 },
      { k: "MongoDB / MySQL",     v: 70 },
      { k: "Docker (basic)",      v: 45 },
    ],
    env: [
      { k: "editor",   v: "VS Code" },
      { k: "runtime",  v: "Node.js · Next.js" },
      { k: "monorepo", v: "Turborepo" },
      { k: "testing",  v: "Vitest · Playwright · MSW" },
      { k: "db",       v: "MongoDB · MySQL" },
    ],
  },

  projects: [
    {
      name: "QuestionPro Middleware",
      desc: "Middleware service in a Turborepo monorepo, integrating multiple projects with shared UI, typed contracts, and a test pyramid of Vitest + Playwright + MSW.",
      stack: ["Next.js","TypeScript","Turborepo","Playwright","MSW"],
      year: "2025",
      peek: "$ turbo run test\n  ✓ unit      214 pass\n  ✓ integ      68 pass\n  ✓ e2e        31 pass\n  ────────────────\n  coverage: 92%\n  time: 48.2s"
    },
    {
      name: "ReviewXpo",
      desc: "Shopify review-collection app with a fully responsive Polaris-based UI. Optimized product page widgets for merchants and shoppers.",
      stack: ["Next.js","TypeScript","Tailwind","Shopify Polaris"],
      year: "2024",
      peek: "★★★★★  reviewxpo\n  ┃ “Fast. Clean.\n  ┃  Easy to embed.”\n  ┃ — shop owner\n  ────────────\n  widgets: 4\n  installs: 1.2k+"
    },
    {
      name: "DeedSign",
      desc: "Secure digital signing platform implementing industry-standard signature protocols, with an emphasis on auditable document flows.",
      stack: ["Next.js","TypeScript","Tailwind"],
      year: "2024",
      peek: "╭── sign ──────╮\n│ doc: nda.pdf │\n│ status: ✓    │\n│ hash: 3f…a1  │\n│ ts: 2024-08  │\n╰──────────────╯"
    },
    {
      name: "Syncora",
      desc: "Shopify app for secure backup & storage of Shopify admin data. Scheduled exports, restore flows, incremental snapshots.",
      stack: ["React","TypeScript","Shopify Polaris"],
      year: "2023",
      peek: "◆ syncora\n  ● products   4,208\n  ● orders    38,912\n  ● customers  9,417\n  ────────────\n  last sync: 2m ago"
    },
    {
      name: "Flowfy",
      desc: "Shopify integration tool for seamless third-party system connectivity — mapping fields, syncing inventory, webhook plumbing.",
      stack: ["React","TypeScript","Shopify Polaris"],
      year: "2023",
      peek: "[shopify] → [flowfy] → [erp]\n    ↘       ↓       ↗\n       events bus\n  active pipes: 7\n  throughput: 142/s"
    },
    {
      name: "Monorepo Test Harness",
      desc: "Internal tooling spike — a Vitest + MSW template for a Turborepo project with shared mocks, typed fixtures, and Playwright smoke suites.",
      stack: ["Turborepo","Vitest","Playwright","MSW"],
      year: "2025",
      peek: "apps/\n  web/\n  admin/\npackages/\n  ui/\n  mocks/\n  test-utils/\n  eslint/\n  tsconfig/"
    },
    {
      name: "Programming Contest · ICPC-style",
      desc: "Three-time participant in the Intra University Programming Contest at BUBT. Placed 7th of 22 teams in the junior division. Active on Codeforces & LeetCode.",
      stack: ["C++","Algorithms","Data Structures"],
      year: "2019–2021",
      peek: "> contest.log\n  round 01: AC · WA · AC\n  round 02: AC · AC · TLE\n  round 03: AC · AC · AC\n  ────────────\n  rank: 7 / 22"
    },
  ],

  experience: [
    {
      when: "12/2024 — NOW",
      role: "Software Engineer",
      co:   "QuestionPro",
      where:"Dhaka, Bangladesh",
      note: "Developing and maintaining a middleware application in a Turborepo monorepo, integrating multiple projects. Building features with React, Next.js, TypeScript & JavaScript; writing unit + integration tests with React Testing Library and Vitest, and E2E suites with Playwright. Using MSW to simulate APIs for reliable test environments."
    },
    {
      when: "09/2022 — 12/2024",
      role: "Software Engineer",
      co:   "Jouleslabs",
      where:"Dhaka, Bangladesh",
      note: "Shipped ReviewXpo (Shopify review collection), DeedSign (digital signing), Syncora (Shopify admin backup) and Flowfy (Shopify integrations). Built responsive Polaris/Tailwind UIs on Next.js + TypeScript with an emphasis on consistent cross-device experience."
    },
    {
      when: "02/2018 — 04/2022",
      role: "B.Sc, Computer Science & Engineering",
      co:   "Bangladesh University of Business and Technology (BUBT)",
      where:"CGPA 3.34 / 4.00",
      note: "Completed Bachelor of Science in Computer Science and Engineering. Competed three times in the Intra University Programming Contest, placing 7th of 22 teams in the junior division. Active on Codeforces and LeetCode."
    },
  ],

  posts: [
    { date: "2025 · 11 · 04", read: "7 MIN", tag: "TESTING",    title: "A pragmatic test pyramid for Next.js apps", excerpt: "How I split Vitest, Playwright, and MSW across a Turborepo so green tests actually mean something on Monday morning." },
    { date: "2025 · 07 · 18", read: "9 MIN", tag: "MONOREPO",   title: "Turborepo without the tears", excerpt: "Shared configs, shared mocks, shared UI — and the small number of rules that keep a monorepo from turning into a swamp." },
    { date: "2024 · 10 · 09", read: "6 MIN", tag: "SHOPIFY",    title: "Designing Shopify apps that feel native", excerpt: "Polaris is a good starting point. Here's what you have to add on top so your app doesn't feel like a foreign object inside the admin." },
    { date: "2024 · 02 · 22", read: "5 MIN", tag: "REACT",      title: "The only 5 React Query patterns I actually use", excerpt: "After two years of shipping Next.js apps with React Query, these are the patterns that survived every refactor." },
  ],
};
