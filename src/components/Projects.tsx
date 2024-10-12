import { Project, PROJECTS_ENGLISH } from "../data/projects.ts"
import styles from '../styles/projects.module.css';


function Projects() {
    return (
        <section className={styles.projectsGrid} id="projects">
        <h2>Projects</h2>
        <ul className={styles.projects}>
            {PROJECTS_ENGLISH.map((project: Project, index: number) => {
                return (
                    <li key={index} className={styles.projectCard}>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <p>{project.technologies}</p>
                        <a href={project.link}>Github link</a>
                    </li>
                )
            })}
        </ul>
            {/* {PROJECTS_ENGLISH.map((project: Project, index: number) => {
                return (
                    <div key={index} className={styles.projectCard}>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <p>{project.technologies}</p>
                        <a href={project.link}>{project.link}</a>
                    </div>
                )
            })} */}
        </section>
    )
} export default Projects;