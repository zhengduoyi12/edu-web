import React from "react"

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Tabs } from 'antd';
import CmpHome from './cmpHome'
import CurrentRole from './CurrentRole'
import AllCourse from './AllCourse'
import AllTeachers from './AllTeachers'
const { TabPane } = Tabs;
const entreDetails = () => {
  
    return (
    <div className="App">
      <Header/>
        <div style={{ width:"1200px", margin:"0 auto"}}>
          <div style={{height:'380px', backgroundColor:'#4682B4', textAlign:'center',paddingTop:"60px"}}>
            <img style={{width:"100px", height:'100px', borderRadius:"50%",margin:"0px auto"}} src={require('assets/images/prac_cpy05.jpg')}/>
            <div style={{color:'#ffffff', fontWeight:'bold', fontSize:'20px',marginTop:'14px'}}>云光汽车</div>

            <div style={{color:'#ffffff'}}>未上市 {'\u00A0'} 100-200人 {'\u00A0'}汽车行业</div>
            <div style={{width:"90px", height:'24px',borderRadius:"2px",backgroundColor:"white", margin:"20px auto"}}> 关注</div>
            <div style={{color:'#ffffff', fontSize:'20px',marginTop:'14px'}}>在招职位：20</div>
          </div>
          <Tabs defaultActiveKey="1" centered tabBarGutter={100}>
            <TabPane tab="主页" key="1">
              <CmpHome/>
            </TabPane>
            <TabPane tab="在招职位" key="2">
              <CurrentRole/>
            </TabPane>
            <TabPane tab="课程" key="3">
              <AllCourse/>
            </TabPane>
            <TabPane tab="老师" key="4">
              <AllTeachers/>
            </TabPane>
            <TabPane tab="关于我们" key="5">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      <Footer/>  
    </div>
    
  );
};

export default entreDetails;