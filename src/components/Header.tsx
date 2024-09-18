import {useState} from 'react';
function Header() {
    const [language, setLanguage] = useState(0);
    const languages = ['English', 'French', 'Spanish'];
    return (
      <header>
        <span>Anthony Lim</span>
        <button>About</button>
        <button>Projects</button>
        <button>Experience</button>
        <button>Contact</button>
        <button>Download CV</button>
        <select name="select-language" id="select-language">
            {languages.map((language, index) => (
                <option key={index} value={index}>
                {language}
                </option>
            ))}
        </select>
      </header>
    );
  } export default Header;