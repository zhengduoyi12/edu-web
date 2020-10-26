// 首页
import React from "react";
import { withRouter, useHistory } from 'react-router-dom';
import { Card, Input, Carousel, Button } from 'antd';


import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import bannerUrl from 'assets/images/prac_banner1.jpg';
import NewJob from "./components/NewJob";
import HotCmp from "./components/HotCmp";
import './style.scss';

const { Search } = Input;
const JobIndex = (props) => {
  const typeList = [
    { name: 'IT互联网', includes: '软件 运营 硬件', color: "#0099ff" },
    { name: 'IT互联网', includes: '商务 销售 公关', color: "#0099ff" },
    { name: '市场商务', includes: '市场营销' }, { name: 'IT互联网', includes: '软件 运营 硬件' },
    { name: 'IT互联网', includes: '商务 销售 公关' },
    { name: '市场商务', includes: '市场营销' }, { name: 'IT互联网', includes: '软件 运营 硬件' },
  ];
  const carouselList = [
    {
      url: require('assets/images/prac_crs6.jpg'),
    }, {
      url: require('assets/images/prac_crs6.jpg'),
    }, {
      url: require('assets/images/prac_crs6.jpg'),
    }, {
      url: require('assets/images/prac_crs6.jpg'),
    },
  ];

  const jobList = [
    { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
    { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
    { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
    { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
  ];
  const cmpList = [
    { name: '电器集团有限公司', site: "浙江宁波", week: "6天/周", month: "3个月", num: 100 },
    { name: '电器集团有限公司', site: "浙江宁波", week: "6天/周", month: "3个月", num: 100 },
    { name: '电器集团有限公司', site: "浙江宁波", week: "6天/周", month: "3个月", num: 100 },
    { name: '电器集团有限公司', site: "浙江宁波", week: "6天/周", month: "3个月", num: 100 },
  ];
  const compTabs = [
    { title: '1. 阿里巴巴', color: '#3399CC', },
    { title: '2. 网易', color: '#3399CC', },
    { title: '3. 海康威视', color: '#3399CC', },
    { title: '4. 浙江大华股份', color: '#999', },
    { title: '5. 恒生电子', color: '#999', },
    { title: '6. 浙江宇视科技有限公司', color: '#999', },
    { title: '7. 华三通信（H3C）', color: '#999', },
  ];
  const history = useHistory();

  function goSearchResult() {
    history.push("/search");
  }

  return (
    <div className="App">
      <Header />
      <img src={bannerUrl} style={{ width: '1920px', height: '220px' }} alt="" />
      <div className='jobTitles'>
        <Search placeholder="输入关键词" enterButton="搜索" style={{ width: 400 }} onSearch={() => { goSearchResult(); }} />
      </div>
      <div style={{ width: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ width: '400px', height: '376px' }}>
            <Card title="全部分类" onClick={() => { goSearchResult(); }} extra={<span style={{ color: '#999', fontSize: "18px",cursor:"pointer"}}>更多</span>} bordered={true}>
              {typeList.map((item, index) => {
                return <div key={index} style={{ fontSize: "18px", height: "35px", color: item.color || "#333" }}>
                  <span style={{ width: "173px", display: "inline-block" }}>{item.name}</span>
                  <span style={{ width: "173px", display: "inline-block" }}>{item.includes}</span>
                </div>;
              })}
            </Card>
          </div>
          <div style={{ width: '770px', height: '376px' }}>
            <Carousel autoplay>
              {carouselList.map((item, index) => (
                <div key={index} >
                  <img src={item.url} style={{ width: "770px", height: "354px" }} alt=""></img>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ width: '300px', height: '538px', fontSize: '18px', color: '#999', background: '#ddd' }}>
            <div style={{ height: '100px', fontSize: '32px', color: '#000', lineHeight: '100px' }}>
                            名企榜单
            </div>
            {compTabs.map((item, index) => (
              <div key={index} style={{ fontSize: '18px', lineHeight: '32px', color: item.color, textAlign: 'left', paddingLeft: '30px' }}>
                {item.title}
              </div>
            ))}
          </div>
          <div style={{ width: '800px', height: '400px' }}>
            <HotCmp cmpList={cmpList} />
          </div>
        </div>
        <div style={{ width: '140px', height: '40px', background: '#0099FF', color: 'white', margin: '30px auto 0' }}>
          <p onClick={() => { goSearchResult(); }} style={{ lineHeight: '40px', fontSize: '18px', fontWeight: 'bold',cursor:"pointer"}}>了解更多</p>
        </div>
        <div>
          <p style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>最新职位</p>
          <NewJob jobList={jobList} />
        </div>
        <div style={{ width: '140px', height: '40px', background: '#0099FF', color: 'white', margin: '30px auto 0' }}>
          <p onClick={() => { goSearchResult(); }} style={{ lineHeight: '40px', fontSize: '18px', fontWeight: 'bold',cursor:"pointer" }}>了解更多</p>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default JobIndex;