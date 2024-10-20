import { ReactNode } from "react";
import {
  FaGit,
  FaGithub,
  FaGitlab,
  FaDocker,
  FaJava,
  FaNode,
} from "react-icons/fa";
import { SiJest, SiPlaywright, SiPuppeteer } from "react-icons/si"; // Example icons from react-icons
import {
  SiPython,
  SiC,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export interface Tool {
  name: string;
  icon: ReactNode;
}

export const LANGUAGES: Tool[] = [
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
];

// Frameworks & Libraries
export const FRAMEWORKS: Tool[] = [
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Express", icon: <SiExpress /> },
];

// Databases
export const DATABASES: Tool[] = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
];

// Version Control & CI/CD Tools
export const DEVOPS_TOOLS: Tool[] = [
  { name: "Git", icon: <FaGit /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Gitlab", icon: <FaGitlab /> },
  { name: "Docker", icon: <FaDocker /> },
];

// Testing Tools
export const TESTING_TOOLS: Tool[] = [
  { name: "Jest", icon: <SiJest /> },
  { name: "Playwright", icon: <SiPlaywright /> },
  { name: "Puppeteer", icon: <SiPuppeteer /> },
];
