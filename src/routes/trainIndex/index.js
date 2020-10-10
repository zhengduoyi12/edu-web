// 首页
import React, { useState } from "react"
import Header from 'components/header.js'

const TrainIndex = () => {
  const [crtIndex] = useState('实训入口')


  return (
    <div className='App'>
      <Header />
      <h1>{crtIndex}</h1>
    </div>
  )
}

export default TrainIndex;