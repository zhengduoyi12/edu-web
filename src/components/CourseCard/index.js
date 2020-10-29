import React from "react";
import './style.scss';

const CourseCard = (props={}) => {
  // const item = {
  //     "name": "MyAQL基础入门-数据库概述",
  //     "content": "南京大学基础课程",
  //     "img": require("assets/u161_a.png"),
  //     "member": "380"
  // };
  const {item} = props;

  return (
    <div className="course-card">
      <img src={item.img} alt="" />
      <div className="content">
        <div className="content-top">
          {item.name}
        </div>
        <div className="content-mid">
          {item.content}
        </div>
        <div className="content-bot">
          <div className="bot-left">
            <span>免费</span>
          </div>
          <div className="bot-right">380人已完成学习</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;