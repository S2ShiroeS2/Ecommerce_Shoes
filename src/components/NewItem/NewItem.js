import React from 'react'

export default function NewItem(props) {
    return (
        <div className="new__sneaker--card">
            <img
                src={props.data.image}
                alt="new2"
                className="new__sneaker--image"
            />
            <div className="new__sneaker--overlay">
                <a href="/#" className="btn-explore">
                    Add to Cart
                </a>
            </div>
        </div>
    )
}
