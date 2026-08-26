import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Github, ExternalLink, PlayCircle, BarChart3, Database, Cloud,
  Cpu, ArrowRight, ArrowDown, RefreshCcw, Camera, Scan, BrainCircuit,
  Globe, Activity, Zap, MapPin, Code2, Layers, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Cloud,
  Cpu,
  Database,
  RefreshCcw,
  Camera,
  Scan,
  BrainCircuit,
  Globe,
  Activity,
  Zap,
  MapPin,
  Code2,
  Layers
};
import { content } from './data/content';
import LscTranslator from './components/LscTranslator';
import DlPlayground from './components/DlPlayground';

const ProjectPage = ({ lang }) => {
  const { id } = useParams();
  const t = content[lang];
  const project = t.projects.items.find(p => p.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="text-white text-center mt-20">Project not found 404</div>;

  return (
    <div className="min-h-screen bg-transparent text-slate-200 font-sans pb-20 relative">

      {/* Navbar Simple */}
      <nav className="p-6 px-8 max-w-[1600px] mx-auto">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-medium">
          <ArrowLeft size={20} /> {lang === 'es' ? 'Volver al Portafolio' : lang === 'fr' ? 'Retour aux Projets' : 'Back to Portfolio'}
        </Link>
      </nav>

      <div className="container mx-auto px-4 max-w-[1400px]">

        {/* --- SECCIÓN 1: ENCABEZADO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase font-bold">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 mb-4 font-['Montserrat'] tracking-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700/60 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* --- SECCIÓN 2: DEMO INTERACTIVA O IMAGEN --- */}
        <div className="w-full mb-12">
          {project.dashboardUrl ? (
            <div className="w-full flex flex-col items-center bg-slate-900/40 rounded-2xl border border-slate-800 p-4 md:p-8 shadow-inner shadow-cyan-900/10 backdrop-blur-md">
              <div className="w-full flex justify-between items-center mb-4 px-2">
                <span className="text-xs md:text-sm font-mono text-cyan-400 flex items-center gap-2 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                  Interactive Power BI Dashboard
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Database size={12} /> Live Data Connection
                </span>
              </div>
              <div className="aspect-[16/9] w-full relative">
                <iframe
                  title={project.title}
                  src={project.dashboardUrl}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}>
                </iframe>
              </div>
            </div>
          ) : project.id === 'deep-learning-core' ? (
            <DlPlayground />
          ) : project.id === 'lsc-recognition-ai' ? (
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-900/40 rounded-2xl border border-slate-800 p-8 shadow-inner shadow-cyan-900/10 backdrop-blur-md">
              <div className="flex flex-col h-full justify-center">
                <LscTranslator />
              </div>
              <div className="flex flex-col h-full justify-center items-center">
                <img
                  src={project.image}
                  alt={`${project.title} original demo`}
                  className="max-h-[550px] w-auto object-contain rounded-xl border border-slate-700/50 shadow-2xl"
                />
                {project.imageCaption && (
                  <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                    <Camera size={16} className="text-cyan-400" />
                    <span className="text-sm font-mono">{project.imageCaption}</span>
                  </div>
                )}
              </div>
            </div>
          ) : project.image ? (
            <div className="w-full flex flex-col justify-center items-center bg-slate-900/40 rounded-2xl border border-slate-800 p-8 shadow-inner shadow-cyan-900/10 backdrop-blur-md">
              <img
                src={project.image}
                alt={`${project.title} demo`}
                className="max-h-[654px] w-auto object-contain rounded-xl border border-slate-700/50 shadow-2xl"
              />
              {project.imageCaption && (
                <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                  <Camera size={16} className="text-cyan-400" />
                  <span className="text-sm font-mono">{project.imageCaption}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full aspect-video bg-slate-800/30 rounded-2xl border border-slate-700 flex items-center justify-center">
              <p className="text-slate-500">Video / Image Coming Soon</p>
            </div>
          )}
        </div>

        {/* --- SECCIÓN 3: INFO Y ACCIONES (Debajo de la demo) --- */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Columna Principal (2 columnas) */}
          <div className="lg:col-span-2 space-y-12">

            {/* Quick Insight */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Quick Insight</h3>
              </div>
              {Array.isArray(project.quickInsight) ? (
                <div className="flex flex-col mb-4">
                  {project.quickInsightDesc && (
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {project.quickInsightDesc}
                    </p>
                  )}
                  <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
                    {project.quickInsight.map((step, idx) => {
                      const Icon = iconMap[step.icon];
                      return (
                        <React.Fragment key={idx}>
                          <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6 flex-1 w-full text-center relative shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                            <div className="flex justify-center mb-4 text-cyan-400">
                              {Icon && <Icon size={40} />}
                            </div>
                            <h4 className="text-white font-bold mb-2 text-lg">{step.title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{step.detail}</p>
                          </div>
                          {idx < project.quickInsight.length - 1 && (
                            <div className="text-cyan-400 shrink-0 flex items-center justify-center">
                              <ArrowRight className="hidden md:block" size={28} />
                              <ArrowDown className="block md:hidden" size={28} />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed max-w-none">
                  <p>{project.fullDescription || project.desc}</p>
                </div>
              )}
            </div>

            {/* ---> DIAGRAMAS DE BARRAS DE TECNOLOGÍAS & SKILLS <--- */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-4">
                  <Code2 className="text-cyan-400" size={26} />
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                      {lang === 'es' ? 'Distribución Tecnológica & Skills' : lang === 'fr' ? 'Distribution Technologique & Compétences' : 'Technology Stack & Skill Distribution'}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      {lang === 'es'
                        ? 'Desglose proporcional de las tecnologías y herramientas dominadas en la construcción de este proyecto.'
                        : lang === 'fr'
                        ? 'Répartition proportionnelle des technologies et compétences appliquées dans ce projet.'
                        : 'Proportional breakdown of technologies and engineering skills applied across this project architecture.'}
                    </p>
                  </div>
                </div>

                {/* Barra apilada consolidada (Stacked Bar) */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 mb-6 shadow-xl backdrop-blur-md">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center gap-2 font-bold text-slate-300">
                      <Layers size={15} className="text-cyan-400" /> {lang === 'es' ? 'Resumen Visual del Stack' : lang === 'fr' ? 'Aperçu Global du Stack' : 'Full Stack Visual Overview'}
                    </span>
                    <span>100% Total Project Architecture</span>
                  </div>

                  <div className="w-full h-5 rounded-full overflow-hidden flex bg-slate-800/90 p-1 border border-slate-700/60 shadow-inner mb-4">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        style={{ width: `${tech.percentage}%` }}
                        className={`h-full bg-gradient-to-r ${tech.color} ${i === 0 ? 'rounded-l-full' : ''} ${i === project.techStack.length - 1 ? 'rounded-r-full' : ''} transition-all duration-700 hover:brightness-125 cursor-pointer relative group`}
                        title={`${tech.name}: ${tech.percentage}%`}
                      />
                    ))}
                  </div>

                  {/* Leyenda de colores rápida */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
                    {project.techStack.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${tech.color} shadow-sm`} />
                        <span className="text-slate-300 font-semibold">{tech.name}</span>
                        <span className="text-cyan-400 font-bold">{tech.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diagrama de Barras Individuales por Tecnología */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.techStack.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-5 transition-all group backdrop-blur-sm shadow-md hover:shadow-cyan-950/20 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${tech.color} shadow-sm group-hover:scale-110 transition-transform`} />
                            <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors font-['Space_Grotesk']">
                              {tech.name}
                            </h4>
                          </div>
                          <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700/80 shadow-inner">
                            {tech.percentage}%
                          </span>
                        </div>

                        {/* Barra de progreso con gradiente */}
                        <div className="w-full bg-slate-800/90 rounded-full h-3 overflow-hidden mb-3 p-0.5 border border-slate-700/40">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 + idx * 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${tech.color} shadow-[0_0_12px_rgba(6,182,212,0.3)]`}
                          />
                        </div>
                      </div>

                      {tech.role && (
                        <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1 pt-2 border-t border-slate-800/60">
                          {tech.role}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Section */}
            {project.metrics && (
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                  <BarChart3 className="text-blue-500" />
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Impact & Results</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all group">
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 group-hover:scale-105 transition-transform origin-left">
                        {metric.value}
                      </div>
                      <h4 className="text-slate-200 font-bold text-lg mb-2">{metric.label}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---> EXPERIMENTAL RESULTS GALLERY <--- */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                  <Camera className="text-purple-500" />
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Experimental Results</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className={`bg-slate-900/40 rounded-xl overflow-hidden border border-slate-800 shadow-lg group ${img.colSpan ? 'md:col-span-2' : ''}`}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 bg-slate-900/80 border-t border-slate-800 backdrop-blur-sm">
                        <p className="text-slate-300 text-sm font-mono text-center">{img.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Panel Lateral de Acciones & Resumen de Stack (1 columna) */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-slate-800 sticky top-8 shadow-xl space-y-6">
              <div>
                <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs text-slate-400 font-mono">
                  {lang === 'es' ? 'Acciones del Proyecto' : lang === 'fr' ? 'Actions du Projet' : 'Project Actions'}
                </h3>
                <div className="flex flex-col gap-3">
                  {project.links && project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-bold transition-all text-sm
                        ${link.type === 'demo'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-[1.02] shadow-lg shadow-cyan-900/30 border border-cyan-400/30'
                          : 'bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700/80'}
                      `}
                    >
                      {link.type === 'github' && <Github size={18} />}
                      {link.type === 'demo' && <ExternalLink size={18} />}
                      {link.type === 'video' && <PlayCircle size={18} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Skills & Tech Distribution Widget */}
              {project.techStack && (
                <div className="pt-6 border-t border-slate-800">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cpu size={14} className="text-cyan-400" /> {lang === 'es' ? 'Distribución de Dominio' : lang === 'fr' ? 'Maîtrise Technique' : 'Skill Mastery Weight'}
                  </h4>
                  <div className="space-y-3">
                    {project.techStack.map((tech, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-slate-300 truncate pr-2">{tech.name}</span>
                          <span className="text-cyan-400 font-bold shrink-0">{tech.percentage}%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${tech.color}`}
                            style={{ width: `${tech.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tag Cloud */}
              <div className="pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {lang === 'es' ? 'Tags y Palabras Clave' : lang === 'fr' ? 'Mots-Clés' : 'Tech Keywords'}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectPage;
