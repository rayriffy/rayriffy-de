import _ from 'lodash'
import React, { useState } from 'react'

import { Row, Col, Input, Typography } from 'antd'
import styled from 'styled-components'

import { keys } from '../data/database'

const { Paragraph } = Typography

const Output = styled(Paragraph)`
  text-align: center;
  font-size: 22px;
  margin: 25px 0;
`

const Desc = styled(Paragraph)`
  text-align: center;
  font-size: 16px;
`

const Home = props => {
  const [out, setOut] = useState('')

  const updateInputValue = val => {
    const i = val.target.value
    const o = []
    let en = 0
    let th = 0

    /* Check input lang */
    _.each([...i], char => {
      if (char !== ' ') {
        const filtered = _.filter(keys, o => o.key === char)
        _.each(filtered, key => {
          if (key.lang === 'en') en++
          else if (key.lang === 'th') th++
        })
      }
    })

    /* Transform process */
    _.each([...i], char => {
      try {
        if (char !== ' ') {
          const filtered = _.head(_.filter(keys, o => o.key === char && o.lang === (en > th ? `en` : `th`)))
          const transformed = _.head(_.filter(keys, o => o.id === filtered.related))
          
          o.push(transformed.key)
        } else {
          o.push(' ')
        }
      } catch {
        o.push(char)
      }
    })

    setOut(o.join(''))
  }

  return (
    <>
      <Row>
        <Col span={22} offset={1}>
          <Desc strong>เปลี่ยนประโยคหรือข้อความที่พิมพ์ผิดจากภาษาอังกฤษให้เป็นภาษาไทยเวลาลืมกดเปลี่ยนภาษา</Desc>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 20, offset: 2}} sm={{span: 14, offset: 5}} md={{span: 8, offset: 8}}>
          <Input size="large" placeholder="rb,rNg]plb0Ut" onChange={updateInputValue} />
        </Col>
      </Row>
      <Row>
        <Output copyable>{out}</Output>
      </Row>
    </>
  )
}

export default Home
