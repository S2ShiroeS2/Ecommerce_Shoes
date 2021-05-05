import React, { useEffect, useState } from 'react'
import NewItemIntro from 'components/NewItemIntro/NewItemIntro'
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
                <NewItemIntro
                    key={newItemData[0]?.main?.id}
                    data={newItemData[0]?.main}
                />
                <div className="new__sneaker">
                    {newItemData[0]?.subs.map((item, index) => (
                        <NewItem key={index} data={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
