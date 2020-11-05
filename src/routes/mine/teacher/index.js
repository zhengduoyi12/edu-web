import React from "react";
import { Link, Route } from 'react-router-dom';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import { Button, Layout, Menu, Tabs,message } from 'antd';
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
  const preview = () =>{
    message.warning('后续更新！');
  };
  const publish = () =>{
    message.warning('后续更新！');

  };
  return (
    <div className='App teacher'>
      <Header />
      <div style={{ width: '100%', backgroundColor: '#00c0c0' }}>
        <div className="body" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '220px' }}>
          <img src={require('assets/teacher01.jpg')} style={{ width: '100px', height: '100px', borderRadius: '50%',marginLeft:40 }}></img>
          <div style={{ marginLeft: 20 }}>
            <div>昵称：</div>
            <div>身份认证：</div>
          </div>
          <div className="btn-area">
            <Button type="primary" shape="round" size="large" onClick={preview}>预览</Button>
            <Button type="primary" shape="round" size="large" onClick={publish}>发布</Button>
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