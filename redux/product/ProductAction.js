export const setProduct = (data) => {
  return {
    type: 'SET_PRODUCT',
    data: data
  }
}

export const initProductDetail = (slug) => {
  return {
    type: 'SET_PRODUCT_DETAIL',
    slug: slug
  }
}

export const setFetchProducts = () => {
  return {
    type: 'SET_FETCH_PRODUCTS'
  }
}

export const setErrorFetchProducts = () => {
  return {
    type: 'SET_ERROR_FETCH_PRODUCTS'
  }
}

export const initProducts = () => {
  return dispatch => {
    dispatch(setFetchProducts())
    fetch('https://my-json-server.typicode.com/megasuartika/fe-assignment/db')
      .then(response => response.json())
      .then(data => dispatch(setProduct(data)))
      .catch((err) => dispatch(setErrorFetchProducts()))
  }
}

export const setCartsData = (data) => {
  return {
    type: 'SET_CARTS_DATA',
    data: data
  }
}