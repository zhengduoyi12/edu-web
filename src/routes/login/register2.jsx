import React, { Component } from 'react'
import { Form, Input, Button, Row, Col ,Checkbox} from 'antd';
import { Menu } from 'antd';
import './register.css'
export default class register2 extends Component {
    onFinish = (values) => {
        window.location.replace('#register3')
    }
    render() {
        return (
            <div style={{width:"1920px", height:"720px"}}>  
                <div style={{height:"70px",width:"1920px",background:"white", fontSize:"24px", color:"#000000" ,paddingLeft:"380px",lineHeight:"65px"}}>
                    长三角产教融合智慧云平台
                </div>
                <div style={{background: "linear-gradient(90deg, #0BBAFB 0%, #4285EC 100%)", width:"1920px", height:"800px", display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:"800px", height:'700px',background:"white",  borderRadius: "8px", position:"relative"}}>
                        <div style={{width:"240px",height:"60px",background:"white", borderRadius: "30px", position:"absolute", margin:'280px', marginTop:'-30px', boxShadow:"0px 3px 7px 0px #cccccc", fontSize: "32px", textAlign:"center"}}>
                            注册
                        </div>
                        <Form
                            onFinish={this.onFinish}
                            style={{marginTop:'90px'}}
                        >
                            <Form.Item style={{marginBottom:"0px", padding:"0px"}} >
                                <p style={{fontSize:'14px', color:'#000000', textAlign:"center" , padding:"0px"}}> 第二步：个人信息</p>
                            </Form.Item>
                            <Form.Item
                                name="username"
                            >
                                <Input placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                            >
                                <Input type="password" placeholder="请输入密码（最少6位，包含字母大小写和数字）" />
                            </Form.Item>
                            <Form.Item
                                name="confirmPass"
                            >
                                <Input type="password" placeholder="再次输入密码" />
                            </Form.Item>
                            <Form.Item style={{marginBottom:"0px", padding:"0px"}} >
                                <p style={{fontSize:'14px', color:'#000000', textAlign:"center" , padding:"0px"}}> 请完成以下信息，帮助我们更好服务您。</p>
                            </Form.Item>
                            <Form.Item
                                name="major"
                            >
                                <Input placeholder="招聘专业方向" />
                            </Form.Item>
                            <Form.Item
                                name="entreName"
                            >
                                <Input placeholder="企业名称" />
                            </Form.Item>
                            <Form.Item
                                name="career"
                            >
                                <Input placeholder="职业身份" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
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
