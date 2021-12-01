import { convertNameToBeSlug } from '../../helper/global'
import { updateObject } from '../utility'

const initialState = {
  products: [],
  isFetchProducts: false,
  isErrorFetchProducts: false,
  productDetail: null,
  carts: [],
}

const setProducts = (state, action) => {
  return updateObject(state, {
    products: action.data.shoes,
    isFetchProducts: false,
    isErrorFetchProducts: false
  })
}

const setFetchProducts = (state) => {
  return updateObject(state, {
    isFetchProducts: true
  })
}

const setErrorFetchProducts = (state) => {
  return updateObject(state, {
    isErrorFetchProducts: true
  })
}

const setProductDetail = (state, action) => {
  if (state.products) {
    let data = state.products.filter(item => convertNameToBeSlug(item.name) === action.slug)
    return updateObject(state, {
      productDetail: data[0]
    })
  } else {
    return state
  }
}
const setCarts = (state, action) => {
  return updateObject(state, {
    carts: action.data
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT': return setProducts(state, action)
    case 'SET_FETCH_PRODUCTS': return setFetchProducts(state)
    case 'SET_ERROR_FETCH_PRODUCTS': return setErrorFetchProducts(state)
    case 'SET_PRODUCT_DETAIL': return setProductDetail(state, action)
    case 'SET_CARTS_DATA': return setCarts(state, action)
    default: return state
  }
}

export default reducer