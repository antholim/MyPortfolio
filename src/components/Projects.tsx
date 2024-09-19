import {Project, PROJECTS_ENGLISH} from "../data/projects.ts"

function Projects() {
    return(
        <>
        <h1>Projects</h1>
        {PROJECTS_ENGLISH.map((project:Project, index:number)=> {
            return(
                <div key={index}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                    <a href={project.githubLink}>Github</a>
                    <a href={project.liveLink}>Live</a>
                </div>
            )
        })}
        </>
    )
} export default Projects;