// 首页
import React, { useState } from "react"
import Header from 'components/header.js'

const Practice = () => {
  const [crtIndex] = useState('实习')


  return (
    <div className='App'>
      <Header />
      <h1>{crtIndex}</h1>
    </div>
  )
}

export default Practice;