export interface AboutContent {
  eyebrow: string;
  role: string;
  tagline: string;
  description: string;
  ctaPrimary: string;
  ctaResume: string;
  ctaContact: string;
}

export const ABOUT: Record<"English" | "French" | "Spanish", AboutContent> = {
  English: {
    eyebrow: "00 / about",
    role: "Software engineer · Concordia Co-op",
    tagline:
      "Building reliable systems from Android floor-scanners shipping packages to AI tooling that wins hackathons.",
    description:
      "Hi I'm Anthony Lim, a Software Engineering student at Concordia (Co-op, GPA 3.64). I'm joining Google as a Software Developer Intern in Summer 2026 after a year at Intelcom — Dragonfly building Kotlin Android apps and C# microservices that move real packages through real warehouses. I care about systems that hold up in production and code that's worth coming back to.",
    ctaPrimary: "antho.lim44@gmail.com",
    ctaResume: "Resume",
    ctaContact: "Get in touch",
  },
  French: {
    eyebrow: "00 / à propos",
    role: "Ingénieur logiciel · Concordia Co-op",
    tagline:
      "Bâtir des systèmes fiables — des scanners Android en entrepôt aux outils IA primés en hackathon.",
    description:
      "Bonjour — je suis Anthony Lim, étudiant en génie logiciel à Concordia (Co-op, GPA 3,64). Je rejoindrai Google comme stagiaire en développement logiciel à l'été 2026 après une année chez Intelcom — Dragonfly à développer des applications Android en Kotlin et des microservices C# qui déplacent de vrais colis dans de vrais entrepôts. Je m'intéresse aux systèmes qui tiennent en production et au code qu'on relit avec plaisir.",
    ctaPrimary: "antho.lim44@gmail.com",
    ctaResume: "CV",
    ctaContact: "Me contacter",
  },
  Spanish: {
    eyebrow: "00 / sobre mí",
    role: "Ingeniero de software · Concordia Co-op",
    tagline:
      "Construyendo sistemas confiables — desde escáneres Android en almacenes hasta herramientas de IA premiadas.",
    description:
      "Hola — soy Anthony Lim, estudiante de ingeniería de software en Concordia (Co-op, GPA 3.64). Me incorporaré a Google como pasante de desarrollo de software en el verano de 2026 tras un año en Intelcom — Dragonfly desarrollando aplicaciones Android en Kotlin y microservicios C# que mueven paquetes reales en almacenes reales.",
    ctaPrimary: "antho.lim44@gmail.com",
    ctaResume: "CV",
    ctaContact: "Contáctame",
  },
};
