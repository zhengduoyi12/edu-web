// 课程详情-课程概况
import React, { useState } from "react";
import {Radio} from 'antd';
import './style.scss';

const DetailComment = (props = {}) => {
    const [scoreType,setScoreType] = useState(0);
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
        </div>
    );
};

export default DetailComment;