import React, { useEffect, useState } from "react";

import SnowgooseImg from "./images/snowgoose.png";
import GuarantiImg from "./images/guaranti.png";
import OppohackImg from "./images/Oppohack.png";

import ForestcureImg from "./images/forestcure.png";
import DeconovaImg from "./images/deconova.png";
import UmaImg from "./images/uma.png";
import MarkusImg from "./images/markus.png";
import CotiniImg from "./images/cotini.png";
import AzureImg from "./images/azure.png";
import WesternstarImg from "./images/westernstar.png";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "freelance", label: "Freelance" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const roles = [
  {
    date: "2025 — Now",
    title: "Front-End Developer",
    company: "AlphaPay · Vancouver",
    summary:
      "Web platforms in React and Vue, React Native apps for iOS and Android, UniApp miniprograms and H5 pages, and Java maintenance on Android POS terminals.",
  },
  {
    date: "2022 — 2024",
    title: "Front-End Developer",
    company: "Fantuan Delivery",
    summary:
      "Built and maintained food-delivery web apps and an H5 hybrid app. Shipped browser plugins, desktop apps, and crawler tooling. Monitored performance to reduce drop-off.",
  },
  {
    date: "2021 — 2022",
    title: "Web Developer",
    company: "Playheads",
    summary:
      "E-commerce builds on Gatsby and Next.js with headless CMS (Contentful, Sanity), deployed via Netlify and Vercel.",
  },
  {
    date: "2020 — 2021",
    title: "Web Developer / PM",
    company: "Inverse Technology Inc.",
    summary:
      "Shipped features and maintained commercial web apps; coordinated small project deliveries.",
  },
];

const projects = [
  {
    name: "SnowGoose Media",
    year: "2022",
    url: "https://sgc-media.com/",
    img: SnowgooseImg,
    tags: ["Gatsby", "Contentful", "Netlify"],
    blurb:
      "CMS-driven marketing site for a media production studio. Editor-friendly content model and static build with branch previews.",
  },
  {
    name: "Guaranti",
    year: "2022",
    url: "https://guaranti.ca/",
    img: GuarantiImg,
    tags: ["Gatsby", "Contentful", "Netlify"],
    blurb:
      "Brand site with a headless content backend. Focus on content authoring ergonomics for a non-technical client.",
  },
  {
    name: "OppoHack",
    year: "2021",
    url: "https://oppohack.com/",
    img: OppohackImg,
    tags: ["React", "Bootstrap"],
    blurb:
      "React app for an event/community platform — landing, schedule, and signup flow.",
  },
  {
    name: "Union Allied — High Point Park",
    year: "2022",
    url: "https://www.unionallied.ca/high_point_park",
    img: null,
    tags: ["Next.js", "Sanity", "Vercel"],
    blurb:
      "Property marketing site for Union Allied's High Point Park development.",
  },
];

const freelance = [
  { name: "Forestcure", url: "https://www.forestcure.com/", img: ForestcureImg, badge: "WP" },
  { name: "Deco Nova", url: "https://deconova.ca/", img: DeconovaImg, badge: "WP" },
  { name: "Uma Sushi", url: "https://umasushi.ca/", img: UmaImg, badge: "WP" },
  { name: "Markus J", url: "https://markusj.ca/", img: MarkusImg, badge: "WP" },
  { name: "Cotini", url: "https://cotini.ca/", img: CotiniImg, badge: "WP" },
  { name: "Azure Outdoors", url: "https://azureoutdoors.com/", img: AzureImg, badge: "WP" },
  { name: "Western Star", url: "https://westernstarresource.com/", img: WesternstarImg, badge: "WP" },
];

const MainContent = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="me">
          <h1 className="name">Min Gong</h1>
          <p className="role">Full-stack developer · Vancouver</p>
          <p className="blurb">
            Five years building production web and mobile apps. Open to new roles and freelance work.
          </p>
        </div>

        <nav className="side-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="side-contact">
          <a href="mailto:gongmin00@gmail.com">gongmin00@gmail.com</a>
          <div className="side-social">
            <a href="https://github.com/gongmin00" target="_blank" rel="noreferrer" className="plain">GitHub</a>
            <a href="https://www.linkedin.com/in/mingong1" target="_blank" rel="noreferrer" className="plain">LinkedIn</a>
          </div>
        </div>
      </aside>

      <main>
        <section className="hero">
          <h1>
            Full-stack developer.<br />
            <span className="accent">React, Next.js, React Native.</span>
          </h1>
          <p className="lede">
            I build production web and mobile apps. Five years across React, Next.js, Vue, and React Native — shipping high-traffic platforms, hybrid apps, and cross-platform tooling.
          </p>
          <span className="now-tag">Open to new roles · Available for freelance</span>
        </section>

        <section id="about">
          <div className="section-head">
            <h2>About</h2>
            <span className="num">01</span>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I'm a full-stack developer based in Vancouver. Day to day I work in React, Next.js, Vue, and React Native, with comfort across the rest of the stack — Node, GraphQL, and the usual cloud bits.
              </p>
              <p>
                At AlphaPay I'm building cross-platform mobile apps, React/Vue admin platforms, and UniApp miniprograms running on POS terminals across multiple brands.
              </p>
            </div>
            <div>
              <p>
                Before software, I spent a few years in plant biochemistry research at Dalhousie. I switched to engineering full-time in 2019 and the lab habit of running careful experiments has stuck.
              </p>
              <p>
                Outside of work, I take on freelance builds — primarily React/Next.js sites and WordPress/Shopify e-commerce.
              </p>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="section-head">
            <h2>Experience</h2>
            <span className="num">02</span>
          </div>
          <ul className="roles">
            {roles.map((r) => (
              <li key={r.company + r.date}>
                <div className="date">{r.date}</div>
                <div>
                  <h3 className="role-title">{r.title}</h3>
                  <p className="company">{r.company}</p>
                </div>
                <p className="summary">{r.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work">
          <div className="section-head">
            <h2>Selected Work</h2>
            <span className="num">03</span>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project" key={p.name}>
                <div className="thumb-wrap">
                  {p.img ? (
                    <img src={p.img} alt={p.name} />
                  ) : (
                    <div className="thumb-placeholder">add screenshot</div>
                  )}
                </div>
                <div className="head">
                  <h3>{p.name}</h3>
                  <span className="year">{p.year}</span>
                </div>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <p>{p.blurb}</p>
                <a className="visit" href={p.url} target="_blank" rel="noreferrer">
                  Visit site →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="freelance">
          <div className="section-head">
            <h2>Freelance</h2>
            <span className="num">04</span>
          </div>
          <div className="freelance-intro">
            <p>
              Available for freelance — primarily React/Next.js builds and WordPress/Shopify e-commerce. A few recent client sites:
            </p>
            <span className="availability">Open for projects</span>
          </div>
          <div className="freelance-grid">
            {freelance.map((f) => (
              <figure key={f.name}>
                <a href={f.url} target="_blank" rel="noreferrer" className="plain">
                  <img src={f.img} alt={f.name} />
                </a>
                <figcaption>
                  <span>{f.name}</span>
                  <span>{f.badge}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="stack">
          <div className="section-head">
            <h2>Stack</h2>
            <span className="num">05</span>
          </div>
          <div className="stack-grid">
            <div className="kicker">Day-to-day</div>
            <div className="row">React · Next.js · Vue · TypeScript · React Native</div>

            <div className="kicker">Also</div>
            <div className="row">Node.js · Express · GraphQL · REST · UniApp · miniprograms · Tailwind · Ant Design · Material UI · Shadcn</div>

            <div className="kicker">Cloud / data</div>
            <div className="row">AWS S3 · Firebase · MongoDB · Netlify · Vercel · Ali Cloud</div>

            <div className="kicker">Other</div>
            <div className="row">Java (Android POS) · Python (Odoo) · browser plugins · desktop apps · crawlers</div>

            <div className="kicker">Education</div>
            <div className="row">M.Sc. Biochemistry, Dalhousie · Hackhub Full-Stack Bootcamp</div>
          </div>
        </section>

        <section id="contact">
          <div className="section-head">
            <h2>Contact</h2>
            <span className="num">06</span>
          </div>
          <div className="contact-card">
            <div>
              <h3>Open to roles and freelance work.</h3>
              <p>The fastest way to reach me is email — I respond within a day or two.</p>
            </div>
            <a href="mailto:gongmin00@gmail.com" className="cta plain">
              gongmin00@gmail.com →
            </a>
          </div>

          <div className="site-footer">
            <div>© {new Date().getFullYear()} Min Gong</div>
            <div>Last updated May 2026</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainContent;
