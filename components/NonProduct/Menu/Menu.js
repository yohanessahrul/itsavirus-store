import React from 'react'
import Link from 'next/link'
import Icon from '../../UI/Icon'
import classes from './Menu.module.scss'

export default function Menu() {
  return (
    <div className={classes.Wrapper}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <Icon name="ico-nike" viewBox="0 0 58 21" width={56} fill="#000000" stroke="none" />
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item pe-3">
                <Link href="/#">
                  <a className="nav-link active">New Release</a>
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link href="/#">
                  <a className="nav-link">Men</a>
                </Link>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="/#">Women</a>
              </li>
              <li className="nav-item  pe-3">
                <a className="nav-link" href="/#">Kids</a>
              </li>
              <li className="nav-item  pe-3">
                <a className="nav-link" href="/#">Customize</a>
              </li>
            </ul>
            <div className="float-lg-end">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mb-4 ms-lg-5 py-2">
                <li className="nav-item">
                  <a className="nav-link" href="/bag">
                    <div className={classes.Icon}>
                      <div className={classes.Badge}>2</div>
                      <Icon name="ico-bag" width={24} fill="#000000" stroke="none" />
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <div className={classes.Icon}>
                      <Icon name="ico-user-circle" width={30} fill="#000000" stroke="none" />
                    </div>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mb-4 ms-lg-5 py-2 d-block d-sm-block d-md-none">
                <li className="nav-item pe-3">
                  <a className="nav-link" href="/#">Shopping</a>
                </li>
                <li className="nav-item  pe-3">
                  <a className="nav-link" href="/#">FAQ</a>
                </li>
                <li className="nav-item  pe-3">
                  <a className="nav-link" href="/#">Contact</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
