import "./style.css"

const Project = ({title, img}) => {
    return (
        <li class="project">
            <a href="./project-page.html">
                <img src={img} alt={title} class="project__img" />
                <h3 class="project__title">{title}</h3>    
            </a>
        </li>
    )
}

export default Project