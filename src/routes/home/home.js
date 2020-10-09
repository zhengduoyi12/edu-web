// 首页
import React, { useState } from "react"
import Header from 'components/header.js'
import { Carousel } from 'antd';

const contentStyle = {
  height: '250px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};

const localStyle = {
  flex: {
    height: '90px',
    lineHeight: '90px',
    flex: 1,
    margin: '20px',
    background: '#364d79',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
}

// header
// 内容1: banner
// 内容2：四大资源

const TopBox = ({ name = "" }) => {
  return (
    <div style={localStyle.flex}>{name}</div>
  )
}

const tabs = ['人才画像', '数字媒体资源库', 'AI课堂', '智慧培训保障']

const HomeView = () => {
  const [crtIndex] = useState(0)


  return (
    <div className='App'>
      <Header />
      <div className='body'>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <div style={{ display: "flex" }}>
          {tabs.map((name) => (
            <TopBox name={name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeView;