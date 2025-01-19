import { ReactNode } from "react";

export interface Tool {
  name: string;
  icon: ReactNode;
}

export const LANGUAGES: Tool[] = [
  { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
  { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
  { name: "C", icon: <i className="devicon-c-plain colored"></i> },
  { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
  { name: "TypeScript", icon: <i className="devicon-typescript-plain colored"></i>  },
  { name: "HTML", icon: <i className="devicon-html5-plain colored"></i> },
  { name: "CSS", icon: <i className="devicon-css3-plain colored"></i> },
  // { name: "Go", icon: <i className="devicon-go-plain colored"></i> },
];

// Frameworks & Libraries
export const FRAMEWORKS: Tool[] = [
  { name: "React", icon: <i className="devicon-react-plain colored"></i> },
  { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
  { name: "Express", icon: <i className="devicon-express-original colored"></i>  },
  {name : "Spring", icon: <i className="devicon-spring-plain colored"></i>},
];

// Databases
export const DATABASES: Tool[] = [
  { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i>},
  { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
];

// Version Control & CI/CD Tools
export const DEVOPS_TOOLS: Tool[] = [
  { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
  { name: "Github", icon: <i className="devicon-github-plain colored"></i> },
  { name: "Gitlab", icon: <i className="devicon-gitlab-plain colored"></i> },
  { name: "Docker", icon: <i className="devicon-docker-plain colored"></i> },
];

// Testing Tools
export const TESTING_TOOLS: Tool[] = [
  { name: "Jest", icon: <i className="devicon-jest-plain colored"></i> },
  { name: "Playwright", icon: <i className="devicon-playwright-plain colored"></i> },
  { name: "Puppeteer", icon: <i className="devicon-puppeteer-plain colored"></i> },
];

export const KEY_WORDS = {
  english: {
    language: "Languages",
    framework: "Frameworks & Libraries",
    database: "Databases",
    versionControl: "Version Control",
    testing: "Testing Tools",
  },
  french: {
    language: "Langues",
    framework: "Framework et librairies",
    database: "Bases de données",
    versionControl: "Gestion de version",
    testing: "Outils de test",
  },
  spanish: {
    language: "Lenguajes",
    framework: "Marcos y bibliotecas",
    database: "Bases de datos",
    versionControl: "Control de versiones",
    testing: "Herramientas de Testing",
  },
};
