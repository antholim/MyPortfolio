import styles from "../styles/Education.module.css";
import { LanguageProps } from "../types/props";
import { EDUCATION } from "../data/education";

type Lang = "English" | "French" | "Spanish";

const EYEBROW: Record<Lang, string> = {
  English: "02 / education",
  French:  "02 / formation",
  Spanish: "02 / educación",
};

function Education({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const { heading, entries, coursesLabel } = EDUCATION[lang];

  return (
    <section id="education" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{EYEBROW[lang]}</span>
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      <div className={styles.entries}>
        {entries.map((entry, i) => (
          <div key={i} className={styles.entry}>
            <div className={styles.body}>
              <h3 className={styles.school}>{entry.school}</h3>
              <p className={styles.degree}>{entry.degree}</p>
              {entry.detail && <p className={styles.detail}>{entry.detail}</p>}
              {entry.courses && entry.courses.length > 0 && (
                <>
                  <p className={styles.coursesLabel}>{coursesLabel}</p>
                  <div className={styles.courses}>
                    {entry.courses.map((c) => (
                      <span key={c} className={styles.course}>{c}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className={styles.meta}>
              <span className={styles.date}>{entry.date}</span>
              <span className={styles.location}>{entry.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
