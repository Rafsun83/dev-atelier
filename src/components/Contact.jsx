import React from "react";
import { SectionHead, Reveal } from "./shared.jsx";

export function Contact({ profile }) {
  return (
    <section id="contact">
      <SectionHead num="05 / CONTACT" title="echo $EMAIL" meta="reply within 48h" />
      <Reveal className="contact">
        <div>
          <h3>Let's build<br/>something <em>great</em>.</h3>
          <p>
            I'm open to remote frontend / full-stack roles, contract work on Next.js
            or Shopify apps, and the occasional interesting side-build. Say hi — I read everything.
          </p>
        </div>
        <nav className="links" aria-label="contact">
          <a href={`mailto:${profile.email}`}><span className="k">01 / mail</span><span>{profile.email}</span><span className="arr">→</span></a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}><span className="k">02 / phone</span><span>{profile.phone}</span><span className="arr">→</span></a>
          <a href={profile.links.github} target="_blank" rel="noreferrer"><span className="k">03 / github</span><span>github.com/Rafsun83</span><span className="arr">→</span></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><span className="k">04 / linkedin</span><span>linkedin.com/in/rafsun-jani</span><span className="arr">→</span></a>
          <a href={profile.links.medium} target="_blank" rel="noreferrer"><span className="k">05 / medium</span><span>medium.com/@rafsun7774</span><span className="arr">→</span></a>
        </nav>
      </Reveal>
    </section>
  );
}
