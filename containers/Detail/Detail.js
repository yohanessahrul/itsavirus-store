import React from 'react'
import classes from './Detail.module.scss'
import { useRouter } from 'next/router'
import Icon from '../../components/UI/Icon'
import Image from '../../components/Product/Detail/Image/Image'
import Size from '../../components/Product/Detail/Size/Size'
import Color from '../../components/Product/Detail/Color/Color'
import VideoPlayer from '../../components/Product/Detail/VideoPlayer/VideoPlayer'

export default function Detail() {
  const router = useRouter()

  return (
    <div className={classes.Wrapper}>
      <div className='container'>
        <div className={classes.Row}>
          <div className={classes.Left}>
            <Image />
          </div>
          <div className={classes.Right}>
            <div className={classes.Category}>men shoe</div>
            <div className={classes.Title}>nike air edge</div>
            <div className={classes.Description}>The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.</div>
            <VideoPlayer />
            <Size />
            <Color />
          </div>
        </div>
        <div className={classes.BtnGroup}>
          <div className='row'>
            <div className='col-md-9'>
              <div className={classes.FreeShippingNotes}>
                <div className={classes.Icon}></div>
                <Icon name="ico-free-delivery" width={18} fill="#000000" stroke="none" />
                free shipping over $100 purchase
              </div>
            </div>
            <div className='col-md-3 d-grid gap-2'>
              <div className={classes.Button} onClick={() => router.push('/bag')}>
                <div className={classes.Label}>
                  add to bag - $95.97
                </div>
                <div className={classes.Icon}>
                  <Icon name="ico-arrow-ligth-long" width={20} fill="#FFFFFF" stroke="none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
