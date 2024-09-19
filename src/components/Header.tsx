import {useState} from 'react';

enum Languages {
    English = 'English',
    French = 'French',
    Spanish = 'Spanish',
  }
function Header() {
    const [language, setLanguage] = useState<Languages | "">(Languages.English);
    const handleSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value as Languages);
      };
    function handleDownload() {
      const pdfUrl = "/Lim_Anthony_40281180_CV.pdf"; // Make sure the path is correct
      // Create an invisible anchor element and trigger the download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'Lim_Anthony_40281180_CV.pdf.pdf'); // Set the name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    return (
      <header>
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
        {language && <>{language}</>}
      </header>
    );
  } export default Header;