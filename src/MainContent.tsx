import { useEffect, useState } from "react";

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
import UnionAlliedImg from "./images/union_allied.png";

type NavItem = { id: string; label: string };

type Role = {
  date: string;
  title: string;
  company: string;
  summary: string;
};

type Project = {
  name: string;
  year: string;
  url: string | null;
  img: string | null;
  tags: string[];
  blurb: string;
};

type Freelance = {
  name: string;
  url: string | null;
  img: string;
  badge: string;
};

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const roles: Role[] = [
  {
    date: "2025 — 2026",
    title: "Software Engineer",
    company: "AlphaPay · Vancouver",
    summary:
      "React/Vue web platforms, React Native apps for iOS and Android, UniApp miniprograms and H5 pages, and reusable plugins to streamline cross-platform development. Java maintenance on Android POS terminals across multiple brands.",
  },
  {
    date: "2022 — 2024",
    title: "Front-End Developer",
    company: "Fantuan Delivery",
    summary:
      "Built and maintained food-delivery web apps and the H5 hybrid app. Shipped browser plugins, a desktop app, and crawler tooling for operations. Owned performance monitoring — traffic analysis and optimizations to reduce user drop-off.",
  },
  {
    date: "2021 — 2022",
    title: "Web Developer",
    company: "Playheads",
    summary:
      "E-commerce builds in Gatsby, React, and Next.js on headless CMS (Contentful, Sanity), deployed via Netlify and Vercel.",
  },
  {
    date: "2020 — 2021",
    title: "Web Developer / Project Manager",
    company: "Inverse Technology Inc.",
    summary:
      "Built and tested commercial web apps, added features to existing codebases, and coordinated small project deliveries.",
  },
];

const projects: Project[] = [
  {
    name: "SnowGoose Media",
    year: "2022",
    url: null,
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
    url: null,
    img: OppohackImg,
    tags: ["React", "Bootstrap"],
    blurb:
      "React app for an event/community platform — landing, schedule, and signup flow.",
  },
  {
    name: "Union Allied — High Point Park",
    year: "2022",
    url: "https://www.unionallied.ca/high_point_park",
    img: UnionAlliedImg,
    tags: ["Next.js", "Sanity", "Vercel"],
    blurb:
      "Property marketing site for Union Allied's High Point Park development.",
  },
];

const freelance: Freelance[] = [
  {
    name: "Forestcure",
    url: "https://www.forestcure.com/",
    img: ForestcureImg,
    badge: "WP",
  },
  {
    name: "Deco Nova",
    url: "https://deconova.ca/",
    img: DeconovaImg,
    badge: "WP",
  },
  { name: "Uma Sushi", url: "https://umasushi.ca/", img: UmaImg, badge: "WP" },
  { name: "Markus J", url: "https://markusj.ca/", img: MarkusImg, badge: "WP" },
  { name: "Cotini", url: null, img: CotiniImg, badge: "WP" },
  {
    name: "Azure Outdoors",
    url: "https://azureoutdoors.com/",
    img: AzureImg,
    badge: "WP",
  },
  {
    name: "Western Star",
    url: null,
    img: WesternstarImg,
    badge: "WP",
  },
];

const EMAIL = "gongmin00@gmail.com";

const MainContent = () => {
  const [active, setActive] = useState<string>("about");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — user can still use mailto or select text */
    }
  };

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
          <p className="role">Software engineer · Vancouver</p>
          <p className="blurb">
            Six years shipping web, mobile, and POS-terminal apps. Open to new
            roles and freelance work.
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
          <a href="mailto:gongmin00@gmail.com" target="_blank" rel="noreferrer">
            gongmin00@gmail.com
          </a>
          <div className="side-social">
            <a
              href="https://github.com/gongmin00"
              target="_blank"
              rel="noreferrer"
              className="plain"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mingong1"
              target="_blank"
              rel="noreferrer"
              className="plain"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </aside>

      <main>
        <section className="hero">
          <h1>
            I build cross-platform apps.
            <br />
            <span className="accent">Web, mobile, and POS terminals.</span>
          </h1>
          <p className="lede">
            Six years on production front-end — primarily React, TypeScript, and
            React Native, with strong work across mobile, web, and embedded
            payment systems.
          </p>
          <span className="now-tag">
            Open to new roles · Available for freelance
          </span>
        </section>

        <section id="about">
          <div className="section-head">
            <h2>About</h2>
            <span className="num">01</span>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I'm a Vancouver-based software engineer. My core stack is React
                and TypeScript on the front and React Native for mobile — and I
                reach for Vue or UniApp when a project calls for it.
              </p>
              <p>
                Some of what I've shipped: React Native apps published to the
                App Store and Google Play, React/Vue management platforms,
                UniApp miniprograms and H5 pages, and Java maintenance for
                Android POS terminals across multiple device brands.
              </p>
            </div>
            <div>
              <p>
                Beyond the front-end, I've built browser plugins, desktop apps,
                and crawler tooling that operations teams rely on day to day,
                and owned performance monitoring on a high-traffic delivery app
                — traffic analysis and optimizations to reduce user drop-off.
                I've also done a stretch of headless-CMS e-commerce builds on
                Gatsby and Next.js (Contentful, Sanity).
              </p>
              <p>
                Before software I spent five years in plant science at Dalhousie
                — B.Sc. then M.Sc. in biochemistry. I switched to engineering in
                2019, and the lab habit of running careful experiments has
                stuck. Outside work I take on freelance builds — primarily
                React/Next.js and WordPress e-commerce.
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

        <section id="portfolio">
          <div className="section-head">
            <h2>Portfolio</h2>
            <span className="num">03</span>
          </div>
          <p className="portfolio-intro">
            Recent client and freelance builds — from custom React, Next.js, and
            Gatsby sites to WordPress e-commerce.
          </p>

          <h3 className="tier-head">Featured</h3>
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
                {p.url ? (
                  <a
                    className="visit"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit site →
                  </a>
                ) : (
                  <span className="visit archived">
                    Archived · no longer live
                  </span>
                )}
              </article>
            ))}
          </div>

          <h3 className="tier-head">WordPress builds</h3>
          <div className="freelance-grid">
            {freelance.map((f) => (
              <figure key={f.name}>
                {f.url ? (
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noreferrer"
                    className="plain"
                  >
                    <img src={f.img} alt={f.name} />
                  </a>
                ) : (
                  <img src={f.img} alt={f.name} />
                )}
                <figcaption>
                  <span>{f.name}</span>
                  <span>{f.url ? f.badge : "Archived"}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="stack">
          <div className="section-head">
            <h2>Stack</h2>
            <span className="num">04</span>
          </div>
          <div className="stack-grid">
            <div className="kicker">Languages</div>
            <div className="row">TypeScript · JavaScript · Java · Python</div>

            <div className="kicker">Frameworks</div>
            <div className="row">
              React · Next.js · Vue · React Native · UniApp · Gatsby · Umi
            </div>

            <div className="kicker">Back-end</div>
            <div className="row">Node.js · Express · Java (Spring Boot)</div>

            <div className="kicker">UI</div>
            <div className="row">
              Tailwind · Ant Design · Material UI · Shadcn · Bootstrap
            </div>

            <div className="kicker">APIs / data</div>
            <div className="row">
              REST · GraphQL · MongoDB · MySQL · Firebase
            </div>

            <div className="kicker">Cloud / deploy</div>
            <div className="row">
              AWS S3 · Netlify · Vercel · Ali Cloud · Git
            </div>

            <div className="kicker">Education</div>
            <div className="row">
              M.Sc. Biochemistry, Dalhousie · Hackhub Full-Stack Bootcamp
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-head">
            <h2>Contact</h2>
            <span className="num">05</span>
          </div>
          <div className="contact-card">
            <div>
              <h3>Open to roles and freelance work.</h3>
              <p>
                The fastest way to reach me is email — I respond within a day or
                two.
              </p>
            </div>
            <div className="contact-cta-group">
              <a href={`mailto:${EMAIL}`} className="cta plain">
                {EMAIL} →
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className={`copy-btn${copied ? " copied" : ""}`}
                aria-label={copied ? "Email copied" : "Copy email to clipboard"}
              >
                {copied ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          <div className="site-footer">
            <div>© {new Date().getFullYear()} Min Gong</div>
            <div>
              <a
                href="https://github.com/gongmin00/gongmin00.github.io"
                target="_blank"
                rel="noreferrer"
                className="plain"
              >
                View source
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainContent;
