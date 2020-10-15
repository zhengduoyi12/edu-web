// 首页
import React, {useRef} from "react"
import { Carousel } from 'antd';
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import TrainIndex from './components/TrainIndex.js';
import TradeIndex from './components/TradeIndex.js';
import ResumeIndex from './components/ResumeIndex.js';
import TeacherIndex from './components/TeacherIndex.js';
import { baseStyle } from "../../styles/baseStyle.js";
import './login.css'
import { cache, UniqueFn } from "utils";

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
  red: {
    color: 'red'
  },
  yellow: {
    background: 'yellow'
  }
}

const TopBox = ({ name = "", index, src }) => {
  return (
    <div style={index === 0 ? localStyle.flex1 : localStyle.flex}>
      <div style={{ backgroundImage: `url(${src})`, height: '100%', color: '#fff', fontSize: '30px' }}>{name}</div>
    </div>
  )
}

// 内容3部分组件
const JobIndex = () => {
  const jobTabs = [
    {
      title: 'MyAQL基础入门-数据库概述',
      img: require('assets/images/u161_a.png'),
    },
    {
      title: 'MyAQL基础入门-数据库概述',
      img: require('assets/images/u169_a.png')
    },
    {
      title: '培养专业数据人才-大数据分析基础课第一节',
      img: require('assets/images/u177_a.png')
    },
  ]
  return (
    <div>
      <div style={{ fontSize: '18px', color: '#999', textAlign: 'left', height: '95px' }}>
        <span style={{ fontSize: '32px', marginRight: '20px', color: '#000', display: 'inline-block' }}>实习就业</span>
        <span style={{ marginTop: '53px', display: 'inline-block' }}>对接学校和企业，完培训就业一体</span>
        <span style={{ marginTop: '53px', float: 'right' }}>查看更多</span>
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
  )
}

const CompanyRank = () => {
  const compTabs = [
    {
      title: '1. 阿里巴巴',
      color: '#3399CC',
    },
    {
      title: '2. 网易',
      color: '#3399CC',
    },
    {
      title: '3. 海康威视',
      color: '#3399CC',
    },
    {
      title: '4. 浙江大华股份',
      color: '#999',
    },
    {
      title: '5. 恒生电子',
      color: '#999',
    },
    {
      title: '6. 浙江宇视科技有限公司',
      color: '#999',
    },
    {
      title: '7. 华三通信（H3C）',
      color: '#999',
    },
  ]
  return (
    <div style={{ height: '400px', fontSize: '18px', color: '#999', background: '#ddd', marginLeft: '30px' }}>
      <div style={{ height: '100px', fontSize: '32px', color: '#000', lineHeight: '100px' }}>
        名企榜单
    </div>
      {compTabs.map((item, index) => (
        <div key={index} style={{ fontSize: '18px', lineHeight: '32px', color: item.color, textAlign:'left', paddingLeft:'30px'}}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

// require只能引字符串
const content1Tabs = [
  {
    name: '人才画像',
    img: require('assets/images/u103_a.png')
  },
  {
    name: '数字媒体资源库',
    img: require('assets/images/u106_a.jpg')
  },
  {
    name: 'AI课堂',
    img: require('assets/images/u109_a.png')
  },
  {
    name: '智慧培训保障',
    img: require('assets/images/u112_a.jpg')
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

const banneHoverList = ['浙江经济职业技术学院', '培训风采', '桐乡首家！试点单位', '浙江经济职业技术学院', '义乌高鸿培训合作对接']
// header
// 内容1: banner
// 内容2：四大资源
// 内容3：实习就业+名企榜单
// 内容4：智慧培训
// 内容5：数字媒体交易
// 内容6：优秀人才
// 内容7：双师互聘
// footer
const HomeView = (props = {}) => {
  const bannerRef = useRef();
  cache.set('ws',10000000000);
  console.log(cache.get('ws'))
  console.log(UniqueFn([{a:'1',b:'2', b:'3'}], 'a'))
  return (
    <div className='App'>
      <Header crtIndex={1} />
      <div className='body_wrap1920'>
        <div className="body">
          <div className="bannerHover">
            {banneHoverList.map((text, index) => (
              <div key={index} >
                <div style={{ color: '#fff', lineHeight: '42px',fontSize:'18px', cursor: 'pointer' }} onClick={()=>{
                  bannerRef.current.goTo(index);
                }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
        <Carousel ref={bannerRef} autoplay autoplaySpeed={5000}>
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
        <div style={{ height: '400px', display: 'flex', marginTop: '28px' }}>
          <div style={{ flex: 3 }}>
            <JobIndex />
          </div>
          <div style={{ flex: 1 }}>
            <CompanyRank />
          </div>
        </div>
        <TrainIndex />
        <TradeIndex />
        <ResumeIndex />
        <TeacherIndex />
      </div>
      <Footer />
    </div>
  )
}

export default HomeView;