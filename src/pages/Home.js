import React, { useEffect, useState } from 'react'
import {
    ProductIntro,
    Feature,
    Collection,
    MenSneakers,
    WomenSneakers,
    SaleIntro,
    News
} from 'components/route'
import introApi from 'apis/introApi'
import saleIntroApi from 'apis/saleIntroApi'

export default function Home() {
    const [introData, setIntroData] = useState([])
    const [saleIntroData, setSaleIntroData] = useState([])

    useEffect(() => {
        fetchIntroData()
        fetchSaleIntroData()
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

    const fetchSaleIntroData = async () => {
        try {
            const response = await saleIntroApi.getAll()
            if (response) {
                setSaleIntroData(response)
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
            <SaleIntro key={saleIntroData.id} data={saleIntroData} />
            <News />
        </main>
    )
}
