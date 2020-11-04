// 课程详情-课程概况
import React, { useState } from "react";
import { Radio, Card, Rate, Input, Button } from 'antd';
import './style.scss';
const { TextArea } = Input;
const DetailComment = (props = {}) => {
  const [scoreType, setScoreType] = useState(0);
  const comment = {
    score: 9.8,

  };
  const checkScore = (e) => {
    setScoreType(e.target.value);
  };
  return (
    <div className="detail-comment">
      <div className="title">
        <span>课程综合评分：{comment.score}</span>
        <Radio.Group onChange={checkScore} value={scoreType}>
          <Radio value={0}>全部评论</Radio>
          <Radio value={1}>好评</Radio>
          <Radio value={2}>中评</Radio>
          <Radio value={3}>差评</Radio>
        </Radio.Group>
      </div>
      <div className="publish">
        <Card hoverable>
          <div className="publish-title">
            <span>为课程评分：</span>
            <Rate allowHalf defaultValue={0} />
          </div>
          <TextArea maxLength={100} showCount={true} />
          <div className="publish-btn">
            <Button type="primary" >发表评论</Button>
          </div>
        </Card>,
      </div>
      <div className="content">
        <div className="content-title">评论列表</div>
      </div>
    </div>
  );
};

export default DetailComment;