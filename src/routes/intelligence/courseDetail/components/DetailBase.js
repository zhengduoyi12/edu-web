// 课程详情-课程概况
import React from "react";

const DetailBase = (props={}) => {
  const {classBase} = props;
  return (
    <div>
      <div style={{ fontSize: '20px', fontWeight: '700' }}>简介：{classBase.title}</div>
      <div style={{ fontSize: '18px', }}>内容：{classBase.content}</div>
    </div>
  );
};

export default DetailBase;