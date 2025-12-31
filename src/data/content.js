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
          title: "Infraestructura de Datos Médicos",
          category: "data",
          desc: "Arquitectura Cloud escalable en GCP para procesar datos clínicos masivos. Pipelines ETL automatizados para integración de historias clínicas y laboratorios.",
          tags: ["GCP", "BigQuery", "SQL", "ETL", "Python"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Ver Código" }
          ]
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
          id: "ai-sales-predictor", // <--- ID AGREGADO
          title: "AI Sales Predictor",
          category: "data",
          desc: "Modelo de Inteligencia Artificial para estimar rendimiento comercial, analizando patrones complejos de ventas con redes neuronales.",
          tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Repo GitHub" },
            { type: "demo", url: "#", label: "Demo Live" }
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
          title: "Medical Data Pipelines",
          category: "data",
          desc: "Scalable Cloud architecture on GCP to process massive clinical data. Automated ETL pipelines for integrating medical records and labs.",
          tags: ["GCP", "BigQuery", "SQL", "ETL", "Python"],
          image : '/images_projects/image.png',
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
          id: "ai-sales-predictor",
          title: "AI Sales Predictor",
          category: "data",
          desc: "Artificial Intelligence model developed to estimate commercial performance, analyzing complex sales patterns with neural networks.",
          tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Repo GitHub" },
            { type: "demo", url: "#", label: "Live Demo" }
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
          title: "Pipelines de Données Médicales",
          category: "data",
          desc: "Architecture Cloud évolutive sur GCP. Pipelines ETL automatisés pour l'intégration de dossiers médicaux.",
          tags: ["GCP", "BigQuery", "SQL", "ETL", "Python"],
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
          id: "ai-sales-predictor",
          title: "AI Sales Predictor",
          category: "data",
          desc: "Modèle d'IA pour estimer la performance commerciale, analysant des modèles de vente complexes avec des réseaux neuronaux.",
          tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
          links: [
            { type: "github", url: "https://github.com/Sebastianwhc", label: "Repo GitHub" },
            { type: "demo", url: "#", label: "Demo Live" }
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