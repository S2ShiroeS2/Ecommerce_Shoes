import axiosClient from './axiosClient'

const collectionApi = {
    getAll: params => {
        const url = '/collections'
        return axiosClient.get(url, { params })
    }
}

export default collectionApi
