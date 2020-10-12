// js， hooks写法
import React from "react"
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'

const MineSide = () => {
  const compTabs = [
    {
      title: '学习中心',
      color: '#999',
    },
    {
      title: '实习管理',
      color: '#999',
    },
    {
      title: '我的成绩',
      color: '#999',
    },
    {
      title: '作业管理',
      color: '#999',
    },
    {
      title: '个人画像',
      color: '#3399CC',
    },
    {
      title: '我的收藏',
      color: '#999',
    },
    {
      title: '信息中心',
      color: '#999',
    },
  ]
  return (
    <div style={{ height: '400px', fontSize: '18px', color: '#999', background: '#eee', marginLeft: '30px', marginTop: '30px' }}>
      {compTabs.map((item, index) => (
        <div key={index} style={{ fontSize: '22px', height:'40px',lineHeight: '40px', color: item.color, textAlign: 'left', paddingLeft: '30px' }}>
          {item.title}
        </div>
      ))}
    </div>
  )
}


const MineView = (props = {}) => {
  const mine1 = require('styles/images/mine_1.png');
  const mine2 = require('styles/images/mine_2.png');
  const mine3 = require('styles/images/mine_3.png');
  const mine4 = require('styles/images/mine4.png');
  return (
    <div className='App'>
      <Header props={props} crtIndex={3} />
      <div className="body">
        <img src={mine1} style={{ height: 'auto', width: '100%' }} alt="" />

        <div>
          <div style={{ width: '300px', float: 'left', display: "inline-block" }}>
            <MineSide />
          </div>
          <div style={{ width: '850px', float: 'left', marginLeft: '50px', display: "inline-block" }}>
            <img src={mine4} style={{ height: 'auto', width: '100%' }} alt="" />
          </div>
        </div>
        <img src={mine3} style={{ height: 'auto', width: '100%' }} alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default MineView;