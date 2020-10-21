// 组件
import React, { Component } from "react";
// import { baseStyle } from 'styles/baseStyle';
import { Input, Button, Tabs } from 'antd';
import { Menu }from 'antd';

import { withRouter } from 'react-router-dom';
import { navigate } from 'utils';
import './header.scss'

const { Search } = Input;
const { TabPane } = Tabs;
const { SubMenu } = Menu;

const localStyle = {
  row: {
    height: '80px',
    display: 'flex',
  },
  title: {
    fontSize: '36px',
    textAlign: 'left',
    lineHeight: '80px',
    fontWeight: 'bolder',
    paddingLeft: '20px',
    flex: 3,
  },
  flex1: {
    marginTop: '20px',
    flex: 1,
  },
  tab: {
    height: '45px'
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'basicInfo',
    };
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
    this.goPage(e.key|| '404');
  };

  goPage = (page, params = {}) => {
    navigate(this.props.history, page, params)
  }

  // tabChange = (index) => {
  //   // 有点奇怪，需要封装
  //   const pageMap = {
  //     1: 'home',
  //     2: 'practice',
  //     3: 'intelligence',
  //   }
  //   this.goPage(pageMap[index] || '404');
  // }
  
  render() {
    const { current } = this.state;
    return (
      <div className="header">
        <div style={localStyle.row}>
          <div style={localStyle.title}>
            长三角产数融合智慧云平台
          </div>
          <div style={localStyle.flex1}>
            <Search
              placeholder="请输入关键词"
              enterButton="搜索"
              size="large"
              onSearch={value => alert('请重新搜索')}
            />
          </div>
          <div style={localStyle.flex1}>
            <Button type="primary" onClick={() => { this.goPage('login'); }} >登录</Button>
            <Button style={{ marginLeft: '10px' }} onClick={() => { this.goPage('register'); }} >注册</Button>
          </div>
        </div>
        <div>
          <Menu onClick={this.handleClick} selectedKeys={[this.props.history.location.pathname]} mode="horizontal">
            <Menu.Item key="/home">
              平台概况
            </Menu.Item>
            <SubMenu key="SubMenu" title="实习就业">
              <Menu.Item key="/internship">实习入口</Menu.Item>
              <Menu.Item key="/job">就业入口</Menu.Item>
            </SubMenu>
            <Menu.Item key="/intelligence">
              智慧培训
            </Menu.Item>
            <Menu.Item key="/trade">
              数媒交易
            </Menu.Item>
            <Menu.Item key="/certificate">
              技能认证
            </Menu.Item>
            <Menu.Item key="/teacher">
              双师互聘
            </Menu.Item>
            <Menu.Item key="/device">
              设备共享
            </Menu.Item>
          </Menu>
        </div>
       {/* <div style={localStyle.tab}>
          <Tabs defaultActiveKey="1" activeKey={crtIndex} onChange={this.tabChange} tabBarGutter="100px" >
            <TabPane tab="平台概况" key="1" style={{ fontSize: '20px' }} />
            <TabPane tab="实习就业" key="2" />
            <TabPane tab="智慧培训" key="3" />
            <TabPane tab="数媒交易" key="4" />
            <TabPane tab="技能认证" key="5" />
            <TabPane tab="双师互聘" key="6" />
            <TabPane tab="设备共享" key="7" />
          </Tabs>
        </div>*/}
      </div>
    )
  }
}
export default withRouter(Header)