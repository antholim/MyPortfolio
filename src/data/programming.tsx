import { ReactNode } from "react";

export interface Tool {
  name: string;
  icon?: ReactNode;
}

export const LANGUAGES: Tool[] = [
  { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
  { name: "Kotlin", icon: <i className="devicon-kotlin-plain colored"></i> },
  { name: "C#", icon: <i className="devicon-csharp-plain colored"></i> },
  { name: "TypeScript", icon: <i className="devicon-typescript-plain colored"></i> },
  { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
  { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
  { name: "HTML", icon: <i className="devicon-html5-plain colored"></i> },
  { name: "CSS", icon: <i className="devicon-css3-plain colored"></i> },
];

export const AI_LLM: Tool[] = [
  { name: "Generative AI" },
  { name: "Large Language Models" },
  { name: "Retrieval-Augmented Generation" },
  { name: "Prompt Engineering" },
  { name: "Apache Beam" },
  { name: "TensorFlow", icon: <i className="devicon-tensorflow-original colored"></i> },
];

export const FRAMEWORKS: Tool[] = [
  { name: "React", icon: <i className="devicon-react-plain colored"></i> },
  { name: "React Native", icon: <i className="devicon-react-plain colored"></i> },
  { name: "Spring Boot", icon: <i className="devicon-spring-plain colored"></i> },
  { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
  { name: "Express", icon: <i className="devicon-express-original colored"></i> },
  { name: "Android", icon: <i className="devicon-android-plain colored"></i> },
];

export const DATA_INFRA: Tool[] = [
  { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
  { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
  { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
  { name: "CosmosDB", icon: <i className="devicon-azure-plain colored"></i> },
  { name: "Azure", icon: <i className="devicon-azure-plain colored"></i> },
  { name: "Docker", icon: <i className="devicon-docker-plain colored"></i> },
  { name: "Terraform", icon: <i className="devicon-terraform-plain colored"></i> },
  { name: "Pulsar", icon: <i className="devicon-apache-plain colored"></i> },
  { name: "REST APIs" },
];

export const TOOLS: Tool[] = [
  { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
  { name: "GitHub", icon: <i className="devicon-github-original colored"></i> },
  { name: "GitLab", icon: <i className="devicon-gitlab-plain colored"></i> },
  { name: "Claude Code" },
  { name: "Codex" },
  { name: "Jira", icon: <i className="devicon-jira-plain colored"></i> },
  { name: "Confluence", icon: <i className="devicon-confluence-plain colored"></i> },
  { name: "Linux", icon: <i className="devicon-linux-plain colored"></i> },
];

export const PRACTICES: Record<"english" | "french" | "spanish", Tool[]> = {
  english: [
    { name: "Agile" },
    { name: "Scrum" },
    { name: "CI/CD" },
    { name: "SDLC" },
    { name: "Unit Testing" },
    { name: "Integration Testing" },
    { name: "End-to-End Testing" },
    { name: "Test Automation" },
    { name: "Playwright", icon: <i className="devicon-playwright-plain colored"></i> },
    { name: "Jest", icon: <i className="devicon-jest-plain colored"></i> },
  ],
  french: [
    { name: "Agile" },
    { name: "Scrum" },
    { name: "CI/CD" },
    { name: "Cycle de vie logiciel" },
    { name: "Tests unitaires" },
    { name: "Tests d'intégration" },
    { name: "Tests end-to-end" },
    { name: "Automatisation des tests" },
    { name: "Playwright", icon: <i className="devicon-playwright-plain colored"></i> },
    { name: "Jest", icon: <i className="devicon-jest-plain colored"></i> },
  ],
  spanish: [
    { name: "Agile" },
    { name: "Scrum" },
    { name: "CI/CD" },
    { name: "Ciclo de vida del software" },
    { name: "Pruebas unitarias" },
    { name: "Pruebas de integración" },
    { name: "Pruebas end-to-end" },
    { name: "Automatización de pruebas" },
    { name: "Playwright", icon: <i className="devicon-playwright-plain colored"></i> },
    { name: "Jest", icon: <i className="devicon-jest-plain colored"></i> },
  ],
};

export const SPOKEN: Record<"english" | "french" | "spanish", Tool[]> = {
  english: [
    { name: "French" },
    { name: "English" },
    { name: "Spanish" },
    { name: "Chinese (Teochew)" },
  ],
  french: [
    { name: "Français" },
    { name: "Anglais" },
    { name: "Espagnol" },
    { name: "Chinois (Teochew)" },
  ],
  spanish: [
    { name: "Francés" },
    { name: "Inglés" },
    { name: "Español" },
    { name: "Chino (Teochew)" },
  ],
};

export const KEY_WORDS = {
  english: {
    language: "Languages",
    ai: "AI & LLM",
    framework: "Frameworks & Platforms",
    database: "Data & Infra",
    tools: "Tools",
    practices: "Methods & QA",
    spoken: "Spoken",
  },
  french: {
    language: "Langages",
    ai: "IA & LLM",
    framework: "Frameworks & Plateformes",
    database: "Données & Infra",
    tools: "Outils",
    practices: "Méthodes & QA",
    spoken: "Langues parlées",
  },
  spanish: {
    language: "Lenguajes",
    ai: "IA y LLM",
    framework: "Frameworks y Plataformas",
    database: "Datos e Infra",
    tools: "Herramientas",
    practices: "Métodos y QA",
    spoken: "Idiomas",
  },
};
