import React from 'react';

import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import FamousArea from './components/FamousArea';
import LiveArea from './components/LiveArea';
import SeniorArea from './components/SeniorArea';
import SelectArea from './components/SelectArea';
import TypeArea from './components/TypeArea';


const bannerUrl=require('assets/ibanner.jpg');
const Intelligence = () => {
  return (
    <div className="App">
      <Header crtIndex={'intelligence'} />
      <img src={bannerUrl} style={{width:'1920px',height:'220px'}} alt=''>
      </img>
      <div style={{width:'1200px', margin:'0 auto'}}>
        <div style={{fontSize:'32px', fontWeight:'bold', height:'140px',lineHeight:'140px'}}>
                       在线直播课程
        </div>
        <LiveArea />
        <FamousArea />
        <div>
          <p style={{fontSize:'32px', fontWeight:'bold',textAlign:'left',lineHeight:'80px'}}>高级课程</p>
          <SeniorArea />
        </div>
        <div>
          <p style={{fontSize:'32px', fontWeight:'bold',textAlign:'left',lineHeight:'80px'}}>精选课程</p>
          <SelectArea />
        </div>
        <div>
          <div style={{height:'80px',textAlign:'left'}}>
            <span style={{fontSize:'32px', fontWeight:'bold',lineHeight:'80px'}}>分类课程</span>
            <span style={{fontSize:'24px', lineHeight:'80px',float:'right'}}>更多</span>
          </div>
                        
          <TypeArea />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Intelligence;