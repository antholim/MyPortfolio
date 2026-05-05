import styles from "../styles/experience.module.css";
import { LanguageProps } from "../types/props";
import { experiences, Language } from "../data/experience";

const HEADINGS: Record<Language, { eyebrow: string; heading: string }> = {
  English: { eyebrow: "01 / experience", heading: "Experience" },
  French:  { eyebrow: "01 / expérience", heading: "Expérience" },
  Spanish: { eyebrow: "01 / experiencia", heading: "Experiencia" },
};

function Experience({ language }: LanguageProps): JSX.Element {
  const lang: Language =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const { eyebrow, heading } = HEADINGS[lang];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      <div className={styles.timeline}>
        {experiences.map((ex, i) => {
          const entry = ex[lang];
          return (
            <article key={i} className={styles.item}>
              <div className={styles.body}>
                <p className={styles.company}>{entry.company}</p>
                <h3 className={styles.title}>{entry.title}</h3>
                {entry.stack && entry.stack.length > 0 && (
                  <div className={styles.stack}>
                    {entry.stack.map((t) => (
                      <span key={t} className={styles.chip}>{t}</span>
                    ))}
                  </div>
                )}
                {entry.bulletPoints && entry.bulletPoints.length > 0 && (
                  <ul className={styles.bullets}>
                    {entry.bulletPoints.map((pt, j) => (
                      <li key={j} className={styles.bullet}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.meta}>
                <span className={styles.date}>{entry.date}</span>
                {entry.location && (
                  <span className={styles.location}>{entry.location}</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
