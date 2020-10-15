// 组件
import React, { Component } from "react";
// import { baseStyle } from 'styles/baseStyle';
import { Input, Button, Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import './header.css'

const { Search } = Input;
const { TabPane } = Tabs;

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
      crtIndex: String(props.crtIndex),
    };
  }

  login = () => {
    this.props.history.push({
      pathname: 'login',
      params: {}
    });
  }

  register = () => {
    this.props.history.push({
      pathname: 'register',
      params: {}
    });
  }

  tabChange = (index) => {
    // 有点奇怪，需要封装
    const pageMap = {
      1: 'home',
      2: 'practice',
      3: 'intelligence',
    }
    this.props.history.push({
      pathname: pageMap[index] || '404',
      params: {}
    });
  }

  render() {
    const { crtIndex } = this.state;
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
            <Button type="primary" onClick={this.login} >登录</Button>
            <Button style={{ marginLeft: '10px' }} onClick={this.register} >注册</Button>
          </div>
        </div>
        <div style={localStyle.tab}>
          <Tabs defaultActiveKey="1" activeKey={crtIndex} onChange={this.tabChange} tabBarGutter="100px" >
            <TabPane tab="平台概况" key="1" style={{fontSize:'20px'}}/>
            <TabPane tab="实习就业" key="2" />
            <TabPane tab="智慧培训" key="3" />
            <TabPane tab="数媒交易" key="4" />
            <TabPane tab="技能认证" key="5" />
            <TabPane tab="双师互聘" key="6" />
            <TabPane tab="设备共享" key="7" />
          </Tabs>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)