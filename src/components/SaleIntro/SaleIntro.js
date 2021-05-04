import React from 'react'

export default function SaleIntro(props) {
    return (
        <section className="sale section" id="sale">
            <div className="sale__container bd-grid">
                <div className="sale__content">
                    <h3 className="sale__title">{props?.data[0]?.title}</h3>
                    <p className="sale__description">
                        {props?.data[0]?.sub_title}
                    </p>
                    <a href="/#" className="btn-add">
                        shop now{' '}
                        <i className="bx bx-right-arrow-alt btn-icon"></i>
                    </a>
                </div>
                <img
                    className="sale__image"
                    src={props?.data[0]?.image}
                    alt="sale"
                />
            </div>
        </section>
    )
}
