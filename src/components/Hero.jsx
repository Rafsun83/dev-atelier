import React from "react";
import { Terminal } from "./Terminal.jsx";

export function Hero({ profile, onJump, onToggleTheme }) {
  const parts = profile.name.split(" ");
  const first = parts[0];
  const last  = parts.slice(1).join(" ");
  return (
    <section className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-eyebrow"><span className="dot"></span> AVAILABLE · REMOTE · {profile.location.toUpperCase()}</div>
          <h1>
            {first}<br/>
            <span className="glow">{last}</span><span className="cursor"></span>
          </h1>
          <p className="hero-sub">
            I'm a <b>software engineer</b> who builds scalable web apps with <b>React</b>,{" "}
            <b>Next.js</b>, and <b>TypeScript</b>. Currently shipping middleware in a{" "}
            <b>Turborepo</b> at <b>QuestionPro</b>, with a serious test suite behind it —
            <b> Vitest</b>, <b>Playwright</b>, and <b>MSW</b>.
          </p>
        </div>

        <div className="hero-meta">
          <div><span className="k">// role</span><span className="v">Software Engineer</span></div>
          <div><span className="k">// focus</span><span className="v">React · Next.js · Monorepo</span></div>
          <div><span className="k">// status</span><span className="v"><span className="pulse">●</span> Open to roles</span></div>
        </div>
      </div>

      <Terminal profile={profile} onJump={onJump} onToggleTheme={onToggleTheme} />
    </section>
  );
}
