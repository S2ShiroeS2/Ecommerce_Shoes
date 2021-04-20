// eslint-disable-next-line
// import { useSelector, useDispatch } from 'react-redux'
// import { getProducts } from '../actions/product'
import React, { useEffect } from 'react'
// import Product from '../components/product/products'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home'

function App() {
    // const products = useSelector(state => state.products)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])

    // const renderProductList = () => {
    //     return products.map(product => (
    //         <Product data={product} key={product.id} />
    //     ))
    // }

    // const productList = renderProductList()

    return (
        <div>
            <Header />
            <Home />
            {/* <div className="main-header">
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
            </main> */}
            <Footer />
        </div>
    )
}

export default App
