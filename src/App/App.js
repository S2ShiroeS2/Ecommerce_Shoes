// eslint-disable-next-line
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../actions/product'
import React, { useEffect } from 'react'
import Product from '../components/product/products'

function App() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const renderProductList = () => {
        return products.map(product => <Product data={product} />)
    }

    const productList = renderProductList()

    return (
        <div>
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
            <div className="main-header">
                <div className="main-header__container">
                    <div className="main-header__content bd-grid">
                        <h1 className="main-header__title">
                            Men's Shoes{' '}
                            <span className="main-header__count">(385)</span>
                        </h1>
                        <nav className="main-header__navbar">
                            <button className="main-header__filter-btn">
                                <span className="main-header__filter-btn--text">
                                    Show Filters
                                </span>
                                <i className="bx bxs-chevron-left"></i>
                            </button>
                            <button className="main-header__short">
                                <span className="main-header__short--text">
                                    Short By
                                </span>
                                <i className="bx bxs-chevron-down"></i>
                            </button>
                            <ul className="main-header__short--wapper">
                                <li>
                                    <a href="/#">Featured</a>
                                </li>
                                <li>
                                    <a href="/#">Newest</a>
                                </li>
                                <li>
                                    <a href="/#">Price: High-Low</a>
                                </li>
                                <li>
                                    <a href="/#">Price: Low-High</a>
                                </li>
                            </ul>
                        </nav>
                        <button className="menu-expand">
                            <i className="bx bx-expand-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
            <main className="l-main section shop">
                <section className="featured" id="featured">
                    <div className="feature__container bd-grid">
                        {productList}
                    </div>
                    <div className="sneaker__pages bd-grid">
                        <div>
                            <span className="sneaker__pag">1</span>
                            <span className="sneaker__pag">2</span>
                            <span className="sneaker__pag">3</span>
                            <span className="sneaker__pag">4</span>
                            <span className="sneaker__pag">&#8594;</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
