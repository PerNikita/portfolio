import { projects } from "../helpers/projectsList"
import Project from "../components/project/Project"

const Projects = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((project) => {
                            return (
                                <Project key={project.id} title= {project.title} img={project.img} />
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}
{console.log(projects.id)}

export default Projects