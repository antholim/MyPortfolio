import { useState } from 'react';
import styles from "../styles/Header.module.css";

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
      <button>About</button>
      <button>Projects</button>
      <button>Experience</button>
      <button>Contact</button>
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