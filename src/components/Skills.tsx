import {
  Tool,
  LANGUAGES,
  FRAMEWORKS,
  DATA_INFRA,
  TOOLS,
  KEY_WORDS,
} from "../data/programming";
import styles from "../styles/skills.module.css";
import { LanguageProps } from "../types/props";

type Lang = "english" | "french" | "spanish";

const EYEBROW: Record<string, string> = {
  English: "04 / skills",
  French:  "04 / compétences",
  Spanish: "04 / habilidades",
};

const HEADINGS: Record<string, string> = {
  English: "Skills",
  French:  "Compétences",
  Spanish: "Habilidades",
};

const GROUPS = [
  { key: "language" as const,  tools: LANGUAGES,  index: "01" },
  { key: "framework" as const, tools: FRAMEWORKS, index: "02" },
  { key: "database" as const,  tools: DATA_INFRA, index: "03" },
  { key: "tools" as const,     tools: TOOLS,      index: "04" },
];

function Skills({ language }: LanguageProps): JSX.Element {
  const langKey: Lang =
    language === "French" ? "french" : language === "Spanish" ? "spanish" : "english";
  const kw = KEY_WORDS[langKey];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{EYEBROW[language] ?? EYEBROW.English}</span>
        <h2 className={styles.heading}>{HEADINGS[language] ?? HEADINGS.English}</h2>
      </div>

      <div className={styles.groups}>
        {GROUPS.map(({ key, tools, index }) => (
          <div key={key} className={styles.group}>
            <div className={styles.groupHeader}>
              <span className={styles.groupIndex}>{index}</span>
              <span className={styles.groupName}>{kw[key]}</span>
            </div>
            <div className={styles.chips}>
              {tools.map((tool: Tool) => (
                <span key={tool.name} className={styles.chip}>
                  {tool.icon}
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
