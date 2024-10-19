import styles from '../styles/experience.module.css';
import { LanguageProps } from "../types/props.ts";


function Experience({ language }: LanguageProps): JSX.Element {
    return (
        <section className={styles.projectsGrid} id="projects">
            <h2>Experience</h2>
        </section>
    )
} export default Experience;