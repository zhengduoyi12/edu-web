import React from "react";
import { Link } from 'react-router-dom';
import CourseCard from 'components/CourseCard';
const classTabs = [
  {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u161_a.png"),
    
  }, {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u169_a.png"),
  }, {
    name: "全技能数据人才培养方案：第一课理论基础",
    content: "湖南大学基础课程",
    img: require("assets/u177_a.png"),
  }, {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u161_a.png"),
  },
  {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u161_a.png"),
  }, {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u169_a.png"),
  }, {
    name: "全技能数据人才培养方案：第一课理论基础",
    content: "湖南大学基础课程",
    img: require("assets/u177_a.png"),
  }, {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u161_a.png"),
  },
  {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u161_a.png"),
  }, {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u169_a.png"),
  }, {
    name: "全技能数据人才培养方案：第一课理论基础",
    content: "湖南大学基础课程",
    img: require("assets/u177_a.png"),
  }, {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u161_a.png"),
  }, {
    name: "全技能数据人才培养方案：第一课理论基础",
    content: "湖南大学基础课程",
    img: require("assets/u177_a.png"),
  }, {
    name: "MyAQL基础入门-数据库概述",
    content: "南京大学基础课程",
    img: require("assets/u161_a.png"),
  }
];


const AllCourse = () => {
  
  return (
    <div style={{textAlign:'left'}}>
      <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000",marginBottom:"20px"}}>全部课程</div>
      <div style={{textAlign:'left',display: 'flex', flexWrap: "wrap",justifyContent:'flex-around'}}>
        {
          classTabs.map((item, index) => {
            return (
              <CourseCard key={`classList_` + index} item={item}/>
            );
          })
        }
      </div>
    </div>
    
  );
};

export default AllCourse;