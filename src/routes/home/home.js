// 首页
import React, { useState } from "react"
import Header from 'components/header.js'
import { Carousel } from 'antd';

const localStyle = {
  flex: {
    height: '120px',
    lineHeight: '120px',
    flex: 1,
    marginTop: '18px',
    marginLeft: '27px',
    background: '#364d79',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  flex1: {
    height: '120px',
    lineHeight: '120px',
    flex: 1,
    marginTop: '18px',
    background: '#364d79',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
}

// header
// 内容1: banner
// 内容2：四大资源

const TopBox = ({ name = "", index }) => {
  return (
    <div style={index === 0 ? localStyle.flex1 : localStyle.flex}>{name}</div>
  )
}

const tabs = ['人才画像', '数字媒体资源库', 'AI课堂', '智慧培训保障']

const bannerList = [
  {
    url: 'http://cdn.qjycloud.com/u1_a.jpg',
  },
  {
    url: 'http://cdn.qjycloud.com/u3_a.jpg',
  },
  {
    url: 'http://cdn.qjycloud.com/u4_a.jpg',
  },
  {
    url: 'http://cdn.qjycloud.com/u8_a.jpg',
  },
  {
    url: 'http://cdn.qjycloud.com/u10_a.jpg',
  },
]



const HomeView = () => {
  const [crtIndex] = useState(0)


  return (
    <div className='App'>
      <Header />
      <div className='body_wrap'>
        <Carousel autoplay>
          {bannerList.map((item, index) => (
            <div key={index} >
              <div style={{ backgroundImage: `url('${item.url}')`, height: '360px', color: '#fff' }}>{index}</div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='body'>
        <div style={{ display: "flex" }}>
          {tabs.map((name, index) => (
            <TopBox key={name} name={name} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeView;