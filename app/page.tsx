'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';

import { contact, customSections, education, experience, hackathons, nav, projects, skills } from './content';

function StarCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (e: PointerEvent) => setPoint({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div className="star-cursor" style={{ left: point.x, top: point.y }} aria-hidden>
      <span className="star-cursor-core">✦</span>
      <span className="star-dust dust-1">·</span>
      <span className="star-dust dust-2">✦</span>
      <span className="star-dust dust-3">·</span>
      <span className="star-dust dust-4">✦</span>
      <span className="star-dust dust-5">·</span>
    </div>
  );
}

function Stars() {
  const stars = useMemo(() => [
    [7, 16, 4], [13, 64, 3], [21, 25, 5], [29, 78, 3], [37, 13, 4], [43, 58, 3], [52, 30, 5], [58, 88, 3], [67, 19, 4], [73, 69, 5], [81, 42, 3], [91, 76, 4], [95, 15, 3]
  ], []);
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">{stars.map(([x,y,s], i) => <span key={i} className="star" style={{ left: `${x}%`, top: `${y}%`, width: s, height: s }} />)}</div>;
}

function Constellation({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 160 50" aria-hidden>
    <path className="constellation-line" fill="none" d="M8 34 L35 12 L66 28 L96 9 L126 30 L150 18" />
    {[8,35,66,96,126,150].map((x, i) => <circle key={i} cx={x} cy={[34,12,28,9,30,18][i]} r="2.2" fill="var(--cream)" />)}
  </svg>;
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .75, delay, ease: [0.16,1,.3,1] }}>{children}</motion.div>;
}

function Magnetic({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 400, damping: 25 }); const sy = useSpring(y, { stiffness: 400, damping: 25 });
  return <motion.button type="button" style={{ x: sx, y: sy }} onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX-r.left-r.width/2)*.12); y.set((e.clientY-r.top-r.height/2)*.12); }} onMouseLeave={() => { x.set(0); y.set(0); }} onClick={onClick} className={`magnetic ${className}`}>{children}</motion.button>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mb-5 flex items-center gap-3"><Constellation className="h-7 w-24 opacity-80" /><span className="constellation-label">{children}</span></div>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [...nav.map(([id, label]) => ({ id, label })), ...customSections.map((section) => ({ id: section.id, label: section.label }))];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); }, []);
  const go = (id: string) => { setOpen(false); const target = document.getElementById(id); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/75 py-3 backdrop-blur-xl border-b border-white/10' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <button type="button" onClick={() => go('hero')} className="star-sky-heading text-xl">JA<span className="text-gold">✦</span></button>
        <nav className="hidden items-center gap-7 md:flex">{links.map(({id,label}) => <button type="button" key={id} onClick={() => go(id)} className="text-xs uppercase tracking-[.16em] text-white/55 transition hover:text-cream">{label}</button>)}</nav>
        <div className="flex items-center gap-2"><button type="button" onClick={() => go('contact')} className="hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[.12em] text-cream/80 hover:border-gold/40 md:block">Let's talk ↗</button><button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/10 p-2 md:hidden" aria-label="Open navigation"><Menu size={19}/></button></div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-[60] bg-ink p-6 md:hidden"><div className="flex justify-between"><span className="star-sky-heading text-xl">JA<span className="text-gold">✦</span></span><button type="button" onClick={() => setOpen(false)} aria-label="Close navigation"><X/></button></div><div className="mt-20 flex flex-col gap-7">{links.map(({id,label}) => <button type="button" key={id} onClick={() => go(id)} className="section-heading text-left text-5xl">{label}</button>)}<button type="button" onClick={() => go('contact')} className="mt-5 w-fit rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink">Let's build ↗</button></div></div>}
  </>;
}

function Hero() {
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 }); const sy = useSpring(my, { stiffness: 70, damping: 18 });
  const moonX = useTransform(sx, [-.5,.5], [-18,18]); const moonY = useTransform(sy, [-.5,.5], [-12,12]);
  return <section id="hero" className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 sm:px-8" onMouseMove={(e) => { const r=e.currentTarget.getBoundingClientRect(); mx.set((e.clientX-r.left)/r.width-.5); my.set((e.clientY-r.top)/r.height-.5); }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(33,77,131,.34),transparent_35%),radial-gradient(circle_at_25%_75%,rgba(112,104,207,.16),transparent_32%)]" />
    <motion.div style={{ x: moonX, y: moonY }} className="absolute right-[9%] top-[17%] hidden h-40 w-40 rounded-full bg-gold/20 blur-2xl sm:block" />
    <motion.div style={{ x: moonX, y: moonY }} className="absolute right-[10%] top-[18%] hidden h-24 w-24 rounded-full border border-gold/50 bg-gold/90 shadow-gold sm:block" />
    <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <Reveal><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.025] px-4 py-2 font-mono text-[11px] uppercase tracking-[.14em] text-white/60"><MapPin size={13}/> Chennai, India <span className="text-gold">✦</span> open to building</div></Reveal>
        <Reveal delay={.05}><h1 className="star-sky-heading max-w-5xl text-[clamp(4rem,9.5vw,9.5rem)] leading-[.84]">Joshiyaa<br/><span className="text-gold">Arjun.</span></h1></Reveal>
        <Reveal delay={.12}><p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">I turn ideas into products people actually use — somewhere between software engineering, automation, AI, product design and a slightly unreasonable love for good interfaces.</p></Reveal>
        <Reveal delay={.18}><div className="hero-manifesto mt-9 max-w-xl" aria-label="A note from Joshiyaa"><div className="hero-manifesto-mark"><span>✦</span><span>·</span><span>✦</span></div><div><div className="font-mono text-[9px] uppercase tracking-[.2em] text-gold/80">A little note from the builder</div><p className="mt-2 text-base leading-7 text-cream/75 sm:text-lg">leave a little stardust in whatever you build</p></div></div></Reveal>
        <Reveal delay={.24}><div className="mt-10 flex flex-wrap gap-5 text-xs uppercase tracking-[.15em] text-white/35"><span>Engineer</span><span>Designer</span><span>Builder</span><span>Automator</span><span>Product thinker</span></div></Reveal>
      </div>
      <Reveal delay={.16} className="relative mx-auto w-full max-w-[520px]">
        <div className="signature-art aspect-[4/5] shadow-glow">
          <div className="signature-orbit orbit-one" />
          <div className="signature-orbit orbit-two" />
          <div className="signature-orbit orbit-three" />
          <span className="signature-star s1">✦</span><span className="signature-star s2">✦</span><span className="signature-star s3">✦</span>
          <div className="signature-center"><img src="/ja-logo.png" alt="Joshiyaa Arjun JA logo" className="ja-logo" /><div className="constellation-label mt-3">turning starry nights into working systems.</div></div>
        </div>
      </Reveal>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25"><ArrowDownRight size={20}/></div>
  </section>;
}

function About() {
  return <section id="about" className="relative z-10 border-t border-white/[.06] bg-night/65 px-5 py-28 sm:px-8 sm:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.75fr_1.25fr]">
    <Reveal><SectionLabel>About the builder</SectionLabel><div className="signature-art about-art mt-8 aspect-[4/5] max-w-sm"><div className="about-sun"/><div className="about-swoosh swoosh-one"/><div className="about-swoosh swoosh-two"/><span className="signature-star about-star-one">✦</span><span className="signature-star about-star-two">✦</span><div className="absolute inset-x-0 bottom-0 z-10 p-7"><div className="star-sky-heading text-5xl text-cream">JA</div><div className="mt-2 font-mono text-[10px] uppercase tracking-[.18em] text-white/40">Chennai · India · 2026</div></div></div></Reveal>
    <div className="max-w-3xl"><Reveal delay={.05}><h2 className="section-heading text-[clamp(3rem,6.2vw,6.5rem)]">Not just a <span className="whitespace-nowrap">programmer.</span><br/><span className="text-sky">A builder.</span></h2></Reveal><Reveal delay={.1}><p className="mt-9 text-xl leading-9 text-white/65">I'm studying Information Technology at St. Joseph's Institute of Technology while also pursuing a B.S. in Data Science and Applications at IIT Madras. I like working where engineering meets design: making something function, then making it feel inevitable.</p></Reveal><Reveal delay={.15}><p className="mt-6 text-base leading-8 text-white/45">I care about usability as much as functionality. Hackathons are my favorite pressure cooker because they compress ideation, product thinking, design, engineering and storytelling into a few very caffeinated hours.</p></Reveal><Reveal delay={.2}><div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="glass rounded-2xl p-5"><Sparkles className="text-gold" size={17}/><div className="mt-5 text-sm font-semibold">Curious</div><div className="mt-1 text-xs text-white/40">Always poking at the next idea.</div></div><div className="glass rounded-2xl p-5"><Sparkles className="text-sky" size={17}/><div className="mt-5 text-sm font-semibold">Creative</div><div className="mt-1 text-xs text-white/40">Interfaces are part of the product.</div></div><div className="glass rounded-2xl p-5"><Sparkles className="text-violet-300" size={17}/><div className="mt-5 text-sm font-semibold">Ambitious</div><div className="mt-1 text-xs text-white/40">Small team energy, big product instincts.</div></div></div></Reveal></div>
  </div></section>;
}

function Experience() {
  return <section id="experience" className="relative z-10 px-5 py-28 sm:px-8 sm:py-36"><div className="mx-auto max-w-7xl"><Reveal><SectionLabel>Experience</SectionLabel><h2 className="section-heading mt-6 max-w-4xl text-[clamp(3.5rem,7vw,7rem)]">Where ideas become <span className="text-gold">systems.</span></h2></Reveal><div className="mt-16 space-y-5">{experience.map((e,i)=><Reveal key={e.company} delay={i*.08}><article className="glass rounded-[28px] p-6 sm:p-8 lg:p-10"><div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between"><div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-gold">0{i+1} · {e.period}</div><h3 className="mt-3 text-2xl font-semibold tracking-tight">{e.role}</h3><a href={e.link || undefined} target={e.link ? "_blank" : undefined} rel={e.link ? "noopener noreferrer" : undefined} className={`mt-1 inline-flex items-center gap-1 text-sm ${e.link ? "text-sky hover:text-cream" : "text-white/45"}`} aria-label={e.link ? `Visit ${e.company} website` : e.company}>{e.company}{e.link && <ArrowUpRight size={13}/>}</a></div><p className="max-w-xl text-sm leading-7 text-white/55">{e.text}</p></div><div className="mt-8 grid gap-2 sm:grid-cols-2">{e.bullets.map(b=><div key={b} className="flex gap-3 rounded-2xl border border-white/[.06] bg-black/10 p-4 text-sm leading-6 text-white/60"><Check size={15} className="mt-1 shrink-0 text-gold"/>{b}</div>)}</div></article></Reveal>)}</div></div></section>;
}

function Projects() {
  const [active, setActive] = useState(0);
  return <section id="work" className="relative z-10 border-y border-white/[.06] bg-[#0c1030] px-5 py-28 sm:px-8 sm:py-36"><div className="mx-auto max-w-7xl"><Reveal><SectionLabel>Selected work</SectionLabel><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><h2 className="section-heading max-w-4xl text-[clamp(3.5rem,7vw,7rem)]">Five problems.<br/><span className="text-sky">Five products.</span></h2><p className="max-w-sm text-sm leading-7 text-white/45">Not a gallery of screenshots. A trail of decisions — what the problem was, what I built, and why it mattered.</p></div></Reveal><div className="mt-16 grid gap-4 lg:grid-cols-[.38fr_1fr]">
    <div className="sticky top-28 hidden h-fit lg:block"><div className="project-index-art aspect-square"><div className="index-constellation"/><div className="absolute left-7 top-7 font-mono text-[10px] uppercase tracking-[.2em] text-gold">project index</div><div className="star-sky-heading absolute bottom-4 left-7 text-[8rem] leading-none text-cream">{String(active+1).padStart(2,'0')}</div><span className="signature-star index-star-one">✦</span><span className="signature-star index-star-two">✦</span></div><div className="mt-5 font-mono text-[10px] uppercase tracking-[.16em] text-white/25">Scroll the constellation →</div></div>
    <div className="space-y-4">{projects.map((p,i)=><motion.article key={p.name} onViewportEnter={()=>setActive(i)} viewport={{amount:.55}} className="project-card glass rounded-[28px] p-6 sm:p-8 lg:p-10"><div className="flex items-start gap-5"><div className="project-number hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-night sm:flex"><span>{String(i+1).padStart(2,'0')}</span></div><div className="min-w-0 flex-1"><div className="constellation-label">{String(i+1).padStart(2,'0')} · {p.kicker}</div><h3 className="star-sky-heading mt-3 text-4xl sm:text-5xl">{p.name}</h3><p className="mt-4 max-w-2xl text-base leading-7 text-white/55">{p.intro}</p></div><ArrowUpRight className="hidden text-white/20 sm:block"/></div><div className="mt-8 grid gap-3 md:grid-cols-3"><div className="rounded-2xl border border-white/[.06] bg-black/10 p-5"><div className="font-mono text-[9px] uppercase tracking-[.18em] text-gold">Problem</div><p className="mt-3 text-sm leading-6 text-white/55">{p.problem}</p></div><div className="rounded-2xl border border-white/[.06] bg-black/10 p-5"><div className="font-mono text-[9px] uppercase tracking-[.18em] text-sky">Solution</div><p className="mt-3 text-sm leading-6 text-white/55">{p.solution}</p></div><div className="rounded-2xl border border-white/[.06] bg-black/10 p-5"><div className="font-mono text-[9px] uppercase tracking-[.18em] text-violet-300">My role</div><p className="mt-3 text-sm leading-6 text-white/55">{p.role}</p></div></div><div className="mt-5 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-[10px] text-white/45">{s}</span>)}</div></motion.article>)}</div>
  </div></div></section>;
}

function Skills() {
  const [tab, setTab] = useState<keyof typeof skills>('Engineering');
  return <section id="skills" className="relative z-10 px-5 py-28 sm:px-8 sm:py-36"><div className="mx-auto max-w-7xl"><Reveal><SectionLabel>Capabilities</SectionLabel><h2 className="section-heading max-w-4xl text-[clamp(3.5rem,7vw,7rem)]">The stack behind<br/><span className="text-gold">the pretty bits.</span></h2></Reveal><div className="mt-14 grid gap-5 lg:grid-cols-[.45fr_1fr]"><div className="space-y-2">{(Object.keys(skills) as Array<keyof typeof skills>).map(k=><button type="button" key={k} onClick={()=>setTab(k)} className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition ${tab===k?'border-gold/40 bg-gold/10 text-cream':'border-white/[.06] bg-white/[.02] text-white/45 hover:text-cream'}`}><span>{k}</span><ArrowRight size={15}/></button>)}</div><motion.div key={tab} initial={{opacity:0,x:15}} animate={{opacity:1,x:0}} className="glass min-h-[300px] rounded-[28px] p-7 sm:p-10"><div className="constellation-label">{tab}</div><div className="mt-8 flex flex-wrap gap-3">{skills[tab].map(s=><span key={s} className="rounded-full border border-white/10 bg-night/80 px-4 py-3 text-sm text-cream/80 transition hover:-translate-y-1 hover:border-sky/40">{s}</span>)}</div><div className="mt-14 flex items-center gap-4 border-t border-white/[.06] pt-6"><span className="h-2 w-2 rounded-full bg-gold shadow-gold"/><span className="font-mono text-[10px] uppercase tracking-[.16em] text-white/30">Design ↔ engineering ↔ automation</span></div></motion.div></div></div></section>;
}

function Hackathons() {
  return <section id="hackathons" className="relative z-10 border-y border-white/[.06] bg-night/70 px-5 py-28 sm:px-8 sm:py-36"><div className="mx-auto max-w-7xl"><Reveal><SectionLabel>Hackathons</SectionLabel><h2 className="section-heading max-w-4xl text-[clamp(3.5rem,7vw,7rem)]">Short clocks.<br/><span className="text-sky">Real products.</span></h2></Reveal><div className="mt-14 grid gap-4 sm:grid-cols-3">{[['3','podiums'],['2×','2nd place'],['4','roles played']].map(([n,l],i)=><Reveal key={l} delay={i*.07}><div className="glass rounded-[26px] p-7"><div className="star-sky-heading text-6xl text-gold">{n}</div><div className="mt-4 font-mono text-[10px] uppercase tracking-[.18em] text-white/35">{l}</div></div></Reveal>)}</div><div className="mt-10 overflow-hidden rounded-[28px] border border-white/[.07]">{hackathons.map((h,i)=><Reveal key={h.name} delay={i*.05}><div className="grid gap-3 border-b border-white/[.06] p-5 last:border-b-0 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:p-7"><div className="font-mono text-xs text-gold">{h.medal} · place</div><div><div className="text-lg font-semibold">{h.name}</div><div className="mt-1 text-sm text-white/35">{h.role}</div></div><div className="w-fit rounded-full bg-gold/10 px-4 py-2 font-mono text-xs text-gold">{h.result}</div></div></Reveal>)}</div></div></section>;
}

function CustomSections() {
  if (!customSections.length) return null;
  return <>{customSections.map((section) => <section key={section.id} id={section.id} className="relative z-10 px-5 py-28 sm:px-8 sm:py-36"><div className="mx-auto max-w-7xl"><Reveal><SectionLabel>{section.label}</SectionLabel><h2 className="section-heading max-w-4xl text-[clamp(3.5rem,7vw,7rem)]">{section.title}</h2>{section.body && <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">{section.body}</p>}{section.items?.length ? <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{section.items.map((item) => <div key={item} className="glass rounded-2xl p-5 text-sm leading-7 text-white/60">✦ {item}</div>)}</div> : null}</Reveal></div></section>)}</>;
}

function Education() {
  return <section className="relative z-10 px-5 py-28 sm:px-8 sm:py-36"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2"><Reveal><div className="glass h-full rounded-[28px] p-7 sm:p-9"><SectionLabel>Education</SectionLabel><div className="mt-10 space-y-7">{education.map((item) => <div key={item.title} className="flex gap-4"><GraduationCap className={`mt-1 ${item.tone === 'gold' ? 'text-gold' : item.tone === 'sky' ? 'text-sky' : 'text-violet-300'}`}/><div className="min-w-0"><h3 className="break-words text-lg font-semibold">{item.title}</h3><p className="mt-1 break-words text-sm text-white/45">{item.institution}</p>{item.detail && <span className="mt-3 inline-block rounded-full bg-gold/10 px-3 py-1 font-mono text-[10px] text-gold">{item.detail}</span>}</div></div>)}</div></div></Reveal><Reveal delay={.08}><div className="glass h-full rounded-[28px] p-7 sm:p-9"><SectionLabel>Signals</SectionLabel><div className="mt-10 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-white/[.03] p-5"><Award className="text-gold" size={18}/><div className="mt-5 text-sm font-semibold">Certifications</div><div className="mt-3 text-sm leading-7 text-white/45">Machine Learning · Data Science · Cybersecurity · Prompt Engineering</div></div><div className="rounded-2xl bg-white/[.03] p-5"><Sparkles className="text-sky" size={18}/><div className="mt-5 text-sm font-semibold">Community</div><div className="mt-3 text-sm leading-7 text-white/45">IEEE Student Member</div></div></div></div></Reveal></div></section>;
}

function Contact() {
  return <section id="contact" className="relative z-10 overflow-hidden border-t border-white/[.06] bg-[#080b22] px-5 pb-10 pt-28 sm:px-8 sm:pt-40"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(112,185,229,.2),transparent_35%),radial-gradient(circle_at_15%_65%,rgba(239,189,88,.12),transparent_25%)]"/><div className="relative mx-auto max-w-5xl text-center"><Reveal><SectionLabel>Contact</SectionLabel><h2 className="section-heading mt-5 text-[clamp(4rem,9vw,9rem)]">Let's build<br/><span className="text-gold">something memorable.</span></h2><p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/45">Open to internships, collaborations, product experiments, and conversations with people who care about what they build.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href={`mailto:${contact.email}`} className="magnetic inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-xl"><Mail size={16}/> joshiyaaarjun@gmail.com</a><a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="Open Joshiyaa Arjun on GitHub" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm text-cream transition hover:-translate-y-0.5 hover:border-sky/40 hover:bg-white/[.04]"><Github size={16}/> GitHub</a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open Joshiyaa Arjun on LinkedIn" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm text-cream transition hover:-translate-y-0.5 hover:border-sky/40 hover:bg-white/[.04]"><Linkedin size={16}/> LinkedIn</a><a href={contact.resume} download="Joshiyaa_Arjun_Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-3.5 text-sm text-gold transition hover:-translate-y-0.5 hover:bg-gold/15"><Download size={16}/> Resume</a></div></Reveal></div><footer className="relative mx-auto mt-28 flex max-w-7xl flex-col gap-3 border-t border-white/[.07] pt-6 font-mono text-[10px] uppercase tracking-[.15em] text-white/25 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Joshiyaa Arjun</span><span>Chennai, India · built with intention</span></footer></section>;
}

export default function Page() {
  return <main className="relative min-h-screen overflow-x-hidden bg-ink text-cream"><StarCursor/><Stars/><Nav/><Hero/><About/><Experience/><Projects/><Skills/><CustomSections/><Hackathons/><Education/><Contact/></main>;
}
