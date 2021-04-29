import React, { useEffect, useState } from 'react'
import collectionApi from '../../apis/collectionApi'

export default function Collection() {
    const [collections, setCollection] = useState([])

    useEffect(() => {
        fetchDataCollection()
    }, [])

    const fetchDataCollection = async () => {
        try {
            const response = await collectionApi.getAll()
            if (response) {
                setCollection(response)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('Failed to fetch list item in API', err)
        }
    }

    return (
        <section className="collection section">
            <div className="collection__container bd-grid">
                <div className="collection__card">
                    <div className="collection__content">
                        <h3 className="collection__name">Nike</h3>
                        <p className="collection__description">
                            New collection 2020
                        </p>
                        <a href="/#" className="btn-add">
                            Buy now{' '}
                            <i className="bx bx-right-arrow-alt btn-icon"></i>
                        </a>
                    </div>
                    <img
                        className="collection__image"
                        src="../assets/images/collection1.png"
                        alt="collection1"
                    />
                </div>
                <div className="collection__card">
                    <div className="collection__content">
                        <h3 className="collection__name">Adidas</h3>
                        <p className="collection__description">
                            New collection 2020
                        </p>
                        <a href="/#" className="btn-add">
                            Buy now{' '}
                            <i className="bx bx-right-arrow-alt btn-icon"></i>
                        </a>
                    </div>
                    <img
                        className="collection__image"
                        src="../assets/images/collection2.png"
                        alt="collection2"
                    />
                </div>
            </div>
        </section>
    )
}
