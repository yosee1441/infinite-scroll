import { combineReducers } from 'redux'
import { productsReducer } from './products'

export const homeReducer = combineReducers({
  products: productsReducer,
})
