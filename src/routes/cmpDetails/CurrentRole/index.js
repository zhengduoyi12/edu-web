import React from "react";
import { withRouter , useHistory } from 'react-router-dom';

const CurrentRoleInfo=[
  {key:1,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:2,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:3,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:4,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:5,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:6,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:7,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:8,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
  {key:9,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年', interviewer:'谈先生',interRole:'HR'},
];
const CurrentRole = () => {
  const history = useHistory();
  function goRoleDetails(){
    history.push("/positionDetails");
  }
  return (
    <div className="App" style={{textAlign:'left'}}>
      {
        CurrentRoleInfo.map((item,index)=>(
          <div onClick={() => { goRoleDetails(); }} key={'CurrentRole_'+item.key} style={{width:"1198px" , height:'178px', border:'1px solid #cccccc', borderRadius:'8px', marginBottom:'20px',backgroundColor:'white',display:"flex", flexWrap: "wrap"}}>
            <div style={{width:'1000px',height:'100%'}}>
              <div style={{height:'50%',lineHeight:'89px',fontSize:'24px',paddingLeft:'20px'}}>
                <span style={{color:'#000000'}}>{item.name}</span>
                <span style={{color:'#FF8C00', marginLeft:'40px'}}>{item.salary}</span>
              </div>
              <div style={{height:'50%',lineHeight:'89px',fontSize:'18px',paddingLeft:'20px',color:'#666666'}}>
                <span>{item.education}</span>
                <span style={{marginLeft:'20px'}}>{item.year}工作经验</span>
              </div>
            </div>
            <div style={{width:'190px',height:'100%', lineHeight:'178px'}}>
              <span>{item.interviewer}|</span>
              <span>{item.interRole}</span>
            </div>

          </div>

        ))
      }
        
    </div>
    
  );
};

export default CurrentRole;