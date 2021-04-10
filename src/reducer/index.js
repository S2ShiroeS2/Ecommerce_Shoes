import productReducer from './products'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    products: productReducer
})

export default allReducers
