import React from 'react'
import sun from "./../../image/icons/sun.svg";
import moon from "./../../image/icons/moon.svg"

function Navbar () {
    return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <div className="logo"><a href="./index.html"><strong>Web</strong>Way</a></div>
                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>
                <ul className="nav-list">
                    <li className="nav-list__item"></li><a href="./index.html" className="nav-list__link nav-list__link--active">Главная</a><li />
                    <li className="nav-list__item"></li><a href="./project.html" className="nav-list__link">Проекты</a><li />
                    <li className="nav-list__item"></li><a href="./contacts.html" className="nav-list__link">Контакты</a><li />
                </ul>
            </div>
        </div>
    </nav>

    )
}

export default Navbar