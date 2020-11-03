// 课程详情-课程概况
import React from "react";

const DetailBase = (props = {}) => {
  const { classList } = props;
  return (
    <div>
      {
        classList.map((item, index) => (
          <div key={index}>
            <div style={{ fontSize: '16px', height: '46px', lineHeight: '46px', fontWeight: '700' }}>{index + 1} {item.title}</div>
            {
              item.class.map((it, i) => (
                <div key={i} style={{ fontSize: '16px', height: '46px', lineHeight: '46px', marginBottom: '20px', backgroundColor: '#dcdcdc' }}>
                  <span style={{ marginLeft: '20px' }}>【{it.type}】</span>
                  <span style={{ marginLeft: '10px' }}>{it.title}</span>
                  <span style={{ marginLeft: '10px' }}>({it.time}分钟)</span>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default DetailBase;