import React from "react";
import { Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { List } from "antd/lib/form/Form";
import { withRouter , useHistory } from 'react-router-dom';
const roleList=[
  {name:'111'},
  {name:'2222'},
  {name:'2222'},
  {name:'2222'},
  {name:'2222'},
  {name:'2222'},
  {name:'2222'},
  {name:'2222'},
  {name:'2222'},
  {name:'2222'},
];
const SearchResList= () => {
  const history = useHistory();
   
  function gopositionDetails(){
    history.push("/positionDetails");
  }
  function gocmpDetails(){
    history.push("/cmpDetails");
  }
  return (
    <div style={{padding:"20px"}}>
      {
        roleList.map((item, index)=>(
          <div key={index} style={{width:'800px', height:'130px',backgroundColor:'white', marginBottom:'20px', border:'1px solid #CCCCCC', borderRadius:"4px",padding:'10px',cursor:'pointer'}}>
            <div style={{height:'60px', textAlign:'left'}}>
              <div onClick={()=>{gopositionDetails();}} style={{width:"410px",height:"60px",padding:'4px 8px',float:'left'}}>
                <div style={{color:'#00c2b3', fontSize:'16px'}}>
                  <span>Android系统工程师
                  </span>
                  <span> 杭州滨江区 ssss
                  </span>
                </div>
                <div style={{display:'flex', justifyContent:'flex-start'}}>
                  <span style={{fontSize:'16px',color:'#fc703e' , marginRight:'20px'}}>12-24k</span>
                  <p> 1-3 年
                  </p>
                                |
                  <p> 本科
                  </p>
                </div>
              </div>
              <div onClick={()=>{gocmpDetails();}} style={{width:"350px",height:"60px",float:'right'}}>
                <div style={{width:"280px", display:'inline-block'}}>
                  <div style={{color:'#00c2b3', fontSize:'16px'}}>
                    <span>海康威视
                    </span>
                  </div>
                  <div style={{display:'flex', justifyContent:'flex-start'}}>
                    <p> 计算机软件</p>
                                    |
                    <p> 已上市 </p>
                                    |
                    <p> 10000人以上 </p>
                  </div>
                </div>
                <img src={require('assets/images/joblogo-2.jpg')} style={{width:'50px', height:'50px',display:'inline-block'}} >
                </img>
              </div>
            </div>
            <div style={{height:'40px',lineHeight:'40px',textAlign:'left'}}>
              <div style={{width:"410px",display:'inline-block'}}>
                <Tag>Framework</Tag>
                <Tag>Linux</Tag>
                <Tag>Android</Tag>
                <Tag>系统级</Tag>
              </div>
              <div style={{width:"350px", display:'inline-block'}}>
                <span>年终奖</span>,
                <span>全勤奖</span>,
                <span>加班补助</span>,
                <span>五险一金</span>
              </div>
            </div>
          </div> 
        ))
      }
       
    </div>
  );
};

export default SearchResList;