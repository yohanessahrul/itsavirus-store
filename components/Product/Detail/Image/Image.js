import React from 'react'
import classes from './Image.module.scss'
import { shoes } from '../../../../content/shoes'
import { imageRender } from '../../../../helper/global'
import Image from 'next/image'

export default function Images(props) {
  return (
    <React.Fragment>
      <div className={classes.Image}>
        <Image src={imageRender(props.name, 'src')} alt={props.name} width={500} height={500} />
      </div>
      <div className={classes.ImageNavigation}>
        <ul>
          <li>
            <Image src={shoes[0].image} alt={shoes[0].name} width={500} height={500}/>
          </li>
          <li>
            <Image src={shoes[1].image} alt={shoes[1].name} width={500} height={500}/>
          </li>
          <li>
            <Image src={shoes[2].image} alt={shoes[2].name} width={500} height={500}/>
          </li>
          <li>
            <Image src={shoes[3].image} alt={shoes[3].name} width={500} height={500}/>
          </li>
          <div className={classes.Clear}></div>
        </ul>
      </div>
    </React.Fragment>
  )
}
