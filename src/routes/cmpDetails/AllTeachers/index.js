import React from "react";
import { withRouter , useHistory } from 'react-router-dom';
const teacherTabs=[
  {key:1,name:'王玮琦',courseNum:'30', studentNum:'109', role:'汽修专业老师',info:'浙江职业技术学校任教老师，从事汽修行业15年,拥有丰富鸡块sad阖家安康合适的看见爱上的考拉的健康', imgUrl:require('assets/teacher_selfie.png')},
  {key:2,name:'王玮琦',courseNum:'30', studentNum:'109', role:'汽修专业老师',info:'浙江职业技术学校任教老师，从事汽修行业15年,拥有丰富鸡块sad阖家安康合适的看见爱上的考拉的健康', imgUrl:require('assets/teacher_selfie.png')},
  {key:3,name:'王玮琦',courseNum:'30', studentNum:'109', role:'汽修专业老师',info:'浙江职业技术学校任教老师，从事汽修行业15年,拥有丰富鸡块sad阖家安康合适的看见爱上的考拉的健康', imgUrl:require('assets/teacher_selfie.png')},
];
const AllTeachers = () => {
  const history = useHistory();
  function goPublicTeacher(){
    history.push("/teacherDetails");
  }
  return (
    <div className="App" style={{textAlign:'left',display:'flex',flexWrap:'wrap'}}>
      {
        teacherTabs.map((item,index)=>(
          <div onClick={() => { goPublicTeacher();}} key={index} style={{width:'560px',height:'180px',margin:'20px'}}>
            <div style={{width:"180px", height:'180px',display:'flex',justifyContent:'center',alignItems:'center',float:'left'}}>
              <div style={{width:'120px',height:'120px',borderRadius:'50%'}}>
                <img src={item.imgUrl} style={{width:'120px',height:'120px'}}/>
              </div>
            </div>
            <div style={{width:"380px", height:'180px',float:'right',padding:'20px'}}>
              <div style={{fontSize:'24px',color:'#000000',fontWeight:'bold'}}>{item.name}</div>
              <div style={{fontSize:'14px',color:'#cccccc'}}>
                <span>课程{item.courseNum}节</span>
                <span style={{marginLeft:'20px'}}>学生{item.studentNum}</span>
              </div> 
              <div style={{fontSize:'14px',color:'#cccccc',marginTop:'20px'}}>{item.role}</div> 
              <div style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{item.info}</div> 
            </div>
          </div>

        ))
      }
        
       
        
    </div>
    
  );
};

export default AllTeachers;