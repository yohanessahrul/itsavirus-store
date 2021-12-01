import React from 'react'
import classes from './Home.module.scss'
import ProductList from '../../components/Product/List/ProductList'

export default function Home() {
  return (
    <div className={classes.Wrapper}>
      <div className='container'>
        <div className={classes.Heading}>New Release</div>
        <ProductList />
      </div>
    </div>
  )
}
