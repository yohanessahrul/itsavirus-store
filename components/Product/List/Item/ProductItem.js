import React from 'react'
import classes from './ProductItem.module.scss'
import { shoes } from '../../../../content/shoes'
import { useRouter } from 'next/router'
import { convertNameToBeSlug, imageRender } from '../../../../helper/global'
import Link from 'next/link'

export default function ProductItem(props) {
  return (
    <React.Fragment>
      <div className={classes.Item}>
        <div className={classes.Image}>
          <Link href={`/product/${convertNameToBeSlug(props.item.name)}`}>
            <a>
              <img
                src={imageRender(props.item?.name, 'src')}
                alt={imageRender(props.item?.name, 'alt')} />
            </a>
          </Link>
        </div>
        <div className={classes.Detail}>
          <div className={classes.Top}>
            <div className={classes.Title}>
              <Link href={`/product/${convertNameToBeSlug(props.item.name)}`}>
                <a>
                  {props.item?.name}
                </a>
              </Link>
            </div>
            <div className={classes.Price}>
              ${props.item?.price}
            </div>
          </div>
          <div className={classes.Bottom}>
            <div className={classes.Gender}>
              {props.item?.category}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
