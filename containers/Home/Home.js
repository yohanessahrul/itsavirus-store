import React, { useEffect } from 'react'
import classes from './Home.module.scss'
import ProductList from '../../components/Product/List/ProductList'
import * as productAction from '../../redux/product/ProductAction'
import { connect } from 'react-redux'

function Home(props) {
  useEffect(() => {
    props.onInitProducts()
  }, [])

  return (
    <div className={classes.Wrapper}>
      <div className='container'>
        <div className={classes.Heading}>New Release</div>
        <ProductList products={props.products} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.ProductReducer.products,
    isFetchProducts: state.ProductReducer.isFetchProducts,
    isErrorFetchProducts: state.ProductReducer.isErrorFetchProducts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => dispatch(productAction.initProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
