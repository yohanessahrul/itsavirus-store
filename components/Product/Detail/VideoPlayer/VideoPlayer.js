import React, { useState, useRef } from 'react'
import classes from './VideoPlayer.module.scss'
import Icon from '../../../UI/Icon'
import ReactPlayer from 'react-player'

export default function VideoPlayer(props) {
  const playerRef = useRef(null)
  const [pip, setPip] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [controls, setControls] = useState(true)
  const [light, setLight] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [loop, setLoop] = useState(false)

  return (
    <React.Fragment>
      <div className={classes.Player}>
        <div className={classes.PlayBtn} type="button" data-bs-toggle="modal" data-bs-target="#videoPlayerModal">
          <Icon viewBox="0 0 13 16" name="ico-play" height={16} fill="#131212" stroke="none" />
        </div>
        <div className={classes.Label} type="button" data-bs-toggle="modal" data-bs-target="#videoPlayerModal">play video</div>
      </div>
      <div className="modal fade" id="videoPlayerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className={classes.Screen}>
                <ReactPlayer
                  ref={playerRef}
                  className='react-player'
                  width='100%'
                  height='100%'
                  url={props.url}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={light}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  config={{
                    file: {
                      attributes: {
                        controlsList: 'nodownload'
                      }
                    }
                  }}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
