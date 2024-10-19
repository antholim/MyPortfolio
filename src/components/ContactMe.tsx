import styles from '../styles/contactme.module.css';
import {LanguageProps} from "../types/props.ts";


function ContactMe({language}: LanguageProps) : JSX.Element {
    return (
        <section className={styles.contactForm} id="contact">
            <div>
                <h1>Contact Me</h1>
                <p>Email: <a href="mailto:antho.lim44@gmail.com">antho.lim44@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/antho-lim/">https://www.linkedin.com/in/antho-lim/</a></p>
                <p>GitHub: <a href="https://github.com/antholim">https://github.com/antholim</a></p>
            </div>
            <footer>
                © 2024 Anthony Lim. All rights reserved.
            </footer>
        </section>
    );
}

export default ContactMe;