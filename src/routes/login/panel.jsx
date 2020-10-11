import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { Menu } from 'antd';

import './formStyle.css'

export default class panel extends Component {
    
    state = {
        current: 'entre',
    };
    onFinish = (values) => {
        window.location.replace('/home')
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <div style={{width:"800px", height:'440px',background:"white",  borderRadius: "8px", position:"relative"}}>
                <div style={{width:"240px",height:"60px",background:"white", borderRadius: "30px", position:"absolute", margin:'280px', marginTop:'-30px', boxShadow:"0px 3px 7px 0px #cccccc", fontSize: "32px", textAlign:"center"}}>
                    登陆
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
                        name="normal_login"
                        onFinish={this.onFinish}
                    >
                         <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                ]}
                        >
                            <Input
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <a className="login-form-forgot" href="">
                                验证码登陆
                            </a>

                            <a className="login-form-forgot" href="" style={{float:"right"}}>
                                忘记密码
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <a href="/register" style={{float:'right'}}>没有账号, 赶快注册</a>
                        </Form.Item>
                    </Form>
                    
            </div>
        )
    }
}
