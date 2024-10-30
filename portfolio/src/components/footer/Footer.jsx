import vk from "./../../image/icons/vk.svg"
import inst from "./../../image/icons/inst.svg"
import github from "./../../image/icons/gitHub.svg"
import twitter from "./../../image/icons/twitter.svg"
import linkedln from "./../../image/icons/linkedIn.svg";

function Footer () {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="#"><img src={vk} alt="" srcset="" /></a>
                    </li>
                    <li className="social__item">
                        <a href="#"><img src={inst} alt="" srcset="" /></a>
                    </li>
                    <li className="social__item">
                        <a href="#"><img src={twitter} alt="" srcset="" /></a>
                    </li>
                    <li className="social__item">
                        <a href="#"><img src={github} alt="" srcset="" /></a>
                    </li>
                    <li className="social__item">
                        <a href="#"><img src={linkedln} alt="" srcset="" /></a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer