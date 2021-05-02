import axiosClient from './axiosClient'

const womenProductHomeAPI = {
    getAll: params => {
        const url = '/womens'
        return axiosClient.get(url, { params })
    }
}

export default womenProductHomeAPI
