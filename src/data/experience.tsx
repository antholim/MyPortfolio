export type Language = "English" | "French" | "Spanish";

export enum Languages {
  English = "English",
  French = "French",
  Spanish = "Spanish",
}

export interface ExperienceEntry {
  title: string;
  company: string;
  team?: string;
  location?: string;
  date: string;
  current?: boolean;
  stack?: string[];
  bulletPoints?: string[];
}

export const CURRENT_LABEL: Record<Language, string> = {
  English: "Current",
  French: "En cours",
  Spanish: "Actual",
};

export const experiences: Record<Language, ExperienceEntry>[] = [
  {
    English: {
      title: "Software Developer Intern",
      company: "IBM Consulting",
      location: "Montreal, QC",
      date: "Sept 2026 – Dec 2026",
      current: true,
      stack: [],
      bulletPoints: [],
    },
    French: {
      title: "Stagiaire en développement logiciel",
      company: "IBM Consulting",
      location: "Montréal, QC",
      date: "Sept 2026 – Déc 2026",
      current: true,
      stack: [],
      bulletPoints: [],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software",
      company: "IBM Consulting",
      location: "Montreal, QC",
      date: "Sept 2026 – Dic 2026",
      current: true,
      stack: [],
      bulletPoints: [],
    },
  },
  {
    English: {
      title: "Software Developer Intern",
      company: "Google",
      team: "Google Workspace, AI Safety Team",
      location: "Waterloo, ON",
      date: "May 2026 – Jul 2026",
      stack: ["Python", "Apache Beam", "Colab", "Gemini"],
      bulletPoints: [
        "Built a data pipeline using Apache Beam (Flume) to enable bulk inference at scale, accelerating Gemini integration across Workspace products and reducing processing time by 85%.",
        "Designed and implemented a synthetic data generation pipeline to produce false-positive examples, improving the precision of a model trained to detect indirect prompt injection (IPI) attacks.",
      ],
    },
    French: {
      title: "Stagiaire en développement logiciel",
      company: "Google",
      team: "Google Workspace, Équipe sécurité IA",
      location: "Waterloo, ON",
      date: "Mai 2026 – Juil. 2026",
      stack: ["Python", "Apache Beam", "Colab", "Gemini"],
      bulletPoints: [
        "Conception d'un pipeline de données avec Apache Beam (Flume) permettant l'inférence en lot à grande échelle, accélérant l'intégration de Gemini dans les produits Workspace et réduisant le temps de traitement de 85 %.",
        "Conception et implémentation d'un pipeline de génération de données synthétiques produisant des exemples de faux positifs, améliorant la précision d'un modèle entraîné à détecter les attaques par injection de prompt indirecte (IPI).",
      ],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software",
      company: "Google",
      team: "Google Workspace, Equipo de Seguridad de IA",
      location: "Waterloo, ON",
      date: "Mayo 2026 – Jul. 2026",
      stack: ["Python", "Apache Beam", "Colab", "Gemini"],
      bulletPoints: [
        "Construyó un pipeline de datos con Apache Beam (Flume) para habilitar inferencia masiva a escala, acelerando la integración de Gemini en los productos de Workspace y reduciendo el tiempo de procesamiento en un 85 %.",
        "Diseñó e implementó un pipeline de generación de datos sintéticos para producir ejemplos de falsos positivos, mejorando la precisión de un modelo entrenado para detectar ataques de inyección indirecta de prompts (IPI).",
      ],
    },
  },
  {
    English: {
      title: "Software Developer Intern",
      company: "Intelcom (Dragonfly)",
      location: "Montreal, QC",
      date: "May 2025 – May 2026",
      stack: ["Kotlin", "C#", "CosmosDB", "Azure", "Terraform", "Pulsar"],
      bulletPoints: [
        "Developed and deployed 2 Android applications in Kotlin across 20+ sorting stations for real-time package scanning and tracking, improving workflow visibility and throughput by 98%.",
        "Collaborated to design the architecture of a sorting solution and implemented 2 microservices in C# to increase sorting productivity.",
      ],
    },
    French: {
      title: "Stagiaire en développement logiciel",
      company: "Intelcom (Dragonfly)",
      location: "Montréal, QC",
      date: "Mai 2025 – Mai 2026",
      stack: ["Kotlin", "C#", "CosmosDB", "Azure", "Terraform", "Pulsar"],
      bulletPoints: [
        "Développement et déploiement de 2 applications Android en Kotlin dans plus de 20 stations de tri pour la numérisation et le suivi des colis en temps réel, améliorant la visibilité du flux de travail et le débit de 98 %.",
        "Collaboration à la conception de l'architecture d'une solution de tri et implémentation de 2 microservices en C# pour augmenter la productivité du tri.",
      ],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software",
      company: "Intelcom (Dragonfly)",
      location: "Montreal, QC",
      date: "Mayo 2025 – Mayo 2026",
      stack: ["Kotlin", "C#", "CosmosDB", "Azure", "Terraform", "Pulsar"],
      bulletPoints: [
        "Desarrolló y desplegó 2 aplicaciones Android en Kotlin en más de 20 estaciones de clasificación para el escaneo y seguimiento de paquetes en tiempo real, mejorando la visibilidad del flujo de trabajo y el rendimiento en un 98 %.",
        "Colaboró en el diseño de la arquitectura de una solución de clasificación e implementó 2 microservicios en C# para aumentar la productividad.",
      ],
    },
  },
  {
    English: {
      title: "Software Developer Intern",
      company: "X2O Media",
      location: "Montreal, QC",
      date: "Sept 2024 – Dec 2024",
      stack: ["Playwright", "TypeScript", "React Native"],
      bulletPoints: [
        "Reduced QA process duration by 80% by developing end-to-end tests using Playwright and TypeScript for the CI/CD pipeline.",
        "Developed a Slack bot to automate release notes retrieval from Jira and GitLab, reducing manual effort by 90%.",
        "Converted a React web application to a React Native mobile application for cross-platform compatibility.",
      ],
    },
    French: {
      title: "Stagiaire en développement logiciel",
      company: "X2O Media",
      location: "Montréal, QC",
      date: "Sept 2024 – Déc 2024",
      stack: ["Playwright", "TypeScript", "React Native"],
      bulletPoints: [
        "Réduction de 80 % de la durée du processus d'assurance qualité en développant des tests end-to-end avec Playwright et TypeScript pour le pipeline CI/CD.",
        "Développement d'un bot Slack pour automatiser la récupération des notes de version depuis Jira et GitLab, réduisant l'effort manuel de 90 %.",
        "Conversion d'une application web React en application mobile React Native pour la compatibilité multiplateforme.",
      ],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software",
      company: "X2O Media",
      location: "Montreal, QC",
      date: "Sept 2024 – Dic 2024",
      stack: ["Playwright", "TypeScript", "React Native"],
      bulletPoints: [
        "Logró una reducción del 80% en la duración del proceso de garantía de calidad desarrollando pruebas E2E con Playwright y TypeScript.",
        "Desarrolló un bot Slack para automatizar la obtención de notas de lanzamiento desde Jira y GitLab.",
        "Convirtió una aplicación web React en una aplicación móvil React Native.",
      ],
    },
  },
  {
    English: {
      title: "Teaching Assistant",
      company: "Concordia University",
      location: "Montreal, QC",
      date: "Sept 2025 – Apr 2026",
      stack: ["LaTeX", "SQL", "Discrete Mathematics"],
      bulletPoints: [
        "Graded assignments, quizzes, and exams, providing detailed feedback to students.",
        "Assisted in teaching discrete math, LaTeX, relational databases, and formal methods concepts.",
      ],
    },
    French: {
      title: "Assistant d'enseignement",
      company: "Université Concordia",
      location: "Montréal, QC",
      date: "Sept 2025 – Avr. 2026",
      stack: ["LaTeX", "SQL", "Mathématiques discrètes"],
      bulletPoints: [
        "Correction des devoirs, quiz et examens, en fournissant des commentaires détaillés aux étudiants.",
        "Aide à l'enseignement des mathématiques discrètes, LaTeX, bases de données relationnelles et concepts de méthodes formelles.",
      ],
    },
    Spanish: {
      title: "Asistente de Enseñanza",
      company: "Universidad Concordia",
      location: "Montreal, QC",
      date: "Sept 2025 – Abr. 2026",
      stack: ["LaTeX", "SQL", "Matemáticas Discretas"],
      bulletPoints: [
        "Calificó tareas, cuestionarios y exámenes, brindando retroalimentación detallada a los estudiantes.",
        "Asistió en la enseñanza de matemáticas discretas, LaTeX, bases de datos relacionales y métodos formales.",
      ],
    },
  },
];
