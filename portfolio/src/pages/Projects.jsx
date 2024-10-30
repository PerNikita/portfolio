import project01 from './../image/projects/01.jpg'
import project02 from './../image/projects/02.jpg'
import project03 from './../image/projects/03.jpg'
import project04 from './../image/projects/04.jpg'
import project05 from './../image/projects/05.jpg'
import project06 from './../image/projects/06.jpg'

const Projects = () => {
    return (
        <>
            <main class="section">
                <div class="container">
                    <h2 class="title-1">Projects</h2>
                    <ul class="projects">
                        <li class="project">
                            <a href="./project-page.html">
                                <img src={project01} alt="project img" class="project__img" />
                                <h3 class="project__title">Gaming streaming portal</h3>    
                            </a>
                        </li>
                        <li class="project">
                            <a href="./project-page.html">
                                <img src={project02} alt="project img" class="project__img" />
                                <h3 class="project__title">Video service</h3>    
                            </a>
                        </li>
                        <li class="project">
                            <a href="./project-page.html">
                                <img src={project03} alt="project img" class="project__img" />
                                <h3 class="project__title">Video portal</h3>    
                            </a>
                        </li>
                        <li class="project">
                            <a href="./project-page.html">
                                <img src={project04} alt="project img" class="project__img" />
                                <h3 class="project__title">Dating app</h3>    
                            </a>
                        </li>
                        <li class="project">
                            <a href="./project-page.html">
                                <img src={project05} alt="project img" class="project__img" />
                                <h3 class="project__title">Landing</h3>    
                            </a>
                        </li>
                        <li class="project">
                            <a href="./project-page.html">
                                <img src={project06} alt="project img" class="project__img" />
                                <h3 class="project__title">Gaming community</h3>    
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Projects