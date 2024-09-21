import React from 'react';
import { DESCRIPTION } from "../data/aboutme.ts"

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
        <div>
        <h1>About Me</h1>
        <p>
            {description}
        </p>
        </div>
    );
} export default AboutMe;