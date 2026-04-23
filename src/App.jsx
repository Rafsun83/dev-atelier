import React, { useState, useEffect, useCallback } from "react";
import { PORTFOLIO_DATA } from "./data.js";
import { TopBar } from "./components/TopBar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { Experience } from "./components/Experience.jsx";
import { Writing } from "./components/Writing.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { TweaksPanel } from "./components/TweaksPanel.jsx";

const TWEAK_DEFAULTS = {
  theme: "dark",
  monoFont: "JetBrains Mono",
  displayFont: "JetBrains Mono",
};

export default function App() {
  const { profile, skills, projects, experience, posts } = PORTFOLIO_DATA;
  const [state, setState] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("portfolio-tweaks") || "null");
      return saved ? { ...TWEAK_DEFAULTS, ...saved } : TWEAK_DEFAULTS;
    } catch { return TWEAK_DEFAULTS; }
  });
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.style.setProperty("--mono", `"${state.monoFont}", ui-monospace, monospace`);
    const isMono = ["JetBrains Mono","IBM Plex Mono","Geist Mono","Fira Code"].includes(state.displayFont);
    document.documentElement.style.setProperty(
      "--display",
      `"${state.displayFont}", ${isMono ? "ui-monospace, monospace" : "ui-serif, serif"}`
    );
    try { localStorage.setItem("portfolio-tweaks", JSON.stringify(state)); } catch {}
  }, [state]);

  const persist = useCallback((edits) => {
    setState(prev => ({ ...prev, ...edits }));
  }, []);

  const onToggleTheme = useCallback(() => {
    setState(prev => ({ ...prev, theme: prev.theme === "dark" ? "light" : "dark" }));
  }, []);

  const onJump = useCallback((sel) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  useEffect(() => {
    function k(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "j") {
        e.preventDefault();
        onToggleTheme();
      }
    }
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onToggleTheme]);

  return (
    <div className="page">
      <TopBar profile={profile} theme={state.theme} onToggleTheme={onToggleTheme} />
      <Hero profile={profile} onJump={onJump} onToggleTheme={onToggleTheme} />
      <About profile={profile} skills={skills} />
      <Projects projects={projects} />
      <Experience items={experience} />
      <Writing posts={posts} mediumUrl={profile.links.medium} />
      <Contact profile={profile} />
      <Footer profile={profile} />

      <button
        onClick={() => setTweaksOpen(v => !v)}
        style={{
          position: "fixed", left: 20, bottom: 20, zIndex: 100,
          padding: "6px 12px", border: "1px solid var(--line-2)",
          background: "var(--panel)", color: "var(--text-dim)",
          fontFamily: "var(--mono)", fontSize: 12, cursor: "pointer",
          borderRadius: 3
        }}
        title="Tweaks"
      >
        // tweaks
      </button>

      <TweaksPanel
        state={state}
        onChange={persist}
        open={tweaksOpen}
        onClose={() => setTweaksOpen(false)}
      />
    </div>
  );
}
