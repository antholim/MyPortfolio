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
      <span>Anthony Lim</span>
      <div className={styles.logo}>MyPortfolio</div>
      <nav className={styles.navLinks}>
        <a href="#projects" className={styles.navItem}>Projects</a>
        <a href="#about" className={styles.navItem}>About</a>
        <a href="#skills" className={styles.navItem}>Skills</a>
        <a href="#contact" className={styles.navItem}>Contact</a>
      </nav>
      <button onClick={handleDownload}>Download CV</button>
      <select name="select-language" id="select-language" onChange={handleSelectLanguage}>
        {Object.values(Languages).map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </header>
  );
} export default Header;