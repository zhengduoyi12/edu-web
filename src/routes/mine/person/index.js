import React,{ useState }from "react";
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import { Layout, Menu } from 'antd';

import Resume from './resume';

import './style.scss';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const PersonHome = () => {
  function handleClick(e){
    console.log('click ', e);
    setDisplayIndex(e.key);
    console.log('displayIndex',displayIndex);
  }
  const [displayIndex, setDisplayIndex]=useState('4');

  return (
    <div className="CompanyHome">
      <Header />
      <div style={{ width: '100%', backgroundColor: '#00c0c0' }}>
        <div className="body" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '220px' }}>
          <img src={require('assets/teacher01.jpg')} style={{ width: '100px', height: '100px', borderRadius: '50%' }}></img>
          <div>
            <div>昵称：</div>
            <div>身份认证：</div>
          </div>
        </div>
      </div>
      <div className="body" style={{ marginTop: '40px' }}>
        <Layout>
          <Sider
            theme={'light'}
            width={256}
          >
            <Menu
              onClick={(e)=>{handleClick(e);}}
              style={{ width: 256 }}
              defaultOpenKeys={['11']}
              defaultSelectedKeys={['11']}
              mode="inline"
            >
              <Menu.Item key="1">
                学习中心
              </Menu.Item>
              <SubMenu key="sub2" title="个人画像">
                <Menu.Item key="3">智能分析和匹配</Menu.Item>
                <Menu.Item key="4">简历增加和导入</Menu.Item>
              </SubMenu>
              <Menu.Item key="5">
                证书管理
              </Menu.Item>
              <SubMenu key="sub3" title="信息中心">
                <Menu.Item key="6">11</Menu.Item>
                <Menu.Item key="7">11</Menu.Item>
              </SubMenu>
              <Menu.Item key="8">
                我的收藏
              </Menu.Item>
              <Menu.Item key="9">
                我的关注
              </Menu.Item>
              <Menu.Item key="10">
                优惠券
              </Menu.Item>
              <Menu.Item key="11">
                订单中心
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content>
              { (() => {
                switch (displayIndex) {
                case '1':
                  return ;
                case '2':
                  return ;
                case '3':
                  return ;
                case '4':
                  return <Resume/>;
                case '5':
                  return ;
                case '11':
                  return ;
                default:
                  return null;
                }
              })()
              }
            </Content>
          </Layout>
        </Layout>
      </div>
      <Footer/>
    </div>
  );
};

export default PersonHome;