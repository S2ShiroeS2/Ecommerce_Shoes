import React from 'react'

export default function ProductIntro() {
    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__sneaker">
                    <div className="home__shape"></div>
                    <img
                        className="home__image"
                        src="../assets/images/imghome.png"
                        alt="home"
                    />
                </div>
                <div className="home__content">
                    <span className="home__new">New in</span>
                    <h1 className="home__title">
                        YEEZY BOOST <br /> SPLY - 350
                    </h1>
                    <p className="home__description">
                        Explore the new collections of sneakers
                    </p>
                    <a href="/#" className="btn-explore">
                        Explore now
                    </a>
                </div>
            </div>
        </section>
    )
}
