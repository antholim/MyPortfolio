import { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Projects from "./components/Projects.tsx";
import ContactMe from "./components/ContactMe.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Certifications from "./components/Certification.tsx";

enum Languages {
  English = "English",
  French = "French",
  Spanish = "Spanish",
}

function App() {
  const [language, setLanguage] = useState<Languages | "">(Languages.English);
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <AboutMe language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Certifications language={language} />
      <ContactMe language={language} />
    </>
  );
}

export default App;
