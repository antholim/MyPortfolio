import styles from "../styles/experience.module.css";
import section from "../styles/section.module.css";
import SectionHeader from "./SectionHeader";
import CompanyLogo from "./CompanyLogo";
import { LanguageProps } from "../types/props";
import { experiences, Language, CURRENT_LABEL } from "../data/experience";

const HEADINGS: Record<Language, { label: string; heading: string; subtitle: string }> = {
  English: {
    label: "Experience",
    heading: "Where I've built things",
    subtitle: "Four internships and a teaching role, shipping systems that run in production.",
  },
  French: {
    label: "Expérience",
    heading: "Où j'ai bâti des choses",
    subtitle:
      "Quatre stages et un rôle d'enseignement, à livrer des systèmes qui tournent en production.",
  },
  Spanish: {
    label: "Experiencia",
    heading: "Dónde he construido",
    subtitle: "Cuatro pasantías y un rol docente, entregando sistemas que corren en producción.",
  },
};

function Experience({ language }: LanguageProps): JSX.Element {
  const lang: Language =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const { label, heading, subtitle } = HEADINGS[lang];

  return (
    <section id="experience" className={`${section.band} ${section.bandAlt}`}>
      <div className={section.inner}>
        <SectionHeader label={label} heading={heading} subtitle={subtitle} />

        <div className={styles.list}>
          {experiences.map((ex, i) => {
            const entry = ex[lang];
            return (
              <article
                key={`${entry.company}-${i}`}
                className={styles.card}
                data-reveal
                style={{ "--i": Math.min(i, 3) } as React.CSSProperties}
              >
                <div className={styles.top}>
                  <div className={styles.identity}>
                    <CompanyLogo src={entry.logo} company={entry.company} />
                    <div className={styles.identityText}>
                      <h3 className={styles.company}>{entry.company}</h3>
                      <p className={styles.role}>{entry.title}</p>
                      {entry.team && <p className={styles.team}>{entry.team}</p>}
                    </div>
                  </div>

                  <div className={styles.meta}>
                    {entry.current && (
                      <span className={styles.current}>
                        <span className={styles.currentDot} aria-hidden="true" />
                        {CURRENT_LABEL[lang]}
                      </span>
                    )}
                    <span className={styles.date}>{entry.date}</span>
                    {entry.location && <span className={styles.location}>{entry.location}</span>}
                  </div>
                </div>

                {entry.bulletPoints && entry.bulletPoints.length > 0 && (
                  <ul className={styles.bullets}>
                    {entry.bulletPoints.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                )}

                {entry.stack && entry.stack.length > 0 && (
                  <div className={styles.stack}>
                    {entry.stack.map((t) => (
                      <span key={t} className={styles.chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
