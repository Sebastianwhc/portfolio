import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, PlayCircle, BarChart3, Database, Cloud, Cpu, ArrowRight, ArrowDown, RefreshCcw, Camera, Scan, BrainCircuit } from 'lucide-react';

const iconMap = {
  Cloud,
  Cpu,
  Database,
  RefreshCcw,
  Camera,
  Scan,
  BrainCircuit
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
    // IMPORTANTE: bg-transparent para ver las estrellas del index.css
    <div className="min-h-screen bg-transparent text-slate-200 font-sans pb-20 relative">

      {/* Navbar Simple */}
      <nav className="p-6 px-8 max-w-[1600px] mx-auto">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors">
          <ArrowLeft size={20} /> Volver / Back
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
          {/* Aquí forzamos la fuente Montserrat explícitamente */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 mb-4 font-['Montserrat'] tracking-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-cyan-100 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* --- SECCIÓN 2: MODO TEATRO (DASHBOARD GIGANTE) --- */}
        <div className="w-[95%] md:w-[95%] mx-auto mb-16">
          {project.dashboardUrl ? (
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] bg-slate-900/50 backdrop-blur-sm">
              {/* Barra superior estilo navegador (Decorativa) */}
              <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="ml-4 text-xs text-slate-500 font-mono flex items-center gap-2">
                  <Database size={12} /> Live Data Connection
                </span>
              </div>

              {/* El Iframe Mantiene relación de aspecto pero usa ancho completo */}
              <div className="aspect-[16/9] w-full relative">
                <iframe
                  title={project.title}
                  src={project.dashboardUrl}
                  className="absolute top-0 left-0 w-full h-full"
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
            // Renderizamos la imagen o GIF
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
            // Fallback si no hay dashboard ni imagen
            <div className="w-full aspect-video bg-slate-800/30 rounded-2xl border border-slate-700 flex items-center justify-center">
              <p className="text-slate-500">Video / Image Coming Soon</p>
            </div>
          )}
        </div>

        {/* --- SECCIÓN 3: INFO Y ACCIONES (Debajo del video) --- */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Descripción (2 columnas) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="text-cyan-400" />
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Quick Insight</h3>
            </div>
            {Array.isArray(project.quickInsight) ? (
              <div className="flex flex-col mb-8">
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

            {/* Metrics Section */}
            {project.metrics && (
              <div className="mt-16">
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
              <div className="mt-16">
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

          {/* Panel de Acciones (1 columna) */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-800 sticky top-10">
              <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm text-slate-400">Project Actions</h3>
              <div className="flex flex-col gap-3">
                {project.links && project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center justify-center gap-2 w-full py-4 rounded-lg font-bold transition-all 
                      ${link.type === 'demo' // Destacamos el botón principal
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:scale-[1.02] shadow-lg shadow-cyan-900/20'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'}
                    `}
                  >
                    {link.type === 'github' && <Github size={20} />}
                    {link.type === 'demo' && <ExternalLink size={20} />}
                    {link.type === 'video' && <PlayCircle size={20} />}
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-500 text-center">
                  Tecnologías: Power BI, DAX, Power Query, SQL.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectPage;