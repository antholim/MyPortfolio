export interface Tool {
    name: string;
    icon: string;
}

export const LANGUAGES: Tool[] = [
    { name: "Python", icon: "python" },
    { name: "Java", icon: "java" },
    { name: "C", icon: "c" },
    { name: "Javascript", icon: "javascript" },
    { name: "Typescript", icon: "typescript" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
  ];
  
  // Frameworks & Libraries
  export const FRAMEWORKS: Tool[] = [
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
  ];
  
  // Databases
  export const DATABASES: Tool[] = [
    { name: "MongoDB", icon: "mongodb" },
  ];

  // Version Control & CI/CD Tools
  export const VERSION_CONTROL: Tool[] = [
    { name: "Git", icon: "git" },
    { name: "Github", icon: "github" },
    { name: "Docker", icon: "docker" },
  ];
  
  // Testing Tools
  export const TESTING_TOOLS: Tool[] = [
    { name: "Jest", icon: "jest" },
    { name: "Playwright", icon: "playwright" },
    { name: "Puppeteer", icon: "puppeteer" },
  ];