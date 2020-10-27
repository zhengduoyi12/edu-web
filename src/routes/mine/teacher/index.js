import React from "react";
import { Link, Route } from 'react-router-dom';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import { Layout, Menu, Tabs } from 'antd';
import MyCourse from './myCourse';
import MyLive from './myLive';
import InternshipManage from './internshipManage';
import JobManage from './jobManage';
import MsgCenter from './msgCenter';

import './index.scss';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { TabPane } = Tabs;

const TeacherHome = () => {

  return (
    <div className='App'>
      <Header />
      <div style={{ width: '100%', backgroundColor: '#00c0c0' }}>
        <div className="body" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '220px' }}>
          <img src={require('assets/teacher01.jpg')} style={{ width: '100px', height: '100px', borderRadius: '50%' }}></img>
          <div>
            <div>昵称：</div>
            <div>身份认证：</div>
          </div>
        </div>
      </div>
      <div className="body" style={{ marginTop: '40px' }}>
        <Tabs defaultActiveKey="1" tabPosition="left" style={{ minHeight: 220 }}>
          <TabPane tab="我的排课" key="1">
            <MyCourse />
          </TabPane>
          <TabPane tab="我的直播" key="2">
            <MyLive />
          </TabPane>
          <TabPane tab="实习管理" key="3">
            <InternshipManage />
          </TabPane>
          <TabPane tab="实训管理" key="4">
            <JobManage />
          </TabPane>
          <TabPane tab="信息中心" key="5">
            <MsgCenter />
          </TabPane>

        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherHome;