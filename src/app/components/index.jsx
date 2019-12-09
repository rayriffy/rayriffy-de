import React from 'react'
import {Helmet} from 'react-helmet'

import 'antd/dist/antd.css'

import PropTypes from 'prop-types'

import {Row, Col, Typography, Divider, Layout} from 'antd'
import {Global, css} from '@emotion/core'
import styled from '@emotion/styled'

const {Content, Footer} = Layout
const {Title, Text} = Typography

const Header = styled(Title)`
  font-size: 38px;
  font-weight: 700 !important;
  display: inline-block;
  margin: 50px 0 0 0;
`

const Dash = styled(Divider)`
  margin: 0 0 20px 0 !important;
`

const StyledFooter = styled(Footer)`
  text-align: center !important;
  background-color: transparent !important;
`

const App = props => {
  const {children} = props

  return (
    <React.Fragment>
      <Helmet defaultTitle="Riffy de" titleTemplate="%s · Riffy de" />
      <Global
        styles={css`
          body {
            background-color: #f0f2f5;
          }
        `}
      />
      <Layout>
        <Content>
          <Row>
            <Col xs={{span: 20, offset: 2}} md={{span: 14, offset: 5}}>
              <Header level={1}>Riffy de</Header>
            </Col>
            <Col xs={{span: 20, offset: 2}} md={{span: 14, offset: 5}}>
              <Dash />
            </Col>
          </Row>
          {children}
        </Content>
        <StyledFooter>
          <Text>Built with love by</Text> <a href="https://facebook.com/rayriffy">r4yr1ffy</a>
        </StyledFooter>
      </Layout>
    </React.Fragment>
  )
}

export default App

App.propTypes = {
  children: PropTypes.node,
}
