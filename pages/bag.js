import React from 'react'
import Content from '../layout/Content/Content'
import Layout from '../layout/Layout'
import Bag from '../containers/Bag/Bag'

export default function bag() {
  return (
    <React.Fragment>
      <Layout>
        <Content>
          <Bag />
        </Content>
      </Layout>
    </React.Fragment>
  )
}
