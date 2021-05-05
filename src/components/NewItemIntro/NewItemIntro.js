import React from 'react'

export default function NewItemIntro(props) {
    return (
        <div className="new__mens">
            <img
                src={props?.data?.image}
                alt="new1"
                className="new__mens--image"
            />
            <h3 className="new__title">{props?.data?.title}</h3>
            <span className="new__price">{props?.data?.sub_Title}</span>
            <a href="/#" className="btn-add">
                View collection{' '}
                <i className="bx bx-right-arrow-alt btn-icon"></i>
            </a>
        </div>
    )
}
