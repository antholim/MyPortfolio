import { Tool, LANGUAGES, FRAMEWORKS, DATABASES, DEVOPS_TOOLS, TESTING_TOOLS } from "../data/programming.tsx"
import { FaJava } from "react-icons/fa";
import styles from "../styles/skills.module.css";


function Skills() {
    return (
        <section className={styles.skillsGrid} id="skills">
            <h2>Languages</h2>
            {LANGUAGES.map((language : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        <span className={styles.skillTitle}>{language.icon} {language.name}</span>
                    </div>
                )
            })}
            <h2>Frameworks / Libraries</h2>
            {FRAMEWORKS.map((framework : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        <span className={styles.skillTitle}>{framework.icon} {framework.name}</span>
                    </div>
                )
            })}
            <h2>Databases</h2>
            {DATABASES.map((database : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        <span className={styles.skillTitle}>{database.icon} {database.name}</span>
                    </div>
                )
            })}
            <h2>Version Control</h2>
            {DEVOPS_TOOLS.map((devops : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        <span className={styles.skillTitle}>{devops.icon} {devops.name}</span>
                    </div>
                )
            })}
            <h2>Testing Tools</h2>
            {TESTING_TOOLS.map((testing : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        <span className={styles.skillTitle}>{testing.icon} {testing.name}</span>
                    </div>
                )
            })}
        </section>
    )
} export default Skills;