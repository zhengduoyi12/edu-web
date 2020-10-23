import React from 'react';
import {Form,Input,Button,Select,Cascader} from 'antd';
const {Option} = Select;
const CreateBase = (props={}) => {
  const {createBaseKey} = props;
  const courseDegree = ['零基础入门','入门到中级','中级到高级','高级精通'].map((item,index)=>(<Option key={index}>{item}</Option>));
  const courseTag = ['零基础入门','入门到中级','中级到高级','高级精通'].map((item,index)=>(<Option key={index}>{item}</Option>));
  const typeOption = [
    {
      value: 'IT互联官',
      label: 'IT互联官',
      children: [
        {
          value: 'Java开发',
          label: 'Java开发',
        },{
          value: '前端开发',
          label: '前端开发',
        },{
          value: '互联网产品',
          label: '互联网产品',
        },
      ],
    },{
      value: '设计创作',
      label: '设计创作',
      children: [
        {
          value: '平面设计',
          label: '平面设计',
        },{
          value: 'UI设计',
          label: 'UI设计',
        }
      ],
    },
  ];
    // let { activeKey,setActiveKey } = useContext(MyContext);
    // const nextStep = () => {
    //     console.log(123);
    //     setActiveKey('3');
    // };
  const nextStep = () => {
    createBaseKey();
    console.log(159);
  };

  return (
    <div className="create-base">
      <div className="title">基础信息</div>
      <Form
        labelCol={{ span: 4,offset:4 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
      >
        <Form.Item label="课程名称">
          <Input placeholder="请输入课程名称" />
        </Form.Item>
        <Form.Item label="适用人群">
          <Input placeholder="请选择适用人群" />
        </Form.Item>
        <Form.Item label="课程难度">
          <Select placeholder="请选择课程难度">
            {courseDegree}
          </Select>
        </Form.Item>
        <Form.Item label="课程分类">
          <Cascader options={typeOption} placeholder="请选择课程分类" />
        </Form.Item>
        <Form.Item label="课程介绍">
          <Input.TextArea placeholder="请输入课程介绍" />
        </Form.Item>
        <Form.Item label="标签添加">
          <Select>
            {courseTag}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8,offset:8}}>
          <Button type="primary" htmlType="submit">保存</Button>
          <Button type="primary" htmlType="submit" onClick={nextStep}>下一步</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateBase;