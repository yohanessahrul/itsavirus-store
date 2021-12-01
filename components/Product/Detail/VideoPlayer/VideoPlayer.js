import React from 'react'
import classes from './VideoPlayer.module.scss'
import Icon from '../../../UI/Icon'

export default function VideoPlayer(props) {
  return (
    <React.Fragment>
      <div className={classes.Player}>
        <div className={classes.PlayBtn}>
          <Icon viewBox="0 0 13 16" name="ico-play" height={16} fill="#131212" stroke="none" />
        </div>
        <div className={classes.Label}>play video</div>
      </div>
    </React.Fragment>
  )
}
