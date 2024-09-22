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
                        {language.icon}
                        <h2 className={styles.skillTitle}>{language.name}</h2>
                    </div>
                )
            })}
            <h2>Frameworks</h2>
            {FRAMEWORKS.map((framework : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        {framework.icon}
                        <h2 className={styles.skillTitle}>{framework.name}</h2>
                    </div>
                )
            })}
            <h2>Databases</h2>
            {DATABASES.map((database : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        {database.icon}
                        <h2 className={styles.skillTitle}>{database.name}</h2>
                    </div>
                )
            })}
            <h2>Version Control</h2>
            {DEVOPS_TOOLS.map((devops : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        {devops.icon}
                        <h2 className={styles.skillTitle}>{devops.name}</h2>
                    </div>
                )
            })}
            <h2>Testing Tools</h2>
            {TESTING_TOOLS.map((testing : Tool) => {
                return (
                    <div className={styles.skillCard}>
                        {testing.icon}
                        <h2 className={styles.skillTitle}>{testing.name}</h2>
                    </div>
                )
            })}
        </section>
    )
} export default Skills;