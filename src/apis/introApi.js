import axiosClient from './axiosClient'

const introApi = {
    getAll: params => {
        const url = '/intro'
        return axiosClient.get(url, { params })
    }
}

export default introApi
