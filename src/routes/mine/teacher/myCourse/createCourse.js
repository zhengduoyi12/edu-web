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

import { addCourseInfo,getCourseInfo,addLesson } from 'apis/course';

import '../index.scss';

const { TabPane } = Tabs;

const TeacherHome = (props={}) => {
  const {id} = props.match.params;
  const [activeKey,setActiveKey] = useState('2');
  const [courseId, setCourseId] = useState(0);
  const [courseForm,setCourseForm] = useState({});
  const [courseGet,setCourseGet] = useState({});
  const [baseGet,setBaseGet] = useState({});
  const [lessonForm,setLessonForm] = useState([]);
  const createBaseKey = () => {
    setActiveKey('3');
  };
  const createPicKey = () => {
    setActiveKey('4');
  };
  const createTeachKey = () => {
    setActiveKey('6');
  };
  const createPriceKey = () => {
    setActiveKey('7');
  };
  const createAuthKey = () => {
    addCourseInfo(courseForm).then(res=>{
      const {code,data} = res;
      if(code=='00000'){
        console.log('data=>',data);
        setCourseId(data);
      }
    });
    setActiveKey('9');
  };
  const createSectionKey = () => {
    addLesson(lessonForm).then(res=>{
      const {code,data} = res;
      if(code=='00000'){
        console.log('data=>',data);
      }
    });
    // lessonForm
  };

  useEffect(()=>{
    if(id) {
      getCourseInfo({courseId:id}).then(res=>{
        const {code,data} = res;
        if(code=='00000') {
          // setCourseGet(data);
          setBaseGet({
            courseName:data.courseName,
            forPerson:data.forPerson,
            difficulty:data.difficulty,
            summary:data.summary,
            target:data.target,
            commonProblem:data.commonProblem,
            tagIndex:data.tagIndex,
          });
        }
      });
    }
  },[]);

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
            <CreateBase createBaseKey={createBaseKey} courseId={courseId} setCourseForm={setCourseForm} baseGet={baseGet} />
          </TabPane>
          <TabPane tab="课程图片" key="3">
            <CreatePic createPicKey={createPicKey} courseId={courseId} courseForm={courseForm} setCourseForm={setCourseForm}/>
          </TabPane>
          <TabPane tab="讲师信息" key="4">
            <CreateTeach createTeachKey={createTeachKey} courseId={courseId} courseForm={courseForm} setCourseForm={setCourseForm}/>
          </TabPane>
          <TabPane tab="课程设置" key="5" disabled></TabPane>
          <TabPane tab="课程价格" key="6">
            <CreatePrice createPriceKey={createPriceKey} courseId={courseId} courseForm={courseForm} setCourseForm={setCourseForm}/>
          </TabPane>
          <TabPane tab="课程权限" key="7">
            <CreateAuth createAuthKey={createAuthKey} courseForm={courseForm} setCourseForm={setCourseForm} />
          </TabPane>
          <TabPane tab="课程内容" key="8" disabled></TabPane>
          <TabPane tab="章节内容" key="9">
            <CreateSection courseId={courseId} createSectionKey={createSectionKey} setLessonForm={setLessonForm} />
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherHome;