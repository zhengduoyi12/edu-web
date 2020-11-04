import React, { useState, useEffect } from "react";
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import CourseCard from './components/courseCard';
import { getAllCourse } from 'apis/course';

const { TabPane } = Tabs;

const MyCourse = () => {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourse().then(res => {
      const { code, data } = res;
      if (code == '00000') {
        setCourseList(data);
      }
    });
  }, []);
  console.log('courseList', courseList);

  return (
    <div className='my-course'>
      <Tabs defaultActiveKey="1">
        <TabPane tab="我创建的课程" key="1">
          <div className="course-area">
            <Link to="/createCourse">
              <div className="create">
                <PlusOutlined /><div className="title">创建新课程</div>
              </div>
            </Link>
            {
              courseList.map((item, i) => (<CourseCard key={i} item={item} />))
            }
          </div>
        </TabPane>
        <TabPane tab="我主讲的课程" key="2">
          Content of tab 2我主讲的课程
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MyCourse;