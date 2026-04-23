import React from "react";

export function TweaksPanel({ state, onChange, open, onClose }) {
  return (
    <div className={`tweaks ${open ? "show" : ""}`} role="dialog" aria-label="Tweaks">
      <div className="hd">
        <span>// TWEAKS</span>
        <span className="close" onClick={onClose}>✕</span>
      </div>
      <div className="body">
        <label>
          <span className="lbl">THEME</span>
          <div className="seg">
            {["dark","light"].map(v => (
              <button key={v} className={state.theme === v ? "on" : ""} onClick={() => onChange({ theme: v })}>{v}</button>
            ))}
          </div>
        </label>
        <label>
          <span className="lbl">MONO FONT</span>
          <select value={state.monoFont} onChange={e => onChange({ monoFont: e.target.value })}>
            {["JetBrains Mono","IBM Plex Mono","Geist Mono","Fira Code"].map(f => <option key={f}>{f}</option>)}
          </select>
        </label>
        <label>
          <span className="lbl">DISPLAY FONT</span>
          <select value={state.displayFont} onChange={e => onChange({ displayFont: e.target.value })}>
            {["JetBrains Mono","IBM Plex Mono","Geist Mono","Inter","Fraunces"].map(f => <option key={f}>{f}</option>)}
          </select>
        </label>
      </div>
    </div>
  );
}
