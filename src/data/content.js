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
          id: "health-dashboards", // <--- ID AGREGADO
          title: "Tableros de Gestión Hospitalaria",
          category: "data",
          desc: "Sistema de dashboards interactivos para monitoreo de ocupación de camas, tiempos de espera y recursos críticos en tiempo real.",
          tags: ["Power BI", "DAX", "Health Tech", "Analytics"],
          links: [
            { type: "demo", url: "#", label: "Ver Dashboard" }
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
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/DATA_SCIENCE_PROJECT_Colombian_Sign_Language_LSC_Recognition_with_AI", label: "Repo LSC" },
            { type: "demo", url: "#", label: "Ver Demo" } // Agrega tu URL del video/gif cuando lo tengas
          ]
        },
        // --- ROBOTICA & AERO ---
        {
          id: "vtvl-rocket", // <--- ID AGREGADO
          title: "Control de Cohete VTVL (Tesis)",
          category: "robotics",
          desc: "Simulación y diseño del sistema de control para el aterrizaje y despegue vertical (VTVL) de un vehículo aéreo no tripulado tipo cohete.",
          tags: ["Simulink", "Solidworks", "Control PID", "Flight Dynamics"],
          links: [
            { type: "video", url: "#", label: "Ver Simulación" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Modelos" }
          ]
        },
        {
          id: "drone-nav", // <--- ID AGREGADO
          title: "Navegación Autónoma de Drones",
          category: "robotics",
          desc: "Sistema de navegación para UAVs usando fusión de sensores y algoritmos de control robusto. Validación en entorno virtual Gazebo.",
          tags: ["ROS", "C++", "Gazebo", "Kalman Filter"],
          links: [
            { type: "video", url: "#", label: "Ver Video" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Código ROS" }
          ]
        },
        {
          id: "robotic-arm-vision", // <--- ID AGREGADO
          title: "Visión Artificial en Brazo Robótico",
          category: "robotics",
          desc: "Brazo robótico capaz de clasificar objetos en tiempo real mediante visión por computadora (YOLO) y cinemática inversa.",
          tags: ["Python", "OpenCV", "Arduino", "YOLO", "Kinematics"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Repo Visión" }
          ]
        },
        // --- HARDWARE & CONTROL ---
        {
          id: "greenhouse-auto", // <--- ID AGREGADO
          title: "Automatización de Invernadero",
          category: "hardware",
          desc: "Sistema de control ambiental con Arduino. Monitoreo de variables, ajuste de Set Point y control PWM de ventiladores para regulación térmica.",
          tags: ["Arduino", "C++", "Sensors", "PWM Control", "IoT"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Código Arduino" },
            { type: "video", url: "#", label: "Ver Montaje" }
          ]
        },
        {
          id: "assembly-projects", // <--- ID AGREGADO
          title: "Proyectos en Assembly",
          category: "hardware",
          desc: "Implementación de algoritmos de bajo nivel y gestión directa de memoria y registros en microcontroladores.",
          tags: ["Assembly", "Microcontrollers", "Low Level", "Optimization"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Source Code" }
          ]
        },
        // --- ACADEMICO & FISICA ---
        {
          id: "diff-eq-sim", // <--- ID AGREGADO
          title: "Simulación de Ecuaciones Diferenciales",
          category: "academic",
          desc: "Modelado numérico y simulación computacional de sistemas físicos complejos mediante resolución de ecuaciones diferenciales.",
          tags: ["Python", "NumPy", "Matplotlib", "Physics", "Calculus"],
          links: [
            { type: "demo", url: "#", label: "Ver Gráficas" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Notebook" }
          ]
        }
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
          id: "health-dashboards",
          title: "Healthcare Mgmt Dashboards",
          category: "data",
          desc: "Interactive dashboard system for monitoring bed occupancy, wait times, and critical resources in real-time.",
          tags: ["Power BI", "DAX", "Health Tech", "Analytics"],
          links: [
            { type: "demo", url: "#", label: "View Dashboard" }
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
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/DATA_SCIENCE_PROJECT_Colombian_Sign_Language_LSC_Recognition_with_AI", label: "LSC Repo" },
            { type: "demo", url: "#", label: "View Demo" } // Replace '#' with demo URL
          ]
        },
        {
          id: "vtvl-rocket",
          title: "VTVL Rocket Control (Thesis)",
          category: "robotics",
          desc: "Simulation and control system design for Vertical Takeoff and Vertical Landing (VTVL) of a rocket-type UAV.",
          tags: ["Simulink", "Solidworks", "PID Control", "Flight Dynamics"],
          links: [
            { type: "video", url: "#", label: "View Simulation" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Models" }
          ]
        },
        {
          id: "drone-nav",
          title: "Autonomous Drone Navigation",
          category: "robotics",
          desc: "UAV navigation system using sensor fusion and robust control algorithms. Validation in Gazebo virtual environment.",
          tags: ["ROS", "C++", "Gazebo", "Kalman Filter"],
          links: [
            { type: "video", url: "#", label: "View Video" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "ROS Code" }
          ]
        },
        {
          id: "robotic-arm-vision",
          title: "Robotic Arm Computer Vision",
          category: "robotics",
          desc: "Robotic arm capable of sorting objects in real-time using computer vision (YOLO) and inverse kinematics.",
          tags: ["Python", "OpenCV", "Arduino", "YOLO", "Kinematics"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Vision Repo" }
          ]
        },
        {
          id: "greenhouse-auto",
          title: "Greenhouse Automation",
          category: "hardware",
          desc: "Environmental control system with Arduino. Variable monitoring, Set Point adjustment, and PWM fan control for thermal regulation.",
          tags: ["Arduino", "C++", "Sensors", "PWM Control", "IoT"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Arduino Code" },
            { type: "video", url: "#", label: "View Setup" }
          ]
        },
        {
          id: "assembly-projects",
          title: "Assembly Projects",
          category: "hardware",
          desc: "Implementation of low-level algorithms and direct memory/register management on microcontrollers.",
          tags: ["Assembly", "Microcontrollers", "Low Level", "Optimization"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Source Code" }
          ]
        },
        {
          id: "diff-eq-sim",
          title: "Differential Eq. Simulation",
          category: "academic",
          desc: "Numerical modeling and computational simulation of complex physical systems through differential equation solving.",
          tags: ["Python", "NumPy", "Matplotlib", "Physics", "Calculus"],
          links: [
            { type: "demo", url: "#", label: "View Charts" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Notebook" }
          ]
        }
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
          id: "health-dashboards",
          title: "Tableaux de Bord Santé",
          category: "data",
          desc: "Système de tableaux de bord interactifs pour le suivi en temps réel de l'occupation des lits et des ressources critiques.",
          tags: ["Power BI", "DAX", "Health Tech", "Analytics"],
          links: [
            { type: "demo", url: "#", label: "Voir Dashboard" }
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
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc/DATA_SCIENCE_PROJECT_Colombian_Sign_Language_LSC_Recognition_with_AI", label: "Repo LSC" },
            { type: "demo", url: "#", label: "Voir Demo" } // Change '#' for a real demo
          ]
        },
        {
          id: "vtvl-rocket",
          title: "Contrôle Fusée VTVL (Thèse)",
          category: "robotics",
          desc: "Simulation et conception du système de contrôle pour l'atterrissage et le décollage vertical (VTVL) d'un drone type fusée.",
          tags: ["Simulink", "Solidworks", "PID Control", "Flight Dynamics"],
          links: [
            { type: "video", url: "#", label: "Voir Simulation" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Modèles" }
          ]
        },
        {
          id: "drone-nav",
          title: "Navigation Autonome de Drone",
          category: "robotics",
          desc: "Système de navigation pour drones utilisant la fusion de capteurs et un contrôle robuste. Validation sous Gazebo.",
          tags: ["ROS", "C++", "Gazebo", "Kalman Filter"],
          links: [
            { type: "video", url: "#", label: "Voir Vidéo" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Code ROS" }
          ]
        },
        {
          id: "robotic-arm-vision",
          title: "Vision Artificielle Bras Robotique",
          category: "robotics",
          desc: "Bras robotique capable de trier des objets en temps réel grâce à la vision par ordinateur (YOLO) et à la cinématique inverse.",
          tags: ["Python", "OpenCV", "Arduino", "YOLO"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Repo Vision" }
          ]
        },
        {
          id: "greenhouse-auto",
          title: "Automatisation de Serre",
          category: "hardware",
          desc: "Système de contrôle environnemental avec Arduino. Surveillance des variables et contrôle PWM des ventilateurs.",
          tags: ["Arduino", "C++", "Sensors", "PWM Control", "IoT"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Code Arduino" },
            { type: "video", url: "#", label: "Voir Montage" }
          ]
        },
        {
          id: "assembly-projects",
          title: "Projets en Assembly",
          category: "hardware",
          desc: "Implémentation d'algorithmes bas niveau et gestion directe de la mémoire sur microcontrôleurs.",
          tags: ["Assembly", "Microcontrollers", "Low Level", "Optimization"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Source Code" }
          ]
        },
        {
          id: "diff-eq-sim",
          title: "Simulation Éq. Différentielles",
          category: "academic",
          desc: "Modélisation numérique et simulation de systèmes physiques complexes par résolution d'équations différentielles.",
          tags: ["Python", "NumPy", "Matplotlib", "Physics", "Calculus"],
          links: [
            { type: "demo", url: "#", label: "Voir Graphiques" },
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Notebook" }
          ]
        }
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