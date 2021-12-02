import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Icon from '../../UI/Icon'
import classes from './Menu.module.scss'
import Cookies from 'universal-cookie'
import { connect } from 'react-redux'
import * as productAction from '../../../redux/product/ProductAction'

const cookies = new Cookies()

function Menu(props) {
  // let carts = cookies.get('cart')

  // useEffect(() => {
  //   let carts = cookies.get('cart')
  //   props.onSetCartData(carts)
  // }, [])

  return (
    <div className={classes.Wrapper}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/" passHref>
            <div className="navbar-brand">
              <Icon name="ico-nike" viewBox="0 0 58 21" width={56} fill="#000000" stroke="none" />
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item pe-3">
                <Link href="/#" passHref>
                  <div className="nav-link active">
                    New Release
                  </div>
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link href="/#" passHref>
                  <div className="nav-link">
                    Men
                  </div>
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link href="/#" passHref>
                  <div className="nav-link">Women</div>
                </Link>
              </li>
              <li className="nav-item  pe-3">
                <Link href="/#" passHref>
                  <div className="nav-link">Kids</div>
                </Link>
              </li>
              <li className="nav-item  pe-3">
                <Link href="/#" passHref>
                  <div className="nav-link">Customize</div>
                </Link>
              </li>
            </ul>
            <div className="float-lg-end">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mb-4 ms-lg-5 py-2">
                <li className="nav-item">
                  <Link href="/bag" passHref>
                    <div className="nav-link">
                      <div className={classes.Icon}>
                        {props.cartRedux ? <div className={classes.Badge}>{props.cartRedux ? props.cartRedux.length : ''}</div> : null}
                        <Icon name="ico-bag" width={24} fill="#000000" stroke="none" />
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#" passHref>
                    <div className="nav-link">
                      <div className={classes.Icon}>
                        <Icon name="ico-user-circle" width={30} fill="#000000" stroke="none" />
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mb-4 ms-lg-5 py-2 d-block d-sm-block d-md-none">
                <li className="nav-item pe-3">
                  <Link href="/#" passHref>
                    <div className="nav-link" href="/#">Shopping</div>
                  </Link>
                </li>
                <li className="nav-item  pe-3">
                  <Link href="/#" passHref>
                    <div className="nav-link" href="/#">FAQ</div>
                  </Link>
                </li>
                <li className="nav-item  pe-3">
                  <Link href="/#" passHref>
                    <div className="nav-link" href="/#">Contact</div>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    cartRedux: state.ProductReducer.carts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCartData: (data) => dispatch(productAction.setCartsData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)