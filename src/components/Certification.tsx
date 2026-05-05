import { Certification, CERTIFICATIONS } from "../data/certification";
import styles from "../styles/Certification.module.css";
import { LanguageProps } from "../types/props";

type Lang = "English" | "French" | "Spanish";

const HEADINGS: Record<Lang, { eyebrow: string; heading: string }> = {
  English: { eyebrow: "05 / certifications", heading: "Certifications" },
  French:  { eyebrow: "05 / certifications", heading: "Certifications" },
  Spanish: { eyebrow: "05 / certificaciones", heading: "Certificaciones" },
};

const STATUS: Record<Lang, { done: string; progress: string }> = {
  English: { done: "Completed",   progress: "In progress" },
  French:  { done: "Terminé",     progress: "En cours"    },
  Spanish: { done: "Completado",  progress: "En progreso" },
};

function Certifications({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const { eyebrow, heading } = HEADINGS[lang];
  const status = STATUS[lang];

  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      <ul className={styles.list}>
        {CERTIFICATIONS.map((cert: Certification, i) => {
          const desc =
            lang === "French" && cert.description_fr
              ? cert.description_fr
              : lang === "Spanish" && cert.description_es
              ? cert.description_es
              : cert.description;
          return (
            <li key={i}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
              >
                <div className={styles.body}>
                  <span className={styles.title}>{cert.title}</span>
                  <span className={styles.description}>{desc}</span>
                </div>
                <div className={styles.right}>
                  <span
                    className={`${styles.pill} ${cert.completed ? styles.pillDone : styles.pillProgress}`}
                  >
                    {cert.completed ? status.done : status.progress}
                  </span>
                  {cert.issuer && (
                    <span className={styles.issuer}>{cert.issuer} · {cert.year}</span>
                  )}
                  <span className={styles.arrow}>↗</span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Certifications;
