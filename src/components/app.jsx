import React from 'react'

import { Row, Col, Typography, Divider, Layout } from 'antd'
import styled from 'styled-components'

const { Content, Footer } = Layout
const { Title, Text } = Typography

const Header = styled(Title)`
  font-size: 38px;
  font-weight: 700 !important;
  display: inline-block;
  margin: 50px 0 0 0;
`

const Dash = styled(Divider)`
  margin: 0 0 20px 0 !important;
`

const App = props => {
  const {children} = props

  return (
    <Layout>
      <Content>
        <Row>
          <Col xs={{span: 20, offset: 2}} md={{span: 14, offset: 5}}>
            <Header level={1}>Riffy de</Header>
          </Col>
        </Row>
        <Dash />
        {children}
      </Content>
      <Footer style={{textAlign: 'center', backgroundColor: 'transparent'}}>
        <Text>Built with love by</Text> <a href="https://facebook.com/rayriffy">r4yr1ffy</a>
      </Footer>
    </Layout>
  )
}

export default App
