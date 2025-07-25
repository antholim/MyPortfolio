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
  bulletPoints: [
    "Successfully developed a Kotlin-based Android application for real-time package scanning and tracking, which passed trials in sorting stations and significantly improved delivery productivity and workflow visibility.",
    "Developed and deployed 2 Android applications in Kotlin across 20+ sorting stations for real-time package scanning and tracking, leading to a 98% improvement in sorting station workflow visibility and delivery throughput.",
    "Designed and implemented an identification system using Azure Function to track permanent and temporary workers.",
    "Wrote 100+ unit and integration tests using JUnit 5 and Mockito, ensuring 90%+ code coverage and reducing production bugs."
  ],
},

French: {
  title: "Stagiaire en développement logiciel",
  company: "Intelcom | Dragonfly",
  date: "Été 2025",
  bulletPoints: [
    "Développement d'une application Android en Kotlin pour la numérisation et le suivi des colis en temps réel, ayant passé avec succès les essais dans les stations de tri et amélioré de manière significative la productivité des livraisons ainsi que la visibilité du flux de travail.",
    "Développement et déploiement de deux applications Android en Kotlin dans plus de 20 stations de tri pour la numérisation et le suivi des colis en temps réel, entraînant une amélioration de 98 % de la visibilité du flux de travail et du débit de livraison.",
    "Conception et mise en œuvre d’un système d’identification basé sur Azure Function pour le suivi des employés permanents et temporaires.",
    "Rédaction de plus de 100 tests unitaires et d'intégration avec JUnit 5 et Mockito, assurant une couverture de code supérieure à 90 % et réduisant les bogues en production."
  ],
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
