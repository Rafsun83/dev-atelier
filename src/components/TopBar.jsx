import React from "react";

export function TopBar({ profile, theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="left">
        <span className="dot" title="online"></span>
        <span className="brand">{profile.handle}@dhaka</span>
        <span style={{ color: "var(--text-mute)" }}>:~$</span>
      </div>
      <div className="mid">software engineer · react · next.js · typescript</div>
      <div className="right">
        <nav className="nav">
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#writing">writing</a>
          <a href="#contact">contact</a>
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme} title="toggle theme">
          <span>{theme === "dark" ? "◐" : "◑"}</span><span>{theme}</span>
        </button>
      </div>
    </header>
  );
}
