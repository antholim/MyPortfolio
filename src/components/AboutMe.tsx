import styles from "../styles/AboutMe.module.css";
import { LanguageProps } from "../types/props";
import { ABOUT } from "../data/aboutme";

type Lang = "English" | "French" | "Spanish";

function AboutMe({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const c = ABOUT[lang];

  function handleDownload() {
    const pdfUrl =
      language === "French"
        ? "/Lim_Anthony_40281180_CV_Francais.pdf"
        : "/Lim_Anthony_40281180_CV.pdf";
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>{c.eyebrow}</span>
        <h1 className={styles.name}>Anthony<br />Lim</h1>
        <p className={styles.role}>{c.role}</p>
        <p className={styles.tagline}>{c.tagline}</p>
        <p className={styles.description}>{c.description}</p>
        <div className={styles.ctas}>
          <a className={styles.ctaPrimary} href={`mailto:${c.ctaPrimary}`}>
            {c.ctaContact} ↗
          </a>
          <button type="button" className={styles.ctaOutline} onClick={handleDownload}>
            {c.ctaResume} ↓
          </button>
          <a
            className={styles.ctaGhost}
            href="https://github.com/antholim"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className={styles.ctaGhost}
            href="https://www.linkedin.com/in/antho-lim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className={styles.portrait}>
        <div className={styles.imgWrap}>
          <img
            src="/SemiProPic.PNG"
            alt="Anthony Lim"
            className={styles.img}
            loading="eager"
          />
        </div>
        <p className={styles.statusDot}>
          {lang === "English" && "Open to opportunities"}
          {lang === "French" && "Ouvert aux opportunités"}
          {lang === "Spanish" && "Abierto a oportunidades"}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
