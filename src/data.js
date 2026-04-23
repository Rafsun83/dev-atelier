// Portfolio data — Rafsun Jani
export const PORTFOLIO_DATA = {
  profile: {
    name: "Rafsun Jani",
    handle: "rafsun7774",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    tagline:
      "Frontend-leaning software engineer shipping scalable web apps with React, Next.js & TypeScript.",
    email: "rafsun7774@gmail.com",
    phone: "+8801834390150",
    links: {
      github: "https://github.com/Rafsun83",
      linkedin: "https://www.linkedin.com/in/rafsun-jani/",
      medium: "https://medium.com/@rafsun7774",
    },
    status: "Open to remote frontend roles",
  },

  skills: {
    stack: [
      { k: "JavaScript", v: 95 },
      { k: "TypeScript", v: 90 },
      { k: "React", v: 92 },
      { k: "Next.js", v: 90 },
      { k: "Redux / Toolkit", v: 82 },
      { k: "React Query", v: 80 },
      { k: "Tailwind / Polaris", v: 88 },
      { k: "Vitest / Playwright", v: 85 },
      { k: "MSW", v: 80 },
      { k: "Node / Express", v: 72 },
      { k: "Java / SpringBoot", v: 60 },
      { k: "MongoDB / MySQL", v: 70 },
      { k: "Docker (basic)", v: 45 },
    ],
    categories: [
      { label: "Frontend",      items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Shopify Polaris"] },
      { label: "State & Data",  items: ["Redux Toolkit", "React Query", "React Hook Form"] },
      { label: "Testing",       items: ["Vitest", "Playwright", "React Testing Library", "MSW"] },
      { label: "Backend",       items: ["Node.js", "Express", "Java", "Spring Boot"] },
      { label: "Database",      items: ["MongoDB", "MySQL"] },
      { label: "Tooling",       items: ["Turborepo", "Docker", "Git", "VS Code"] },
    ],
    env: [
      { k: "editor", v: "VS Code" },
      { k: "runtime", v: "Node.js · Next.js" },
      { k: "monorepo", v: "Turborepo" },
      { k: "testing", v: "Vitest · Playwright · MSW" },
      { k: "db", v: "MongoDB · MySQL" },
    ],
  },

  projects: [
    {
      name: "QuestionPro Middleware",
      desc: "Middleware service in a Turborepo monorepo, integrating multiple projects with shared UI, typed contracts, and a test pyramid of Vitest + Playwright + MSW.",
      stack: ["Next.js", "TypeScript", "Turborepo", "Playwright", "MSW"],
      year: "2025",
      link: "https://middleware.questionpro.com/",
      peek: "$ turbo run test\n  ✓ unit      214 pass\n  ✓ integ      68 pass\n  ✓ e2e        31 pass\n  ────────────────\n  coverage: 92%\n  time: 48.2s",
    },
    {
      name: "ReviewXpo",
      desc: "Shopify review-collection app with a fully responsive Polaris-based UI. Optimized product page widgets for merchants and shoppers.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Shopify Polaris"],
      link: "https://www.reviewxpo.com/",
      year: "2024",
      peek: "★★★★★  reviewxpo\n  ┃ “Fast. Clean.\n  ┃  Easy to embed.”\n  ┃ — shop owner\n  ────────────\n  widgets: 4\n  installs: 1.2k+",
    },
    {
      name: "DeedSign",
      desc: "Secure digital signing platform implementing industry-standard signature protocols, with an emphasis on auditable document flows.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://app.deedsign.com/",
      year: "2024",
      peek: "╭── sign ──────╮\n│ doc: nda.pdf │\n│ status: ✓    │\n│ hash: 3f…a1  │\n│ ts: 2024-08  │\n╰──────────────╯",
    },
    {
      name: "Syncora",
      desc: "Shopify app for secure backup & storage of Shopify admin data. Scheduled exports, restore flows, incremental snapshots.",
      stack: ["React", "TypeScript", "Shopify Polaris"],
      link: "https://apps.shopify.com/syncora-backup-restore",
      year: "2023",
      peek: "◆ syncora\n  ● products   4,208\n  ● orders    38,912\n  ● customers  9,417\n  ────────────\n  last sync: 2m ago",
    },
    {
      name: "Flowfy",
      desc: "Shopify integration tool for seamless third-party system connectivity — mapping fields, syncing inventory, webhook plumbing.",
      stack: ["React", "TypeScript", "Shopify Polaris"],
      link: "https://apps.shopify.com/store-flow-workflow-automation",
      year: "2023",
      peek: "[shopify] → [flowfy] → [erp]\n    ↘       ↓       ↗\n       events bus\n  active pipes: 7\n  throughput: 142/s",
    },
    // {
    //   name: "Monorepo Test Harness",
    //   desc: "Internal tooling spike — a Vitest + MSW template for a Turborepo project with shared mocks, typed fixtures, and Playwright smoke suites.",
    //   stack: ["Turborepo", "Vitest", "Playwright", "MSW"],
    //   year: "2025",
    //   peek: "apps/\n  web/\n  admin/\npackages/\n  ui/\n  mocks/\n  test-utils/\n  eslint/\n  tsconfig/",
    // },
  ],

  experience: [
    {
      when: "12/2024 — NOW",
      role: "Software Engineer",
      co: "QuestionPro",
      coLink: "https://www.questionpro.com/",
      where: "Dhaka, Bangladesh",
      note: "Developing and maintaining a middleware application in a Turborepo monorepo, integrating multiple projects. Building features with React, Next.js, TypeScript & JavaScript; writing unit + integration tests with React Testing Library and Vitest, and E2E suites with Playwright. Using MSW to simulate APIs for reliable test environments.",
    },
    {
      when: "09/2022 — 12/2024",
      role: "Software Engineer",
      co: "Jouleslabs",
      coLink: "https://www.jouleslabs.com/",
      where: "Dhaka, Bangladesh",
      note: "Shipped ReviewXpo (Shopify review collection), DeedSign (digital signing), Syncora (Shopify admin backup) and Flowfy (Shopify integrations). Built responsive Polaris/Tailwind UIs on Next.js + TypeScript with an emphasis on consistent cross-device experience.",
    },
    {
      when: "02/2018 — 04/2022",
      role: "B.Sc, Computer Science & Engineering",
      co: "Bangladesh University of Business and Technology (BUBT)",
      coLink: "https://bubt.edu.bd/",
      where: "CGPA 3.34 / 4.00",
      note: "Completed Bachelor of Science in Computer Science and Engineering. Competed three times in the Intra University Programming Contest, placing 7th of 22 teams in the junior division. Active on Codeforces and LeetCode.",
    },
  ],

  posts: [
    {
      date: "2025 · 12 · 29",
      read: "6 MIN",
      tag: "JAVASCRIPT",
      title: "Garbage Collection Algorithm (Mark-and-Sweep) Explained",
      excerpt:
        "JavaScript frees memory automatically, but knowing how it works helps you avoid accidental leaks. Mark-and-Sweep explained simply — no engine internals required.",
      link: "https://medium.com/@rafsun7774/mark-and-sweep-explained-how-javascript-decides-what-stays-in-memory-bfcaf00569fa",
      thumb: null,
    },
    {
      date: "2025 · 11 · 26",
      read: "3 MIN",
      tag: "JAVASCRIPT",
      title: "Where Are Your Variables, Functions & Objects Stored?",
      excerpt:
        "Variables, functions, and objects all live somewhere when JavaScript runs. Understanding the Stack, the Heap, and the Call Stack gives you a sharper mental model for debugging and performance.",
      link: "https://medium.com/@rafsun7774/do-you-know-where-your-variables-functions-and-objects-are-stored-when-javascript-runs-1cc2c22e24d0",
      thumb: null,
    },
    {
      date: "2025 · 11 · 26",
      read: "5 MIN",
      tag: "JAVASCRIPT",
      title: "Write Faster JavaScript Today",
      excerpt:
        "From memoization to web workers to lazy loading, a practical overview of 10 techniques that can take your JavaScript from sluggish to seriously fast.",
      link: "https://medium.com/@rafsun7774/write-faster-javascript-today-847f04fd468a",
      thumb: null,
    },
    {
      date: "2025 · 11 · 22",
      read: "10 MIN",
      tag: "JAVASCRIPT",
      title:
        '"Why Is My Variable Running Everywhere?" — Deep-Dive Into JavaScript Scope',
      excerpt:
        "var, let, and const behave differently across blocks and functions because of how scope works. The full deep-dive — from global scope to the scope chain — that finally makes it click.",
      link: "https://medium.com/@rafsun7774/why-is-my-variable-running-everywhere-the-ultimate-deep-dive-into-javascript-scope-ee0d07f87753",
      thumb:
        "https://cdn-images-1.medium.com/max/1024/1*B7H5zG6uYfOF5iGJfc4Bxw.jpeg",
    },
    {
      date: "2025 · 11 · 04",
      read: "8 MIN",
      tag: "JAVASCRIPT",
      title:
        "Mastering the JavaScript reduce() Method — Step-by-Step with Examples",
      excerpt:
        "If you've used map() and filter(), you've met reduce()'s cousins. But reduce() itself can replace them both — from summing numbers to building objects and running async tasks in sequence.",
      link: "https://medium.com/@rafsun7774/mastering-the-javascript-reduce-method-step-by-step-with-examples-ba8e4e6b8ea1",
      thumb:
        "https://cdn-images-1.medium.com/max/494/1*zb5SpvZ2ZHEaxgjHKUDcQw.png",
    },
    {
      date: "2025 · 07 · 15",
      read: "4 MIN",
      tag: "REACT",
      title: "Understanding JSX: Syntax and Best Practices",
      excerpt:
        "JSX looks like HTML but has the full power of JavaScript. Here are the best practices that keep your React components clean, readable, and maintainable.",
      link: "https://medium.com/@rafsun7774/understanding-jsx-syntax-and-best-practices-f6dbb73d9cb2",
      thumb:
        "https://cdn-images-1.medium.com/max/725/1*OgOVcZa6WPRYqClLNEMFnA.png",
    },
  ],
};
