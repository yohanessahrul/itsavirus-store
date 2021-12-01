import React from 'react'
import classes from './ProductList.module.scss'
import ProductItem from './Item/ProductItem'

export default function ProductList(props) {
  return (
    <React.Fragment>
      <div className={classes.Wrapper}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </React.Fragment>
  )
}
