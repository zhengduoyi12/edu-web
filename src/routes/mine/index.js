// js， hooks写法
import React from "react"
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
const MineView = (props = {}) => {
  const mine1 = require('styles/images/mine_1.png');
  const mine2 = require('styles/images/mine_2.png');
  const mine3 = require('styles/images/mine_3.png');
  return (
    <div className='App'>
      <Header props={props} crtIndex={3} />
      <div className="body">
        <img src={mine1} style={{ height: 'auto', width: '100%' }} alt="" />
        <img src={mine2} style={{ height: 'auto', width: '100%' }} alt="" />
        <img src={mine3} style={{ height: 'auto', width: '100%' }} alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default MineView;