// js， hooks写法
import React from "react";

const Certificate = () => {

  const cerImg=require('assets/images/prac_card.jpg');

  return (
    <div style={{ width:'370px',height:'376px', backgroundColor:'rgb(221, 221, 221)', padding:'10px, 25px',position:'relative'}}>
      <div style={{ fontSize:'32px', color:"#000000", position:'absolute', top:'5px',left:'26px'}}>岗位人才证书</div>
      <div style={{ fontSize:'18px', color:"#999999", position:'absolute',top:'32px',left:'319px'}}>更多</div>
      <div style={{ width:'330px', height:'0px',borderBottom:'1px solid #CCCCCC', position:'absolute',top:'63px',left:'25px'}}></div>
      <img alt="" src={cerImg} style={{width:'184px', height:'261px', position:'absolute', top:'90px',left:'90px'}}/>
    </div>
  );
};

export default Certificate;