import React from "react"
import Layout from "../layout/Layout"
import Content from "../layout/Content/Content"
import Home from '../containers/Home/Home'

const meta = {
  title: 'Nike - Product List', 
  description: 'Voluptate nulla labore reprehenderit labore velit Lorem sunt.'
}

export default function HomePage() {
  return (
    <React.Fragment>
      <Layout meta={meta}>
        <Content>
          <Home />
        </Content>
      </Layout>
    </React.Fragment>
  )
}
