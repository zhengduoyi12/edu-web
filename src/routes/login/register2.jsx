import React, { Component } from 'react';
import { Form, Input, Button, Row, Col ,Checkbox} from 'antd';
import { Menu } from 'antd';
import {withRouter} from 'react-router-dom';
import './style.scss';
class register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'block',
      display2: 'none'
    };
  }
  handleClick = e => {
    this.props.history.replace('/login');
  };
    onFinish = (values) => {
      this.setState(prevState => ({
        display: 'none',
        display2: 'block'
      }));
    }
    render() {
      return (
        <div style={{width:"1920px", height:"100%"}}>  
          <div style={{height:"70px",width:"1920px",background:"white", fontSize:"24px", color:"#000000" ,paddingLeft:"380px",lineHeight:"65px"}}>
                    长三角产教融合智慧云平台
          </div>
          <div style={{background: "linear-gradient(90deg, #0BBAFB 0%, #4285EC 100%)", width:"1920px", height:"100%", display:'flex', justifyContent:'center',alignItems:'center'}}>
            <div className="register2Panel" style={{width:"800px",background:"white", borderRadius: "8px", position:"relative"}}>
              <div style={{width:"240px",height:"60px",background:"white", borderRadius: "30px", position:"absolute", margin:'280px', marginTop:'-30px', boxShadow:"0px 3px 7px 0px #cccccc", fontSize: "32px", textAlign:"center"}}>
                            注册
              </div>
              <Form
                className="register2Form"
                onFinish={this.onFinish}
                style={{display: this.state.display}}
              >
                <Form.Item style={{marginBottom:"0px", padding:"0px"}} >
                  <p style={{fontSize:'14px', color:'#000000', textAlign:"center" , padding:"0px"}}> 第二步：个人信息</p>
                </Form.Item>
                <Form.Item
                  name="username"
                >
                  <Input placeholder="用户名" size="large"/>
                </Form.Item>
                <Form.Item
                  name="password"
                >
                  <Input type="password" placeholder="请输入密码(最少6位,包含字母大小写和数字)" size="large" />
                </Form.Item>
                <Form.Item
                  name="confirmPass"
                >
                  <Input type="password" placeholder="再次输入密码" size="large" />
                </Form.Item>
                <Form.Item style={{marginBottom:"0px", padding:"0px"}} >
                  <p style={{fontSize:'14px', color:'#000000', textAlign:"center" , padding:"0px"}}> 请完成以下信息，帮助我们更好服务您。</p>
                </Form.Item>
                <Form.Item
                  name="major"
                >
                  <Input placeholder="招聘专业方向" size="large" />
                </Form.Item>
                <Form.Item
                  name="entreName"
                >
                  <Input placeholder="企业名称" size="large"/>
                </Form.Item>
                <Form.Item
                  name="career"
                >
                  <Input placeholder="职业身份" size="large"/>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" style={{marginTop:"40px"}} block>
                                    下一步
                  </Button>
                </Form.Item>
              </Form>
              <div style={{width:"800px", height:'440px',background:"white", borderRadius: "8px", position:"relative",display: this.state.display2}}>
                <div style={{width:"240px",height:"60px",background:"white", borderRadius: "30px", position:"absolute", margin:'280px', marginTop:'-30px', boxShadow:"0px 3px 7px 0px #cccccc", fontSize: "32px", textAlign:"center"}}>
                              注册
                </div>
                <p style={{fontSize:'32px', color:"#333333",position:'absolute', marginTop:"170px", marginLeft:"300px"}}> 您已完成注册</p>
                <Button type="primary" onClick={this.handleClick} size="large" style={{width:"340px",position:'absolute', marginTop:"330px", marginLeft:"240px"}}>
                  完成注册
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default (withRouter(register2));