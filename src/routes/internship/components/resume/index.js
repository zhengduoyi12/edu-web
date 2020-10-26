import React , { useState }from "react";
import { withRouter , useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';

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
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  function goTalentList(){
    history.push("/talentList");
  }

  return (
    <div style={{ width:'800px',height:'376px', backgroundColor:'rgb(221, 221, 221)', position:'relative'}}>
      <div style={{ fontSize:'32px', color:"#000000" ,position:'absolute', top:'5px',left:'26px'}}>学生简历</div>
      <div onClick={() => { goTalentList(); }}style={{ fontSize:'18px', color:"#999999" ,position:'absolute', top:'20px',left:'745px',cursor:"pointer"}}>更多</div>
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
              <div key={item.key} onClick={() => setVisible(true)} style={{ width:'800px', height:'30px',textAlign:'left', padding:'0 25px',marginBottom:'12px',cursor:"pointer"}}>
                <span style={{ marginRight: '160px' , color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.name} </span>
                <span style={{ marginRight: '160px',color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.role} </span>
                <span style={{ marginRight: '160px',color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.school} </span>
                <span style={{color: (index===0||index===1||index===2)? '#0099FF':'#000000'}}>{item.major} </span> 
              </div>
            );
          })
        }
      </div>
      <Modal
        title="查看简历"
        centered
        visible={visible}
        width={1000}
        onCancel={() => setVisible(false)}
        footer={false}
      >
        <p>只有企业账号才能查看简历, 您可以登录或者注册企业账号</p>
        <Button>登录</Button>
        <Button>取消</Button>
      </Modal>
    </div>
  );
};

export default withRouter(Resume);