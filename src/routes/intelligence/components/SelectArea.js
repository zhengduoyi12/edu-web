// 智慧培训-精选课程
import React from "react";
import CourseCard from 'components/CourseCard';

const SelectArea = () => {
  const classTabs = [
    {
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
      "name": "全技能数据人才培养方案：第一课理论基础",
      "content": "湖南大学基础课程",
      "img": require("assets/u177_a.png"),
      "member": "380"
    }, {
      "name": "MyAQL基础入门-数据库概述",
      "content": "南京大学基础课程",
      "img": require("assets/u161_a.png"),
      "member": "380"
    }
  ];
  return (
    <div>
      {
        classTabs.map((item, i) => (<CourseCard key={i} item={item} />))
      }
    </div>
  );
};

export default SelectArea;