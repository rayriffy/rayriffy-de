import _ from 'lodash'
import React, { useState } from 'react'

import { Input, Typography } from 'antd'

import { keys } from '../data/database'

const { Paragraph } = Typography

const Home = props => {
  const [out, setOut] = useState('')

  const updateInputValue = val => {
    const i = val.target.value
    const o = []
    let en = 0
    let th = 0

    /* Check input lang */
    _.each([...i], char => {
      const filtered = _.filter(keys, o => o.key === char)
      _.each(filtered, key => {
        if (key.lang === 'en') en++
        else if (key.lang === 'th') th++
      })
    })

    /* Transform process */
    _.each([...i], char => {
      const filtered = _.head(_.filter(keys, o => o.key === char && o.lang === (en > th ? `en` : `th`)))
      const transformed = _.head(_.filter(keys, o => o.id === filtered.related))
      
      o.push(transformed.key)
    })

    setOut(o.join(''))
  }

  return (
    <>
      <Input size="large" placeholder="large size" onChange={updateInputValue} />
      <br />
      <Paragraph copyable>{out}</Paragraph>
    </>
  )
}

export default Home
