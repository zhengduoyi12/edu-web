import React , { useState, useEffect } from "react";
import { Table, Space } from 'antd';
import { queryPosition } from 'apis/company';
const MyStream = () => {
  const page = 1;
  const columns = [
    {
      title: '岗位名称',
      dataIndex: 'title',
    },
    {
      title: '岗位状态',
      dataIndex: 'status',
    },
    {
      title: '部门名称',
      dataIndex: 'department',
    },
    {
      title: '工作地点',
      dataIndex: 'location',
    },
    {
      title: '招聘人数',
      dataIndex: 'headcount',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
    },
    {
      title: '待处理简历',
      dataIndex: 'id',
    },
    {
      title: '操作列',
      render: () => (
        <Space size="middle">
          <a onClick={()=>{window.alert('查看');}}>查看</a>
          <a onClick={()=>{window.alert('发布');}}>下载</a>
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
      setPageRes(res.data.records);
    }, err => {
      console.log(err);
    });
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  },[page]);

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
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={pageRes}
      />
    </div>
  );
};

export default MyStream;