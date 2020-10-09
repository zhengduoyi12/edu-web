// 首页
import React, { useState } from "react"
import Header from 'components/header.js'

const HomeView = () => {
  const [crtIndex] = useState(0)


  return (
    <div className='App'>
      <Header />
      <h1>{crtIndex}</h1>
    </div>
  )
}

export default HomeView;