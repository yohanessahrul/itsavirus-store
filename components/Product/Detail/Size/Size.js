import React from 'react'
import classes from './Size.module.scss'

export default function Size(props) {

  let sizeList = props.sizes.map((item, key) => {
    return (
      <li
        key={key}
        onClick={() => props.clickedToSetActiveSize(item)}
        className={props.activeSize === item ? classes.Active : ''}>
          {item}
      </li>
    )
  })

  return (
    <React.Fragment>
      <div className={classes.Size}>
        <div className={classes.Label}>select size (us)</div>
        <ul>
          {sizeList}
          <div className={classes.Clear}></div>
        </ul>
      </div>
    </React.Fragment>
  )
}
