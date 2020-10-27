import React, { useEffect, useState } from "react";
import { Card } from "antd";

const Recommend = () => {
  const [cardDisplay, setCardDisplay] = useState('none');

  const RecommendInfo = [
    {key:1, img:require("assets/qiche.png"), courseInfo:{name:'汽修专业-发动机故障维修课程', time:'12月01日', courseNum:'24', difficulty:'零基础入门'}},
    {key:2, img:require("assets/qiche.png"),courseInfo:{name:'汽修专业-发动机故障维修课程', time:'12月01日', courseNum:'24', difficulty:'零基础入门'}},
    {key:3, img:require("assets/qiche.png"),courseInfo:{name:'汽修专业-发动机故障维修课程', time:'12月01日', courseNum:'24', difficulty:'零基础入门'}},
    {key:4, img:require("assets/qiche.png"),courseInfo:{name:'汽修专业-发动机故障维修课程', time:'12月01日', courseNum:'24', difficulty:'零基础入门'}},

  ];
  return (
    <div className='Recommend' style={{textAlign:'left'}}>
      <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000", marginBottom:"20px"}}>推荐课程</div>
      <div style={{ display:"flex",justifyContent:"space-around", flexWrap:'wrap'}}>
        {
          RecommendInfo.map((item,index)=>(
            <div key={`recommendTabs_` + index} style={{ width: '580px', height: '200px', marginBottom:"20px" ,display:index===0 ||index===1? 'block':cardDisplay}}>
              <Card hoverable bordered={false} style={{ width: 580}} >
                <div style={{ width: '289px', height: '200px', float:'left'}}>
                  <img src={item.img} style={{ width: '289px', height: '200px'}} alt='' />
                </div>
                <div style={{ width: '289px', height: '200px',float:'right',padding:'20px'}}>
                  <h2>{item.courseInfo.name}</h2>
                  <p>{item.courseInfo.time}开课 {'\u00A0'}{item.courseInfo.courseNum}节课</p>
                  <p>难度：{item.courseInfo.difficulty}</p>
                </div>
              </Card>
            </div>
          ))
        }
      </div>
      <div onClick={() =>cardDisplay==='none'? setCardDisplay('block'): setCardDisplay('none')} style={{textAlign:'center'}}>{cardDisplay==='none'?'查看更多':'收起'}</div>
    </div>
  );
};

export default Recommend;
