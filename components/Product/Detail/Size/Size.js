import React from 'react'
import classes from './Size.module.scss'

export default function Size() {
  return (
    <React.Fragment>
      <div className={classes.Size}>
        <div className={classes.Label}>select size (us)</div>
        <ul>
          <li className={classes.Active}>8</li>
          <li>8.5</li>
          <li>9</li>
          <li>9.5</li>
          <li>10</li>
          <li>10.5</li>
          <li>11</li>
          <li>11.5</li>
          <li>12</li>
          <li>12.5</li>
          <div className={classes.Clear}></div>
        </ul>
      </div>
    </React.Fragment>
  )
}
