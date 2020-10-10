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

const TopBox = ({ name = "", index, src }) => {
  return (
    <div style={index === 0 ? localStyle.flex1 : localStyle.flex}>
      <div style={{ backgroundImage: `url(${src})`, height: '100%', color: '#fff', fontSize:'30px' }}>{name}</div>
    </div>
  )
}

// require只能引字符串
const content1Tabs = [
  {
    name: '人才画像',
    img: require('styles/images/u103_a.png')
  },
  {
    name: '数字媒体资源库',
    img: require('styles/images/u106_a.jpg')
  },
  {
    name: 'AI课堂',
    img: require('styles/images/u109_a.png')
  },
  {
    name: '智慧培训保障',
    img: require('styles/images/u112_a.jpg')
  },
]

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
          {content1Tabs.map((item, index) => (
            <TopBox key={index} name={item.name} index={index} src={item.img} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeView;