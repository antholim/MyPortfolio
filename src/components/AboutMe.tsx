import styles from "../styles/AboutMe.module.css";
import { LanguageProps } from "../types/props";
import { ABOUT } from "../data/aboutme";
import { openResume } from "../data/resume";

type Lang = "English" | "French" | "Spanish";

function AboutMe({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const c = ABOUT[lang];

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.avatar} style={{ "--i": 0 } as React.CSSProperties}>
          <img src="/SemiProPic.PNG" alt="Anthony Lim" loading="eager" />
        </div>

        <span className={styles.badge} style={{ "--i": 1 } as React.CSSProperties}>
          <span className={styles.badgeDot} aria-hidden="true" />
          {c.nowLabel} · {c.now}
        </span>

        <h1 className={styles.title} style={{ "--i": 2 } as React.CSSProperties}>
          Anthony Lim
        </h1>

        <p className={styles.tagline} style={{ "--i": 3 } as React.CSSProperties}>
          {c.tagline}
        </p>

        <p className={styles.description} style={{ "--i": 4 } as React.CSSProperties}>
          {c.description}
        </p>

        <div className={styles.ctas} style={{ "--i": 5 } as React.CSSProperties}>
          <a className={styles.ctaPrimary} href={`mailto:${c.ctaPrimary}`}>
            {c.ctaContact}
          </a>
          <button type="button" className={styles.ctaSecondary} onClick={() => openResume(language)}>
            {c.ctaResume}
            <span aria-hidden="true">↓</span>
          </button>
        </div>

        <div className={styles.social} style={{ "--i": 6 } as React.CSSProperties}>
          <a href="https://github.com/antholim" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className={styles.socialDot} aria-hidden="true" />
          <a
            href="https://www.linkedin.com/in/antho-lim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className={styles.socialDot} aria-hidden="true" />
          <a href={`mailto:${c.ctaPrimary}`}>{c.ctaPrimary}</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
