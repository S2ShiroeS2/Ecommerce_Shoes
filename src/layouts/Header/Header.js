import React from 'react'
import '../../scss/main.scss'

export default function Header() {
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle">
                    <i className="bx bxs-grid"></i>
                </div>
                <a href="./home.html" className="nav__logo">
                    <i className="bx bxs-cube-alt"></i>
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#featured" className="nav__link">
                                Featured
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#men" className="nav__link">
                                Men
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#women" className="nav__link">
                                Women
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#new" className="nav__link">
                                New
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="./shop.html" className="nav__link">
                                Shop
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__box-feature">
                    <div className="nav__search-box">
                        <input
                            className="nav__search-box--input-search is-none"
                            type="text"
                            placeholder="Search"
                        />
                        <button className="btn-search">
                            <i className="bx bx-search"></i>
                        </button>
                        <button className="btn-search btn-overlay-search is-none">
                            <i className="bx bx-search"></i>
                        </button>
                        <button className="nav__close-search-box is-none-btn">
                            <i className="bx bx-x"></i>
                        </button>
                    </div>
                    <div className="nav__bag">
                        <i className="bx bx-shopping-bag"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}
