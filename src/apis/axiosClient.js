import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: param => queryString.stringify(param)
})

axiosClient.interceptors.request.use(async config => {
    //handle token here
    return config
})

axiosClient.interceptors.response.use(
    response => {
        if (response && response.data) {
            return response.data
        }
        return response
    },
    error => {
        //Handle error
        throw error
    }
)

export default axiosClient
