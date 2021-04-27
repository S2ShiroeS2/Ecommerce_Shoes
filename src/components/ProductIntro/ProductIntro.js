import React from 'react'

export default function ProductIntro(props) {
    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__sneaker">
                    <div className="home__shape"></div>
                    <img
                        className="home__image"
                        src={props?.data?.[0]?.image}
                        alt="home"
                    />
                </div>
                <div className="home__content">
                    <span className="home__new">{props?.data?.[0]?.label}</span>
                    <h1
                        className="home__title"
                        dangerouslySetInnerHTML={{
                            __html: props?.data?.[0]?.title
                        }}
                    ></h1>
                    <p className="home__description">
                        {props?.data?.[0]?.description}
                    </p>
                    <a href="/#" className="btn-explore">
                        {props?.data?.[0]?.button_Title}
                    </a>
                </div>
            </div>
        </section>
    )
}
