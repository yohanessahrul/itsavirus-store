import React from 'react'
import classes from './Color.module.scss'

export default function Color(props) {
  return (
    <React.Fragment>
      <div className={classes.Color}>
        <div className={classes.Label}>select color</div>
        <ul>
          <li className={classes.Active} style={{ background: 'red' }}></li>
          <li style={{ background: 'green' }}></li>
          <li style={{ background: 'yellow' }}></li>
          <li style={{ background: 'hotpink' }}></li>
          <div className={classes.Clear}></div>
        </ul>
      </div>
    </React.Fragment>
  )
}
