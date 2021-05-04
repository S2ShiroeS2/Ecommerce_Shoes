import React, { useEffect, useState } from 'react'
import NewItem from 'components/NewItem/NewItem'
import newsApi from 'apis/newsApi'

export default function News() {
    const [newItemData, setNewItemData] = useState([])

    useEffect(() => {
        fetchNewItemData()
    }, [])

    const fetchNewItemData = async () => {
        try {
            const response = await newsApi.getAll()
            if (response) {
                setNewItemData(response)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('Failed to fetch list item in API', err)
        }
    }
    return (
        <section className="new section" id="new">
            <h2 className="section__title">NEWS</h2>
            <div className="new__container bd-grid">
                <div className="new__mens">
                    <img
                        src="/assets/images/new1.png"
                        alt="new1"
                        className="new__mens--image"
                    />
                    <h3 className="new__title">Mens shoes</h3>
                    <span className="new__price">From $79.99</span>
                    <a href="/#" className="btn-add">
                        View collection{' '}
                        <i className="bx bx-right-arrow-alt btn-icon"></i>
                    </a>
                </div>
                <div className="new__sneaker">
                    {newItemData[0]?.subs.map((item, index) => (
                        <NewItem key={index} data={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
