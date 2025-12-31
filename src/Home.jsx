import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Brain, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Menu, 
  X,
  Cpu,
  Server,
  LineChart,
  Plane,     
  Bot,       
  Cog,       
  Rocket,     
  Satellite,
  Zap,
  Award,
  Database,
  ExternalLink,
  PlayCircle
} from 'lucide-react';
import { content } from './data/content';

// --- COMPONENTES VISUALES ---

const StarBackground = () => {
  const stars = Array.from({ length: 70 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.3
  }));

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, backgroundColor: '#020617', overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute', inset: 0, opacity: 1,
          background: 'radial-gradient(ellipse at top, #0f172a 0%, #0a0a2e 40%, #000000 100%)'
        }} 
      />
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', borderRadius: '9999px', filter: 'blur(100px)', backgroundColor: 'rgba(88, 28, 135, 0.2)' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', borderRadius: '9999px', filter: 'blur(100px)', backgroundColor: 'rgba(8, 145, 178, 0.2)' }}></div>

      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: 'absolute',
            borderRadius: '9999px',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            backgroundColor: 'white',
            boxShadow: '0 0 2px white'
          }}
          animate={{
            opacity: [star.opacity, 1, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const ScrollNarrative = () => {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const rocketY = useTransform(y, [0, 0.3], ['100vh', '-20vh']);
  const rocketX = useTransform(y, [0, 0.3], ['10vw', '90vw']);
  const rocketScale = useTransform(y, [0, 0.3], [1, 0.5]);
  const rocketOpacity = useTransform(y, [0, 0.25, 0.3], [1, 1, 0]);

  const droneY = useTransform(y, [0.2, 0.4, 0.6], ['-20vh', '40vh', '120vh']);
  const droneX = useTransform(y, [0.2, 0.4, 0.6], ['-10vw', '10vw', '-10vw']);
  const droneOpacity = useTransform(y, [0.2, 0.3, 0.5, 0.6], [0, 1, 1, 0]);

  const satY = useTransform(y, [0.6, 1], ['100vh', '20vh']);
  const satX = useTransform(y, [0.6, 1], ['90vw', '10vw']);
  const satRotate = useTransform(y, [0.6, 1], [0, 180]);
  const satOpacity = useTransform(y, [0.6, 0.7, 1], [0, 1, 1]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.div style={{ position: 'absolute', top: rocketY, left: rocketX, scale: rocketScale, opacity: rocketOpacity, rotate: 45, zIndex: 10 }}>
        <Rocket size={80} color="#22d3ee" style={{ filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.8))' }} />
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '64px', background: 'linear-gradient(to bottom, orange, transparent)', filter: 'blur(4px)' }}></div>
      </motion.div>

      <motion.div style={{ position: 'absolute', top: droneY, right: '10%', x: droneX, opacity: droneOpacity, zIndex: 10 }}>
        <div style={{ position: 'relative', padding: '1rem', backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(6,182,212,0.5)', borderRadius: '0.75rem', backdropFilter: 'blur(4px)', boxShadow: '0 0 30px rgba(6,182,212,0.3)' }}>
           <Bot size={48} color="white" />
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-12px', left: '-12px' }}><Cog size={24} color="#06b6d4"/></motion.div>
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-12px', right: '-12px' }}><Cog size={24} color="#06b6d4"/></motion.div>
        </div>
      </motion.div>

      <motion.div style={{ position: 'absolute', top: satY, left: satX, rotate: satRotate, opacity: satOpacity, zIndex: 10 }}>
         <Satellite size={90} color="#818cf8" style={{ filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.6))' }} />
      </motion.div>
    </div>
  );
};

const LanguageSwitch = ({ current, setLang }) => {
  const langs = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' }
  ];

  return (
    <div className="flex gap-1 p-1 rounded-full backdrop-blur-md" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', border: '1px solid #334155' }}>
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          style={{
            backgroundColor: current === l.code ? '#0891b2' : 'transparent',
            color: current === l.code ? 'white' : '#94a3b8',
            boxShadow: current === l.code ? '0 0 10px rgba(8,145,178,0.5)' : 'none'
          }}
          className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
    style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}
  >
    <span className="w-1.5 h-8 rounded-full block" style={{ background: 'linear-gradient(to bottom, #22d3ee, #2563eb)', boxShadow: '0 0 10px rgba(34,211,238,0.5)' }}></span>
    <span style={{ background: '-webkit-linear-gradient(left, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      {children}
    </span>
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
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ position: 'relative', zIndex: 20, backgroundColor: 'transparent', color: '#e2e8f0', fontFamily: '"Inter", sans-serif' }}>
      
      {/* CSS BLINDADO */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Inter:wght@300;400;600&display=swap');
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

      <StarBackground />
      <ScrollNarrative />

      {/* NAVBAR */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 py-3`}
        style={{ 
          backgroundColor: scrolled ? 'rgba(2, 6, 23, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(30, 41, 59, 0.5)' : 'none'
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 group"
            onClick={() => window.scrollTo(0,0)}
            style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}
          >
            <div className="p-1 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
               <Bot size={24} color="#22d3ee" />
            </div>
            <span>S<span style={{ color: '#22d3ee' }}>.</span>Diaz</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <button 
                key={key} 
                onClick={() => scrollTo(key)}
                className="text-sm font-medium transition-all hover:scale-105"
                style={{ color: '#cbd5e1' }}
                onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
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
              style={{ backgroundColor: '#020617', borderBottom: '1px solid #1e293b' }}
            >
              <div className="flex flex-col p-6 gap-4">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button 
                    key={key} 
                    onClick={() => scrollTo(key)}
                    className="text-left text-lg font-medium"
                    style={{ color: '#cbd5e1' }}
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
      <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* --- COLUMNA IZQUIERDA: TEXTO Y PRESENTACIÓN (Restaurada) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border rounded-full text-sm font-mono overflow-hidden whitespace-nowrap backdrop-blur-sm"
              style={{ 
                borderColor: 'rgba(6, 182, 212, 0.3)', 
                backgroundColor: 'rgba(8, 51, 68, 0.3)', 
                color: '#67e8f9',
                boxShadow: '0 0 10px rgba(8, 145, 178, 0.2)',
                fontFamily: '"Space Grotesk", sans-serif'
              }}
            >
               <Cpu size={14} /> {t.hero.role}
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}>
              {t.hero.greeting} <br />
              <span style={{ background: '-webkit-linear-gradient(left, #22d3ee, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Sebastian Diaz
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('projects')} 
                className="px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
                style={{ backgroundColor: '#0891b2', color: 'white', boxShadow: '0 0 20px rgba(8, 145, 178, 0.4)' }}
              >
                <Rocket size={18} /> {t.hero.cta}
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-8 py-3 rounded-lg font-bold transition-all"
                style={{ backgroundColor: 'transparent', border: '1px solid #475569', color: 'white' }}
              >
                {t.hero.cta_secondary}
              </button>
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: FOTO DE PERFIL (Nueva) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative hidden md:flex justify-center items-center"
          >
              {/* Círculo decorativo girando detrás */}
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-cyan-500/30 z-0"
              ></motion.div>

              {/* Contenedor de la foto */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.4)] z-10 group">
                  {/* TU FOTO */}
                  <img 
                      src="/images_projects/profile.jpeg" 
                      alt="Sebastian Diaz" 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Brillo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Iconos flotantes alrededor de la foto */}
              <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-20 bg-slate-900 p-3 rounded-xl border border-cyan-500/50 shadow-lg z-20"
              >
                  <Brain size={24} className="text-cyan-400" />
              </motion.div>

              <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-4 bottom-20 bg-slate-900 p-3 rounded-xl border border-blue-500/50 shadow-lg z-20"
              >
                  <Database size={24} className="text-blue-400" />
              </motion.div>
          </motion.div>

        </div>
      </section>
      {/* ABOUT */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 flex flex-col gap-6">
                 <div className="p-6 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'rgba(10, 10, 21, 0.6)', border: '1px solid rgba(51, 65, 85, 0.5)', backdropFilter: 'blur(4px)' }}>
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Zap size={80} color="#facc15" /></div>
                    <h3 className="font-bold mb-6 flex items-center gap-2 relative z-10" style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}><GraduationCap color="#22d3ee"/> {t.education.title}</h3>
                    <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      {t.education.schools.map((school, i) => (
                        <div key={i} className="relative group" style={{ paddingLeft: '1.5rem', borderLeft: '2px solid #334155' }}>
                          <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: '#475569' }}></div>
                          <h4 className="text-base font-bold transition-colors" style={{ color: 'white' }}>{school.degree}</h4>
                          <p className="text-sm mt-1" style={{ color: '#bae6fd' }}>{school.school}</p>
                          <span className="text-xs mt-1 block" style={{ color: '#94a3b8' }}>{school.year} • {school.loc}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-700" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #334155' }}>
                       <h3 className="font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider" style={{ color: '#94a3b8' }}><Award size={16} color="#facc15"/> Certifications</h3>
                       <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {t.education.certs.map((cert, i) => (
                             <div key={i} className="text-xs px-2 py-1 rounded border border-slate-700" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', color: '#cbd5e1', border: '1px solid #334155' }}>
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
                   <p className="leading-relaxed mb-6 text-lg" style={{ color: '#cbd5e1' }}>{t.about.p1}</p>
                   <p className="leading-relaxed mb-10" style={{ color: '#94a3b8' }}>{t.about.p2}</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.about.stats.map((stat, i) => (
                      <motion.div 
                        whileHover={{ y: -5 }}
                        key={i} 
                        className="p-6 rounded-2xl text-center transition-all group"
                        style={{ background: 'linear-gradient(to bottom right, #0f172a, #0f172a)', border: '1px solid #1e293b' }}
                      >
                        <div className="text-3xl font-bold mb-2" style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}>{stat.value}</div>
                        <div className="text-xs uppercase tracking-wider font-bold" style={{ color: '#94a3b8' }}>{stat.label}</div>
                      </motion.div>
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
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #164e63, transparent)' }}></div>
                <div className="hidden md:block absolute -left-[5px] top-8 w-3 h-3 rounded-full" style={{ backgroundColor: '#0f172a', border: '2px solid #06b6d4' }}></div>

                <div className="grid md:grid-cols-12 gap-6 items-start p-8 rounded-2xl transition-colors" style={{ border: '1px solid transparent' }}>
                  <div className="md:col-span-3 text-sm font-mono flex items-center gap-2 font-bold" style={{ color: '#22d3ee' }}>
                    <span className="md:hidden w-2 h-2 rounded-full" style={{ backgroundColor: '#06b6d4' }}></span>
                    {job.period}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-bold mb-2 flex flex-wrap items-center gap-2" style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}>
                      {job.role} 
                      <span className="font-normal text-lg" style={{ color: '#94a3b8', fontFamily: '"Inter", sans-serif' }}>@ {job.company}</span>
                    </h3>
                    <p className="text-sm mb-4 flex items-center gap-1" style={{ color: '#64748b' }}>
                       <Globe size={14}/> {job.location}
                    </p>
                    <p className="leading-relaxed text-base" style={{ color: '#cbd5e1' }}>
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
      <section id="skills" className="py-24 relative" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container mx-auto px-6 relative z-20">
          <SectionTitle>{t.skills.title}</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skills.categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl shadow-xl transition-all"
                style={{ backgroundColor: '#0a0a15', border: '1px solid #1e293b' }}
              >
                <h4 className="font-bold mb-4 uppercase text-sm tracking-widest pb-2 flex items-center gap-2" style={{ color: '#22d3ee', borderBottom: '1px solid #1e293b', fontFamily: '"Space Grotesk", sans-serif' }}>
                  {idx === 0 ? <Bot size={16}/> : idx === 1 ? <Brain size={16}/> : idx === 2 ? <Cpu size={16}/> : <Server size={16}/>}
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs rounded-md cursor-default" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', color: '#cbd5e1', border: '1px solid #334155' }}>
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
          
          <div className="flex flex-wrap justify-center gap-4 mb-12" style={{ position: 'relative', zIndex: 30 }}>
            {['all', 'data', 'robotics', 'hardware', 'academic'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === category ? 'scale-105' : ''
                }`}
                style={{
                  backgroundColor: filter === category ? '#0891b2' : 'rgba(30, 41, 59, 0.8)',
                  color: filter === category ? 'white' : '#cbd5e1',
                  border: filter === category ? '1px solid #06b6d4' : '1px solid #475569',
                  boxShadow: filter === category ? '0 0 15px rgba(8,145,178,0.4)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {t.projects.filterLabels[category]}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((proj, i) => (
                 <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={proj.title} 
                    whileHover={{ y: -5 }}
                    className="rounded-2xl overflow-hidden relative flex flex-col md:flex-row shadow-lg transition-all"
                    style={{ backgroundColor: '#0a0a15', border: '1px solid #1e293b' }}
                 >
                    {/* IMAGEN/BOTON IZQUIERDO */}
                    {/* IMAGEN/BOTON IZQUIERDO MODIFICADO */}
                    <Link 
                      to={`/project/${proj.id}`}
                      className="md:w-1/3 flex flex-col items-center justify-center relative overflow-hidden min-h-[220px] cursor-pointer group" 
                      style={{ backgroundColor: '#020617', borderRight: '1px solid #1e293b' }}
                    >
                     {/* 1. SI EXISTE IMAGEN: La mostramos de fondo */}
                     {proj.image ? (
                      <>
                        <img 
                          src={proj.image} 
                          alt={proj.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                          />
                      {/* Un gradiente oscuro encima para que se lea el texto */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0"></div>
                     </>
                   ) : (
                    /* 2. SI NO HAY IMAGEN: Mostramos el fondo de color y el Icono (Tu código anterior) */
                     <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-0"></div>
                    )}

                    {/* LÓGICA DE ÍCONOS (Se muestra solo si NO hay imagen para no taparla, o como decoración sutil) */}
                    {!proj.image && (
                      <>
                        {proj.category === 'robotics' ? <Bot size={64} color="#22d3ee" className="relative z-10 group-hover:scale-110 transition-transform"/> : 
                        proj.category === 'data' ? <LineChart size={64} color="#60a5fa" className="relative z-10 group-hover:scale-110 transition-transform"/> : 
                        proj.category === 'hardware' ? <Cpu size={64} color="#c084fc" className="relative z-10 group-hover:scale-110 transition-transform"/> :
                        <Database size={64} color="#34d399" className="relative z-10 group-hover:scale-110 transition-transform"/>}
                      </>
                    )}
  
                     {/* TEXTO DE CATEGORÍA (Siempre visible encima de todo) */}
                     <span className="text-[10px] mt-auto mb-8 uppercase tracking-[0.2em] relative z-20 font-bold drop-shadow-md" style={{ color: proj.image ? '#fff' : '#64748b' }}>
                        {proj.category}
                     </span>
  
                     <span className="text-[10px] text-cyan-400 absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 font-bold">
                        View Project
                     </span>
                  </Link>

                    {/* CONTENIDO DERECHO */}
                    <div className="md:w-2/3 p-8 relative z-10 flex flex-col justify-center" style={{ backgroundColor: '#0a0a15' }}>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}>{proj.title}</h3>
                      <p className="text-sm mb-6 leading-relaxed" style={{ color: '#94a3b8' }}>
                        {proj.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proj.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase px-2 py-1 rounded" style={{ backgroundColor: '#0f172a', color: '#cbd5e1', border: '1px solid #334155' }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-auto pt-4 border-t border-slate-800">
                        {/* Botón Quick Insight */}
                        <Link 
                           to={`/project/${proj.id}`}
                           className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-white transition-colors"
                        >
                           + Quick Insight
                        </Link>

                        {/* Enlaces Externos */}
                        {proj.links && proj.links.map((link, lIndex) => (
                          <a 
                            key={lIndex}
                            href={link.url}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-bold transition-colors hover:text-cyan-400"
                            style={{ color: '#94a3b8', textDecoration: 'none' }}
                          >
                            {link.type === 'github' && <Github size={16} />}
                            {link.type === 'demo' && <ExternalLink size={16} />}
                            {link.type === 'video' && <PlayCircle size={16} />}
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
             <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'white', fontFamily: '"Space Grotesk", sans-serif' }}>{t.contact.title}</h2>
             <p className="text-lg mb-10" style={{ color: '#94a3b8' }}>
               {t.contact.text}
             </p>
             
             <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="mailto:sebastian00735@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all" style={{ backgroundColor: '#0891b2', color: 'white', boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}>
                  <Mail size={20}/> {t.contact.email}
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("+33 07 82 17 42 28");
                    alert("Número copiado!");
                  }}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold backdrop-blur-md transition-all"
                  style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid #334155', color: 'white' }}
                >
                  <Briefcase size={20}/> {t.contact.phone}
                </button>
             </div>

             <div className="flex justify-center gap-8 mt-12">
                <a href="https://linkedin.com/in/sebastian-diaz-pabon" target="_blank" rel="noopener noreferrer" className="transition-colors transform hover:scale-110" style={{ color: '#64748b' }}><Linkedin size={32}/></a>
                <a href="https://github.com/Sebastianwhc" target="_blank" rel="noopener noreferrer" className="transition-colors transform hover:scale-110" style={{ color: '#64748b' }}><Github size={32}/></a>
             </div>
           </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ backgroundColor: '#020617', borderTop: '1px solid rgba(15, 23, 42, 0.5)' }}>
         <div className="container mx-auto px-6 text-center text-sm flex flex-col items-center" style={{ color: '#475569' }}>
            <p>© 2025 Sebastian Diaz.</p>
            <p className="text-xs mt-1" style={{ color: '#334155' }}>Engineering the Future with <span style={{ color: '#0891b2' }}>React & Tailwind</span></p>
         </div>
      </footer>
    </div>
  );
};

export default Home;