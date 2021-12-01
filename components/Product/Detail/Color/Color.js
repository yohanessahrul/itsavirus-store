import React from 'react'
import classes from './Color.module.scss'

export default function Color(props) {
  let colorList = props.colors.map((item, key) => {
    return (
      <li
        key={key}
        onClick={() => props.clickedToSetActiveColor(item?.name, item?.color_hash)}
        style={{ background: item?.color_hash }}
        className={props.activeColor === item?.color_hash ? classes.Active : ''}>
      </li>
    )
  })

  return (
    <React.Fragment>
      <div className={classes.Color}>
        <div className={classes.Label}>select color</div>
        <ul>
          {colorList}
          <div className={classes.Clear}></div>
        </ul>
      </div>
    </React.Fragment>
  )
}
