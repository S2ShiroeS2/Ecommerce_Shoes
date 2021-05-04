import axiosClient from './axiosClient'

const newsApi = {
    getAll: params => {
        const url = '/news'
        return axiosClient.get(url, { params })
    }
}

export default newsApi
