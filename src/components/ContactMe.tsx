import styles from "../styles/contactme.module.css";
import { LanguageProps } from "../types/props.ts";

function ContactMe({ language }: LanguageProps): JSX.Element {
  let contact = "Contact Me";
  let rights = "© 2024 Anthony Lim. All rights reserved.";
  if (language === "English") {
    contact = "Contact";
    rights = "© 2024 Anthony Lim. All rights reserved.";
  } else if (language === "French") {
    contact = "Contactez-moi";
    rights = "© 2024 Anthony Lim. Tous droits réservés.";
  } else if (language === "Spanish") {
    contact = "Contáctame";
    rights = "© 2024 Antonio Lim. Reservados todos los derechos.";
  }
  return (
    <section className={styles.contactForm} id="contact">
      <div>
        <h1>{contact}</h1>
        <p>
          Email:{" "}
          <a href="mailto:antho.lim44@gmail.com">antho.lim44@gmail.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/antho-lim/">
            https://www.linkedin.com/in/antho-lim/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/antholim">https://github.com/antholim</a>
        </p>
      </div>
      <footer>{rights}</footer>
    </section>
  );
}

export default ContactMe;
