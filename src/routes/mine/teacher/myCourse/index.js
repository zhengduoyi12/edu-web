import React from "react";
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const MyCourse = () => {

  return (
    <div className='my-course'>
      <Tabs defaultActiveKey="1">
        <TabPane tab="我创建的课程" key="1">
          <div>
            <Link to="/createCourse"><div className="create">
              <PlusOutlined /><div className="title">创建新课程</div>
            </div></Link>
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