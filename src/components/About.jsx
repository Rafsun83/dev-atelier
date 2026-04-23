import React from "react";
import { SectionHead, Reveal } from "./shared.jsx";

export function About({ profile, skills }) {
  return (
    <section id="about">
      <SectionHead num="01 / ABOUT" title="whoami" meta="cat ./about.md" />
      <Reveal className="about">
        <div>
          <p>
            Hi — I'm <b>Rafsun Jani</b>, a <b>Software Engineer</b> based in{" "}
            {profile.location}. I build scalable web apps with <b>React</b>,{" "}
            <b>Next.js</b>, <b>TypeScript</b>, and
            <b> JavaScript</b>, and I care a lot about the parts of software
            that usually don't get the credit: tests that actually mean
            something, monorepos that don't rot, and UI that stays crisp across
            every device.
          </p>
          <p>
            I'm currently at <b>QuestionPro</b> working on a middleware
            application inside a <b>Turborepo</b> monorepo — integrating
            multiple projects with shared UI, typed contracts, and a real
            testing pyramid (<b>Vitest</b>, <b>Playwright</b>, and <b>MSW</b>{" "}
            for API mocking). Before that I spent two years at <b>Jouleslabs</b>
            shipping Shopify apps and digital-signing tooling: <b>
              ReviewXpo
            </b>, <b>DeedSign</b>,<b> Syncora</b>, and <b>Flowfy</b>.
          </p>
          <p>
            I have a B.Sc. in Computer Science & Engineering from <b>BUBT</b>,
            three Intra-University Programming Contest appearances under my
            belt, and a soft spot for clean monorepo architecture. You can find
            me on{" "}
            <a
              className="link"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ,{" "}
            <a
              className="link"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            , or{" "}
            <a
              className="link"
              href={profile.links.medium}
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            .
          </p>
        </div>

        <div className="about-avatar-col">
          <img
            src="./public/Rafsun.jpeg"
            alt={profile.name}
            className="about-photo-avatar"
            onError={(e) => {
              e.currentTarget.closest(".about-avatar-col").style.display =
                "none";
            }}
          />
        </div>
      </Reveal>

      <Reveal className="skills-section">
        <div className="skills-hd">// CURRENT STACK</div>
        <div className="skills-categories">
          {skills.categories.map((cat) => (
            <div className="skills-cat" key={cat.label}>
              <span className="skills-cat-label">{cat.label}</span>
              <div className="skills-cat-items">
                {cat.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="skills-env">
          <div className="skills-env-hd">// ENVIRONMENT</div>
          {skills.env.map((r) => (
            <div className="stat-row" key={r.k}>
              <span className="k">{r.k}</span>
              <span className="v">{r.v}</span>
            </div>
          ))}
          <div className="stat-row">
            <span className="k">status</span>
            <span className="v">
              <span className="tag">open to work</span>
            </span>
          </div>
        </div> */}
      </Reveal>
    </section>
  );
}
