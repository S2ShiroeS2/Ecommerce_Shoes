import React from 'react'

export default function CollectionItem(props) {
    return (
        <div className="collection__card">
            <div className="collection__content">
                <h3 className="collection__name">{props.data.title}</h3>
                <p className="collection__description">
                    {props.data.sub_Title}
                </p>
                <a href="/#" className="btn-add">
                    {props.data.button_Title}{' '}
                    <i className="bx bx-right-arrow-alt btn-icon"></i>
                </a>
            </div>
            <img
                className="collection__image"
                src={props.data.image}
                alt="collection1"
            />
        </div>
    )
}
