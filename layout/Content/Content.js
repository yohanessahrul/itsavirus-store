import React from 'react'
import classes from './Content.module.scss'

export default function Content(props) {
  return (
    <div className={classes.Wrapper}>
      {props.children}
    </div>
  )
}
