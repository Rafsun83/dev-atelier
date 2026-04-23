import React, { useEffect, useState } from "react";

export function Footer({ profile }) {
  const [clock, setClock] = useState("");
  useEffect(() => {
    const t = () => {
      const d = new Date();
      const pad = n => String(n).padStart(2, "0");
      setClock(`UPTIME ∞ · ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} local · node-online`);
    };
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <footer className="footer">
      <div>// built by hand · no tracking</div>
      <div className="c">{profile.name.toLowerCase()} · © 2026</div>
      <div className="r">{clock}</div>
    </footer>
  );
}
