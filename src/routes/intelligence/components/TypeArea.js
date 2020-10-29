// 智慧培训-分类课程
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';

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
                it['class'].map((item, index) => {
                  return (
                    <div key={index} style={{ marginBottom: "69px", height: '300px', width: '274px', display: 'inline-block', marginLeft: index === 0 ? '0px' : '30px' }}>
                      <Link to={{ pathname: `/classDetails/${index}` }} target='_blank'>
                        <div style={{ height: '300px', width: '280px', display: 'inline-block', borderColor: '#999', borderWidth: '1px', borderStyle: 'solid' }}>
                          <img src={item.img} style={{ height: '172px', width: '100%' }} alt="" />
                          <div style={{ padding: '8px' }}>
                            <div style={{ height: '60px', fontSize: '18px' }}>
                              {item.name}
                            </div>
                            <div style={{ height: '20px', fontSize: '14px', color: '#999' }}>
                              {item.content}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                              <div style={{ textAlign: 'left', width: '30%', display: 'inline-block' }}>
                                <span style={{ background: '#13B5B1', color: '#fff', width: '50px', height: '22px', lineHeight: '18px', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>免费</span>
                              </div>
                              <div style={{ textAlign: 'right', width: '60%', display: 'inline-block' }}>380人已完成学习</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              }
            </TabPane>)
          )
        }
      </Tabs>
    </div>
  );
};

export default TypeArea;