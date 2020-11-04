// 创建课程-基本信息
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Cascader } from 'antd';

import axios from 'axios';

import { getCourseTag } from 'apis/course';

const { Option } = Select;

const CreateBase = (props = {}) => {
  const [form] = Form.useForm();
  console.log('useForm=>',form);
  const { createBaseKey, setCourseForm, setCourseId, courseId, baseGet } = props;
  const [tagList, setTagList] = useState([]);
  const [btnStatus, setBtnStatus] = useState(false);
  const courseDegree = ['零基础入门', '入门到中级', '中级到高级', '高级精通'].map((item, index) => (<Option key={index}>{item}</Option>));
  // const [courseId, setCourseId] = useState(0);

  const [typeOption, setTypeOption] = useState([]);
  const [selectList, setSelectList] = useState([]);
  useEffect(() => {
    form.setFieldsValue(baseGet);
    console.log('form=>',form);
    const tfType = (tag) => {
      let arr = [];
      tag.forEach(el => {
        if (el.parentId == 0 && el.grandpaId == 0) {
          arr.push({
            id: el.id,
            value: el.tagName,
            label: el.tagName,
          });
        }
      });
      tag.forEach(el => {
        if (el.grandpaId == 0) {
          arr.forEach(it => {
            if (it.id == el.parentId) {
              if (it.children) {
                it.children.push({
                  id: el.id,
                  value: el.tagName,
                  label: el.tagName,
                });
              } else {
                it.children = [{
                  id: el.id,
                  value: el.tagName,
                  label: el.tagName,
                }];
              }
            }
          });
        }
      });
      return arr;
    };
    getCourseTag().then(res => {
      const { code, data } = res;
      if (code == '00000') {
        setTypeOption(tfType(data));
        setSelectList(data);
      }
    });
  }, []);
  const onFinish = (value) => {
    // setCourseId(data);
    setCourseForm(value);
    createBaseKey();
    // axios({
    //   url: '/edu/course/courseInfo',
    //   method: 'post',
    //   data: value
    // }).then(res => {
    //   const { code, data } = res.data;
    //   if (code == '00000') {
    //     setCourseId(data);
    //     createBaseKey();
    //   }
    // });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const tfTag = (id) => {
    let arr = [];
    selectList.forEach(el => {
      if (el.parentId == id) {
        arr.push({
          tag: el.id,
          tagName: el.tagName
        });
      }
    });
    arr = arr.map((item) => (<Option key={item.tag}>{item.tagName}</Option>));
    return arr;
  };
  const changeSelect = (value, selectedOptions) => {
    console.log('选择value',value);
    console.log('选择selectedOptions',selectedOptions);
    const { id } = selectedOptions[1];
    setTagList(tfTag(id));
  };

  return (
    <div className="create-base">
      <div className="title">基础信息</div>
      <Form
        labelCol={{ span: 4, offset: 4 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="课程名称" name="courseName" rules={[{ required: true, message: '请输入课程名称!', }]}>
          <Input placeholder="请输入课程名称" />
        </Form.Item>
        <Form.Item label="适用人群" name="forPerson" rules={[{ required: true, message: '请输入适用人群!', }]} >
          <Input placeholder="请选择适用人群" />
        </Form.Item>
        <Form.Item label="课程难度" name="difficulty" rules={[{ required: true, message: '请选择课程难度!', }]}>
          <Select placeholder="请选择课程难度">
            {courseDegree}
          </Select>
        </Form.Item>
        <Form.Item label="课程分类">
          <Cascader options={typeOption} onChange={changeSelect} placeholder="请选择课程分类" />
        </Form.Item>
        <Form.Item label="课程概述" name="summary" rules={[{ required: true, message: '请输入课程概述!', }]}>
          <Input.TextArea placeholder="请输入课程概述" />
        </Form.Item>
        <Form.Item label="课程目标" name="target" rules={[{ required: true, message: '请输入课程目标!', }]}>
          <Input.TextArea placeholder="请输入课程目标" />
        </Form.Item>
        <Form.Item label="常见问题" name="commonProblem" rules={[{ required: true, message: '请输入常见问题!', }]}>
          <Input.TextArea placeholder="请输入常见问题" />
        </Form.Item>
        <Form.Item label="标签添加" name="tagIndex" rules={[{ required: true, message: '请选择课程标签!', }]}>
          <Select>
            {tagList}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          {/* <Button type="primary" htmlType="submit">保存</Button> */}
          <Button type="primary" htmlType="submit" disabled={btnStatus}>下一步</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateBase;