import React from "react";
import {Button} from 'antd';
import { withRouter , useHistory } from 'react-router-dom';

const HotCmp = ({cmpList}) => {
  const history = useHistory();
   
  function goEntreDetails(){
    history.push("/entreDetails");
  }
  return (
    <div style={{width:"100%",height:"620px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
      {cmpList.map((item,index)=>{
        return <div key={index} onClick={() => { goEntreDetails(); }} style={{width:"400px",height:"260px",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{width:"107px",height:"107px",marginTop:"0px",lineHeight:"107px",fontSize:"32px",background:"rgba(204,204,204,0.3)",color:"#CCC"}}>
                    公司
          </div>
          <div style={{height:"18px",marginTop:"17px",fontSize:"18px",color:"#000"}}>
            {item.name}
          </div>
          <div style={{height:"15px",marginTop:"15px",fontSize:"14px",color:"#999"}}>
            <span style={{marginRight:"20px"}}>{item.site}</span>
            <span style={{marginRight:"20px"}}>{item.week}</span>
            <span>{item.month}</span>
          </div>
          <Button style={{marginTop:"15px",width:"140px",height:"40px"}}>{item.num}个热招职位</Button>

          {/* <div style={{marginLeft:10,marginTop:36,height:18,}}>
                    <span style={{fontSize:18,color:"#999",marginRight:20}}>{item.meeting}</span>
                    <span style={{fontSize:18,color:"#ff9900",float:"right",marginRight:55}}>{item.type}</span>
                </div> */}
        </div>;
      })}
    </div>
  );
};

export default HotCmp;