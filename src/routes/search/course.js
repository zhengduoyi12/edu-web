import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CourseTag from './components/CourseTag';
import CourseList from './components/CourseList';
import { Input, Pagination } from 'antd';

const { Search } = Input;
const SearchCourse = () => {
  const courseList = [
    {
      "name": "全技能数据人才培养方案：第一课理论基础",
      "content": "湖南大学基础课程",
      "img": require("assets/u177_a.png"),
      "member": "380"
    }, {
      "name": "MyAQL基础入门-数据库概述",
      "content": "南京大学基础课程",
      "img": require("assets/u161_a.png"),
      "member": "380"
    }, {
      "name": "MyAQL基础入门-数据库概述",
      "content": "南京大学基础课程",
      "img": require("assets/u161_a.png"),
      "member": "380"
    }, {
      "name": "MyAQL基础入门-数据库概述",
      "content": "南京大学基础课程",
      "img": require("assets/u169_a.png"),
      "member": "380"
    }, {
      "name": "MyAQL基础入门-数据库概述",
      "content": "南京大学基础课程",
      "img": require("assets/u161_a.png"),
      "member": "380"
    }, {
      "name": "MyAQL基础入门-数据库概述",
      "content": "南京大学基础课程",
      "img": require("assets/u161_a.png"),
      "member": "380"
    },
  ];
  return (
    <div className="App">
      <Header crtIndex='/course' />
      <div className="body course">
        <div className="course-search">
          <Search placeholder="输入关键词" enterButton="搜索" style={{ width: 400 }} />
        </div>
        <div className="course-container">
          <CourseTag />
          <CourseList courseList={courseList} />
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SearchCourse;
