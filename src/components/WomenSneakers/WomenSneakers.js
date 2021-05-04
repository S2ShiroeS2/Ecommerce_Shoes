import React, { useEffect, useState } from 'react'
import womenProductApi from 'apis/womenProductApi'
import ProductItem from 'components/ProductItem/ProductItem'

export default function WomenSneakers() {
    const [womenData, setWomenData] = useState([])

    useEffect(() => {
        fetchDataWomenProductHome()
    }, [])

    const fetchDataWomenProductHome = async () => {
        try {
            const response = await womenProductApi.getAll()
            if (response) {
                setWomenData(response)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('Failed to fetch list item in API', err)
        }
    }
    return (
        <section className="women section" id="women">
            <h2 className="section__title">WOMEN SNEAKERS</h2>
            <div className="women__container bd-grid">
                {womenData.map(item => (
                    <ProductItem key={item.id} data={item} />
                ))}
            </div>
        </section>
    )
}
