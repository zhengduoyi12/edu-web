import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import CourseCard from 'components/CourseCard';
import { Tabs } from "antd";
import Streaming from './Streaming';
import Recommend from './Recommend';
import CourseList from './CourseList';


const { TabPane } = Tabs;
const PublicTeacher = () => {
  const internshipList=[
    {img:require('assets/images/u161_a.png'), name:'MyAQL基础入门-数据库概述', content:'南京大学基础课程'},
    {img:require('assets/images/u169_a.png'), name:'MyAQL基础入门-数据库概述', content:'南京大学基础课程'},
    {img:require('assets/images/u177_a.png'), name:'MyAQL基础入门-数据库概述', content:'南京大学基础课程'},
    {img:require('assets/images/u161_a.png'), name:'MyAQL基础入门-数据库概述', content:'南京大学基础课程'},
  ];
  const teacherInfo = {
    name: "陈粒",
    fansNum: "109",
    intro:
      "浙江职业技术学校任教老师，从事汽修行业15年，拥有丰富的工作经验和教学经验，已经教授2000名学生，都被各大名企录取，例如：吉利......",
  };
  return (
    <div className="App">
      <Header />
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <div
          style={{
            height: "380px",
            backgroundColor: "#4682B4",
            textAlign: "center",
            paddingTop: "60px",
          }}
        >
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "0px auto",
            }}
            src={require("assets/images/people-3.jpg")}
          />
          <div
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "14px",
            }}
          >
            {teacherInfo.name}
          </div>

          <div style={{ color: "#ffffff" }}>
            粉丝数: {"\u00A0"} {teacherInfo.fansNum} {"\u00A0"}
          </div>
          <div
            style={{
              width: "90px",
              height: "24px",
              borderRadius: "2px",
              backgroundColor: "white",
              margin: "20px auto",
            }}
          >
            {" "}
            关注
          </div>
          <div
            style={{ color: "#ffffff", fontSize: "14px", marginTop: "14px" }}
          >
            {teacherInfo.intro}
          </div>
        </div>
        <Tabs defaultActiveKey="1" centered tabBarGutter={100}>
          <TabPane tab="主页" key="1">
            <Streaming/>
            <Recommend/>
            <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000", marginBottom:"20px",textAlign:'left'}}>其他课程</div>
            {internshipList.map((item, index) => (
              <CourseCard key={index} item={item}/>
            ))}
          </TabPane>
          <TabPane tab="课程" key="2">
            <CourseList />
          </TabPane>
          <TabPane tab="老师" key="3"></TabPane>
          <TabPane tab="关于我们" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default PublicTeacher;
