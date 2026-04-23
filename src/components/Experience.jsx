import React from "react";
import { SectionHead, Reveal } from "./shared.jsx";

export function Experience({ items }) {
  return (
    <section id="experience">
      <SectionHead num="03 / EXPERIENCE" title="git log --oneline" meta="2018 — present" />
      <Reveal className="exp">
        <div className="exp-rail">// TIMELINE</div>
        <div className="exp-list">
          {items.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="when">{e.when}</div>
              <div>
                <div className="role">{e.role}</div>
                <div className="co">
                  {e.coLink ? (
                    <a href={e.coLink} target="_blank" rel="noopener noreferrer">{e.co}</a>
                  ) : (
                    e.co
                  )}
                </div>
                <div className="where">{e.where}</div>
                <div className="note">{e.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
