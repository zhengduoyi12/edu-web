import React,{useEffect, useState,useCallback} from "react";
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import { Tabs, Breadcrumb } from 'antd';
import CreateBase from './components/CreateBase';
import CreatePic from './components/CreatePic';
import CreateTeach from './components/CreateTeach';
import CreateSection from './components/CreateSection';
import CreatePrice from './components/CreatePrice';
import CreateAuth from './components/CreateAuth';

import '../index.scss';

const { TabPane } = Tabs;

const TeacherHome = () => {
  const [activeKey,setActiveKey] = useState('2');
  const [courseId, setCourseId] = useState(0);
  const createBaseKey = () => {
    setActiveKey('3');
  };
  const createPicKey = () => {
    setActiveKey('4');
  };
  const createTeachKey = () => {
    setActiveKey('6');
  };

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
      <div className="body create-course" style={{ marginTop: '40px' }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="#/mine">我的排课</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>课程信息</Breadcrumb.Item>
        </Breadcrumb>,
        <Tabs defaultActiveKey="6" activeKey={activeKey} onChange={(key)=>{setActiveKey(key);}} tabPosition="left" style={{ minHeight: 220 }}>
          <TabPane tab="课程信息" key="1" disabled></TabPane>
          <TabPane tab="基本信息" key="2">
            <CreateBase createBaseKey={createBaseKey} setCourseId={setCourseId} />
          </TabPane>
          <TabPane tab="课程图片" key="3">
            <CreatePic createPicKey={createPicKey} courseId={courseId}/>
          </TabPane>
          <TabPane tab="讲师信息" key="4">
            <CreateTeach createTeachKey={createTeachKey} courseId={courseId}/>
          </TabPane>
          <TabPane tab="课程内容" key="5" disabled></TabPane>
          <TabPane tab="章节内容" key="6">
            <CreateSection courseId={courseId} />
          </TabPane>
          <TabPane tab="课程设置" key="7" disabled></TabPane>
          <TabPane tab="课程价格" key="8">
            <CreatePrice courseId={courseId}/>
          </TabPane>
          <TabPane tab="课程权限" key="9">
            <CreateAuth />
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherHome;