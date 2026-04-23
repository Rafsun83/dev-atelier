# Rafsun Jani — Portfolio

A terminal / developer-aesthetic portfolio built with **React + Vite**.

## Run locally

```bash
npm install
npm run start
```

Opens at `http://localhost:3000`.

## Build for production

```bash
npm run build      # outputs /dist
npm run preview    # preview the production build
```

## Project structure

```
├── index.html            # Vite entry (module-based)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          # React root
    ├── App.jsx           # root component
    ├── data.js           # portfolio content (CV data)
    ├── styles.css        # design tokens + all styles
    └── components/
        ├── TopBar.jsx
        ├── Hero.jsx
        ├── Terminal.jsx
        ├── CodeRain.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Writing.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── TweaksPanel.jsx
        └── shared.jsx    # Reveal, Bars, SectionHead
```

## Notes

- The legacy `Portfolio.html` (CDN React + in-browser Babel) is kept at the
  project root for the in-preview pane. The Vite app uses `index.html`.
- Keyboard: `⌘K` / `Ctrl+K` focuses the command palette. `⌘J` / `Ctrl+J`
  toggles theme.
