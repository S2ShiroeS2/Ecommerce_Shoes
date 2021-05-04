import React from 'react'

export default function News() {
    return (
        <section className="new section" id="new">
            <h2 className="section__title">NEWS</h2>
            <div className="new__container bd-grid">
                <div className="new__mens">
                    <img
                        src="/assets/images/new1.png"
                        alt="new1"
                        className="new__mens--image"
                    />
                    <h3 className="new__title">Mens shoes</h3>
                    <span className="new__price">From $79.99</span>
                    <a href="/#" className="btn-add">
                        View collection{' '}
                        <i className="bx bx-right-arrow-alt btn-icon"></i>
                    </a>
                </div>
                <div className="new__sneaker">
                    <div className="new__sneaker--card">
                        <img
                            src="/assets/images/new2.png"
                            alt="new2"
                            className="new__sneaker--image"
                        />
                        <div className="new__sneaker--overlay">
                            <a href="/#" className="btn-explore">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                    <div className="new__sneaker--card">
                        <img
                            src="/assets/images/new3.png"
                            alt="new3"
                            className="new__sneaker--image"
                        />
                        <div className="new__sneaker--overlay">
                            <a href="/#" className="btn-explore">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                    <div className="new__sneaker--card">
                        <img
                            src="/assets/images/new4.png"
                            alt="new4"
                            className="new__sneaker--image"
                        />
                        <div className="new__sneaker--overlay">
                            <a href="/#" className="btn-explore">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                    <div className="new__sneaker--card">
                        <img
                            src="/assets/images/new5.png"
                            alt="new5"
                            className="new__sneaker--image"
                        />
                        <div className="new__sneaker--overlay">
                            <a href="/#" className="btn-explore">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
