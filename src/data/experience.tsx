export type Language = "English" | "French" | "Spanish";

export interface ExperienceEntry {
  title: string;
  company: string;
  location?: string;
  date: string;
  stack?: string[];
  bulletPoints?: string[];
}

export const experiences: Record<Language, ExperienceEntry>[] = [
  {
    English: {
      title: "Software Developer Intern — Incoming",
      company: "Google",
      location: "Kitchener, ON",
      date: "May 2026 — Aug 2026",
      stack: [],
      bulletPoints: [
        "Joining Google as a Software Developer Intern for Summer 2026.",
      ],
    },
    French: {
      title: "Stagiaire en développement logiciel — À venir",
      company: "Google",
      location: "Kitchener, ON",
      date: "Mai 2026 — Août 2026",
      stack: [],
      bulletPoints: [
        "Stage à venir chez Google en tant que développeur logiciel pour l'été 2026.",
      ],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software — Próximamente",
      company: "Google",
      location: "Kitchener, ON",
      date: "Mayo 2026 — Agosto 2026",
      stack: [],
      bulletPoints: [],
    },
  },
  {
    English: {
      title: "Software Developer Intern",
      company: "Intelcom — Dragonfly",
      location: "Montreal, QC",
      date: "May 2025 — May 2026",
      stack: ["Kotlin", "C#", "CosmosDB", "Azure", "Terraform", "Pulsar"],
      bulletPoints: [
        "Developed and deployed 2 Android applications in Kotlin across 20+ sorting stations for real-time package scanning and tracking, improving workflow visibility and throughput by 98%.",
        "Collaborated to design the architecture of a sorting solution and implemented 2 microservices in C# to increase sorting productivity.",
      ],
    },
    French: {
      title: "Stagiaire en développement logiciel",
      company: "Intelcom — Dragonfly",
      location: "Montréal, QC",
      date: "Mai 2025 — Mai 2026",
      stack: ["Kotlin", "C#", "CosmosDB", "Azure", "Terraform", "Pulsar"],
      bulletPoints: [
        "Développement et déploiement de 2 applications Android en Kotlin dans plus de 20 stations de tri pour la numérisation et le suivi des colis en temps réel, améliorant la visibilité du flux de travail et le débit de 98 %.",
        "Collaboration à la conception de l'architecture d'une solution de tri et implémentation de 2 microservices en C# pour augmenter la productivité du tri.",
      ],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software",
      company: "Intelcom — Dragonfly",
      location: "Montreal, QC",
      date: "Mayo 2025 — Mayo 2026",
      stack: ["Kotlin", "C#", "CosmosDB", "Azure", "Terraform", "Pulsar"],
      bulletPoints: [],
    },
  },
  {
    English: {
      title: "Software Developer Intern",
      company: "X2O Media",
      location: "Montreal, QC",
      date: "Sept 2024 — Dec 2024",
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
      date: "Sept 2024 — Déc 2024",
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
      date: "Sept 2024 — Dic 2024",
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
      date: "Sept 2025 — Present",
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
      date: "Sept 2025 — Présent",
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
      date: "Sept 2025 — Presente",
      stack: ["LaTeX", "SQL", "Matemáticas Discretas"],
      bulletPoints: [],
    },
  },
];
