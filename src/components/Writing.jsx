import React from "react";
import { SectionHead, Reveal } from "./shared.jsx";

export function Writing({ posts, mediumUrl }) {
  return (
    <section id="writing">
      <SectionHead num="04 / WRITING" title="cat ./notes/*.md" meta="occasional · longer-form on Medium" />
      <Reveal className="writing">
        {posts.map(p => (
          <a className="post" key={p.title} href={mediumUrl} target="_blank" rel="noreferrer">
            <div className="meta">
              <span>{p.date}</span>
              <span><span className="tag">{p.tag}</span> · {p.read}</span>
            </div>
            <div className="title">{p.title}</div>
            <div className="excerpt">{p.excerpt}</div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
