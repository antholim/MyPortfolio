import { Certification, CERTIFICATIONS } from "../data/certification";
import styles from "../styles/Certification.module.css";
import section from "../styles/section.module.css";
import SectionHeader from "./SectionHeader";
import { LanguageProps } from "../types/props";

type Lang = "English" | "French" | "Spanish";

const HEADINGS: Record<Lang, { label: string; heading: string; subtitle: string }> = {
  English: {
    label: "Certifications",
    heading: "Always learning",
    subtitle: "Courses taken outside the degree to fill in the gaps.",
  },
  French: {
    label: "Certifications",
    heading: "Toujours en apprentissage",
    subtitle: "Cours suivis en dehors du programme pour combler les lacunes.",
  },
  Spanish: {
    label: "Certificaciones",
    heading: "Siempre aprendiendo",
    subtitle: "Cursos tomados fuera de la carrera para cubrir vacíos.",
  },
};

const STATUS: Record<Lang, { done: string; progress: string }> = {
  English: { done: "Completed", progress: "In progress" },
  French: { done: "Terminé", progress: "En cours" },
  Spanish: { done: "Completado", progress: "En progreso" },
};

function Certifications({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const { label, heading, subtitle } = HEADINGS[lang];
  const status = STATUS[lang];

  return (
    <section id="certifications" className={`${section.band} ${section.bandAlt}`}>
      <div className={section.inner}>
        <SectionHeader label={label} heading={heading} subtitle={subtitle} />

        <ul className={styles.grid}>
          {CERTIFICATIONS.map((cert: Certification, i) => {
            const desc =
              lang === "French" && cert.description_fr
                ? cert.description_fr
                : lang === "Spanish" && cert.description_es
                  ? cert.description_es
                  : cert.description;

            return (
              <li key={cert.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.top}>
                    <span
                      className={`${styles.status} ${
                        cert.completed ? styles.statusDone : styles.statusProgress
                      }`}
                    >
                      {cert.completed ? status.done : status.progress}
                    </span>
                    <span className={styles.arrow} aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <h3 className={styles.title}>{cert.title}</h3>
                  <p className={styles.description}>{desc}</p>

                  {cert.issuer && (
                    <span className={styles.issuer}>
                      {cert.issuer}
                      {cert.year && ` · ${cert.year}`}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
