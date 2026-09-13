import {
  Tool,
  LANGUAGES,
  AI_LLM,
  FRAMEWORKS,
  DATA_INFRA,
  TOOLS,
  PRACTICES,
  SPOKEN,
  KEY_WORDS,
} from "../data/programming";
import styles from "../styles/skills.module.css";
import section from "../styles/section.module.css";
import SectionHeader from "./SectionHeader";
import { LanguageProps } from "../types/props";

type LangKey = "english" | "french" | "spanish";

const HEADINGS: Record<string, { label: string; heading: string; subtitle: string }> = {
  English: {
    label: "Skills",
    heading: "The toolkit",
    subtitle: "What I reach for, roughly in the order I reach for it.",
  },
  French: {
    label: "Compétences",
    heading: "La boîte à outils",
    subtitle: "Ce que j'utilise, à peu près dans l'ordre où je l'utilise.",
  },
  Spanish: {
    label: "Habilidades",
    heading: "Las herramientas",
    subtitle: "Lo que uso, más o menos en el orden en que lo uso.",
  },
};

function Skills({ language }: LanguageProps): JSX.Element {
  const langKey: LangKey =
    language === "French" ? "french" : language === "Spanish" ? "spanish" : "english";
  const kw = KEY_WORDS[langKey];
  const { label, heading, subtitle } = HEADINGS[language] ?? HEADINGS.English;

  const groups: { key: keyof typeof kw; tools: Tool[] }[] = [
    { key: "language", tools: LANGUAGES },
    { key: "ai", tools: AI_LLM },
    { key: "framework", tools: FRAMEWORKS },
    { key: "database", tools: DATA_INFRA },
    { key: "tools", tools: TOOLS },
    { key: "practices", tools: PRACTICES[langKey] },
    { key: "spoken", tools: SPOKEN[langKey] },
  ];

  return (
    <section id="skills" className={section.band}>
      <div className={section.inner}>
        <SectionHeader label={label} heading={heading} subtitle={subtitle} />

        <div className={styles.grid}>
          {groups.map(({ key, tools }, i) => (
            <div
              key={key}
              className={styles.card}
              data-reveal
              style={{ "--i": Math.min(i, 3) } as React.CSSProperties}
            >
              <h3 className={styles.groupName}>{kw[key]}</h3>
              <div className={styles.items}>
                {tools.map((tool) => (
                  <span key={tool.name} className={styles.item}>
                    {tool.icon && <span className={styles.icon}>{tool.icon}</span>}
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
