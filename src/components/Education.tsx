import styles from "../styles/Education.module.css";
import section from "../styles/section.module.css";
import SectionHeader from "./SectionHeader";
import { LanguageProps } from "../types/props";
import { EDUCATION } from "../data/education";

type Lang = "English" | "French" | "Spanish";

const HEADINGS: Record<Lang, { label: string; heading: string; subtitle: string }> = {
  English: {
    label: "Education",
    heading: "Academics",
    subtitle: "Software engineering at Concordia, on the co-op track.",
  },
  French: {
    label: "Formation",
    heading: "Parcours académique",
    subtitle: "Génie logiciel à Concordia, en régime coopératif.",
  },
  Spanish: {
    label: "Educación",
    heading: "Formación académica",
    subtitle: "Ingeniería de software en Concordia, en modalidad co-op.",
  },
};

function Education({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const { entries, coursesLabel } = EDUCATION[lang];
  const { label, heading, subtitle } = HEADINGS[lang];

  return (
    <section id="education" className={section.band}>
      <div className={section.inner}>
        <SectionHeader label={label} heading={heading} subtitle={subtitle} />

        <div className={styles.list}>
          {entries.map((entry, i) => (
            <article
              key={entry.school}
              className={styles.card}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className={styles.top}>
                <div className={styles.identity}>
                  <h3 className={styles.school}>{entry.school}</h3>
                  <p className={styles.degree}>{entry.degree}</p>
                </div>
                <div className={styles.meta}>
                  {entry.detail && <span className={styles.gpa}>{entry.detail}</span>}
                  <span className={styles.date}>{entry.date}</span>
                  <span className={styles.location}>{entry.location}</span>
                </div>
              </div>

              {entry.courses && entry.courses.length > 0 && (
                <div className={styles.courses}>
                  <span className={styles.coursesLabel}>{coursesLabel}</span>
                  <div className={styles.chips}>
                    {entry.courses.map((course) => (
                      <span key={course} className={styles.chip}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
