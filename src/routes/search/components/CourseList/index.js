import React from "react";
import CourseCard from 'components/CourseCard';

const CourseList= (props={}) => {
  const {courseList} = props;
  return (
    <div className="list-course">
      {
        courseList.map((item,i)=>(
          <CourseCard key={i} item={item} />
        ))
      }
    </div>
  );
};

export default CourseList;