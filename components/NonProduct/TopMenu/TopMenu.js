import React from 'react'
import Icon from '../../UI/Icon'
import classes from './TopMenu.module.scss'

export default function TopMenu() {
  return (
    <div className={classes.Wrapper}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-12'>
            <div className={classes.Left}>
              <div className={classes.Label}>english</div>
              <div className={classes.Icon}>
                <Icon name="ico-arrow-down" width={14} fill="#000000" stroke="none" />
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className={classes.Middle}>
              <div className={classes.FreeShippingNotes}>
                <div className={classes.Icon}></div>
                <Icon name="ico-free-delivery" width={18} fill="#000000" stroke="none" />
                free shipping over $100 purchase
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className={classes.Right}>
              <ul>
                <li>Shopping</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
