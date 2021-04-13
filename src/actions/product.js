import * as api from '../apis'

// Actions
export const getProducts = () => async dispatch => {
    try {
        const { data } = await api.fetchProducts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.message)
    }
}
