"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  Code2,
  Copy,
  Database,
  Eye,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Palette,
  Server,
  X,
} from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

const email = "hpampaniya09@gmail.com";
const resumePreviewUrl =
  "https://drive.google.com/file/d/1KYT3lOSAdDVNm-inEjmzxNSHCTO2x09m/preview";
const resumeDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1KYT3lOSAdDVNm-inEjmzxNSHCTO2x09m";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const projects = [
  {
    title: "Dynamic Form Builder",
    type: "Full-stack application",
    description:
      "A form-building web app for creating and managing custom forms, backed by a MERN-style stack.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    live: "https://dynamic-form-builder-webapp.vercel.app/",
    github: "https://github.com/HardikPampaniya/Dynamic-Form-Builder",
    visual: "forms",
    featured: true,
  },
  {
    title: "Chatify",
    type: "Real-time chat app",
    description:
      "A full-stack chat application designed around a straightforward, interactive messaging experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://chat-app-6u3w.onrender.com",
    github: "https://github.com/HardikPampaniya/Chat-App",
    visual: "chat",
  },
  {
    title: "Hotstar Clone",
    type: "Frontend interface",
    description:
      "A streaming-inspired interface built to practice responsive layouts and front-end interactions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://hotstar-duplicate.vercel.app/",
    github:
      "https://github.com/HardikPampaniya/Hotstar-Clone-Using-HTML-CSS-JS",
    visual: "streaming",
  },
  {
    title: "Notes",
    type: "Full-stack application",
    description:
      "A note-taking app for creating, editing, and deleting notes with a React interface and Node backend.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://notes-hardik.vercel.app/notes",
    github: "https://github.com/HardikPampaniya/Notes",
    visual: "notes",
  },
  {
    title: "Temperature Converter",
    type: "Web utility",
    description:
      "A compact converter for Celsius, Fahrenheit, and Kelvin, built with the core web technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://temp-converter-webapp.vercel.app/",
    github: "https://github.com/HardikPampaniya/Temperature-Converter",
    visual: "temperature",
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Data",
    icon: Database,
    items: ["MongoDB", "MySQL", "SQL"],
  },
  {
    title: "Tools",
    icon: Layers,
    items: ["Git", "GitHub", "VS Code"],
  },
];

const services = [
  {
    number: "01",
    title: "Full-stack applications",
    detail: "Thoughtful interfaces connected to dependable application logic.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Frontend development",
    detail: "Responsive React and Next.js experiences with clear, reusable UI.",
    icon: Monitor,
  },
  {
    number: "03",
    title: "Backend APIs",
    detail: "Java and Node.js services, API integration, and practical testing.",
    icon: Server,
  },
  {
    number: "04",
    title: "Interface craft",
    detail: "Accessible layouts, consistent design details, and mobile-ready pages.",
    icon: Palette,
  },
];

function SectionHeading({
  id,
  number,
  eyebrow,
  title,
  description,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {eyebrow}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      {description ? <p className="section-intro">{description}</p> : null}
    </div>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "forms") {
    return (
      <div className="project-preview preview-forms" aria-hidden="true">
        <div className="preview-sidebar">
          <span className="preview-brand-mark">F</span>
          <span className="preview-sidebar-line active" />
          <span className="preview-sidebar-line" />
          <span className="preview-sidebar-line short" />
        </div>
        <div className="preview-workspace">
          <div className="preview-topline"><span>FORM STUDIO</span><span>Draft · 03</span></div>
          <div className="preview-form-layout">
            <div className="preview-form-copy">
              <span className="preview-kicker">NEW FORM</span>
              <strong>Let&apos;s get to know you.</strong>
              <span className="preview-field-label">Full name</span>
              <span className="preview-input" />
              <span className="preview-field-label">Email address</span>
              <span className="preview-input" />
              <span className="preview-submit">Continue <ArrowRight size={12} /></span>
            </div>
            <div className="preview-inspector">
              <span className="preview-inspector-title">FORM ELEMENTS</span>
              <span className="preview-element"><i /> Short answer</span>
              <span className="preview-element"><i /> Email</span>
              <span className="preview-element"><i /> Dropdown</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "chat") {
    return (
      <div className="project-preview preview-chat" aria-hidden="true">
        <div className="chat-panel">
          <div className="chat-panel-head"><span className="preview-brand-mark chat-mark">C</span><span>Chatify</span></div>
          <span className="chat-search">Search conversations</span>
          <span className="chat-person active"><i /> <b /><em /></span>
          <span className="chat-person"><i /> <b /><em /></span>
          <span className="chat-person"><i /> <b /><em /></span>
        </div>
        <div className="chat-window">
          <div className="chat-window-head"><span className="chat-avatar">J</span><span><b>Jamie Parker</b><small>Online now</small></span><span className="chat-dots">···</span></div>
          <div className="chat-message received">Hey! Have you seen the latest update?</div>
          <div className="chat-message sent">Just had a look. The new flow feels great.</div>
          <div className="chat-message received short-message">Agreed ✨</div>
          <div className="chat-compose">Write a message… <span>↗</span></div>
        </div>
      </div>
    );
  }

  if (kind === "streaming") {
    return (
      <div className="project-preview preview-streaming" aria-hidden="true">
        <div className="streaming-top"><span className="streaming-logo">hotstar<span>+</span></span><span>Home&nbsp;&nbsp; Shows&nbsp;&nbsp; Movies&nbsp;&nbsp; Sports</span><span className="streaming-profile">H</span></div>
        <div className="streaming-feature">
          <span className="streaming-tag">FEATURED SERIES</span>
          <strong>Stories<br />worth staying for.</strong>
          <span className="streaming-cta">Explore titles <ArrowRight size={13} /></span>
        </div>
        <div className="streaming-row"><span /><span /><span /><span /></div>
      </div>
    );
  }

  if (kind === "notes") {
    return (
      <div className="project-preview preview-notes" aria-hidden="true">
        <div className="notes-rail"><span className="notes-logo">N.</span><span className="notes-rail-icon selected">⌂</span><span className="notes-rail-icon">◷</span><span className="notes-rail-icon">☆</span></div>
        <div className="notes-content"><div className="notes-top"><span>MY NOTES</span><span>＋</span></div><strong>A space for ideas.</strong><div className="notes-grid"><span><i />Project ideas<small>Sketching out the next build…</small></span><span><i />Reading list<small>Things to explore this week.</small></span><span><i />Quick thoughts<small>Keep it simple, keep it moving.</small></span></div></div>
      </div>
    );
  }

  return (
    <div className="project-preview preview-temperature" aria-hidden="true">
      <div className="temp-top"><span>THERMO / 01</span><span>CONVERTER</span></div>
      <div className="temp-main"><span className="temp-sun">☼</span><strong>24<span>°</span></strong><small>CELSIUS</small></div>
      <div className="temp-units"><span><small>FAHRENHEIT</small><b>75.2°</b></span><span><small>KELVIN</small><b>297.15 K</b></span></div>
      <div className="temp-slider"><i /></div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card${project.featured ? " project-card-featured" : ""}`}>
      <ProjectVisual kind={project.visual} />
      <div className="project-card-content">
        <div className="project-card-heading">
          <div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
          </div>
          <a className="project-open" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
            <ArrowUpRight size={19} />
          </a>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-card-footer">
          <div className="project-tags">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="project-links">
            <a href={project.live} target="_blank" rel="noreferrer"><span>Live demo</span><ArrowUpRight size={14} /></a>
            <a href={project.github} target="_blank" rel="noreferrer"><Github size={14} /><span>Source</span></a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const resumeDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = resumeDialogRef.current;
    if (!dialog) return;

    if (resumeOpen && !dialog.open) dialog.showModal();
    if (!resumeOpen && dialog.open) dialog.close();
  }, [resumeOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      setFormMessage("Copy is unavailable here. Use the email link to get in touch.");
    }
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setFormMessage("");
    const form = event.currentTarget;
    try {
      await emailjs.sendForm(
        "service_gmerd3k",
        "template_tionfoh",
        form,
        "6EVEHNi2YH8-iGWAd",
      );
      setFormMessage("Thanks — your message has been sent.");
      form.reset();
    } catch {
      setFormMessage(`Message could not be sent. Please email ${email} directly.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Hardik Pampaniya, home">
          <span className="wordmark-icon">H<span>.</span></span>
          <span className="wordmark-name">Hardik Pampaniya<small>Software Engineer</small></span>
        </a>
        <nav id="main-navigation" className={`main-nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "nav-link active" : "nav-link"}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            className="nav-resume"
            type="button"
            aria-haspopup="dialog"
            onClick={() => {
              setMenuOpen(false);
              setResumeOpen(true);
            }}
          >
            Résumé <ArrowUpRight size={14} />
          </button>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section className="hero-section page-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-overline"><span className="status-dot" /> HELLO, I&apos;M</p>
            <h1 id="hero-title">Hardik<br /><span>Pampaniya<span className="hero-period">.</span></span></h1>
            <p className="hero-role">Software Engineer <i /> Full-Stack Developer</p>
            <p className="hero-description">
              I build modern web applications and scalable backend solutions, turning complex problems into clean, efficient, and user-friendly experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
              <button className="button button-secondary" type="button" onClick={() => setResumeOpen(true)}><Eye size={16} /> View résumé</button>
            </div>
            <div className="hero-socials">
              <span>CONNECT</span>
              <a href="https://github.com/HardikPampaniya" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href="https://www.linkedin.com/in/hardik-pampaniya-272746224" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-orbit orbit-one" aria-hidden="true" />
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <div className="portrait-caption portrait-caption-top"><span>BASED IN</span><b>INDIA</b></div>
            <div className="portrait-frame">
              <Image
                src="/hardik-profile.jpg"
                alt="Hardik Pampaniya"
                width={400}
                height={400}
                priority
                sizes="(max-width: 700px) 72vw, (max-width: 1100px) 36vw, 400px"
              />
            </div>
            <div className="portrait-caption portrait-caption-bottom"><span>BUILDING WITH</span><b>CARE & CURIOSITY</b></div>
            <div className="hero-index" aria-hidden="true">HP / 2026</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
          <div className="hero-index-mobile" aria-hidden="true">01 — INTRODUCTION</div>
        </section>

        <section className="about-section section-wrap page-wrap" id="about" aria-labelledby="about-title">
          <SectionHeading id="about-title" number="01" eyebrow="A LITTLE ABOUT ME" title="Engineering with a human point of view." description="I care about what happens beneath the interface as much as what people see on screen." />
          <div className="about-grid">
            <div className="about-narrative">
              <p className="about-lead">I&apos;m a Computer Engineering graduate who enjoys making useful software feel clear, considered, and reliable.</p>
              <p>My experience spans React and Next.js interfaces, dynamic forms, and full-stack JavaScript applications, alongside professional backend work with Java and Spring Boot APIs. I like understanding the problem first, then shaping a solution that stays maintainable as it grows.</p>
              <p>I&apos;ve also worked with PHP and Laravel during a short internship at CreArt Solutions.</p>
              <p>From interface details to API integration and debugging, I bring curiosity, steady iteration, and care for clean code to the whole build.</p>
            </div>
            <div className="about-highlights">
              <article className="highlight-card"><span className="highlight-icon"><GraduationCap size={18} /></span><div><span className="highlight-label">EDUCATION</span><h3>Computer Engineering</h3><p>Bachelor of Engineering · Marwadi University · 2020—2024</p></div></article>
              <article className="highlight-card"><span className="highlight-icon"><Briefcase size={18} /></span><div><span className="highlight-label">EXPERIENCE</span><h3>Product & web development</h3><p>Professional backend engineering and full-stack development experience.</p></div></article>
              <article className="highlight-card"><span className="highlight-icon"><Code2 size={18} /></span><div><span className="highlight-label">TECHNICAL INTERESTS</span><h3>Scalable, useful software</h3><p>Web platforms, API design, problem-solving, and thoughtful product details.</p></div></article>
              <article className="highlight-card"><span className="highlight-icon"><Layers size={18} /></span><div><span className="highlight-label">HOW I WORK</span><h3>Clarity before complexity</h3><p>Build in small steps, keep code readable, and make the experience feel effortless.</p></div></article>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap page-wrap" id="experience" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" number="02" eyebrow="WHERE I&apos;VE WORKED" title="Experience built across the stack." description="Professional experience across enterprise backend systems and hands-on web product development." />
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-marker"><span /></div>
              <div className="experience-card">
                <div className="experience-head"><div><span className="experience-company">Tata Consultancy Services</span><h3>Product Engineer / Software Engineer</h3></div><span className="experience-date">Feb 2025 — Present</span></div>
                <p className="experience-summary">Backend engineering experience in the banking and financial services domain.</p>
                <ul><li>Developed and tested Java and Spring Boot REST APIs.</li><li>Integrated services and investigated API issues through debugging.</li></ul>
                <div className="experience-tags"><span>Java</span><span>Spring Boot</span><span>REST APIs</span><span>Banking & financial services</span></div>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-marker"><span /></div>
              <div className="experience-card">
                <div className="experience-head"><div><span className="experience-company">Netclues Technologies Pvt. Ltd.</span><h3>MERN Stack Development Intern</h3></div><span className="experience-date">Feb 2024 — Jul 2024</span></div>
                <p className="experience-summary">Contributed to full-stack web development and dynamic form-building work.</p>
                <ul><li>Built frontend experiences using React.js and Next.js.</li><li>Worked across Node.js, Redux, and full-stack application features, including a dynamic form builder.</li></ul>
                <div className="experience-tags"><span>React.js</span><span>Next.js</span><span>Node.js</span><span>Redux</span><span>MERN</span></div>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-marker"><span /></div>
              <div className="experience-card">
                <div className="experience-head"><div><span className="experience-company">CreArt Solutions</span><h3>PHP Intern</h3></div><span className="experience-date">Jul 2023 — Aug 2023</span></div>
                <p className="experience-summary">Worked on introductory PHP and Laravel projects.</p>
                <ul><li>Developed a video-calling web application using PHP.</li></ul>
                <div className="experience-tags"><span>PHP</span><span>Laravel</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="skills-section section-wrap page-wrap" id="skills" aria-labelledby="skills-title">
          <SectionHeading id="skills-title" number="03" eyebrow="THE TOOLS I USE" title="A practical toolkit." description="Technologies drawn from my project work and professional experience." />
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-head"><span className="skill-icon"><Icon size={18} /></span><span className="skill-number">0{index + 1}</span></div>
                <h3>{title}</h3>
                <div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-wrap page-wrap" id="projects" aria-labelledby="projects-title">
          <SectionHeading id="projects-title" number="04" eyebrow="SELECTED WORK" title="A few things I&apos;ve built." description="A selection of personal projects exploring full-stack product work, useful interfaces, and web fundamentals." />
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <p className="projects-note">Each preview is an editable, locally composed placeholder. Replace it with a project screenshot any time.</p>
        </section>

        <section className="services-section section-wrap page-wrap" id="services" aria-labelledby="services-title">
          <SectionHeading id="services-title" number="05" eyebrow="WHAT I DO" title="From first sketch to shipped feature." description="The parts of software development I enjoy bringing together to make products work well." />
          <div className="services-grid">
            {services.map(({ number, title, detail, icon: Icon }) => (
              <article className="service-card" key={number}>
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon size={20} /></span>
                <h3>{title}</h3><p>{detail}</p>
                <span className="service-rule" />
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap page-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow"><span>06</span> GET IN TOUCH</p>
              <h2 id="contact-title">Have a project<br />in mind<span className="hero-period">?</span></h2>
              <p className="contact-description">Let&apos;s connect and build something meaningful together.</p>
              <a className="contact-email" href={`mailto:${email}`}><span>{email}</span><ArrowUpRight size={17} /></a>
              <button className="copy-email" onClick={copyEmail} type="button" aria-live="polite">
                {emailCopied ? <Check size={14} /> : <Copy size={14} />}{emailCopied ? "Email copied" : "Copy email"}
              </button>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/hardik-pampaniya-272746224" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
                <a href="https://github.com/HardikPampaniya" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={sendMessage}>
              <p className="form-eyebrow">SEND A NOTE</p>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="Jane Smith" required />
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
              <label htmlFor="contact-message">What would you like to build?</label>
              <textarea id="contact-message" name="message" rows={4} placeholder="Tell me a little about it…" required />
              <button className="button button-primary form-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"}<ArrowRight size={16} /></button>
              <p className="form-status" role="status">{formMessage}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap">
        <a className="footer-brand" href="#home"><span className="wordmark-icon">H<span>.</span></span><span>Hardik Pampaniya</span></a>
        <p>Making useful things for the web, with care.</p>
        <span className="footer-copyright">© {new Date().getFullYear()} · Built with intention</span>
        <a className="back-to-top" href="#home" aria-label="Back to top">Back to top <ArrowUpRight size={14} /></a>
      </footer>

      <dialog
        className="resume-dialog"
        ref={resumeDialogRef}
        aria-labelledby="resume-dialog-title"
        onClose={() => setResumeOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="resume-dialog-header">
          <div>
            <p className="eyebrow">DOCUMENT PREVIEW</p>
            <h2 id="resume-dialog-title">Hardik Pampaniya — Résumé</h2>
          </div>
          <button className="resume-close" type="button" autoFocus aria-label="Close résumé preview" onClick={() => resumeDialogRef.current?.close()}>
            <X size={19} />
          </button>
        </div>
        <div className="resume-frame">
          <iframe src={resumePreviewUrl} title="Hardik Pampaniya résumé PDF preview" loading="lazy" />
        </div>
        <div className="resume-dialog-footer">
          <p>Preview hosted on Google Drive.</p>
          <a className="button button-primary" href={resumeDownloadUrl} target="_blank" rel="noreferrer">
            <ArrowDownToLine size={16} /> Download PDF
          </a>
        </div>
      </dialog>
    </div>
  );
}
