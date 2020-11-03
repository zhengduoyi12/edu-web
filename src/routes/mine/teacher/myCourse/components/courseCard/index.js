import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

const CourseCard = (props = {}) => {
  const { item } = props;
  return (
    <Link to={{ pathname: `/createCourse/${item.id}` }}>
      <Card>
        <div className="box">
          <img src="" alt="" />
          <div className="title">{item.courseName}</div>
          <div className="label">{item.forPerson}</div>
        </div>
      </Card>
    </Link>

  );
};

export default CourseCard;