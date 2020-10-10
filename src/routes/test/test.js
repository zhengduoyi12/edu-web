// js， hooks写法
import React, { useState } from "react"
import Header from 'components/Header.js'

const TestView = (props = {}) => {
  console.log(props.location.params && props.location.params.id)
  const [n, setN] = useState(0)

  const onClick = () => {
    setN(100)
  }

  const go = () => {
    props.history.push({
      pathname: '/home',
      params: {
        id: n
      }
    });
  }

  return (
    <div className='App'>
      <Header props={props} />
      <h1>{n}</h1>
      <button onClick={onClick}>Click</button>
      <button onClick={go}>go Home</button>
    </div>
  )
}

export default TestView;