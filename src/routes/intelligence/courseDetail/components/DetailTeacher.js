// 课程详情-课程概况
import React from "react";

const DetailBase = (props = {}) => {
    const { teacher } = props;
    return (
        <div style={{ textAlign: 'left', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: "#dcdcdc" }}>
            <img src={teacher.selfImg} style={{ width: '100px', height: "140px", padding: '20px 0' }} alt=""></img>
            <div style={{ height: '100px', width: '170px', padding: '20px 0' }}>
                <div style={{ height: '60px', lineHeight: '60px', fontSize: '22px' }}>老师：{teacher.name}</div>
                <div style={{ height: '40px', fontSize: '18px' }}>{teacher.school}</div>
            </div>
            <div style={{ width: '290px', height: '90px', padding: '10px 0', display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                <div style={{ borderRight: '1px solid #000', width: '90px' }}>
                    <div>课程数</div><div>{teacher.classNumber}</div>
                </div>
                <div style={{ width: '90px' }}>
                    <div>学习人数</div><div>{teacher.studyNumber}</div>
                </div>
                <div style={{ borderLeft: '1px solid #000', width: '90px' }}>
                    <div>评分</div><div>{teacher.rate}</div>
                </div>
            </div>
            <div style={{ width: '290px', padding: '20px 0' }}>讲师介绍：{teacher.intro}</div>
        </div>
    );
};

export default DetailBase;