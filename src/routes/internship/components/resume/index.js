import React from "react"
import { Table, Tag, Space } from 'antd';
import Item from "antd/lib/list/Item";

const Resume = () => {
    const data = [
        {
          key: '1',
          name: '杨虹',
          role: '物流电器',
          school: '四川长江职业学校',
          major: '电子商务',
        },
        {
          key: '2',
          name: '王曦',
          role: '物流电器',
          school: '四川长江职业学校',
          major: '电子商务',
        },
        {
          key: '3',
          name: '杨虹',
          role: '物流电器',
          school: '四川长江职业学校',
          major: '电子商务',
        },
        {
            key: '4',
            name: '杨虹',
            role: '物流电器',
            school: '四川长江职业学校',
            major: '电子商务',
          },
          {
            key: '5',
            name: '杨虹',
            role: '物流电器',
            school: '四川长江职业学校',
            major: '电子商务',
          },
          {
            key: '6',
            name: '杨虹',
            role: '物流电器',
            school: '四川长江职业学校',
            major: '电子商务',
          },
      ];
      
    return (
    <div style={{ width:'800px',height:'376px', backgroundColor:'rgb(221, 221, 221)', position:'relative'}}>
        <div style={{ fontSize:'32px', color:"#000000" ,position:'absolute', top:'5px',left:'26px'}}>学生简历</div>
        <div style={{ fontSize:'18px', color:"#999999" ,position:'absolute', top:'20px',left:'745px'}}>更多</div>
        <div style={{ width:'800px', height:'300px',position:'absolute', top:'76px'}}>
            <div style={{ width:'800px', height:'30px',padding:'0 25px',borderBottom:'1px solid #CCCCCC',textAlign:'left',marginBottom:'12px'}} >
                <span style={{ marginRight: '162px'}}>姓名</span>
                <span style={{ marginRight: '168px'}}>期望职位</span>
                <span style={{ marginRight: '243px'}}>学校</span>
                <span>专业</span> 
            </div>
            {
               data.map((item,index)=>{
                    return(
                        <div key={item.key} style={{ width:'800px', height:'30px',textAlign:'left', padding:'0 25px',marginBottom:'12px'}}>
                            <span style={{ marginRight: '160px' , color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.name} </span>
                            <span style={{ marginRight: '160px',color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.role} </span>
                            <span style={{ marginRight: '160px',color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.school} </span>
                            <span style={{color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.major} </span> 
                        </div>
                    )
               })
            }
        </div>
    </div>
  )
}

export default Resume;