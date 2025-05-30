import { Certification, CERTIFICATIONS } from "../data/certification.tsx";
import styles from "../styles/Certification.module.css";
import { LanguageProps } from "../types/props.ts";

function Certifications({ language }: LanguageProps): JSX.Element {
  let certification: string = "Certifications";
  if (language === "English") {
    certification = "Certifications";
  } else if (language === "French") {
    certification = "Certifications";
  } else if (language === "Spanish") {
    certification = "Certificacións";
  }
  return (
    <section className={styles.certificationsGrid} id="certifications">
      <h2>{certification}</h2>
      <ul className={styles.certifications}>
        {CERTIFICATIONS.map((certification: Certification, index: number) => {
          return (
            <li key={index} className={styles.certificationsCard}>
              <h2 className={styles.certificationsTitle}>
                {certification.title}
              </h2>
              <p className={styles.certificationsDescription}>
                {language === "English"
                  ? certification.description
                  : language === "French"
                    ? certification.description_fr
                    : certification.description_es}
              </p>
              <div style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                <a href={certification.link}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="25" viewBox="0 0 512 193"><path fill="#a435f0" d="M79.539 45.923L39.764 22.962L0 45.923V22.962L39.77 0l39.775 22.962v22.961z"/><path d="M0 65.205h20.833v50.616c0 13.078 9.766 19.452 18.937 19.452c9.25 0 18.942-6.544 18.942-19.627v-50.44h20.833v51.821c0 12.047-3.788 21.343-11.362 27.717c-7.58 6.37-17.046 9.471-28.589 9.471c-11.532 0-21.003-3.096-28.402-9.47C3.787 138.374 0 129.424 0 117.541zm259.654 62.907c-6.306 5.616-13.49 8.367-21.682 8.367c-14.945 0-24.966-8.514-26.098-21.7h67.311s.453-4.256.453-8.253c0-12.398-3.963-22.73-12.058-31.165c-7.914-8.435-18.24-12.568-30.814-12.568c-13.253 0-24.105 4.133-32.716 12.568c-8.435 8.435-12.737 19.452-12.737 33.231v.68c0 13.603 4.302 24.45 12.737 32.545c8.436 8.09 19.628 12.223 33.231 12.223c15.818 0 28.402-6.239 37.845-16.995zm-39.594-42.25c4.642-3.617 10.332-5.508 16.7-5.508c6.024 0 11.017 1.891 15.325 5.684c4.11 3.453 6.33 7.694 6.522 12.568h-46.2c.667-5.039 3.215-9.284 7.659-12.738zm249.306 79.874c-8.452 19.955-17.295 26.743-30.853 26.743h-9.398v-18.467h7.597c4.665 0 9.002-1.755 13.134-11.288l4.133-9.545l-35.643-87.974h21.179l25.31 63.36l26.002-63.36H512l-42.628 100.53zM160.646 31.98v41.083c-6.827-6.114-17.447-9.754-27.717-9.754c-12.228 0-22.554 4.302-30.989 13.077c-8.265 8.61-12.398 19.282-12.398 32.195c0 12.919 4.133 23.59 12.398 32.37c8.435 8.61 18.767 12.919 30.99 12.919c14.096 0 23.006-5.542 27.716-9.884v7.988h20.664V31.985h-20.664zm-6.199 95.549c-4.993 4.993-11.361 7.58-18.766 7.58s-13.428-2.587-18.422-7.58c-4.812-4.993-7.229-11.362-7.229-18.937c0-7.58 2.412-13.949 7.23-18.942c4.993-4.993 11.016-7.575 18.42-7.575c7.406 0 13.774 2.582 18.767 7.575c5.163 4.993 7.756 11.362 7.756 18.942c0 7.575-2.593 13.944-7.756 18.937m231.768-64.045c-15.693 0-23.85 6.51-29.438 12.783c-2.236-4.263-8.531-12.783-23.24-12.783c-12.431 0-19.756 6.284-23.414 10.756v-9.024h-20.482v86.769h20.482v-49.931c0-11.708 7.235-20.143 16.87-20.143c9.823 0 15.5 7.405 15.5 19.282v50.786h20.489v-49.931c0-11.877 7.053-20.142 17.21-20.142c9.816 0 15.494 7.404 15.494 19.276v50.792h20.663V98.26c0-22.622-12.16-34.771-30.134-34.771z"/></svg>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Certifications;
