import React, { useState, useEffect, useRef } from "react";

export function SectionHead({ num, title, meta }) {
  return (
    <header className="section-head">
      <div className="num">§ {num}</div>
      <h2><span className="caret">&gt;</span> {title}</h2>
      <div className="meta">{meta}</div>
    </header>
  );
}

export function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>{children}</div>;
}

export function Bars({ items }) {
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      {items.map(it => (
        <div className="bar" key={it.k}>
          <span className="label">{it.k}</span>
          <span className="track"><span className="fill" style={{ width: on ? `${it.v}%` : "0%" }}></span></span>
          <span className="num">{it.v}%</span>
        </div>
      ))}
    </div>
  );
}
