import React from "react";
import { Input, Table, Space } from 'antd';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SearchTag from '../../search/components/SearchTag';
import '../style.scss';

const TalentList = () => {

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '意向职位',
      key: 'role',
      dataIndex: 'role', 
    },
    {
      title: '地区',
      key: 'area',
      dataIndex: 'area', 
    },
    {
      title: '学历',
      dataIndex: 'education',
      key: 'education',
    },
    {
      title: '专业',
      dataIndex: 'major',
      key: 'major',
    },
    {
      title: '院校',
      dataIndex: 'school',
      key: 'school',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a onClick={()=>{window.alert('查看简历');}}>查看</a>
          <a onClick={()=>{window.alert('下载简历');}}>下载</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '2',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '3',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '4',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '5',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '6',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '7',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '8',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '9',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '10',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '11',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '12',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '13',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '14',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '15',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '16',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
    {
      key: '17',
      name:'海姚',
      gender: '女',
      age: 32,
      role: '会计',
      area: '陕西省西安市',
      education: '本科',
      major: '财务管理',
      school: '西安培华学院',
    },
  ];



  const { Search } = Input;
  return (
    <div className="TalentList">
      <Header/>
      <div className="RoleSearch" style={{ height: '160px', backgroundColor: '#DDDDDD'}}>
        <Search placeholder="输入关键词" enterButton="搜索" style={{ width: 400 }} />
      </div>
      <div style={{ width: '1200px', margin: '0 auto', padding:'20px' }}>
        <SearchTag/>
        <Table columns={columns} dataSource={data}></Table>
      </div> 
      <Footer/>
    </div>
  );
};

export default TalentList;