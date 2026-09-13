export interface AboutContent {
  index: string;
  label: string;
  role: string;
  tagline: string;
  description: string;
  now: string;
  nowLabel: string;
  portraitCaption: string;
  ctaPrimary: string;
  ctaResume: string;
  ctaContact: string;
}

export const ABOUT: Record<"English" | "French" | "Spanish", AboutContent> = {
  English: {
    index: "00",
    label: "About",
    role: "Software engineer · Concordia Co-op",
    tagline:
      "Building the data pipelines that make large-model inference cheap, and the systems that keep it honest.",
    description:
      "I'm Anthony Lim, a software engineering student at Concordia (Co-op, GPA 3.62), currently a software developer intern at IBM Consulting in Montreal. This past summer I worked on Google Workspace's AI Safety team, where I built an Apache Beam pipeline for bulk Gemini inference and generated synthetic training data to sharpen a prompt-injection detector. Before that, a year at Intelcom (Dragonfly) shipping Kotlin Android apps to 20+ warehouse sorting stations and the C# microservices behind them. I like the problems where the model is only half the work and the pipeline is the other half.",
    now: "IBM Consulting, Montreal",
    nowLabel: "Now",
    portraitCaption: "Anthony Lim, Montreal, QC",
    ctaPrimary: "antho.lim44@gmail.com",
    ctaResume: "Resume",
    ctaContact: "Get in touch",
  },
  French: {
    index: "00",
    label: "À propos",
    role: "Ingénieur logiciel · Concordia Co-op",
    tagline:
      "Bâtir les pipelines de données qui rendent l'inférence des grands modèles abordable, et les systèmes qui la gardent fiable.",
    description:
      "Je suis Anthony Lim, étudiant en génie logiciel à Concordia (Co-op, moyenne 3,62), présentement stagiaire en développement logiciel chez IBM Consulting à Montréal. L'été dernier, j'ai travaillé au sein de l'équipe sécurité IA de Google Workspace, où j'ai bâti un pipeline Apache Beam pour l'inférence Gemini en lot et généré des données synthétiques pour affiner un détecteur d'injection de prompt. Avant cela, un an chez Intelcom (Dragonfly) à livrer des applications Android en Kotlin dans plus de 20 stations de tri et les microservices C# qui les soutiennent. J'aime les problèmes où le modèle n'est que la moitié du travail et le pipeline en est l'autre moitié.",
    now: "IBM Consulting, Montréal",
    nowLabel: "Présentement",
    portraitCaption: "Anthony Lim, Montréal, QC",
    ctaPrimary: "antho.lim44@gmail.com",
    ctaResume: "CV",
    ctaContact: "Me contacter",
  },
  Spanish: {
    index: "00",
    label: "Sobre mí",
    role: "Ingeniero de software · Concordia Co-op",
    tagline:
      "Construyendo los pipelines de datos que abaratan la inferencia de modelos grandes, y los sistemas que la mantienen fiable.",
    description:
      "Soy Anthony Lim, estudiante de ingeniería de software en Concordia (Co-op, GPA 3.62), actualmente pasante de desarrollo de software en IBM Consulting en Montreal. El verano pasado trabajé en el equipo de Seguridad de IA de Google Workspace, donde construí un pipeline de Apache Beam para inferencia masiva con Gemini y generé datos sintéticos para afinar un detector de inyección de prompts. Antes de eso, un año en Intelcom (Dragonfly) desarrollando aplicaciones Android en Kotlin para más de 20 estaciones de clasificación y los microservicios en C# detrás de ellas.",
    now: "IBM Consulting, Montreal",
    nowLabel: "Ahora",
    portraitCaption: "Anthony Lim, Montreal, QC",
    ctaPrimary: "antho.lim44@gmail.com",
    ctaResume: "CV",
    ctaContact: "Contáctame",
  },
};
