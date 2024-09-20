import { Tool, LANGUAGES, FRAMEWORKS, DATABASES, DEVOPS_TOOLS, TESTING_TOOLS } from "../data/programming.tsx"
import { FaJava } from "react-icons/fa";


function Skills() {
    return (
        <>
            <h1>Skills</h1>
            <h2>Languages</h2>
            {LANGUAGES.map((language : Tool) => {
                return (
                    <div>
                        {language.icon}
                        {language.name}
                    </div>
                )
            })}
            <h2>Frameworks</h2>
            {FRAMEWORKS.map((framework : Tool) => {
                return (
                    <div>
                        {framework.icon}
                        {framework.name}
                    </div>
                )
            })}
            <h2>Databases</h2>
            {DATABASES.map((database : Tool) => {
                return (
                    <div>
                        {database.icon}
                        {database.name}
                    </div>
                )
            })}
            <h2>Version Control</h2>
            {DEVOPS_TOOLS.map((devops : Tool) => {
                return (
                    <div>
                        {devops.icon}
                        {devops.name}
                    </div>
                )
            })}
            <h2>Testing Tools</h2>
            {TESTING_TOOLS.map((testing : Tool) => {
                return (
                    <div>
                        {testing.icon}
                        {testing.name}
                    </div>
                )
            })}
        </>
    )
} export default Skills;