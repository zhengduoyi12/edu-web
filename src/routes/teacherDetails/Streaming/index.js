import React, { useEffect, useState } from "react";
import { Card } from "antd";
import './style.scss';



const Streaming = () => {
  const [cardDisplay, setCardDisplay] = useState('none');

  const streamingInfo = [
    {key:1, img:require("assets/laobo.png"), courseInfo:{name:'汽修专业-技工技能', time:'12月01日', courseNum:'24', difficulty:'零基础入门', enrollNum:'300'}},
    {key:2, img:require("assets/laobo.png"),courseInfo:{name:'汽修专业-技工技能', time:'12月01日', courseNum:'24', difficulty:'零基础入门', enrollNum:'300'}},
    {key:3, img:require("assets/laobo.png"),courseInfo:{name:'汽修专业-技工技能', time:'12月01日', courseNum:'24', difficulty:'零基础入门', enrollNum:'300'}},
    {key:4, img:require("assets/laobo.png"),courseInfo:{name:'汽修专业-技工技能', time:'12月01日', courseNum:'24', difficulty:'零基础入门', enrollNum:'300'}},

  ];
  return (
    <div className='Streaming' style={{textAlign:'left'}}>
      <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000", marginBottom:"20px"}}>直播课程</div>
      <div style={{ display:"flex",justifyContent:"space-around", flexWrap:'wrap'}}>
        {
          streamingInfo.map((item,index)=>(
            <div key={`streamingTabs_` + index} style={{ width: '580px', height: '200px', marginBottom:"20px" ,display:index===0 ||index===1? 'block':cardDisplay}}>
              <Card hoverable bordered={false} style={{ width: 580}} >
                <div style={{ width: '289px', height: '200px', float:'left', position:'relative'}}>
                  <img src={item.img} style={{ width: '289px', height: '200px'}} alt='' />
                  <div className="shadowIcon">直播课</div>
                </div>
                <div style={{ width: '289px', height: '200px',float:'right',padding:'20px'}}>
                  <h2>{item.courseInfo.name}</h2>
                  <p>{item.courseInfo.time}开课 {'\u00A0'}{item.courseInfo.courseNum}节课</p>
                  <p>难度：{item.courseInfo.difficulty}{'\u00A0'}{item.courseInfo.enrollNum}已报名</p>
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

export default Streaming;
