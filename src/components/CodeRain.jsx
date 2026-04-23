import React, { useEffect, useRef } from "react";

export function CodeRain() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const COLS = 36, ROWS = 22;
    const glyphs = "01<>{}[]()/\\;:=+-*&|?!#$";
    const cols = Array.from({ length: COLS }, () => ({
      y: Math.floor(Math.random() * ROWS),
      speed: 0.3 + Math.random() * 0.8,
    }));
    let t = 0;
    function frame() {
      t++;
      const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(" "));
      cols.forEach((col, c) => {
        if (t % Math.max(1, Math.round(1 / col.speed)) === 0) col.y = (col.y + 1) % ROWS;
        for (let tail = 0; tail < 6; tail++) {
          const y = (col.y - tail + ROWS) % ROWS;
          if (Math.random() < 0.5) grid[y][c] = glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      });
      if (ref.current) ref.current.textContent = grid.map(r => r.join(" ")).join("\n");
      raf = requestAnimationFrame(frame);
    }
    frame();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <div className="rain" ref={ref} aria-hidden="true"></div>;
}
