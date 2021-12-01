import React from 'react'
import Head from './Head'
import TopMenu from '../components/NonProduct/TopMenu/TopMenu'
import Menu from '../components/NonProduct/Menu/Menu'

export default function Layout(props) {
  return (
    <React.Fragment>
      <Head meta={props.meta}/>
      <TopMenu />
      <Menu />
      {props.children}
    </React.Fragment>
  )
}
