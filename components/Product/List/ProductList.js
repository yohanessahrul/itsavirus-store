import React from 'react'
import classes from './ProductList.module.scss'
import ProductItem from './Item/ProductItem'

export default function ProductList(props) {

  let productList = null
  if (props.products && props.products.length > 0) {
    // console.log(`products`, props.products)
    productList = props.products.map((item, key) => {
      return (
        <ProductItem key={key} item={item} />
      )
    })
  }

  // console.log(`props.products`, props.products?.shoes)
  return (
    <React.Fragment>
      <div className={classes.Wrapper}>
        {productList}
        {/* <ProductItem />
        <ProductItem />
        <ProductItem /> */}
      </div>
    </React.Fragment>
  )
}
