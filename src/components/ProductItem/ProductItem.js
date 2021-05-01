import React from 'react'

export default function ProductItem(props) {
    return (
        <article className="sneaker">
            {props.data.discounted === true ? (
                <div className="sneaker__sale">{'-' + props.data.discount}</div>
            ) : (
                ''
            )}
            <img
                className="sneaker__image"
                src={props.data.image}
                alt="featured1"
            />
            <span className="sneaker__name">{props.data.title}</span>
            {props.data.discounted === true ? (
                <>
                    <span className="sneaker__price">
                        ${props.data.member_Price}
                    </span>
                    <span className="sneaker__before-price">
                        ${props.data.full_Price}
                    </span>
                </>
            ) : (
                <span className="sneaker__price">${props.data.full_Price}</span>
            )}
            <a href="/#" className="btn-add">
                Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i>
            </a>
        </article>
    )
}
