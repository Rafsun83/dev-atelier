import React, { useState, useEffect, useRef, useMemo } from "react";
import { CodeRain } from "./CodeRain.jsx";

export function Terminal({ profile, onJump, onToggleTheme }) {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [outLines, setOutLines] = useState([]);
  const [query, setQuery] = useState("");
  const [paletteIdx, setPaletteIdx] = useState(0);
  const inputRef = useRef(null);

  const CMD = "whoami --full";

  const commands = useMemo(() => [
    { glyph: "§", label: "Go to: About",      hint: "gg a", action: () => onJump("#about") },
    { glyph: "§", label: "Go to: Work",       hint: "gg w", action: () => onJump("#work") },
    { glyph: "§", label: "Go to: Experience", hint: "gg e", action: () => onJump("#experience") },
    { glyph: "§", label: "Go to: Writing",    hint: "gg r", action: () => onJump("#writing") },
    { glyph: "§", label: "Go to: Contact",    hint: "gg c", action: () => onJump("#contact") },
    { glyph: "◐", label: "Toggle theme",      hint: "⌘ J", action: () => onToggleTheme() },
    { glyph: "✉", label: "Send email",        hint: "⌘ E", action: () => { location.href = `mailto:${profile.email}`; } },
    { glyph: "↗", label: "Open GitHub",       hint: "",    action: () => window.open(profile.links.github, "_blank") },
    { glyph: "↗", label: "Open LinkedIn",     hint: "",    action: () => window.open(profile.links.linkedin, "_blank") },
    { glyph: "↗", label: "Open Medium",       hint: "",    action: () => window.open(profile.links.medium, "_blank") },
  ], [onJump, onToggleTheme, profile]);

  useEffect(() => {
    let cancel = false;
    (async () => {
      for (let i = 0; i <= CMD.length; i++) {
        if (cancel) return;
        setTyped(CMD.slice(0, i));
        await new Promise(r => setTimeout(r, 55 + Math.random() * 45));
      }
      if (cancel) return;
      setShowCursor(false);
      await new Promise(r => setTimeout(r, 360));
      const lines = [
        { cls: "dim",  t: "▸ resolving identity…" },
        { cls: "ok",   t: `  ${profile.name.toUpperCase()} · ${profile.role.toLowerCase()} · ${profile.location}` },
        { cls: "out",  t: "  3+ yrs · 2 cos · react / next.js / typescript" },
        { cls: "dim",  t: "▸ currently:" },
        { cls: "info", t: "  software engineer @ questionpro" },
        { cls: "dim",  t: "▸ shipped:" },
        { cls: "out",  t: "  reviewxpo · deedsign · syncora · flowfy" },
        { cls: "warn", t: "  → press ⌘K to explore" },
      ];
      for (const ln of lines) {
        if (cancel) return;
        setOutLines(prev => [...prev, ln]);
        await new Promise(r => setTimeout(r, 130));
      }
    })();
    return () => { cancel = true; };
  }, [profile]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter(c => c.label.toLowerCase().includes(q)) : commands;
  }, [query, commands]);

  useEffect(() => { setPaletteIdx(0); }, [query]);

  function onKey(e) {
    if (e.key === "ArrowDown") { e.preventDefault(); setPaletteIdx(i => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setPaletteIdx(i => Math.max(i - 1, 0)); }
    else if (e.key === "Enter")  { e.preventDefault(); filtered[paletteIdx]?.action(); }
  }

  useEffect(() => {
    function g(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    }
    window.addEventListener("keydown", g);
    return () => window.removeEventListener("keydown", g);
  }, []);

  return (
    <div className="term">
      <div className="term-head">
        <div className="lights"><i className="r"></i><i className="y"></i><i className="g"></i></div>
        <div className="title">~/portfolio — zsh — 92×30</div>
        <div className="grow"></div>
        <div className="tab">⌘K · palette</div>
      </div>
      <div className="term-body">
        <CodeRain />
        <pre className="ascii" aria-hidden="true">
{`   ██████╗   █████╗  ███████╗ ███████╗ ██╗   ██╗ ███╗   ██╗
   ██╔══██╗ ██╔══██╗ ██╔════╝ ██╔════╝ ██║   ██║ ████╗  ██║
   ██████╔╝ ███████║ █████╗   ███████╗ ██║   ██║ ██╔██╗ ██║
   ██╔══██╗ ██╔══██║ ██╔══╝   ╚════██║ ██║   ██║ ██║╚██╗██║
   ██║  ██║ ██║  ██║ ██║      ███████║ ╚██████╔╝ ██║ ╚████║
   ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝      ╚══════╝  ╚═════╝  ╚═╝  ╚═══╝`}
        </pre>

        <div className="term-line">
          <span className="prompt"><span className="at">rafsun@portfolio</span>:<span className="path">~</span>$</span>
          <span className="cmd">{typed}</span>
          {showCursor && <span className="cursor"></span>}
        </div>

        {outLines.map((ln, i) => (
          <div key={i} className="term-line" style={{ animation: "fadeIn .3s ease both" }}>
            <span className={ln.cls}>{ln.t}</span>
          </div>
        ))}

        <div className="palette" role="listbox">
          <div className="palette-input">
            <span className="ic">⌘</span>
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={onKey}
              placeholder="Type a command or jump to section…"
              autoComplete="off"
            />
            <span className="kbd">↵</span>
          </div>
          <div className="palette-list">
            {filtered.map((c, i) => (
              <div
                key={c.label}
                className={`palette-item ${i === paletteIdx ? "active" : ""}`}
                onMouseEnter={() => setPaletteIdx(i)}
                onClick={() => c.action()}
              >
                <span className="glyph">{c.glyph}</span>
                <span>{c.label}</span>
                <span className="hint">{c.hint}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
