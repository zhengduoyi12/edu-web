import React, { Component } from 'react'
import { Form, Input, Button, Row, Col ,Checkbox} from 'antd';
import { Menu } from 'antd';
import {withRouter} from 'react-router-dom'

import './register.css'
class register extends Component {

    state = {
        current: 'entre',
        
    };
    onFinish = (values) => {
        this.props.history.replace('/register2')
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        
        return (
            <div style={{width:"1920px", height:"100%"}}>  
                <div style={{height:"70px",width:"1920px",background:"white", fontSize:"24px", color:"#000000" ,paddingLeft:"380px",lineHeight:"65px"}}>
                    长三角产教融合智慧云平台
                </div>
                <div style={{background: "linear-gradient(90deg, #0BBAFB 0%, #4285EC 100%)", width:"1920px", height:"100%", display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:"800px", height:'440px',background:"white",  borderRadius: "8px", position:"relative"}}>
                        <div style={{width:"240px",height:"60px",background:"white", borderRadius: "30px", position:"absolute", margin:'280px', marginTop:'-30px', boxShadow:"0px 3px 7px 0px #cccccc", fontSize: "32px", textAlign:"center"}}>
                            注册
                        </div>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="entre" >
                            企业
                        </Menu.Item>
                        <Menu.Item key="school" >
                            学校
                        </Menu.Item>
                        <Menu.Item key="student" >
                            学生
                        </Menu.Item>
                        <Menu.Item key="individual" >
                            个人
                        </Menu.Item>
                        </Menu>
                        
                        <Form
                            className="registerForm"
                            name="normal_login"
                            onFinish={this.onFinish}
                        >
                            <Form.Item style={{marginBottom:'10px',height:"14px"}}>
                            <p style={{fontSize:'14px', color:'#000000', padding:"0", fontWeight:"400"}}> 第一步：手机验证</p>
                            </Form.Item>
                            <Form.Item
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: '请输入手机号码',
                                },
                                ]}
                            >
                                <Input placeholder="手机号" size="large"/>
                            </Form.Item>
                            <Form.Item style={{marginBottom:"0px", height:"48px"}}>
                                <Row gutter={8}>
                                <Col span={16}>
                                    <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: '请输入密码' }]}
                                    style={{height:"48px"}}
                                    >
                                        <Input
                                            size="large"
                                            type="password"
                                            placeholder="请输入密码"/>
                                    </Form.Item>
                                </Col>
                                <Col span={8} >
                                    <Button style={{float:"right"}} className="register-form-button" size="large" >发送验证码</Button>
                                </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('请打勾') },
                                ]}
                               
                            >
                                <Checkbox style={{fontSize:"12px", color:"#999999"}}>
                                    已阅读并同意《服务协议》及《隐私政策》
                                </Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" style={{marginTop:"20px"}}block>
                                    下一步
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                 </div>
            </div>
        )
    }
}

export default (withRouter(register))