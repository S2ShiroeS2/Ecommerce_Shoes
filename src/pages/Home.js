import React, { useEffect, useState } from 'react'
import ProductIntro from '../components/ProductIntro/ProductIntro'
import Feature from '../components/Feature/Feature'
import Collection from '../components/Collection/Collection'
import MenSneakers from '../components/MenSneakers/MenSneakers'
import introApi from '../apis/introApi'
import WomenSneakers from '../components/WomenSneakers/WomenSneakers'

export default function Home() {
    const [introData, setIntroData] = useState([])

    useEffect(() => {
        fetchIntroData()
    }, [])

    const fetchIntroData = async () => {
        try {
            const response = await introApi.getAll()
            if (response) {
                setIntroData(response)
            }
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('Failed to fetch list item in API', err)
        }
    }
    return (
        <main className="l-main">
            <ProductIntro key={introData.id} data={introData} />
            <Feature />
            <Collection />
            <MenSneakers />
            <WomenSneakers />
        </main>
    )
}
