import React from "react";
import { Tag } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

const TopCard = () => {
  const info={
    state:'招聘中',
    roleName:'汽修美容师',
    salary:'7-10K',
    area:'杭州',
    year:'1-2年',
    capcity:'3',
    publishDate:'10月22日',
    benefits:[
      {
        key:'1',
        name:'绩效奖金',
      },
      {
        key:'2',
        name:'五险一金',
      },
      {
        key:'3',
        name:'专业培训',
      },
      {
        key:'4',
        name:'交通补贴',
      },
      {
        key:'5',
        name:'餐饮补贴',
      },
      {
        key:'6',
        name:'节日福利',
      },
    ]
        
  };
  return (
    <div style={{width:'1200px', height:'200px',textAlign:'left',borderBottom:'1px solid #DDDDDD'}}>

      <div style={{width:'800px', height:'200px',float:'left'}}>
        <div style={{height:'40px', padding:'10px',color:"#888888"}}>
          {info.state}
        </div>
        <div style={{height:'80px', padding:'10px'}}>
          <span style={{fontSize:'32px'}}>{info.roleName}</span>
          <span style={{fontSize:'24px',color:'#FF8800',fontWeight:'bold', marginLeft:'60px'}}>{info.salary}/月</span>
        </div>
        <div style={{height:'40px', padding:'10px',color:"#888888"}}>
          <span>{info.area}</span>
          <span style={{margin:'0 8px'}}>|</span>
          <span>{info.year}经验</span>
          <span style={{margin:'0 8px'}}>|</span>
          <span>招{info.capcity}人</span>
          <span style={{margin:'0 8px'}}>|</span>
          <span>{info.publishDate}发布</span>
        </div>
        <div style={{height:'40px', padding:'10px'}}>
          {
            info.benefits.map((item,index)=>(
              <Tag key={index} color="blue">{item.name}</Tag>
            ))
          }
        </div>
      </div>
      <div style={{width:'400px', height:'200px',float:'right'}}>
        <div style={{height:"100px", paddingTop:'60px',paddingLeft:'240px'}}>
          <span><HeartTwoTone /></span>
          <span>收藏</span>
          <span style={{marginLeft:'20px'}}>竞争力分析</span>
        </div>
        <div style={{height:"100px",padding:'20px'}}>
          <div style={{width:'200px', height:'40px',borderRadius:'8px', backgroundColor:'#00BBFF',lineHeight:'40px',textAlign:'center',float:'right'}}>
            <span style={{fontSize:'20px', fontWeight:'bold',color:'#ffffff'}}>申请岗位</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopCard;