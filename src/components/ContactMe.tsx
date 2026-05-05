import styles from "../styles/contactme.module.css";
import { LanguageProps } from "../types/props";

type Lang = "English" | "French" | "Spanish";

const CONTENT: Record<Lang, {
  eyebrow: string;
  heading: string;
  rights: string;
}> = {
  English: {
    eyebrow: "06 / contact",
    heading: "Let's work\ntogether.",
    rights: "© 2026 Anthony Lim. All rights reserved.",
  },
  French: {
    eyebrow: "06 / contact",
    heading: "Travaillons\nensemble.",
    rights: "© 2026 Anthony Lim. Tous droits réservés.",
  },
  Spanish: {
    eyebrow: "06 / contacto",
    heading: "Trabajemos\njuntos.",
    rights: "© 2026 Anthony Lim. Todos los derechos reservados.",
  },
};

function ContactMe({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const c = CONTENT[lang];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>{c.eyebrow}</span>
          <h2 className={styles.heading}>
            {c.heading.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h2>
          <div className={styles.links}>
            <a href="mailto:antho.lim44@gmail.com" className={styles.link}>
              <span className={styles.linkLabel}>Email</span>
              antho.lim44@gmail.com ↗
            </a>
            <a
              href="https://www.linkedin.com/in/antho-lim/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkLabel}>LinkedIn</span>
              linkedin.com/in/antho-lim ↗
            </a>
            <a
              href="https://github.com/antholim"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkLabel}>GitHub</span>
              github.com/antholim ↗
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <a
            href="mailto:antho.lim44@gmail.com"
            className={styles.bigArrow}
            aria-label="Send email"
          >
            ↗
          </a>
          <p className={styles.footer}>{c.rights}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
