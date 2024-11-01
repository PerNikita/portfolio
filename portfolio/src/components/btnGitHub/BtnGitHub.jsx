import "./style.css"
import github from "./../../image/icons/GitHub-black.svg"

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank" class="btn-outline">
            <img src={github} alt="" srcset="" />
             GitHub repo
        </a>
    )
}

export default BtnGitHub