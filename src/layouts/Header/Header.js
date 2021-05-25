import React from 'react'
import '../../scss/main.scss'

export default function Header() {
    React.useEffect(() => {
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)

            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show')
                })
            }
        }

        // SHOW BOX SEARCH MOBILE
        const isShowBoxSearch = (btn_open, btn_close) => {
            var click_Open = document.querySelector(btn_open),
                click_Close = document.querySelector(btn_close),
                box_Search = document.querySelector('.nav__search-box'),
                btn_Search_Overlay = document.querySelector(
                    '.btn-overlay-search'
                ),
                input_Search = document.querySelector(
                    '.nav__search-box--input-search'
                )

            click_Open.addEventListener('click', () => {
                box_Search.classList.add('active-search-box')
                click_Close.classList.remove('is-none-btn')
                click_Open.classList.add('is-show-btn-search')
                btn_Search_Overlay.classList.remove('is-none')
                input_Search.classList.add('active-search-input')
                input_Search.classList.remove('is-none')
            })
            click_Close.addEventListener('click', () => {
                box_Search.classList.remove('active-search-box')
                click_Close.classList.add('is-none-btn')
                click_Open.classList.remove('is-show-btn-search')
                btn_Search_Overlay.classList.add('is-none')
                input_Search.classList.remove('active-search-input')
                input_Search.classList.add('is-none')
            })
        }

        isShowBoxSearch('.btn-search', '.nav__close-search-box')
        showMenu('nav-toggle', 'nav-menu')
    }, [])

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
