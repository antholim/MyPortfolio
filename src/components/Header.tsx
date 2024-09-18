import {useState} from 'react';
function Header() {
    const [language, setLanguage] = useState("");
    const languages = ['English', 'French', 'Spanish'];
    const handleSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
      };
    return (
      <header>
        <span>Anthony Lim</span>
        <button>About</button>
        <button>Projects</button>
        <button>Experience</button>
        <button>Contact</button>
        <button>Download CV</button>
        <select name="select-language" id="select-language" onChange={handleSelectLanguage}>
            {languages.map((language, index) => (
                <option key={index} value={language}>
                {language}
                </option>
            ))}
        </select>
        {language && <>{language}</>}
      </header>
    );
  } export default Header;