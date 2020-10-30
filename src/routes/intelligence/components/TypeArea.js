// 智慧培训-分类课程
import React, { useEffect, useState } from "react";
import { Tabs } from 'antd';
import CourseCard from 'components/CourseCard';

import { getTypeClass } from 'apis/class';

const { TabPane } = Tabs;

const TypeArea = () => {
  const [typeCourse, setTypeCourse] = useState([]);
  useEffect(() => {
    getTypeClass().then((res) => {
      setTypeCourse(res.typeCourse);
    }, (e) => {
      console.log(e);
    });
  }, []);
  return (
    <div>
      <Tabs defaultActiveKey="1">
        {
          typeCourse.map((it, i) => (
            <TabPane tab={it.name} key={i}>
              {
                it['class'].map((item, i) => (<CourseCard key={i} item={item} />))
              }
            </TabPane>
          ))
        }
      </Tabs>
    </div>
  );
};

export default TypeArea;