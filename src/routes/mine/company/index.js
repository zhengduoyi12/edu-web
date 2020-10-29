import React,{ useState }from "react";
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import { Layout, Menu } from 'antd';
import MyCoursePlan from '../teacher/myCourse';
import MyPosition from './myPosition';
import MyStream from './mystream';
import MyInfor from './myInfor';
import PositionManagement from './myPosition/positionManagement';
import './style.scss';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const CompanyHome = () => {
  function handleClick(e){
    console.log('click ', e);
    setDisplayIndex(e.key);
    console.log('displayIndex',displayIndex);
  }
  const [displayIndex, setDisplayIndex]=useState('11');

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
                我的排课
              </Menu.Item>
              <Menu.Item key="2">
                我的直播
              </Menu.Item>
              <SubMenu key="sub2" title="岗位">
                <Menu.Item key="3">发布新岗位</Menu.Item>
                <Menu.Item key="4">岗位管理</Menu.Item>
              </SubMenu>
              <Menu.Item key="5">
                候选人
              </Menu.Item>
              <SubMenu key="sub3" title="实习管理">
                <Menu.Item key="6">实习管理</Menu.Item>
                <Menu.Item key="7">实习考评</Menu.Item>
              </SubMenu>
              <Menu.Item key="8">
                实训管理
              </Menu.Item>
              <Menu.Item key="9">
                企业合作
              </Menu.Item>
              <Menu.Item key="10">
                就业管理
              </Menu.Item>
              <Menu.Item key="11">
                信息中心
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content>
              { (() => {
                switch (displayIndex) {
                case '1':
                  return <MyCoursePlan/>;
                case '2':
                  return <MyStream/>;
                case '3':
                  return <MyPosition/>;
                case '4':
                  return <PositionManagement/>;
                case '5':
                  return <MyPosition/>;
                case '11':
                  return <MyInfor/>;
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

export default CompanyHome;