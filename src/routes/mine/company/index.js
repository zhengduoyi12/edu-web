import React,{ useState }from "react";
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import { Layout, Menu} from 'antd';
import MyCoursePlan from './myCoursePlan';
import MyPosition from './myPosition';
import MyStream from './mystream';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const CompanyHome = () => {
  function handleClick(e){
    console.log('click ', e);
    setDisplayIndex(e.key);
    console.log('displayIndex',displayIndex);
  }
  const [displayIndex, setDisplayIndex]=useState('0');

  return (
    <div>
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
            style={{
            }}
          >
            <Menu
              onClick={(e)=>{handleClick(e);}}
              style={{ width: 256 }}
              defaultSelectedKeys={['']}
              mode="inline"
            >
              <Menu.Item key="1">
                我的排课
              </Menu.Item>
              <Menu.Item key="2">
                我的直播
              </Menu.Item>
              <SubMenu key="sub2" title="岗位">
                <Menu.Item key="5">发布新岗位</Menu.Item>
                <Menu.Item key="6">岗位管理</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="实习管理">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            { (() => {
                   switch (displayIndex) {
                    case '0':
                      return <MyCoursePlan/>;
                    case '1':
                      return <MyStream/>;
                    case '2':
                      return <MyPosition/>;
                    case '3':
                      return <MyPosition/>;
                    case '4':
                      return <MyPosition/>;
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