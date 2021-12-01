import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ProductReducer from './product/ProductReducer'

const rootReducer = combineReducers({
  ProductReducer
})

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store