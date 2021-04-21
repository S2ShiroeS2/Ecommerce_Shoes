import axiosClient from './axiosClient'

const featuresAPI = {
    getAll: params => {
        const url = '/features'
        return axiosClient.get(url, { params })
    }
}

export default featuresAPI
