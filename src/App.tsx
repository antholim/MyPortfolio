import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certification";
import ContactMe from "./components/ContactMe";
import { Languages } from "./data/experience";
import { useReveal } from "./hooks/useReveal";

function App() {
  const [language, setLanguage] = useState<string>(Languages.English);
  useReveal([language]);

  return (
    <div className="shell">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <AboutMe language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Certifications language={language} />
        <ContactMe language={language} />
      </main>
    </div>
  );
}

export default App;
