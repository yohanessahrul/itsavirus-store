import React from 'react'
import classes from './ProductItem.module.scss'
import { shoes } from '../../../../content/shoes'
import { useRouter } from 'next/router'

export default function ProductItem(props) {
  const router = useRouter()

  return (
    <React.Fragment>
      <div className={classes.Item}>
        <div className={classes.Image}>
          <img onClick={() => router.push('/product/asd')} src={shoes[0]?.image} alt="" />
        </div>
        <div className={classes.Detail}>
          <div className={classes.Top}>
            <div className={classes.Title} onClick={() => router.push('/product/asd')} >nike air force</div>
            <div className={classes.Price}>$30</div>
          </div>
          <div className={classes.Bottom}>
            <div className={classes.Gender}>Men Shoes</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
