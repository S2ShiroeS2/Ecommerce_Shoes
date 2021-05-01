import axiosClient from './axiosClient'

const menProductHomeAPI = {
    getAll: params => {
        const url = '/mens'
        return axiosClient.get(url, { params })
    }
}

export default menProductHomeAPI
