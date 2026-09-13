import styles from "../styles/contactme.module.css";
import { LanguageProps } from "../types/props";

type Lang = "English" | "French" | "Spanish";

const CONTENT: Record<
  Lang,
  { label: string; heading: string; blurb: string; cta: string; rights: string }
> = {
  English: {
    label: "Contact",
    heading: "Let's build something.",
    blurb: "Open to software engineering roles and internships in Montreal, remote, or elsewhere.",
    cta: "Get in touch",
    rights: "© 2026 Anthony Lim",
  },
  French: {
    label: "Contact",
    heading: "Bâtissons quelque chose.",
    blurb: "Ouvert aux postes et stages en génie logiciel à Montréal, à distance ou ailleurs.",
    cta: "Me contacter",
    rights: "© 2026 Anthony Lim",
  },
  Spanish: {
    label: "Contacto",
    heading: "Construyamos algo.",
    blurb: "Abierto a puestos y pasantías de ingeniería de software en Montreal, remoto o donde sea.",
    cta: "Contáctame",
    rights: "© 2026 Anthony Lim",
  },
};

const LINKS = [
  { label: "Email", value: "antho.lim44@gmail.com", href: "mailto:antho.lim44@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/antho-lim",
    href: "https://www.linkedin.com/in/antho-lim/",
  },
  { label: "GitHub", value: "github.com/antholim", href: "https://github.com/antholim" },
];

function ContactMe({ language }: LanguageProps): JSX.Element {
  const lang: Lang =
    language === "French" ? "French" : language === "Spanish" ? "Spanish" : "English";
  const c = CONTENT[lang];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.panel} data-reveal>
          <span className={styles.label}>{c.label}</span>
          <h2 className={styles.heading}>{c.heading}</h2>
          <p className={styles.blurb}>{c.blurb}</p>

          <a href="mailto:antho.lim44@gmail.com" className={styles.cta}>
            {c.cta}
          </a>

          <ul className={styles.links}>
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.link}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkValue}>{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className={styles.footer}>
          <span>{c.rights}</span>
          <span>Built with React &amp; Vite</span>
        </footer>
      </div>
    </section>
  );
}

export default ContactMe;
