import axios from 'axios'

const url = 'products'

export const fetchProducts = () => axios.get(url)
