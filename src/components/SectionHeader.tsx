import styles from "../styles/section.module.css";

interface Props {
  label: string;
  heading: string;
  subtitle?: string;
}

export default function SectionHeader({ label, heading, subtitle }: Props): JSX.Element {
  return (
    <header className={styles.head} data-reveal>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.heading}>{heading}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
