import styles from "../styles/experience.module.css";
import { LanguageProps } from "../types/props.ts";

function Experience({ language }: LanguageProps): JSX.Element {
  let experience = "Experience";
  if (language === "English") {
    experience = "Experience";
  } else if (language === "French") {
    experience = "Expérience";
  } else if (language === "Spanish") {
    experience = "Experiencia";
  }
  return (
    <section className={styles.projectsGrid} id="projects">
      <h2>{experience}</h2>
    </section>
  );
}
export default Experience;
