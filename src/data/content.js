// No necesitas importar iconos aquí, ya que es un archivo de puro texto/datos.
// La lógica visual está en tu componente React.

export const content = {
  es: {
    nav: {
      about: "Perfil",
      experience: "Trayectoria",
      skills: "Arsenal",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      role: "Ingeniero Mecatrónico & Físico",
      greeting: "Hola, soy",
      description: "Ingeniero multidisciplinario fusionando Robótica, Sistemas Aeroespaciales e Inteligencia Artificial. Transformo datos complejos en decisiones estratégicas.",
      cta: "Ver Proyectos",
      cta_secondary: "Contactar"
    },
    about: {
      title: "Ingeniería Global",
      p1: "Soy Ingeniero Mecatrónico y Físico, actualmente finalizando un Máster en Ingeniería Aeroespacial en IPSA (París). Mi perfil combina el rigor científico con la eficiencia ingenieril.",
      p2: "Mi experiencia abarca desde la automatización industrial y robótica hasta el desarrollo de pipelines de datos en la nube y modelos de Deep Learning. Busco resolver problemas donde el hardware, el software y la física convergen.",
      stats: [
        { value: "Mecatrónica", label: "Base Ingenieril" },
        { value: "Aeroespacial", label: "Especialización" },
        { value: "Data & IA", label: "Potenciador" }
      ]
    },
    experience: {
      title: "Trayectoria Profesional",
      jobs: [
        {
          id: 1,
          role: "Data Engineer",
          company: "Clinique FOSCAL",
          period: "2025 - Presente",
          location: "Bucaramanga, Colombia",
          desc: "Diseño y optimización de flujos de datos médicos masivos. Desarrollo de pipelines en Python y SQL sobre Google Cloud (BigQuery) para la toma de decisiones estratégicas."
        },
        {
          id: 2,
          role: "Data Analyst",
          company: "GRUPO GEA",
          period: "2024",
          location: "Bucaramanga, Colombia",
          desc: "Análisis de grandes volúmenes de datos para decisiones de ventas e inventarios. Automatización con Python y reportes dinámicos en Power BI."
        },
        {
          id: 3,
          role: "Junior Data Analyst",
          company: "KUSHKI S.A.S",
          period: "2023",
          location: "Bogotá, Colombia",
          desc: "Gestión de bases de datos para KPIs comerciales. Implementación de modelos predictivos de IA para estimar rendimiento de ventas."
        }
      ]
    },
    education: {
      title: "Formación de Élite",
      schools: [
        {
          degree: "Máster en Ingeniería Aeronáutica",
          school: "IPSA - Institut Polytechnique des Sciences Avancées",
          year: "2024 - 2025",
          loc: "París, Francia"
        },
        {
          degree: "Ingeniería Mecatrónica",
          school: "Universidad Santo Tomás",
          year: "2019 - 2023",
          loc: "Colombia"
        },
        {
          degree: "Física",
          school: "Universidad Industrial de Santander",
          year: "2019 - 2023",
          loc: "Colombia"
        }
      ],
      certs: [
        "Google Data Analytics Professional Certificate",
        "Deep Learning Specialization"
      ]
    },
    skills: {
      title: "Stack Tecnológico",
      categories: [
        { name: "Robótica & Aero", skills: ["ROS/ROS2", "Gazebo", "MATLAB", "Control Systems", "Flight Dynamics"] },
        { name: "Data Science & AI", skills: ["Python", "TensorFlow", "Pandas", "Computer Vision", "Deep Learning"] },
        { name: "Cloud & Backend", skills: ["Google Cloud", "BigQuery", "SQL", "Docker", "Git"] },
        { name: "Hardware", skills: ["C++", "Arduino", "Raspberry Pi", "PLC", "Sensors"] }
      ]
    },
    projects: {
      title: "Portafolio de Proyectos",
      filterLabels: { all: "Todos", data: "Data & IA", robotics: "Robótica & Aero", hardware: "Hardware & Control", academic: "Académico & Física" },
      items: [
        // --- DATA & IA ---
        {
          id: "medical-data-infra", // <--- ID AGREGADO
          title: "Distribución de Cotizantes y Estructura Familiar",
          category: "data",
          desc: "Arquitectura escalable en GCP para procesar datos de afiliados de una red de salud con 11 sedes en Santander. Construcción de pipelines ETL automatizados mediante eventos para integrar registros médicos y centralizar datos.",
          tags: ["GCP", "BigQuery", "Python", "Pandas", "Event-Driven ETL"],
          quickInsightDesc: "Los datos de afiliados varían constantemente. Este pipeline no es unidireccional; se retroalimenta cada mes para mantener actualizada la población, detectando nuevos núcleos familiares y actualizando estados vitales automáticamente.",
          quickInsight: [
            { icon: "Cloud", title: "Cloud Storage", detail: "Trigger por evento & Extracción de reportes crudos" },
            { icon: "Cpu", title: "Python & Pandas", detail: "Cálculo de núcleos familiares y etapas de vida" },
            { icon: "Database", title: "BigQuery", detail: "Consolidación y Single Source of Truth" },
            { icon: "RefreshCcw", title: "Monthly Update", detail: "Retroalimentación cíclica de la población" }
          ],
          metrics: [
            { label: "Tiempo de Procesamiento", value: "-85%", desc: "Reducción en la generación de reportes mensuales" },
            { label: "Precisión de Datos", value: "99.9%", desc: "Consistencia en BigQuery vs fuentes manuales" },
            { label: "Sedes Integradas", value: "11", desc: "Clínicas sincronizadas en tiempo real" }
          ],
          image: '/images_projects/image.png',
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Ver Código" }
          ],
          dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjEzMDQ5OTUtNDFmNy00YTdhLWJkYjUtZjAzOWY5NTVjNTZmIiwidCI6ImY1N2E1OTQ5LTM3MzgtNDFlZi1hODZlLTAwNDkwYzA4Y2NiNSIsImMiOjR9"
        },
        {
          id: "deep-learning-core",
          title: "Deep Learning Neural Core (from scratch)",
          category: "data",
          desc: "Desarrollo completo del motor matemático de una Red Neuronal Profunda genérica (L-layers) programada desde cero utilizando exclusivamente Numpy puro, sin frameworks externos.",
          tags: ["Python", "Numpy", "Deep Learning", "Mathematics", "Computer Vision"],
          quickInsightDesc: "Construcción manual de Arquitectura Feedforward, Backpropagation y Funciones de Costo Multivariable.",
          quickInsight: [
            { icon: "Database", title: "Preparación", detail: "Clasificación logística inicial sobre Planar Data" },
            { icon: "Cpu", title: "Motor Matemático", detail: "Forward/Back Propagation matricial (Numpy)" },
            { icon: "Scan", title: "Aplicación Visual", detail: "Red de 4 Capas para clasificar 'Cat vs Non-Cat'" }
          ],
          metrics: [
            { label: "Librerías Usadas", value: "0", desc: "Pipeline matricial puro (Ni TensorFlow ni Keras)" },
            { label: "Capacidad", value: "L-Layers", desc: "Clase iterativa capaz de instanciar 'L' capas ocultas" },
            { label: "Test Accuracy", value: "80%", desc: "Precisión alcanzada en el Dataset Cat vs Non-Cat" }
          ],
          image: '/images_projects/dl-cover.png',
          imageCaption: 'Arquitectura de Red Neuronal Profunda L-Layer',
          gallery: [
            { src: '/images_projects/dl-cost.png', alt: 'Iteraciones vs Disminución de la Función de Costo (Gradient Descent)', colSpan: false },
            { src: '/images_projects/dl-boundaries.png', alt: 'Mapeo de Fronteras de Decisión Coloreadas en Data 2D', colSpan: false },
            { src: '/images_projects/dl-cat.jpg', alt: 'Test: Clasificación Visual "Cat vs Non-Cat"', colSpan: true }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/Deep-Learning", label: "Ver Core Matemático" }
          ]
        },
        {
          id: "lsc-recognition-ai",
          title: "Traductor Inteligente de LSC",
          category: "data",
          desc: "Prototipo de Inteligencia Artificial para el reconocimiento en tiempo real del alfabeto estático de la Lengua de Señas Colombiana (LSC) mediante visión artificial.",
          tags: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Keras"],
          quickInsightDesc: "Procesamiento y clasificación de video frame-a-frame usando Redes Neuronales",
          quickInsight: [
            { icon: "Camera", title: "OpenCV", detail: "Captura de video en tiempo real" },
            { icon: "Scan", title: "MediaPipe", detail: "Extracción 3D de 63 landmarks de la mano" },
            { icon: "BrainCircuit", title: "Keras MLP", detail: "Clasificación tensorial de la seña" }
          ],
          metrics: [
            { label: "Precisión Óptima", value: "55.5%", desc: "Generalización máxima en apenas 194 epochs sin overfitting" },
            { label: "Datos Reducidos", value: "63 vars", desc: "De millones de píxeles a 63 coordenadas (Inferencias CPU)" },
            { label: "Accesibilidad", value: "100%", desc: "Reconocimiento en tiempo real usando cualquier webcam estándar" }
          ],
          image: '/images_projects/lsc-demo.gif', // GIF 368x654 cargado
          imageCaption: 'Detección de puntos de control (landmarks) en tiempo real',
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/DATA_SCIENCE_PROJECT_Colombian_Sign_Language_LSC_Recognition_with_AI", label: "Repo LSC" },
            { type: "demo", url: "#", label: "Ver Demo" } // Agrega tu URL del video/gif cuando lo tengas
          ]
        },
        // --- ROBOTICA & AERO ---
        {
          id: "rocket-6dof-control",
          title: "Sistema de Control 6-DOF (Cohete)",
          category: "robotics",
          desc: "Desarrollo y simulación del modelo matemático completo (6 Grados de Libertad) y algoritmos de control para la estabilización de vuelo de un cohete.",
          tags: ["Mathematica", "Control Theory", "Non-linear Dynamics", "Simulink", "Aerospace"],
          quickInsightDesc: "Derivación analítica y estabilización usando Ecuaciones de Newton-Euler",
          quickInsight: [
            { icon: "Plane", title: "Cinemática", detail: "Matrices de Rotación de Euler y Cuaterniones" },
            { icon: "Activity", title: "Dinámica", detail: "Ecuación Newton-Euler y Momentos de Inercia" },
            { icon: "Cpu", title: "Control Law", detail: "Control No Lineal para estabilización de 6 DOF" }
          ],
          metrics: [
            { label: "Modelo Matemático", value: "6 DOF", desc: "X, Y, Z + Roll, Pitch, Yaw analíticos" },
            { label: "Validación Fija", value: "Simulink", desc: "Pruebas Open Loop / Closed Loop de estabilidad" },
            { label: "Diseño CAD", value: "SolidWorks", desc: "Geometría e inercia del vehículo importada" }
          ],
          image: '/images_projects/rocket-6dof.gif', // GIF 368x654 cargado
          imageCaption: 'Simulación con SIMSCAPE MULTIBODY en Lazo Abierto',
          gallery: [
            { src: '/images_projects/rocket-traj.jpg', alt: 'Trayectoria 3D del VANT', colSpan: false },
            { src: '/images_projects/rocket-response.jpg', alt: 'Respuesta Temporal del Controlador', colSpan: false }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/Project-Control-of-6-DOF-of-Quadrotor-kind-Rocket", label: "Repo Simulación" }
          ]
        },
        // --- HARDWARE & CONTROL ---
        {
          id: "hybrid-flight-controller",
          title: "Hybrid Flight Controller (C++/ASM)",
          category: "hardware",
          desc: "Diseño y programación bare-metal de un controlador de vuelo para Quadcopter usando una arquitectura de software estratégica: Assembly para el manejo de registros de interrupciones y C++ para el lazo de estabilización PID.",
          tags: ["C++", "Assembly", "ATmega328P", "Flight Controller", "PID", "Hardware"],
          quickInsightDesc: "Desarrollo desde cero operando sobre los registros del microcontrolador sin usar abstracciones ni librerías de vuelo comerciales.",
          quickInsight: [
            { icon: "Cpu", title: "Capa Bajo Nivel", detail: "Assembly: Generación PWM exacta y lectura UART" },
            { icon: "Activity", title: "Capa Alto Nivel", detail: "C++: Lazo PID para estabilización de Quadcopter" },
            { icon: "Plane", title: "Motor Mixing", detail: "Distribución algorítmica de potencia a 4 rotores" }
          ],
          metrics: [
            { label: "Procesador Base", value: "ATmega328", desc: "Microcontrolador operando a frecuencias de bajo nivel" },
            { label: "Software Overhead", value: "0%", desc: "100% código nativo para latencia nula (Real-Time)" },
            { label: "Restricción ESC", value: "1000-2000", desc: "Ancho de pulso estricto garantizando la seguridad en vuelo" }
          ],
          image: '/images_projects/fc-demo.gif',
          imageCaption: 'Vuelo de prueba de Controlador Assembly/C++',
          gallery: [
            { src: '/images_projects/fc-architecture.png', alt: 'Arquitectura Híbrida de Software', colSpan: false },
            { src: '/images_projects/fc-motor-mixing.png', alt: 'Cálculo Matemático de Distribución de Potencia', colSpan: true },
            { src: '/images_projects/fc-uart.png', alt: 'Assembly: Vector de Interrupciones UART', colSpan: false },
            { src: '/images_projects/fc-timer.png', alt: 'Assembly: Configuración y Desborde de Timers 16-bit', colSpan: true }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Ver Source Code" }
          ]
        },
      ]
    },
    contact: {
      title: "Conectemos",
      text: "¿Buscas un ingeniero que entienda la física detrás del movimiento y el código detrás de la inteligencia?",
      email: "Enviar Correo",
      phone: "Copiar Teléfono"
    }
  },
  en: {
    nav: {
      about: "Profile",
      experience: "Career",
      skills: "Stack",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      role: "Mechatronics Engineer & Physicist",
      greeting: "Hi, I'm",
      description: "Multidisciplinary engineer bridging Robotics, Aerospace Systems, and Artificial Intelligence. Transforming complex data into strategic decisions.",
      cta: "View Projects",
      cta_secondary: "Contact Me"
    },
    about: {
      title: "Global Engineering",
      p1: "I am a Mechatronics Engineer and Physicist, currently finishing a Master's in Aeronautical Engineering at IPSA (Paris). My profile combines scientific rigor with engineering efficiency.",
      p2: "My experience spans from industrial automation and robotics to cloud data pipelines and Deep Learning models. I aim to solve problems where hardware, software, and physics converge.",
      stats: [
        { value: "Mechatronics", label: "Eng. Core" },
        { value: "Aerospace", label: "Specialization" },
        { value: "Data & AI", label: "Power-up" }
      ]
    },
    experience: {
      title: "Professional Career",
      jobs: [
        {
          id: 1,
          role: "Data Engineer",
          company: "Clinique FOSCAL",
          period: "2025 - Present",
          location: "Bucaramanga, Colombia",
          desc: "Design and optimization of massive medical data flows. Pipeline development in Python and SQL on Google Cloud (BigQuery) for strategic decision making."
        },
        {
          id: 2,
          role: "Data Analyst",
          company: "GRUPO GEA",
          period: "2024",
          location: "Bucaramanga, Colombia",
          desc: "Analysis of large datasets for sales and inventory decisions. Automation with Python and dynamic reporting in Power BI."
        },
        {
          id: 3,
          role: "Junior Data Analyst",
          company: "KUSHKI S.A.S",
          period: "2023",
          location: "Bogotá, Colombia",
          desc: "Database management for commercial KPIs. Implementation of AI predictive models to estimate sales performance."
        }
      ]
    },
    education: {
      title: "Elite Education",
      schools: [
        {
          degree: "Master in Aeronautical Engineering",
          school: "IPSA - Institut Polytechnique des Sciences Avancées",
          year: "2024 - 2025",
          loc: "Paris, France"
        },
        {
          degree: "Mechatronic Engineering",
          school: "Universidad Santo Tomás",
          year: "2019 - 2023",
          loc: "Colombia"
        },
        {
          degree: "Physics",
          school: "Universidad Industrial de Santander",
          year: "2019 - 2023",
          loc: "Colombia"
        }
      ],
      certs: [
        "Google Data Analytics Professional Certificate",
        "Deep Learning Specialization"
      ]
    },
    skills: {
      title: "Tech Stack",
      categories: [
        { name: "Robotics & Aero", skills: ["ROS/ROS2", "Gazebo", "MATLAB", "Control Systems", "Flight Dynamics"] },
        { name: "Data Science & AI", skills: ["Python", "TensorFlow", "Pandas", "Computer Vision", "Deep Learning"] },
        { name: "Cloud & Backend", skills: ["Google Cloud", "BigQuery", "SQL", "Docker", "Git"] },
        { name: "Hardware", skills: ["C++", "Arduino", "Raspberry Pi", "PLC", "Sensors"] }
      ]
    },
    projects: {
      title: "Featured Projects",
      filterLabels: { all: "All", data: "Data & AI", robotics: "Robotics & Aero", hardware: "Hardware & Control", academic: "Academic & Physics" },
      items: [
        {
          id: "medical-data-infra",
          title: "Contributor Distribution & Family Structure",
          category: "data",
          desc: "Scalable cloud architecture on GCP to process affiliate data for a healthcare network with 11 branches in Santander. Engineered event-driven ETL pipelines to integrate medical records and centralize data.",
          tags: ["GCP", "BigQuery", "Python", "Pandas", "Event-Driven ETL"],
          quickInsightDesc: "Affiliate data fluctuates constantly. This pipeline isn't one-way; it feeds back every month to keep the population up to date, automatically detecting new family cores and updating life stages.",
          quickInsight: [
            { icon: "Cloud", title: "Cloud Storage", detail: "Event trigger & Raw report extraction" },
            { icon: "Cpu", title: "Python & Pandas", detail: "Family core & life stage calculation" },
            { icon: "Database", title: "BigQuery", detail: "Data consolidation & Single Source of Truth" },
            { icon: "RefreshCcw", title: "Monthly Update", detail: "Cyclical population feedback loop" }
          ],
          metrics: [
            { label: "Processing Time", value: "-85%", desc: "Reduction in monthly report generation" },
            { label: "Data Accuracy", value: "99.9%", desc: "Consistency in BigQuery vs manual sources" },
            { label: "Integrated Branches", value: "11", desc: "Clinics synchronized in real-time" }
          ],
          image: '/images_projects/image.png',
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "View Code" }
          ],
          dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjEzMDQ5OTUtNDFmNy00YTdhLWJkYjUtZjAzOWY5NTVjNTZmIiwidCI6ImY1N2E1OTQ5LTM3MzgtNDFlZi1hODZlLTAwNDkwYzA4Y2NiNSIsImMiOjR9"
        },
        {
          id: "deep-learning-core",
          title: "Deep Learning Neural Core (from scratch)",
          category: "data",
          desc: "Complete mathematical development of a generic Deep Neural Network (L-layers) programmed entirely from scratch using only pure Numpy, without external frameworks.",
          tags: ["Python", "Numpy", "Deep Learning", "Mathematics", "Computer Vision"],
          quickInsightDesc: "Manual construction of Feedforward Architecture, Backpropagation, and Multivariable Cost Functions.",
          quickInsight: [
            { icon: "Database", title: "Preparation", detail: "Initial logistic classification on Planar Data" },
            { icon: "Cpu", title: "Math Engine", detail: "Matrix-based Forward/Back Propagation (Numpy)" },
            { icon: "Scan", title: "Visual Application", detail: "4-Layer Network classifying 'Cat vs Non-Cat'" }
          ],
          metrics: [
            { label: "Libraries Used", value: "0", desc: "Pure matrix pipeline (No TensorFlow or Keras)" },
            { label: "Scalability", value: "L-Layers", desc: "Iterative class capable of instantiating 'L' hidden layers" },
            { label: "Test Accuracy", value: "80%", desc: "Precision achieved on the Cat vs Non-Cat Dataset" }
          ],
          image: '/images_projects/dl-cover.png',
          imageCaption: 'Deep Neural Network L-Layer Architecture',
          gallery: [
            { src: '/images_projects/dl-cost.png', alt: 'Iterations vs Cost Function Reduction (Gradient Descent)', colSpan: false },
            { src: '/images_projects/dl-boundaries.png', alt: 'Colored Decision Boundaries Mapping in 2D Data', colSpan: false },
            { src: '/images_projects/dl-cat.jpg', alt: 'Test: "Cat vs Non-Cat" Visual Classification', colSpan: true }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/Deep-Learning", label: "View Math Core" }
          ]
        },
        {
          id: "lsc-recognition-ai",
          title: "LSC Smart Translator",
          category: "data",
          desc: "Artificial Intelligence prototype for real-time recognition of the static alphabet of Colombian Sign Language (LSC) using computer vision.",
          tags: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Keras"],
          quickInsightDesc: "Frame-by-frame video processing and classification using Neural Networks",
          quickInsight: [
            { icon: "Camera", title: "OpenCV", detail: "Real-time video feed capture" },
            { icon: "Scan", title: "MediaPipe", detail: "3D extraction of 63 hand landmarks" },
            { icon: "BrainCircuit", title: "Keras MLP", detail: "Tensor classification of the sign" }
          ],
          metrics: [
            { label: "Optimal Accuracy", value: "55.5%", desc: "Peak generalization reached at 194 epochs without overfitting" },
            { label: "Data Reduction", value: "63 vars", desc: "From millions of pixels to 63 landmarks (CPU Inference)" },
            { label: "Accessibility", value: "100%", desc: "Real-time recognition using any standard webcam" }
          ],
          image: '/images_projects/lsc-demo.gif', // 368x654 GIF loaded
          imageCaption: 'Real-time detection of hand control points (landmarks)',
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/DATA_SCIENCE_PROJECT_Colombian_Sign_Language_LSC_Recognition_with_AI", label: "LSC Repo" },
            { type: "demo", url: "#", label: "View Demo" } // Replace '#' with demo URL
          ]
        },
        {
          id: "rocket-6dof-control",
          title: "6-DOF Rocket Control System",
          category: "robotics",
          desc: "Development and simulation of the complete mathematical model (6 Degrees of Freedom) and control algorithms for rocket flight stabilization.",
          tags: ["Mathematica", "Control Theory", "Non-linear Dynamics", "Simulink", "Aerospace"],
          quickInsightDesc: "Analytical derivation and stabilization using Newton-Euler equations",
          quickInsight: [
            { icon: "Plane", title: "Kinematics", detail: "Euler Rotation Matrices and Quaternions" },
            { icon: "Activity", title: "Dynamics", detail: "Newton-Euler Equation & Moments of Inertia" },
            { icon: "Cpu", title: "Control Law", detail: "Non-Linear Control for 6 DOF stabilization" }
          ],
          metrics: [
            { label: "Mathematical Model", value: "6 DOF", desc: "X, Y, Z + Analytical Roll, Pitch, Yaw" },
            { label: "System Validation", value: "Simulink", desc: "Open Loop / Closed Loop stability tests" },
            { label: "CAD Design", value: "SolidWorks", desc: "Imported vehicle geometry and inertia" }
          ],
          image: '/images_projects/rocket-6dof.gif',
          imageCaption: 'Open Loop Simulation over SIMSCAPE MULTIBODY',
          gallery: [
            { src: '/images_projects/rocket-traj.jpg', alt: 'UAV 3D Trajectory', colSpan: false },
            { src: '/images_projects/rocket-response.jpg', alt: 'Controller Time Response', colSpan: false }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/Project-Control-of-6-DOF-of-Quadrotor-kind-Rocket", label: "Simulation Repo" }
          ]
        },
        {
          id: "hybrid-flight-controller",
          title: "Hybrid Flight Controller (C++/ASM)",
          category: "hardware",
          desc: "Bare-metal design and programming of a Quadcopter flight controller using a strategic dual-stack software architecture: Assembly for interrupt registers management and C++ for the PID stabilization loop.",
          tags: ["C++", "Assembly", "ATmega328P", "Flight Controller", "PID", "Hardware"],
          quickInsightDesc: "Scratch-built development operating directly on microcontroller registers without commercial flight abstractions.",
          quickInsight: [
            { icon: "Cpu", title: "Low Level Layer", detail: "Assembly: Precise PWM generation & UART reading" },
            { icon: "Activity", title: "High Level Layer", detail: "C++: PID Loop for quadcopter stabilization" },
            { icon: "Plane", title: "Motor Mixing", detail: "Algorithmic power distribution to 4 independent rotors" }
          ],
          metrics: [
            { label: "Core Processor", value: "ATmega328", desc: "Microcontroller targeting low level frequencies" },
            { label: "Software Overhead", value: "0%", desc: "100% native code enabling true zero-latency (Real-Time)" },
            { label: "ESC Constraint", value: "1000-2000", desc: "Strict pulse width range ensuring flight safety" }
          ],
          image: '/images_projects/fc-demo.gif',
          imageCaption: 'Assembly/C++ Controller Test Flight',
          gallery: [
            { src: '/images_projects/fc-architecture.png', alt: 'Hybrid Software Architecture', colSpan: false },
            { src: '/images_projects/fc-motor-mixing.png', alt: 'Mathematical Power Distribution Calculation', colSpan: true },
            { src: '/images_projects/fc-uart.png', alt: 'Assembly: UART Interrupt Vector Logic', colSpan: false },
            { src: '/images_projects/fc-timer.png', alt: 'Assembly: 16-bit Hardware Timer Configuration', colSpan: true }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "View Source Code" }
          ]
        },
      ]
    },
    contact: {
      title: "Let's Connect",
      text: "Looking for an engineer who understands the physics behind the movement and the code behind the intelligence?",
      email: "Send Email",
      phone: "Copy Phone"
    }
  },
  fr: {
    nav: {
      about: "Profil",
      experience: "Carrière",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      role: "Ingénieur Mécatronique & Physicien",
      greeting: "Bonjour, je suis",
      description: "Ingénieur multidisciplinaire alliant Robotique, Systèmes Aérospatiaux et Intelligence Artificielle. Transformer des données complexes en décisions stratégiques.",
      cta: "Voir Projets",
      cta_secondary: "Me Contacter"
    },
    about: {
      title: "Ingénierie Globale",
      p1: "Je suis ingénieur mécatronique et physicien, terminant actuellement un Master en ingénierie aéronautique à l'IPSA (Paris). Mon profil allie rigueur scientifique et efficacité technique.",
      p2: "Mon expérience va de l'automatisation industrielle et la robotique aux pipelines de données cloud et modèles de Deep Learning. Je cherche à résoudre des problèmes où matériel, logiciel et physique convergent.",
      stats: [
        { value: "Mécatronique", label: "Socle Ing." },
        { value: "Aérospatial", label: "Spécialisation" },
        { value: "Data & IA", label: "Boost" }
      ]
    },
    experience: {
      title: "Expérience Professionnelle",
      jobs: [
        {
          id: 1,
          role: "Data Engineer",
          company: "Clinique FOSCAL",
          period: "2025 - Présent",
          location: "Bucaramanga, Colombie",
          desc: "Conception et optimisation de flux de données médicales massives. Développement de pipelines en Python et SQL sur Google Cloud (BigQuery)."
        },
        {
          id: 2,
          role: "Data Analyst",
          company: "GRUPO GEA",
          period: "2024",
          location: "Bucaramanga, Colombie",
          desc: "Analyse de grands ensembles de données pour les décisions de vente et d'inventaire. Automatisation avec Python et reporting dynamique dans Power BI."
        },
        {
          id: 3,
          role: "Junior Data Analyst",
          company: "KUSHKI S.A.S",
          period: "2023",
          location: "Bogotá, Colombie",
          desc: "Gestion de bases de données pour les KPI commerciaux. Mise en place de modèles prédictifs d'IA pour estimer les performances."
        }
      ]
    },
    education: {
      title: "Formation d'Élite",
      schools: [
        {
          degree: "Master en Ingénierie Aéronautique",
          school: "IPSA - Institut Polytechnique des Sciences Avancées",
          year: "2024 - 2025",
          loc: "Paris, France"
        },
        {
          degree: "Ingénierie Mécatronique",
          school: "Universidad Santo Tomás",
          year: "2019 - 2023",
          loc: "Colombie"
        },
        {
          degree: "Physique",
          school: "Universidad Industrial de Santander",
          year: "2019 - 2023",
          loc: "Colombie"
        }
      ],
      certs: [
        "Google Data Analytics Professional Certificate",
        "Deep Learning Specialization"
      ]
    },
    skills: {
      title: "Stack Technique",
      categories: [
        { name: "Robotique & Aéro", skills: ["ROS/ROS2", "Gazebo", "MATLAB", "Systèmes de Contrôle", "Dynamique de Vol"] },
        { name: "Data Science & IA", skills: ["Python", "TensorFlow", "Pandas", "Computer Vision", "Deep Learning"] },
        { name: "Cloud & Backend", skills: ["Google Cloud", "BigQuery", "SQL", "Docker", "Git"] },
        { name: "Matériel", skills: ["C++", "Arduino", "Raspberry Pi", "PLC", "Capteurs"] }
      ]
    },
    projects: {
      title: "Projets",
      filterLabels: { all: "Tous", data: "Data & IA", robotics: "Robotique & Aéro", hardware: "Matériel & Control", academic: "Académique" },
      items: [
        {
          id: "medical-data-infra",
          title: "Distribution des Cotisants et Structure Familiale",
          category: "data",
          desc: "Architecture cloud évolutive sur GCP pour traiter les données des affiliés d'un réseau de santé avec 11 succursales à Santander. Création de pipelines ETL basés sur des événements pour centraliser les données.",
          tags: ["GCP", "BigQuery", "Python", "Pandas", "Event-Driven ETL"],
          quickInsightDesc: "Les données des affiliés fluctuent constamment. Ce pipeline n'est pas unidirectionnel ; il se réalimente chaque mois pour maintenir la population à jour, détectant automatiquement de nouveaux noyaux familiaux et modifiant les étapes de vie.",
          quickInsight: [
            { icon: "Cloud", title: "Cloud Storage", detail: "Déclencheur d'événement et extraction brute" },
            { icon: "Cpu", title: "Python & Pandas", detail: "Calcul des noyaux familiaux et étapes de vie" },
            { icon: "Database", title: "BigQuery", detail: "Consolidation et Source Unique de Vérité" },
            { icon: "RefreshCcw", title: "Mise à Jour Mensuelle", detail: "Boucle de rétroaction cyclique de la population" }
          ],
          metrics: [
            { label: "Temps de Traitement", value: "-85%", desc: "Réduction de la génération du rapport mensuel" },
            { label: "Précision des Données", value: "99.9%", desc: "Cohérence BigQuery vs sources manuelles" },
            { label: "Succursales Intégrées", value: "11", desc: "Cliniques synchronisées en temps réel" }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Voir Code" }
          ],
          dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTBiODhiYjQtMTg3MC00NTE3LTkwNTItMDJjMWVmMmE4NWE2IiwidCI6ImY1N2E1OTQ5LTM3MzgtNDFlZi1hODZlLTAwNDkwYzA4Y2NiNSIsImMiOjR9"
        },
        {
          id: "deep-learning-core",
          title: "Deep Learning Neural Core (from scratch)",
          category: "data",
          desc: "Développement mathématique complet d'un Réseau de Neurones Profond générique (L-layers) programmé entièrement à partir de zéro en utilisant uniquement Numpy pur, sans frameworks externes.",
          tags: ["Python", "Numpy", "Deep Learning", "Mathematics", "Computer Vision"],
          quickInsightDesc: "Construction manuelle de l'Architecture Feedforward, de la Rétropropagation et des Fonctions de Coût Multivariables.",
          quickInsight: [
            { icon: "Database", title: "Préparation", detail: "Classification logistique initiale sur Planar Data" },
            { icon: "Cpu", title: "Moteur Mathématique", detail: "Propagation avant/arrière matricielle (Numpy)" },
            { icon: "Scan", title: "Application Visuelle", detail: "Réseau de 4 Couches classant 'Cat vs Non-Cat'" }
          ],
          metrics: [
            { label: "Librairies Utilisées", value: "0", desc: "Pipeline matriciel pur (Ni TensorFlow ni Keras)" },
            { label: "Capacité", value: "L-Layers", desc: "Classe itérative capable d'instancier 'L' couches cachées" },
            { label: "Précision de Test", value: "80%", desc: "Précision atteinte sur le Dataset Cat vs Non-Cat" }
          ],
          image: '/images_projects/dl-cover.png',
          imageCaption: 'Architecture de Réseau Neuronal Profond L-Layer',
          gallery: [
            { src: '/images_projects/dl-cost.png', alt: 'Itérations vs Réduction de la Fonction de Coût (Descente de Gradient)', colSpan: false },
            { src: '/images_projects/dl-boundaries.png', alt: 'Cartographie des frontières de décision colorées (Dondes 2D)', colSpan: false },
            { src: '/images_projects/dl-cat.jpg', alt: 'Test : Classification Visuelle "Cat vs Non-Cat"', colSpan: true }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/Deep-Learning", label: "Voir Core Mathématique" }
          ]
        },
        {
          id: "lsc-recognition-ai",
          title: "Traducteur IA LSC",
          category: "data",
          desc: "Prototype d'Intelligence Artificielle pour la reconnaissance en temps réel de l'alphabet statique de la Langue des Signes Colombienne (LSC) par vision par ordinateur.",
          tags: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Keras"],
          quickInsightDesc: "Traitement et classification de la vidéo image par image avec Réseaux Neuronaux",
          quickInsight: [
            { icon: "Camera", title: "OpenCV", detail: "Capture de flux vidéo en direct" },
            { icon: "Scan", title: "MediaPipe", detail: "Extraction 3D de 63 points de la main" },
            { icon: "BrainCircuit", title: "Keras MLP", detail: "Classification tensorielle du signe" }
          ],
          metrics: [
            { label: "Précision Optimale", value: "55.5%", desc: "Généralisation maximale à 194 epochs sans surajustement" },
            { label: "Données Réduites", value: "63 vars", desc: "De millions de pixels à 63 repères 3D (Inférence CPU)" },
            { label: "Accessibilité", value: "100%", desc: "Reconnaissance en temps réel via n'importe quelle webcam" }
          ],
          image: '/images_projects/lsc-demo.gif', // GIF 368x654 chargé
          imageCaption: 'Détection en temps réel des points de contrôle (landmarks)',
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/DATA_SCIENCE_PROJECT_Colombian_Sign_Language_LSC_Recognition_with_AI", label: "Repo LSC" },
            { type: "demo", url: "#", label: "Voir Demo" } // Change '#' for a real demo
          ]
        },
        {
          id: "rocket-6dof-control",
          title: "Contrôle de Fusée à 6 DDL",
          category: "robotics",
          desc: "Développement et simulation du modèle mathématique complet (6 Degrés de Liberté) et des algorithmes de contrôle pour la stabilisation d'une fusée.",
          tags: ["Mathematica", "Control Theory", "Non-linear Dynamics", "Simulink", "Aerospace"],
          quickInsightDesc: "Dérivation analytique et stabilisation avec les Équations de Newton-Euler",
          quickInsight: [
            { icon: "Plane", title: "Cinématique", detail: "Matrices de Rotation d'Euler et Quaternions" },
            { icon: "Activity", title: "Dynamique", detail: "Équations de Newton-Euler et Moments d'Inertie" },
            { icon: "Cpu", title: "Loi de Contrôle", detail: "Contrôle non linéaire pour la stabilisation 6 DOF" }
          ],
          metrics: [
            { label: "Modèle Mathématique", value: "6 DOF", desc: "X, Y, Z + Roulis, Tangage, Lacet analytiques" },
            { label: "Validation Système", value: "Simulink", desc: "Tests de stabilité en boucle ouverte / fermée" },
            { label: "Conception CAO", value: "SolidWorks", desc: "Géométrie et inertie du véhicule importées" }
          ],
          image: '/images_projects/rocket-6dof.gif',
          imageCaption: 'Simulation en Boucle Ouverte avec SIMSCAPE MULTIBODY',
          gallery: [
            { src: '/images_projects/rocket-traj.jpg', alt: 'Trajectoire 3D du drone', colSpan: false },
            { src: '/images_projects/rocket-response.jpg', alt: 'Réponse Temporelle du Contrôleur', colSpan: false }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/Project-Control-of-6-DOF-of-Quadrotor-kind-Rocket", label: "Repo Simulation" }
          ]
        },
        {
          id: "hybrid-flight-controller",
          title: "Contrôleur de Vol Hybride (C++/ASM)",
          category: "hardware",
          desc: "Conception et programmation \"bare-metal\" d'un contrôleur de vol pour Quadcopter utilisant une architecture logicielle double couche : Assembly pour la gestion des interruptions matérielles et C++ pour la boucle de stabilisation PID.",
          tags: ["C++", "Assembly", "ATmega328P", "Flight Controller", "PID", "Hardware"],
          quickInsightDesc: "Développement natif exploitant directement les registres du microcontrôleur sans bibliothèques commerciales.",
          quickInsight: [
            { icon: "Cpu", title: "Couche Bas Niveau", detail: "Assembly : Génération PWM et signaux UART" },
            { icon: "Activity", title: "Couche Haut Niveau", detail: "C++ : Boucle PID pour la stabilisation spatiale" },
            { icon: "Plane", title: "Motor Mixing", detail: "Répartition mathématique de la puissance sur 4 rotors" }
          ],
          metrics: [
            { label: "Processeur de Base", value: "ATmega328", desc: "Microcontrôleur ciblant les fréquences d'horloge" },
            { label: "Latence Logicielle", value: "0%", desc: "Code 100% natif pour une latence nulle (Temps Réel)" },
            { label: "Sécurité ESC", value: "1000-2000", desc: "Spectre de signal strict garantissant la sécurité en vol" }
          ],
          image: '/images_projects/fc-demo.gif',
          imageCaption: 'Vol test du contrôleur Assembly/C++',
          gallery: [
            { src: '/images_projects/fc-architecture.png', alt: 'Architecture Logicielle Hybride', colSpan: false },
            { src: '/images_projects/fc-motor-mixing.png', alt: 'Calcul de Distribution de la Puissance', colSpan: true },
            { src: '/images_projects/fc-uart.png', alt: 'Assembly : Logique du vecteur d\'interruption UART', colSpan: false },
            { src: '/images_projects/fc-timer.png', alt: 'Assembly : Configuration des Timers Matériels 16 bits', colSpan: true }
          ],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Voir Source Code" }
          ]
        },
      ]
    },
    contact: {
      title: "Contactez-moi",
      text: "Vous cherchez un ingénieur qui comprend la physique derrière le mouvement et le code derrière l'intelligence ?",
      email: "Envoyer Email",
      phone: "Copier Tél"
    }
  }
};