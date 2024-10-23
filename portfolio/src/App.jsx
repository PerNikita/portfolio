import "./syles/main.css";
import vk from "./image/icons/vk.svg"
import inst from "./image/icons/inst.svg"
import github from "./image/icons/gitHub.svg"
import twitter from "./image/icons/twitter.svg"
import linkedln from "./image/icons/linkedIn.svg";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";


function App() {


  return (
  <div>
    <Navbar />
    <Header />
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./image/01.jpg" alt="project img" className="project__img" />
                        <h3 className="project__title">Gaming streaming portal</h3>    
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./image/02.jpg" alt="project img" className="project__img" />
                        <h3 className="project__title">Video service</h3>    
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./image/03.jpg" alt="project img" className="project__img" />
                        <h3 className="project__title">Video portal</h3>    
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./image/04.jpg" alt="project img" className="project__img" />
                        <h3 className="project__title">Dating app</h3>    
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./image/05.jpg" alt="project img" className="project__img" />
                        <h3 className="project__title">Landing</h3>    
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./image/06.jpg" alt="project img" className="project__img" />
                        <h3 className="project__title">Gaming community</h3>    
                    </a>
                </li>
            </ul>
        </div>
    </main>

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
</div>
  )
}

export default App
