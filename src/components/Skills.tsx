import {
  Tool,
  LANGUAGES,
  FRAMEWORKS,
  DATABASES,
  DEVOPS_TOOLS,
  TESTING_TOOLS,
  KEY_WORDS,
} from "../data/programming.tsx";
import styles from "../styles/skills.module.css";
import { LanguageProps } from "../types/props.ts";

function Skills({ language }: LanguageProps): JSX.Element {
  let keyWords = KEY_WORDS.english;
  if (language === "English") {
    keyWords = KEY_WORDS.english;
  } else if (language === "French") {
    keyWords = KEY_WORDS.french;
  } else if (language === "Spanish") {
    keyWords = KEY_WORDS.spanish;
  }
  return (
    <section className={styles.skillsGrid} id="skills">
      <section>
        <h2>{keyWords.language}</h2>
        <ul className={styles.skills}>
          {LANGUAGES.map((language: Tool) => {
            return (
              <li className={styles.skillCard}>
                <span className={styles.skillTitle}>
                  {language.icon} {language.name}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>{keyWords.framework}</h2>
        <ul className={styles.skills}>
          {FRAMEWORKS.map((framework: Tool) => {
            return (
              <li className={styles.skillCard}>
                <span className={styles.skillTitle}>
                  {framework.icon} {framework.name}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      {/* <h2>Frameworks / Libraries</h2>
            {FRAMEWORKS.map((framework: Tool) => {
                return (
                    <div className={styles.skillCard}>
                        <span className={styles.skillTitle}>{framework.icon} {framework.name}</span>
                    </div>
                )
            })} */}
      <section>
        <h2>{keyWords.database}</h2>
        <ul className={styles.skills}>
          {DATABASES.map((database: Tool) => {
            return (
              <li className={styles.skillCard}>
                <span className={styles.skillTitle}>
                  {database.icon} {database.name}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>{keyWords.versionControl}</h2>
        <ul className={styles.skills}>
          {DEVOPS_TOOLS.map((devops: Tool) => {
            return (
              <li className={styles.skillCard}>
                <span className={styles.skillTitle}>
                  {devops.icon} {devops.name}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>{keyWords.testing}</h2>
        <ul className={styles.skills}>
          {TESTING_TOOLS.map((testing: Tool) => {
            return (
              <li className={styles.skillCard}>
                <span className={styles.skillTitle}>
                  {testing.icon} {testing.name}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
export default Skills;
