import axiosClient from './axiosClient'

const saleIntroApi = {
    getAll: params => {
        const url = '/sales'
        return axiosClient.get(url, { params })
    }
}

export default saleIntroApi
