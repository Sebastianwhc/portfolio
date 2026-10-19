import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Github, ExternalLink, PlayCircle, Database, Cloud,
  Cpu, ArrowRight, ArrowDown, RefreshCcw, Camera, Scan, BrainCircuit,
  Globe, Activity, Zap, MapPin, Code2, Layers, CheckCircle2, Plane, Waves, Route
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
  Layers,
  Plane,
  Waves,
  Route
};
import { content } from './data/content';
import LscTranslator from './components/LscTranslator';
import DlPlayground from './components/DlPlayground';

// Escala monocroma para las barras de tecnologías (acento → neutros)
const stackShades = ['bg-[#67c3d3]', 'bg-[#4a8f9c]', 'bg-slate-400', 'bg-slate-600', 'bg-slate-700'];
const shade = (i) => stackShades[i % stackShades.length];

const ProjectPage = ({ lang }) => {
  const { id } = useParams();
  const t = content[lang];
  const project = t.projects.items.find(p => p.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="text-white text-center mt-20">Project not found 404</div>;

  const L = (es, en, fr) => (lang === 'es' ? es : lang === 'fr' ? fr : en);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans pb-20 relative">

      {/* Navbar Simple */}
      <nav className="p-6 px-8 max-w-[1600px] mx-auto">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors font-medium">
          <ArrowLeft size={18} /> {L('Volver al portafolio', 'Back to portfolio', 'Retour aux projets')}
        </Link>
      </nav>

      <div className="container mx-auto px-4 max-w-[1400px]">

        {/* --- SECCIÓN 1: ENCABEZADO --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="text-[#67c3d3] text-sm tracking-wider uppercase font-medium">
            {t.projects.filterLabels[project.category] || project.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-3 mb-5 tracking-tight max-w-4xl leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md text-slate-400 border border-slate-800">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* --- SECCIÓN 2: DEMO INTERACTIVA O IMAGEN --- */}
        <div className="w-full mb-12">
          {project.dashboardUrl ? (
            <div className="w-full flex flex-col items-center bg-slate-900/40 rounded-2xl border border-slate-800 p-4 md:p-8">
              <div className="w-full flex justify-between items-center mb-4 px-2">
                <span className="text-xs md:text-sm text-slate-300 flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Interactive Power BI Dashboard
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
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
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
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
                  <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                    <Camera size={15} className="text-slate-500" />
                    <span className="text-sm">{project.imageCaption}</span>
                  </div>
                )}
              </div>
            </div>
          ) : project.image ? (
            <div className="w-full flex flex-col justify-center items-center bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
              <img
                src={project.image}
                alt={`${project.title} demo`}
                className="max-h-[654px] w-auto object-contain rounded-xl border border-slate-800"
              />
              {project.imageCaption && (
                <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                  <Camera size={15} className="text-slate-500" />
                  <span className="text-sm">{project.imageCaption}</span>
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
              <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-4">
                <h3 className="text-xl font-semibold text-white tracking-tight">{L('Resumen', 'Overview', 'Aperçu')}</h3>
              </div>
              {Array.isArray(project.quickInsight) ? (
                <div className="flex flex-col mb-4">
                  {project.quickInsightDesc && (
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {project.quickInsightDesc}
                    </p>
                  )}
                  <div className="flex flex-col md:flex-row items-stretch gap-3 mt-2">
                    {project.quickInsight.map((step, idx) => {
                      const Icon = iconMap[step.icon];
                      return (
                        <React.Fragment key={idx}>
                          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 flex-1 w-full relative">
                            <div className="flex mb-3 text-[#67c3d3]">
                              {Icon && <Icon size={22} strokeWidth={1.75} />}
                            </div>
                            <h4 className="text-slate-100 font-semibold mb-1.5 text-base">{step.title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{step.detail}</p>
                          </div>
                          {idx < project.quickInsight.length - 1 && (
                            <div className="text-slate-600 shrink-0 flex items-center justify-center">
                              <ArrowRight className="hidden md:block" size={18} />
                              <ArrowDown className="block md:hidden" size={18} />
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
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {L('Tecnologías', 'Technology stack', 'Technologies')}
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
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 mb-6">
                  <div className="w-full h-2 rounded-full overflow-hidden flex gap-0.5 mb-4">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        style={{ width: `${tech.percentage}%` }}
                        className={`h-full ${shade(i)}`}
                        title={`${tech.name}: ${tech.percentage}%`}
                      />
                    ))}
                  </div>

                  {/* Leyenda */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
                    {project.techStack.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${shade(idx)}`} />
                        <span className="text-slate-300">{tech.name}</span>
                        <span className="text-slate-500 tabular-nums">{tech.percentage}%</span>
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
                      className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-2 h-2 rounded-full ${shade(idx)}`} />
                            <h4 className="font-semibold text-slate-100 text-sm">
                              {tech.name}
                            </h4>
                          </div>
                          <span className="text-xs font-medium text-slate-400 tabular-nums">
                            {tech.percentage}%
                          </span>
                        </div>

                        {/* Barra de progreso */}
                        <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden mb-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 + idx * 0.05 }}
                            className={`h-full rounded-full ${shade(idx)}`}
                          />
                        </div>
                      </div>

                      {tech.role && (
                        <p className="text-sm text-slate-400 leading-relaxed font-sans mt-1">
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
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-semibold text-white tracking-tight">{L('Impacto y resultados', 'Impact & results', 'Impact et résultats')}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                      <div className="text-3xl font-semibold tracking-tight text-white mb-2 tabular-nums">
                        {metric.value}
                      </div>
                      <h4 className="text-slate-300 font-medium text-sm mb-2">{metric.label}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---> EXPERIMENTAL RESULTS GALLERY <--- */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-semibold text-white tracking-tight">{L('Resultados', 'Results', 'Résultats')}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <figure
                      key={idx}
                      className={`m-0 ${img.colSpan ? 'md:col-span-2' : ''}`}
                    >
                      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <figcaption className="pt-3">
                        <p className="text-slate-400 text-sm">{img.alt}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Panel Lateral de Acciones & Resumen de Stack (1 columna) */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 sticky top-8 space-y-6">
              <div>
                <h3 className="mb-4 uppercase tracking-wider text-xs text-slate-500 font-medium">
                  {L('Enlaces del proyecto', 'Project links', 'Liens du projet')}
                </h3>
                <div className="flex flex-col gap-3">
                  {project.links && project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-colors text-sm
                        ${i === 0
                          ? 'bg-slate-200 text-slate-950 hover:bg-white'
                          : 'text-slate-200 hover:bg-slate-800/60 border border-slate-800'}
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

              {/* Resumen compacto del stack */}
              {project.techStack && (
                <div className="pt-6 border-t border-slate-800">
                  <h4 className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-4">
                    {L('Tecnologías', 'Technologies', 'Technologies')}
                  </h4>
                  <ul className="space-y-2.5">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 text-sm">
                        <span className="flex items-center gap-2 text-slate-300 min-w-0">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${shade(i)}`} />
                          <span className="truncate">{tech.name}</span>
                        </span>
                        <span className="text-slate-500 tabular-nums shrink-0">{tech.percentage}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectPage;
