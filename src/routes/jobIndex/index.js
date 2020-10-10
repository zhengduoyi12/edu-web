// 首页
import React, { useState } from "react"

const PracticeIndex = () => {
  const [crtIndex] = useState('求职入口')


  return (
    <div className='App'>
      <h1>{crtIndex}</h1>
    </div>
  )
}

export default PracticeIndex;