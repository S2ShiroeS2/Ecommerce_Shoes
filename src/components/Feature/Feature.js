import React from 'react'

export default function Feature() {
    return (
        <section className="featured section" id="featured">
            <h2 className="section__title">FEATURE</h2>
            <div className="feature__container bd-grid">
                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                    <img
                        className="sneaker__image"
                        src="../assets/images/featured1.png"
                        alt="featured1"
                    />
                    <span className="sneaker__name">Nike Jordan</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="/#" className="btn-add">
                        Add to Cart{' '}
                        <i className="bx bx-right-arrow-alt btn-icon"></i>
                    </a>
                </article>
                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                    <img
                        className="sneaker__image"
                        src="../assets/images/featured2.png"
                        alt="featured2"
                    />
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="/#" className="btn-add">
                        Add to Cart{' '}
                        <i className="bx bx-right-arrow-alt btn-icon"></i>
                    </a>
                </article>
                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                    <img
                        className="sneaker__image"
                        src="../assets/images/featured3.png"
                        alt="featured3"
                    />
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="/#" className="btn-add">
                        Add to Cart{' '}
                        <i className="bx bx-right-arrow-alt btn-icon"></i>
                    </a>
                </article>
            </div>
        </section>
    )
}
