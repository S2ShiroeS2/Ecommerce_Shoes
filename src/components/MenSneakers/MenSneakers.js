import React, { useEffect, useState } from 'react'
import ProductItem from 'components/ProductItem/ProductItem'
import menProductHomeAPI from 'apis/menProductHomeAPI'

export default function MenSneakers() {
    const [menData, setMenData] = useState([])

    useEffect(() => {
        fetchDataMenProductHome()
    }, [])

    const fetchDataMenProductHome = async () => {
        try {
            const response = await menProductHomeAPI.getAll()
            if (response) {
                setMenData(response)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('Failed to fetch list item in API', err)
        }
    }
    return (
        <section id="men" className="men section">
            <h2 className="section__title">MEN SNEAKERS</h2>
            <div className="men__container bd-grid">
                {menData.map(item => (
                    <ProductItem key={item.id} data={item} />
                ))}
            </div>
        </section>
    )
}
