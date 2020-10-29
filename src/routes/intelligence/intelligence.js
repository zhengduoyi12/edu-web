import React from 'react';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
// 组件：在线直播、名师直播、高级课程、精选课程、分类课程
import LiveArea from './components/LiveArea';
import FamousArea from './components/FamousArea';
import SeniorArea from './components/SeniorArea';
import SelectArea from './components/SelectArea';
import TypeArea from './components/TypeArea';
import { Link } from 'react-router-dom';

// tofix, 样式抽离出去
const bannerUrl = require('assets/ibanner.jpg');
const Intelligence = () => {
  return (
    <div className="App">
      <Header />
      <img src={bannerUrl} style={{ width: '1200px', height: '220px' }} alt=''>
      </img>
      <div style={{ width: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '32px', fontWeight: 'bold', height: '140px', lineHeight: '140px' }}>
          在线直播课程
        </div>
        <LiveArea />
        <FamousArea />
        <div>
          <p style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'left', lineHeight: '80px' }}>高级课程</p>
          <SeniorArea />
        </div>
        <div>
          <p style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'left', lineHeight: '80px' }}>精选课程</p>
          <SelectArea />
        </div>
        <div>
          <div style={{ height: '80px', textAlign: 'left' }}>
            <span style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '80px' }}>分类课程</span>
            <Link to='searchCcourse' target='_blank'>
              <span style={{ fontSize: '24px', lineHeight: '80px', float: 'right' }}>更多</span>
            </Link>
          </div>
          <TypeArea />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Intelligence;