import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Menu } from 'antd';
import {withRouter} from 'react-router-dom';
import './formStyle.css';


class panel extends Component {
    state = {
      current: 'entre',
    };
    onFinish = (values) => {
      const { current } = this.state;
      if(current==='student'){
        this.props.history.replace('/mine');
      }else{
        this.props.history.replace('/');
      }
    }
    handleClick = e => {
      console.log('click ', e);
      this.setState({ current: e.key });
    };

    render() {
      const { current } = this.state;
      return (
        <div style={{ width: "800px", height: '440px', background: "white", borderRadius: "8px", position: "relative" }}>
          <div style={{ width: "240px", height: "60px", background: "white", borderRadius: "30px", position: "absolute", margin: '280px', marginTop: '-30px', boxShadow: "0px 3px 7px 0px #cccccc", fontSize: "32px", textAlign: "center" }}>
                    登录
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
                  message: '请输入账号',
                },
              ]}
            >
              <Input placeholder="用户名/手机号/邮箱" size="large"/>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input
                size="large"
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href="" style={{color:'#000000' }}>
                            验证码登录
              </a>

              <a className="login-form-forgot" href="" style={{ float: "right", color:'#000000' }}>
                            忘记密码
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                            登录
              </Button>
            </Form.Item>
            <Form.Item>
              <a href="#register" style={{ float: 'right',fontSize:"12px", marginTop:"-30px"}}>没有账号, 赶快注册</a>
            </Form.Item>
          </Form>

        </div>
      );
    }
}

export default (withRouter(panel));