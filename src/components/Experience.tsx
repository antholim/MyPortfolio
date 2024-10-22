import styles from "../styles/experience.module.css";
import { LanguageProps } from "../types/props.ts";
import { experiences, Language } from "../data/experience.tsx";

function Experience({ language }: LanguageProps): JSX.Element {
  let experience = "Experience";
  let Language: Language = "English";
  if (language === "English") {
    experience = "Experience";
    Language = "English";
  } else if (language === "French") {
    experience = "Expérience";
    Language = "French";
  } else if (language === "Spanish") {
    experience = "Experiencia";
    Language = "Spanish";
  }
  return (
    <section className={styles.experienceBox} id="experience">
      <h2>{experience}</h2>
      {experiences.map((ex, index) => {
        return (
          <div key={index} className={styles.content}>
            <h3>{ex[Language].title}</h3>
            <h4>{ex[Language].company}</h4>
            <h4>{ex[Language].date}</h4>
            <ul>
              {ex[Language].bulletPoints.map((point, index) => {
                return <li key={index}>{point}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
export default Experience;
