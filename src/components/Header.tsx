import { useEffect } from "react";
import styles from "../styles/Header.module.css";
import { LanguageProps } from "../types/props";
import {
  navBarLinkEnglish,
  navBarLinkSpanish,
  navBarLinkFrench,
} from "../data/header";

enum Languages {
  English = "English",
  French = "French",
  Spanish = "Spanish",
}
const href: string[] = ["about", "experience", "projects", "skills", "contact", "download"];

function Header({ language, setLanguage }: LanguageProps): JSX.Element {
  const handleSelectLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (setLanguage) {
      setLanguage(event.target.value as Languages);
    }
  };

  function handleDownload() {
    const pdfUrl = "/Lim_Anthony_40281180_CV.pdf"; // Make sure the path is correct
    window.open(pdfUrl, "_blank");
  }

  const navBarLink =
    language === "English"
      ? navBarLinkEnglish
      : language === "French"
        ? navBarLinkFrench
        : navBarLinkSpanish;

  // Scroll effect to hide/show header
  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector(`.${styles.header}`) as HTMLElement; // Type assertion

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide header
        header.style.top = "-100px";
      } else {
        // Scrolling up, show header
        header.style.top = "0";
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Anthony Lim</div>
      <nav className={styles.navLinks}>
        {navBarLink.map((link, index) => (
          href[index] !== "download" ? <a key={index} href={`#${href[index]}`} className={styles.navItem}>
            {link}
          </a> : <a className={styles.navItem} onClick={handleDownload}>
            {navBarLink[5]}
          </a>
        ))}
        <select
          className={styles.language}
          name="select-language"
          id="select-language"
          value={language} // Ensures the selected language is displayed
          onChange={handleSelectLanguage}
        >
          {Object.values(Languages).map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}

export default Header;
