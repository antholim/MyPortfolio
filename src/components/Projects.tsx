import { Project, PROJECTS } from "../data/projects.tsx";
import styles from "../styles/projects.module.css";
import { LanguageProps } from "../types/props.ts";

function Projects({ language }: LanguageProps): JSX.Element {
  let project: string = "Projects";
  if (language === "English") {
    project = "Projects";
  } else if (language === "French") {
    project = "Projets";
  } else if (language === "Spanish") {
    project = "Proyectos";
  }
  return (
    <section className={styles.projectsGrid} id="projects">
      <h2>{project}</h2>
      <ul className={styles.projects}>
        {PROJECTS.map((project: Project, index: number) => {
          return (
            <li key={index} className={styles.projectCard}>
              <h2 className={styles.projectTitle}>
                <a href={project.link}>{project.title}</a>
              </h2>
              <p className={styles.projectDescription}>
                {language === "English"
                  ? project.description
                  : language === "French"
                    ? project.description_fr
                    : project.description_es}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Projects;
