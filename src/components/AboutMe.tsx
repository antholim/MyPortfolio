import React from 'react';
import { DESCRIPTION } from "../data/aboutme.ts"
import styles from "../styles/aboutMe.module.css";

function AboutMe({language}) {
    let description = DESCRIPTION[0];
    if (language === "English") {
        description = DESCRIPTION[0];
    } else if (language === "French") {
        description = DESCRIPTION[1];
    } else if (language === "Spanish") {
        description = DESCRIPTION[2];
    }
        
    return (
        <section className={styles.aboutContainer} id="about">
        <img src="/IMG_3527.png" alt="Profile" className={styles.profileImage} />
        <h2 className={styles.name}>Anthony Lim</h2>
        <p className={styles.description}>
            {description}
        </p>
      </section>
    );
} export default AboutMe;