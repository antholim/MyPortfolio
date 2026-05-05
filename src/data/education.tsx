export interface EducationEntry {
  school: string;
  degree: string;
  detail?: string;
  location: string;
  date: string;
  courses?: string[];
}

export const EDUCATION: Record<"English" | "French" | "Spanish", { heading: string; entries: EducationEntry[]; coursesLabel: string }> = {
  English: {
    heading: "Education",
    coursesLabel: "Relevant coursework",
    entries: [
      {
        school: "Concordia University",
        degree: "B.Eng. Software Engineering (Co-op)",
        detail: "GPA 3.64",
        location: "Montreal, QC",
        date: "2023 — 2027",
        courses: [
          "Data Structures & Algorithms",
          "Databases",
          "Web Development",
          "Operating Systems",
          "Discrete Mathematics",
          "Software Architecture and Design",
          "Object-Oriented Programming",
          "Software Testing, Verification and Quality Assurance"
        ],
      },
      {
        school: "Collège Bois-de-Boulogne",
        degree: "DEC, Computer Science & Mathematics",
        location: "Montreal, QC",
        date: "2021 — 2023",
        courses: [
          "Data Structures & Algorithms",
          "Discrete Mathematics",
          "Object-Oriented Programming",
        ],
      },
    ],
  },
  French: {
    heading: "Formation",
    coursesLabel: "Cours pertinents",
    entries: [
      {
        school: "Université Concordia",
        degree: "B.Ing. Génie logiciel (Co-op)",
        detail: "Moyenne 3,64",
        location: "Montréal, QC",
        date: "2023 — 2027",
        courses: [
          "Structures de données & Algorithmes",
          "Bases de données",
          "Développement web",
          "Systèmes d'exploitation",
          "Mathématiques discrètes",
          "Architecture et conception logicielle",
          "Programmation orientée objet",
          "Tests logiciels, vérification et assurance qualité",
        ],
      },
      {
        school: "Collège Bois-de-Boulogne",
        degree: "DEC, Sciences informatiques et mathématiques",
        location: "Montréal, QC",
        date: "2021 — 2023",
        courses: [
          "Structures de données & Algorithmes",
          "Mathématiques discrètes",
          "Programmation orientée objet",
        ],
      },
    ],
  },
  Spanish: {
    heading: "Educación",
    coursesLabel: "Cursos relevantes",
    entries: [
      {
        school: "Universidad Concordia",
        degree: "Ing. en Software (Co-op)",
        detail: "GPA 3,64",
        location: "Montreal, QC",
        date: "2023 — 2027",
        courses: [
          "Estructuras de datos y algoritmos",
          "Bases de datos",
          "Desarrollo web",
          "Sistemas operativos",
          "Matemáticas discretas",
          "Programación orientada a objetos",
        ],
      },
      {
        school: "Collège Bois-de-Boulogne",
        degree: "DEC, Informática y Matemáticas",
        location: "Montreal, QC",
        date: "2021 — 2023",
      },
    ],
  },
};
