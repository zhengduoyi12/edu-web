import React from "react";
import { Table, Space } from 'antd';

const MyStream = () => {
  const columns = [
    {
      title: '岗位名称',
      dataIndex: 'name',
    },
    {
      title: '岗位状态',
      dataIndex: 'state',
    },
    {
      title: '部门名称',
      dataIndex: 'department',
    },
    {
      title: '工作地点',
      dataIndex: 'place',
    },
    {
      title: '招聘人数',
      dataIndex: 'number',
    },
    {
      title: '更新时间',
      dataIndex: 'time',
    },
    {
      title: '待处理简历',
      dataIndex: 'resume',
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
  const data = [
    {
      key: '1',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '2',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '3',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '4',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '5',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '6',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '7',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '8',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '9',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
    {
      key: '10',
      name: '汽修装潢美容师',
      state: '已发布',
      department: '汽车装潢部',
      place:'杭州',
      number:3,
      time:'2020-10-27',
      resume:3,
    },
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
  return (
    <div className="positionManagement">
      <div className="title">岗位管理</div>
      <div className="stateArea">
        {stateList.map((item,index)=>(
          <div key={'positionManagement_'+item.key}>
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
        dataSource={data}
      />
    </div>
  );
};

export default MyStream;