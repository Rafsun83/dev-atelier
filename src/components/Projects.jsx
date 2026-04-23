import React from "react";
import { SectionHead, Reveal } from "./shared.jsx";

export function Projects({ projects }) {
  return (
    <section id="work">
      <SectionHead num="02 / SELECTED WORK" title="ls ./projects" meta={`${projects.length} items · recent first`} />
      <Reveal className="projects">
        {projects.map((p, i) => {
          const inner = (
            <>
              <div className="idx">{String(i + 1).padStart(2, "0")}.</div>
              <div className="name">{p.name}</div>
              <div className="desc">{p.desc}</div>
              <div className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              <div className="year">{p.year}</div>
              <div className="arrow">→</div>
              <pre className="peek">{p.peek}</pre>
            </>
          );
          return p.link ? (
            <a className="project" href={p.link} target="_blank" rel="noopener noreferrer" key={p.name}>
              {inner}
            </a>
          ) : (
            <div className="project" tabIndex={0} key={p.name}>
              {inner}
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
