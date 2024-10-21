import { useState } from "react";
import styles from "../styles/header.module.css";
import { LanguageProps } from "../types/props.ts";
import {
  navBarLinkEnglish,
  navBarLinkSpanish,
  navBarLinkFrench,
} from "../data/header.tsx";

enum Languages {
  English = "English",
  French = "French",
  Spanish = "Spanish",
}
function Header({ language, setLanguage }: LanguageProps): JSX.Element {
  const handleSelectLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
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
  // let description = DESCRIPTION[0];
  // if (language === "English") {
  //     description = DESCRIPTION[0];
  // } else if (language === "French") {
  //     description = DESCRIPTION[1];
  // } else if (language === "Spanish") {
  //     description = DESCRIPTION[2];
  // }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Anthony Lim</div>
      <nav className={styles.navLinks}>
        <a href="#about" className={styles.navItem}>
          {navBarLink[0]}
        </a>
        <a href="#experience" className={styles.navItem}>
          {navBarLink[1]}
        </a>
        <a href="#projects" className={styles.navItem}>
          {navBarLink[2]}
        </a>
        <a href="#skills" className={styles.navItem}>
          {navBarLink[3]}
        </a>
        <a href="#contact" className={styles.navItem}>
          {navBarLink[4]}
        </a>
        <a className={styles.navItem} onClick={handleDownload}>
          {navBarLink[5]}
        </a>
        <select
          className={styles.language}
          name="select-language"
          id="select-language"
          onChange={handleSelectLanguage}
        >
          {Object.values(Languages).map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
export default Header;
