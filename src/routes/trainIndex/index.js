// 首页
import React, { useState } from "react"

const TrainIndex = () => {
  const [crtIndex] = useState('实训入口')


  return (
    <div className='App'>
      <h1>{crtIndex}</h1>
    </div>
  )
}

export default TrainIndex;