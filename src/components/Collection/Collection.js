import React, { useEffect, useState } from 'react'
import CollectionItem from 'components/CollectionItem/CollectionItem'
import collectionApi from 'apis/collectionApi'

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
                {collections.map(item => (
                    <CollectionItem key={item.id} data={item} />
                ))}
            </div>
        </section>
    )
}
