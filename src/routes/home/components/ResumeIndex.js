// js， hooks写法
import React from "react";

const ResumeIndex = () => {
  const resumeTabs = [
    {
      title: '销售',
      name: '陈星宜',
      desc2: '中科大计算机毕业，获得过全国计算机大赛一等奖，全球计算机对抗赛二等优秀',
      img: require('assets/images/u67_a.jpg'),
    },
    {
      title: '会计',
      name: '陈星宜',
      desc2: '中科大计算机毕业，获得过全国计算机大赛一等奖，全球计算机对抗赛二等优秀',
      img: require('assets/images/people-1.jpg'),
    },
    {
      title: '教师',
      name: '陈星宜',
      desc2: '中科大计算机毕业，获得过全国计算机大赛一等奖，全球计算机对抗赛二等优秀',
      img: require('assets/images/people-2.jpg'),
    },
    {
      title: '计算机',
      name: '陈星宜',
      desc2: '中科大计算机毕业，获得过全国计算机大赛一等奖，全球计算机对抗赛二等优秀',
      img: require('assets/images/people-3.jpg'),
    },
    {
      title: '文员',
      name: '陈星宜',
      desc2: '中科大计算机毕业，获得过全国计算机大赛一等奖，全球计算机对抗赛二等优秀',
      img: require('assets/images/people-4.jpg'),
    },
  ];

  return (
    <div style={{ height: '445px', marginTop: '28px' }}>
      <div style={{ fontSize: '18px', color: '#999', textAlign: 'left', height: '95px' }}>
        <span style={{ fontSize: '32px', marginRight: '20px', color: '#000', display: 'inline-block' }}>优秀人才</span>
        <span style={{ marginTop: '53px', display: 'inline-block' }}>智能匹配，为您推荐优秀人才</span>
        <span style={{ marginTop: '53px', float: 'right' }}>查看更多</span>
      </div>
      {resumeTabs.map((item, index) => (
        <div key={index} style={{ height: '350px', width: '235px', display: 'inline-block', marginLeft: index === 0 ? '0px' : '5px' }}>
          <div style={{ fontSize: '22px', height: '60px', lineHeight: '60px', background: '#3399CC' }}>{item.title}</div>
          <img style={{ height: 'auto', width: '100%' }} src={item.img} alt="" />
          <div style={{ fontSize: '18px', lineHeight: '30px', color: '#000' }}>{item.name}</div>
          <div style={{ fontSize: '14px', lineHeight: '20px', color: '#333', marginTop: '12px' }}>{item.desc2}</div>
        </div>
      ))}
    </div>
  );
};

export default ResumeIndex;