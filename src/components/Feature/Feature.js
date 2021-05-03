import React, { useEffect, useState } from 'react'
import ProductItem from 'components/ProductItem/ProductItem'
import featuresAPI from 'apis/featuresAPI'

export default function Feature() {
    const [feature, setFeature] = useState([])

    useEffect(() => {
        fetchFeature()
    }, [])

    const fetchFeature = async () => {
        try {
            const response = await featuresAPI.getAll()
            setFeature(response)
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('Failed to fetch list item in API', err)
        }
    }

    return (
        <section className="featured section" id="featured">
            <h2 className="section__title">FEATURE</h2>
            <div className="feature__container bd-grid">
                {feature.map(item => (
                    <ProductItem key={item.id} data={item} />
                ))}
            </div>
        </section>
    )
}
