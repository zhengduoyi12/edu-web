// 课程详情-课程概况
import React from "react";

const DetailBase = (props = {}) => {
  const { teacher } = props;
  return (
    <div style={{ textAlign: 'left', backgroundColor: "#dcdcdc", marginTop: '20px', fontSize: '16px' }}>
      <div style={{ padding: '10px 20px' }}>联系方式</div>
      <div style={{ padding: '10px 20px' }}>{teacher.name}老师emails：{teacher.email}</div>
      <div style={{ padding: '10px 20px' }}>助教老师emails：{teacher.supEmail}</div>
      <div style={{ padding: '10px 20px' }}>微信号：{teacher.wechat}</div>
    </div>
  );
};

export default DetailBase;