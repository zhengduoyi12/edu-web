// 智慧培训-在线直播课程
import React from "react";
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
// tofix, CaretDownOutlined等icon要不要写个组件包装一下，现在看的有点复杂

const LiveArea = () => {
  const leftImgUrl = require('assets/leftTop.png');
  const LiveList = [
    {
      "state": "正在直播",
      "info": "沈金义楠金大学教授：人工智能快速掌握"
    }, {
      "state": "正在直播",
      "info": "沈金义楠金大学教授：人工智能快速掌握"
    }, {
      "state": "17:00",
      "info": "沈金义楠金大学教授：人工智能快速掌握"
    }, {
      "state": "18:00",
      "info": "沈金义楠金大学教授：人工智能快速掌握"
    }, {
      "state": "19:00",
      "info": "沈金义楠金大学教授：人工智能快速掌握"
    }, {
      "state": "20:00",
      "info": "沈金义楠金大学教授：人工智能快速掌握"
    }, {
      "state": "21:00",
      "info": "沈金义楠金大学教授：人工智能快速掌握"
    }
  ];

  return (
    <div style={{ width: '1200px', display: 'flex' }}>
      <img src={leftImgUrl} style={{ width: '600px', height: '335px' }} alt=''></img>
      <div style={{ width: '600px', height: '335px', backgroundColor: '#f2f2f2', padding: '16px 0' }}>
        {
          LiveList.map((item, index) => {
            return (
              <Link key={index} to={{ pathname: `/classDetails/${index}` }} target='_blank'>
                <div style={{ display: 'flex', lineHeight: '44px' }}>
                  <p style={{ width: '72px', color: index === 0 || index === 1 ? '#0099FF' : '#999999' }}>
                    <CaretDownOutlined />
                  </p>
                  <p style={{ width: '110px', fontSize: '18px', color: index === 0 || index === 1 ? '#0099FF' : '#999999' }}> {item.state} </p>
                  <p style={{ fontSize: '18px', color: '#000000' }}>{item.info}</p>
                </div>
              </Link>

            );
          })
        }
      </div>

    </div>
  );
};

export default LiveArea;