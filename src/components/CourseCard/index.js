import React from "react";
import './style.scss';
import { Link } from 'react-router-dom';

const CourseCard = (props={}) => {

  const {item} = props;

  return ( 
    <div className="course-card">
      <Link to={{pathname:`/classDetails/${item.name}`}} target="_blank">
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
      </Link>
    </div>
  );
};

export default CourseCard;