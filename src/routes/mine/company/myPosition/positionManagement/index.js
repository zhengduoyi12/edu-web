import React , { useState, useEffect } from "react";
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { queryPosition, deletePosition } from 'apis/company';
const MyStream = () => {
  const page = 1;
  const columns = [
    {
      title: '岗位名称',
      dataIndex: 'title',
      width:200,
      align:'center',
      fixed: 'left',
    },
    {
      title: '岗位状态',
      dataIndex: 'status',
      width:100,
      align:'center',
      fixed: 'left',
    },
    {
      title: '部门名称',
      dataIndex: 'department',
      ellipsis: true,
      align:'center',
    },
    {
      title: '工作地点',
      dataIndex: 'location',
      ellipsis: true,
      align:'center',
    },
    {
      title: '招聘人数',
      dataIndex: 'headcount',
      align:'center',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      align:'center',
    },
    {
      title: '待审批简历',
      // dataIndex: 'id',
      align:'center',
    },
    {
      title: '操作列',
      width:200,
      align:'center',
      fixed: 'right',
      render: (text,record) => (
        <Space size="middle">
          <Link style={{color:'blue'}} to={{pathname:`/positionDetails/${record.id}`}} target="_blank">查看</Link>
          <a style={{color:'blue'}} onClick={()=>{window.alert('发布');}}>发布</a>
          <a style={{color:'blue'}} onClick={()=>{deleteRow(record.id);}}>删除</a>
        </Space>
      )
    }
  ];
  const stateList=[
    {key:1, value:'全部状态'},
    {key:2, value:'待发布'},
    {key:3, value:'待审核'},
    {key:4, value:'已发布'},
    {key:5, value:'已暂停'},
    {key:6, value:'已结束'},
    {key:7, value:'不通过'},
  ];
  function deleteRow(id){
    let data={
      id,
    };
    deletePosition(data).then(res => {
      window.alert('删除成功');
      let data={
        current:page,
        enterpriseOrgId:0,
        size:10
      };
      queryPosition(data).then(res => {
        if(res.data){
          setPageRes(res.data.records);
        }
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err);
    });
  }
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const [ pageRes, setPageRes ]= useState([]);
  useEffect(() => {
    let data={
      current:page,
      enterpriseOrgId:0,
      size:10
    };
    queryPosition(data).then(res => {
      if(res.data){
        setPageRes(res.data.records);
      }
    }, err => {
      console.log(err);
    });
  },[pageRes.length]);

  return (
    <div className="positionManagement">
      <div className="title">岗位管理</div>
      <div className="stateArea">
        {stateList.map((item,index)=>(
          <div key={'positionManagement_'+index}>
            <span>{item.value}</span>
            <span>(0)</span>
          </div>
        ))}
      </div>
      <br/>
      <Table
        bordered
        columns={columns}
        dataSource={pageRes}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default MyStream;