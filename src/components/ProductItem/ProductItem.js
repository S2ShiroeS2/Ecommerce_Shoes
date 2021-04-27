import React from 'react'

export default function ProductItem(props) {
    return (
        <article className="sneaker">
            <div className="sneaker__sale">
                {props.data.discounted === true
                    ? '-' + props.data.discount
                    : ''}
            </div>
            <img
                className="sneaker__image"
                src={props.data.image}
                alt="featured1"
            />
            <span className="sneaker__name">{props.data.title}</span>
            <span className="sneaker__price">
                $
                {props.data.discounted === true
                    ? props.data.member_Price
                    : props.data.full_Price}
            </span>
            {props.data.discounted === true ? (
                <span className="sneaker__before-price">
                    ${props.data.full_Price}
                </span>
            ) : (
                ''
            )}
            <a href="/#" className="btn-add">
                Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i>
            </a>
        </article>
    )
}
