import React from 'react'
import Layout from '../../layout/Layout'
import Content from '../../layout/Content/Content'
import Detail from '../../containers/Detail/Detail'

const meta = {
  title: 'Nike - Product List',
  description: 'Voluptate nulla labore reprehenderit labore velit Lorem sunt.'
}

export default function ProductDetail() {
  return (
    <React.Fragment>
      <Layout meta={meta}>
        <Content>
          <Detail />
        </Content>
      </Layout>
    </React.Fragment>
  )
}
