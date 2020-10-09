// todo，jsx如何接受参数和实现跳转，如何获取到props
// tocheck，jsx更适合写组件?
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const onClick = () => {
    console.log('123456')
}

const Home = () => (
  <div>
    <p>this is home page</p>
    <Link to="/about">goto About</Link>
    <Button onClick={onClick}>Click</Button>
  </div>
)

export default Home