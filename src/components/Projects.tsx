import { Project, PROJECTS_ENGLISH } from "../data/projects.ts"
import styles from '../styles/projects.module.css';


function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <section className={styles.projectsGrid}>
                {PROJECTS_ENGLISH.map((project: Project, index: number) => {
                    return (
                        <div key={index} className={styles.projectCard}>
                            <h2 className={styles.projectTitle}>{project.title}</h2>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <p>{project.technologies}</p>
                            <a href={project.link}>{project.link}</a>
                        </div>
                    )
                })}
            </section>
        </section>
    )
} export default Projects;