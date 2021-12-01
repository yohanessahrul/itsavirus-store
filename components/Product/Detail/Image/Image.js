import React from 'react'
import classes from './Image.module.scss'
import { shoes } from '../../../../content/shoes'
import { imageRender } from '../../../../helper/global'

export default function Image(props) {
  return (
    <React.Fragment>
      <div className={classes.Image}>
        <img src={imageRender(props.name, 'src')} alt="sss" />
      </div>
      <div className={classes.ImageNavigation}>
        <ul>
          <li>
            <img src={shoes[0].image} alt={shoes[0].name} />
          </li>
          <li>
            <img src={shoes[1].image} alt={shoes[1].name} />
          </li>
          <li>
            <img src={shoes[2].image} alt={shoes[2].name} />
          </li>
          <li>
            <img src={shoes[3].image} alt={shoes[3].name} />
          </li>
          <div className={classes.Clear}></div>
        </ul>
      </div>
    </React.Fragment>
  )
}
