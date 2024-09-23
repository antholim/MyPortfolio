import { useState } from 'react';
import styles from "../styles/header.module.css";

enum Languages {
  English = 'English',
  French = 'French',
  Spanish = 'Spanish',
}
interface HeaderProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<Languages | string>>;
}
function Header({ language, setLanguage }) {
  const handleSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Languages);
  };
  function handleDownload() {
    const pdfUrl = "/Lim_Anthony_40281180_CV.pdf"; // Make sure the path is correct
    window.open(pdfUrl, '_blank');
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Anthony Lim</div>
      <nav className={styles.navLinks}>
        <a href="#about" className={styles.navItem}>About</a>
        <a href="#projects" className={styles.navItem}>Projects</a>
        <a href="#skills" className={styles.navItem}>Skills</a>
        <a href="#contact" className={styles.navItem}>Contact</a>
        <a className={styles.navItem} onClick={handleDownload}>Download CV</a>
        <select className={styles.language} name="select-language" id="select-language" onChange={handleSelectLanguage}>
          {Object.values(Languages).map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
} export default Header;