import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Brain,
  Globe,
  Phone,
  GraduationCap,
  Menu,
  X,
  Cpu,
  Server,
  LineChart,
  Bot,
  Award,
  Database,
  ExternalLink,
  PlayCircle,
  ArrowRight
} from 'lucide-react';
import { content } from './data/content';

// --- COMPONENTES VISUALES ---

import VectorFieldBackground from './components/VectorFieldBackground';

// Paleta sobria: neutros slate + un único acento
const C = {
  text: '#e2e8f0',
  muted: '#94a3b8',
  subtle: '#64748b',
  border: '#1e293b',
  surface: 'rgba(15, 23, 42, 0.55)',
  accent: '#67c3d3'
};

const LanguageSwitch = ({ current, setLang }) => {
  const langs = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' }
  ];

  return (
    <div className="flex gap-1 p-1 rounded-full" style={{ border: `1px solid ${C.border}` }}>
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          style={{
            backgroundColor: current === l.code ? 'rgba(226, 232, 240, 0.1)' : 'transparent',
            color: current === l.code ? C.text : C.subtle
          }}
          className="px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200"
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 flex items-center gap-3"
    style={{ color: C.text }}
  >
    <span className="block" style={{ width: '1.5rem', height: '1px', backgroundColor: C.accent }}></span>
    {children}
  </motion.h2>
);

// --- COMPONENTE PRINCIPAL (HOME) ---

const Home = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const t = content[lang];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica para el scroll automático al volver de detalles
  useEffect(() => {
    if (location.hash === '#projects') {
      const element = document.getElementById('projects');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProjects = filter === 'all'
    ? t.projects.items
    : t.projects.items.filter(project => project.category === filter);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ position: 'relative', zIndex: 20, backgroundColor: 'transparent', color: C.text, fontFamily: '"Inter", system-ui, sans-serif' }}>

      {/* CSS BLINDADO */}
      <style>{`
        /* LAYOUT UTILITIES MINIMAS (Tailwind-like) */
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .gap-12 { gap: 3rem; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .min-h-screen { min-height: 100vh; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .z-50 { z-index: 50; }
        .z-10 { z-index: 10; }
        .overflow-hidden { overflow: hidden; }
        .cursor-pointer { cursor: pointer; }
        .rounded-full { border-radius: 9999px; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .p-1 { padding: 0.25rem; }
        .p-2 { padding: 0.5rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-12 { margin-top: 3rem; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        
        @media (min-width: 768px) {
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .md\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
          .md\\:col-span-3 { grid-column: span 3 / span 3; }
          .md\\:col-span-4 { grid-column: span 4 / span 4; }
          .md\\:col-span-8 { grid-column: span 8 / span 8; }
          .md\\:col-span-9 { grid-column: span 9 / span 9; }
          .md\\:flex-row { flex-direction: row; }
          .md\\:w-1\\/3 { width: 33.333333%; }
          .md\\:w-2\\/3 { width: 66.666667%; }
          .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
          .md\\:text-5xl { font-size: 3rem; line-height: 1; }
          .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
          .md\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
          .md\\:pl-8 { padding-left: 2rem; }
          .md\\:border-r { border-right-width: 1px; }
          .md\\:border-b-0 { border-bottom-width: 0px; }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>

      <VectorFieldBackground />

      {/* NAVBAR */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 py-3`}
        style={{
          backgroundColor: scrolled ? 'rgba(2, 6, 23, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent'
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="text-lg font-semibold tracking-tight cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
            style={{ color: C.text }}
          >
            S<span style={{ color: C.accent }}>.</span>Diaz
          </div>

          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="text-sm font-medium transition-colors"
                style={{ color: C.muted }}
                onMouseEnter={(e) => e.target.style.color = C.text}
                onMouseLeave={(e) => e.target.style.color = C.muted}
              >
                {label}
              </button>
            ))}
            <LanguageSwitch current={lang} setLang={setLang} />
          </div>

          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitch current={lang} setLang={setLang} />
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg" style={{ color: 'white' }}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              style={{ backgroundColor: '#020617', borderBottom: `1px solid ${C.border}` }}
            >
              <div className="flex flex-col p-6 gap-4">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => scrollTo(key)}
                    className="text-left text-lg font-medium"
                    style={{ color: C.text }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* --- COLUMNA IZQUIERDA: TEXTO Y PRESENTACIÓN (Restaurada) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <p className="text-sm font-medium mb-6 tracking-wide" style={{ color: C.accent }}>
              {t.hero.role}
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6" style={{ color: C.text }}>
              {t.hero.greeting} <br />
              <span style={{ color: '#ffffff' }}>Sebastian Diaz</span>
            </h1>

            <p className="text-lg mb-10 max-w-lg leading-relaxed" style={{ color: C.muted }}>
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 flex items-center gap-2"
                style={{ backgroundColor: C.text, color: '#020617' }}
              >
                {t.hero.cta} <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-colors hover:bg-slate-800/60"
                style={{ backgroundColor: 'transparent', border: `1px solid ${C.border}`, color: C.text }}
              >
                {t.hero.cta_secondary}
              </button>
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: FOTO DE PERFIL --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative hidden md:flex justify-center items-center"
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden z-10 group" style={{ border: `1px solid ${C.border}` }}>
              <img
                src="/images_projects/profile.jpeg"
                alt="Sebastian Diaz"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT (Global Engineering) */}
      <section id="about-details" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-2xl relative overflow-hidden" style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, backdropFilter: 'blur(4px)' }}>
                <h3 className="font-semibold mb-6 flex items-center gap-2 relative z-10" style={{ color: C.text }}><GraduationCap size={18} color={C.accent} /> {t.education.title}</h3>
                <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {t.education.schools.map((school, i) => (
                    <div key={i} className="relative" style={{ paddingLeft: '1.25rem', borderLeft: `1px solid ${C.border}` }}>
                      <div className="absolute -left-[4px] top-2 w-[7px] h-[7px] rounded-full" style={{ backgroundColor: C.subtle }}></div>
                      <h4 className="text-sm font-semibold" style={{ color: C.text }}>{school.degree}</h4>
                      <p className="text-sm mt-1" style={{ color: C.muted }}>{school.school}</p>
                      <span className="text-xs mt-1 block" style={{ color: C.subtle }}>{school.year} • {school.loc}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: `1px solid ${C.border}` }}>
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-xs uppercase tracking-wider" style={{ color: C.muted }}><Award size={14} color={C.muted} /> {lang === 'es' ? 'Certificaciones' : lang === 'fr' ? 'Certifications' : 'Certifications'}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {t.education.certs.map((cert, i) => (
                      <div key={i} className="text-xs" style={{ color: C.muted }}>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <SectionTitle>{t.about.title}</SectionTitle>
              <div className="max-w-none">
                <p className="leading-relaxed mb-6 text-lg" style={{ color: C.text }}>{t.about.p1}</p>
                <p className="leading-relaxed mb-10" style={{ color: C.muted }}>{t.about.p2}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.about.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
                  >
                    <div className="text-xl font-semibold tracking-tight mb-1" style={{ color: C.text }}>{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider font-medium" style={{ color: C.subtle }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionTitle>{t.experience.title}</SectionTitle>
          <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {t.experience.jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative md:pl-8"
              >
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: C.border }}></div>
                <div className="hidden md:block absolute -left-[3px] top-9 w-[7px] h-[7px] rounded-full" style={{ backgroundColor: C.accent }}></div>

                <div className="grid md:grid-cols-12 gap-6 items-start p-8 rounded-2xl" style={{ border: '1px solid transparent' }}>
                  <div className="md:col-span-3 text-sm flex items-center gap-2 font-medium" style={{ color: C.muted }}>
                    <span className="md:hidden w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.accent }}></span>
                    {job.period}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-xl font-semibold tracking-tight mb-2 flex flex-wrap items-center gap-2" style={{ color: C.text }}>
                      {job.role}
                      <span className="font-normal text-base" style={{ color: C.muted }}>· {job.company}</span>
                    </h3>
                    <p className="text-sm mb-4 flex items-center gap-1" style={{ color: C.subtle }}>
                      <Globe size={14} /> {job.location}
                    </p>
                    <p className="leading-relaxed text-base" style={{ color: C.muted }}>
                      {job.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6 relative z-20">
          <SectionTitle>{t.skills.title}</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skills.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl"
                style={{ backgroundColor: C.surface, border: `1px solid ${C.border}` }}
              >
                <h4 className="font-semibold mb-4 text-sm pb-3 flex items-center gap-2" style={{ color: C.text, borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ color: C.accent, display: 'flex' }}>
                    {idx === 0 ? <Bot size={16} /> : idx === 1 ? <Brain size={16} /> : idx === 2 ? <Server size={16} /> : <Cpu size={16} />}
                  </span>
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded-md cursor-default" style={{ color: C.muted, border: `1px solid ${C.border}` }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle>{t.projects.title}</SectionTitle>

          <div className="flex flex-wrap gap-2 mb-10" style={{ position: 'relative', zIndex: 30 }}>
            {['all', 'data', 'robotics', 'hardware', 'academic'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  backgroundColor: filter === category ? C.text : 'transparent',
                  color: filter === category ? '#020617' : C.muted,
                  border: `1px solid ${filter === category ? C.text : C.border}`,
                  cursor: 'pointer'
                }}
              >
                {t.projects.filterLabels[category]}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={proj.title}
                  className="rounded-2xl overflow-hidden relative flex flex-col transition-colors hover:border-slate-600"
                  style={{ backgroundColor: 'rgba(10, 15, 30, 0.85)', border: `1px solid ${C.border}` }}
                >
                  {/* IMAGEN SUPERIOR */}
                  <Link
                    to={`/project/${proj.id}`}
                    className="relative block overflow-hidden cursor-pointer"
                    style={{ aspectRatio: '16 / 9', backgroundColor: '#020617', borderBottom: `1px solid ${C.border}` }}
                  >
                    {proj.image ? (
                      <img
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ color: C.subtle }}>
                        {proj.category === 'robotics' ? <Bot size={48} /> :
                          proj.category === 'data' ? <LineChart size={48} /> :
                            proj.category === 'hardware' ? <Cpu size={48} /> :
                              <Database size={48} />}
                      </div>
                    )}
                  </Link>

                  {/* CONTENIDO */}
                  <div className="p-6 md:p-8 relative z-10 flex flex-col flex-1">
                    <span className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: C.accent }}>
                      {t.projects.filterLabels[proj.category]}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: C.text }}>
                      <Link to={`/project/${proj.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{proj.title}</Link>
                    </h3>
                    <p className="text-sm mb-5 leading-relaxed" style={{ color: C.muted }}>
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-md" style={{ color: C.muted, border: `1px solid ${C.border}` }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-5 mt-auto pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
                      <Link
                        to={`/project/${proj.id}`}
                        className="flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{ color: C.text, textDecoration: 'none' }}
                      >
                        {lang === 'es' ? 'Ver proyecto' : lang === 'fr' ? 'Voir le projet' : 'View project'} <ArrowRight size={14} />
                      </Link>

                      {/* Enlaces Externos */}
                      {proj.links && proj.links.map((link, lIndex) => (
                        <a
                          key={lIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-slate-200"
                          style={{ color: C.muted, textDecoration: 'none' }}
                        >
                          {link.type === 'github' && <Github size={15} />}
                          {link.type === 'demo' && <ExternalLink size={15} />}
                          {link.type === 'video' && <PlayCircle size={15} />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" style={{ color: C.text }}>{t.contact.title}</h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: C.muted }}>
              {t.contact.text}
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="mailto:sebastian00735@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: C.text, color: '#020617', textDecoration: 'none' }}>
                <Mail size={18} /> {t.contact.email}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("+33 07 82 17 42 28");
                  alert("Número copiado!");
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors hover:bg-slate-800/60"
                style={{ backgroundColor: 'transparent', border: `1px solid ${C.border}`, color: C.text }}
              >
                <Phone size={18} /> {t.contact.phone}
              </button>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a href="https://linkedin.com/in/sebastian-diaz-pabon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 transition-colors hover:text-slate-200" style={{ color: C.muted }}><Linkedin size={24} /></a>
              <a href="https://github.com/Sebastianwhc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 transition-colors hover:text-slate-200" style={{ color: C.muted }}><Github size={24} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ backgroundColor: '#020617', borderTop: `1px solid ${C.border}` }}>
        <div className="container mx-auto px-6 text-center text-sm flex flex-col items-center" style={{ color: C.subtle }}>
          <p>© {new Date().getFullYear()} Sebastian Diaz</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;