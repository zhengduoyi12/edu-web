// 首页
import React, { useRef, useEffect, useState } from "react";
import { Carousel } from 'antd';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import TrainIndex from './components/TrainIndex.js';
import TradeIndex from './components/TradeIndex.js';
import ResumeIndex from './components/ResumeIndex.js';
import TeacherIndex from './components/TeacherIndex.js';
import { homeBannerList, homeTopBoxTabs } from "utils";
import { getHomeBannerInfo, getHomeInfo } from 'apis';
import './home.css';

const TopBox = ({ name = "", index, src }) => {
  return (
    <div className="topItem" style={{ marginLeft: index === 0 ? 0 : '27px' }}>
      <div style={{ backgroundImage: `url(${src})`, height: '100%', color: '#fff', fontSize: '30px' }}>{name}</div>
    </div>
  );
};

// 内容3部分组件
const JobIndex = ({ jobTabs = [] }) => {
  return (
    <div>
      <div className='row'>
        <span className='home_title'>实习就业</span>
        <span className='home_desc'>对接学校和企业，完培训就业一体</span>
        <span className='home_more'>查看更多</span>
      </div>
      <div style={{ textAlign: 'left' }}>
        {jobTabs.map((item, index) => (
          <div key={index} style={{ height: '300px', width: '280px', display: 'inline-block', marginLeft: index === 0 ? '0px' : '30px', borderColor: '#999', borderWidth: '1px', borderStyle: 'solid' }}>
            <img src={item.img} style={{ height: '172px', width: '100%' }} alt="" />
            <div style={{ padding: '8px' }}>
              <div style={{ height: '60px', fontSize: '18px' }}>
                {item.title}
              </div>
              <div style={{ height: '20px', fontSize: '14px', color: '#999' }}>
                南京大学基础课程
                </div>
              <div style={{ marginTop: '10px' }}>
                <div style={{ textAlign: 'left', width: '30%', display: 'inline-block' }}>
                  <span style={{ background: '#13B5B1', color: '#fff', width: '50px', height: '22px', lineHeight: '18px', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>免费</span>
                </div>
                <div style={{ textAlign: 'right', width: '60%', display: 'inline-block' }}>380人已完成学习</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompanyRank = ({ compTabs = [] }) => {
  return (
    <div style={{ height: '400px', fontSize: '18px', color: '#999', background: '#ddd', marginLeft: '30px' }}>
      <div style={{ height: '100px', fontSize: '32px', color: '#000', lineHeight: '100px' }}>
        名企榜单
    </div>
      {compTabs.map((item, index) => (
        <div key={index} style={{ fontSize: '18px', lineHeight: '32px', color: item.color, textAlign: 'left', paddingLeft: '30px' }}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

// header
// 内容1: banner
// 内容2：四大资源
// 内容3：实习就业+名企榜单
// 内容4：智慧培训
// 内容5：数字媒体交易
// 内容6：优秀人才
// 内容7：双师互聘
// footer
const HomeView = () => {
  const bannerRef = useRef();
  const [bannerHoverList, setBannerHoverList] = useState([]);
  const [compTabs, setCompTabs] = useState([]);
  const [jobTabs, setJobTabs] = useState([]);

  useEffect(() => {
    getHomeBannerInfo().then((res) => {
      setBannerHoverList(res);
    }, (e) => {
      console.log(e);
    });
    getHomeInfo().then((res) => {
      setCompTabs(res.compTabs);
      setJobTabs(res.jobTabs);
    }, (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div className='App'>
      <Header crtIndex={1} />
      <div className='body_wrap1920'>
        <div className="body">
          <div className="bannerHover">
            {bannerHoverList.map((text, index) => (
              <div key={index} >
                <div className="bannerInfo" onClick={() => {
                  bannerRef.current.goTo(index);
                }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
        <Carousel ref={bannerRef} autoplay autoplaySpeed={5000}>
          {homeBannerList.map((item, index) => (
            <div key={index} >
              <div style={{ backgroundImage: `url('${item.url}')`, height: '360px', color: '#fff' }} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='body'>
        <div className='rowFlex'>
          {homeTopBoxTabs.map((item, index) => (
            <TopBox key={index} name={item.name} index={index} src={item.img} />
          ))}
        </div>
        <div className='rowFlex' style={{ height: '400px', marginTop: '28px' }}>
          <div className='flex3'>
            <JobIndex jobTabs={jobTabs} />
          </div>
          <div className='flex1'>
            <CompanyRank compTabs={compTabs} />
          </div>
        </div>
        <TrainIndex />
        <TradeIndex />
        <ResumeIndex />
        <TeacherIndex />
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;