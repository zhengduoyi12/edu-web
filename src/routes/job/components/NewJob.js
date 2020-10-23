import React from "react";
import { withRouter , useHistory } from 'react-router-dom';
const NewJob = ({jobList}) => {
  const history = useHistory();
  function goRoleDetails(){
    history.push("/roleDetails");
  }
  return (
    <div style={{width:"100%",height:"562px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
      {jobList.map((item,index)=>{
        return <div key={index} onClick={() => { goRoleDetails(); }} style={{width:"382px",height:"172px",border:"1px solid #ccc",textAlign:"left"}}>
          <div style={{marginLeft:"10px",marginTop:"34px",height:"22px",fontWeight:700}}>
            <span style={{fontSize:"22px"}}>{item.name}——{item.cmp}</span>
            <span style={{fontSize:"18px",color:"#ff9900",float:"right",marginRight:"26px"}}>{item.money}元</span>
          </div>
          <div style={{marginLeft:"10px",marginTop:"18px",height:"15px",fontSize:"14px",color:"#999"}}>
            <span style={{marginRight:"20px"}}>{item.site}</span>
            <span style={{marginRight:"20px"}}>{item.week}</span>
            <span>{item.month}</span>
          </div><div style={{marginLeft:"10px",marginTop:"36px",height:"18px",}}>
            <span style={{fontSize:"18px",color:"#999",marginRight:"20px"}}>{item.meeting}</span>
            <span style={{fontSize:"18px",color:"#ff9900",float:"right",marginRight:"55px"}}>{item.type}</span>
          </div>
        </div>;
      })}
    </div>
  );
};

export default NewJob;