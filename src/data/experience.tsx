export type Language = "English" | "French" | "Spanish";

export const experiences: Record<
  Language,
  { title: string; company: string; date: string; bulletPoints?: string[] }
>[] = [
  {
    English: {
      title: "Software Development Intern",
      company: "Intelcom | Dragonfly",
      date: "Summer 2025",
      // bulletPoints: [
      //   "Achieved an 80% reduction of time in the quality assurance process duration by developing end-to-end (E2E) tests using Playwright and TypeScript.",
      //   "Developed a bot that fetches release notes with updated dependencies to facilitate tracking software changes.",
      //   "Converted an existing React web application to a React Native mobile application, enabling cross-platform compatibility."
      // ],
    },
    French: {
      title: "Stagiare en développement logiciel",
      company: "Intelcom | Dragonfly",
      date: "Été 2025",
      // bulletPoints: [
      //   "Atteint une réduction de 80% de la durée du processus d'assurance qualité en développant des tests de end-to-end (E2E) en utilisant Playwright et TypeScript.",
      //   "Développé un bot qui récupère les notes de version avec des dépendances mises à jour pour faciliter le suivi des changements logiciels.",
      //   "Converti une application web React existante en une application mobile React Native, permettant une compatibilité multi"
      // ],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software",
      company: "Intelcom | Dragonfly",
      date: "Verano 2025",
      // bulletPoints: [
      //   "Logró una reducción del 80% en la duración del proceso de garantía de calidad desarrollando pruebas de extremo a extremo (E2E) utilizando Playwright y TypeScript.",
      //   "Desarrolló un bot que obtiene notas de lanzamiento con dependencias actualizadas para facilitar el seguimiento de los cambios de software.",
      //   "Convirtió una aplicación web React existente en una aplicación móvil React Native, lo que permite la compatibilidad multiplataforma."
      // ],
    },
  },
  {
    English: {
      title: "Software Development Intern",
      company: "X2O Media",
      date: "Fall 2024",
      bulletPoints: [
        "Achieved an 80% reduction of time in the quality assurance process duration by developing end-to-end (E2E) tests using Playwright and TypeScript.",
        "Developed a bot that fetches release notes with updated dependencies to facilitate tracking software changes.",
        "Converted an existing React web application to a React Native mobile application, enabling cross-platform compatibility."
      ],
    },
    French: {
      title: "Stagiare en développement logiciel",
      company: "X2O Media",
      date: "Automne 2024",
      bulletPoints: [
        "Atteint une réduction de 80% de la durée du processus d'assurance qualité en développant des tests de end-to-end (E2E) en utilisant Playwright et TypeScript.",
        "Développé un bot qui récupère les notes de version avec des dépendances mises à jour pour faciliter le suivi des changements logiciels.",
        "Converti une application web React existante en une application mobile React Native, permettant une compatibilité multi"
      ],
    },
    Spanish: {
      title: "Pasante de Desarrollo de Software",
      company: "X2O Media",
      date: "Otoño 2024",
      bulletPoints: [
        "Logró una reducción del 80% en la duración del proceso de garantía de calidad desarrollando pruebas de extremo a extremo (E2E) utilizando Playwright y TypeScript.",
        "Desarrolló un bot que obtiene notas de lanzamiento con dependencias actualizadas para facilitar el seguimiento de los cambios de software.",
        "Convirtió una aplicación web React existente en una aplicación móvil React Native, lo que permite la compatibilidad multiplataforma."
      ],
    },
  },
];
