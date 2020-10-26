import React, { useRef, useState, useEffect } from 'react';
import { Form, Input, Button, Select, Cascader } from 'antd';

import { getCourseTag, addBasicInfo } from 'apis/course';

const { Option } = Select;

const CreateBase = (props = {}) => {
  const [tagList, setTagList] = useState([]);
  const { createBaseKey } = props;
  const courseDegree = ['零基础入门', '入门到中级', '中级到高级', '高级精通'].map((item, index) => (<Option key={index}>{item}</Option>));
  const courseTag = ['零基础入门', '入门到中级', '中级到高级', '高级精通'].map((item, index) => (<Option key={index}>{item}</Option>));
  const [courseId, setCourseId] = useState(0);
  const [typeOption, setTypeOption] = useState([
    {
      "id": 1,
      "tagName": "计算机",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 2,
      "tagName": "编程语言",
      "parentId": 1,
      "grandpaId": 0,
      "tagPath": "2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 3,
      "tagName": "java",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "3/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 4,
      "tagName": "python",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "4/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 5,
      "tagName": "go",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "5/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 6,
      "tagName": "工程",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 7,
      "tagName": "机械维修",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 8,
      "tagName": "小汽车发动机维修",
      "parentId": 7,
      "grandpaId": 6,
      "tagPath": "8/7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 9,
      "tagName": "室内设计",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "9/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    }
  ]);
  // let { activeKey,setActiveKey } = useContext(MyContext);
  // const nextStep = () => {
  //     console.log(123);
  //     setActiveKey('3');
  // };
  const selectList = [
    {
      "id": 1,
      "tagName": "计算机",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 2,
      "tagName": "编程语言",
      "parentId": 1,
      "grandpaId": 0,
      "tagPath": "2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 3,
      "tagName": "java",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "3/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 4,
      "tagName": "python",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "4/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 5,
      "tagName": "go",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "5/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 6,
      "tagName": "工程",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 7,
      "tagName": "机械维修",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 8,
      "tagName": "小汽车发动机维修",
      "parentId": 7,
      "grandpaId": 6,
      "tagPath": "8/7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 9,
      "tagName": "室内设计",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "9/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    }
  ];
  useEffect(() => {
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
    setTypeOption(tfType(typeOption));

    getCourseTag().then((res) => {
      console.log('getCourseTag res=>', res);
    });
  }, []);
  const nextStep = () => {
    console.log(159);
  };
  const onFinish = (values) => {
    addBasicInfo(values).then(res => {
      const { code, data } = res;
      if (code == '00000') {
        setCourseId(data);
        createBaseKey();
      }
    }, err => {
      console.log(err);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const tfTag = (id) => {
    let arr = [];
    console.log('typeOption', selectList);
    selectList.forEach(el => {
      if (el.parentId == id) {
        arr.push({
          tag: el.id,
          tagName: el.tagName
        });
      }
    });
    console.log('arr', arr);
    arr = arr.map((item) => (<Option key={item.tag}>{item.tagName}</Option>));
    return arr;
  };
  const changeSelect = (value, selectedOptions) => {
    console.log('selectedOptions', selectedOptions);
    const { id } = selectedOptions[1];
    console.log('id', id);
    setTagList(tfTag(id));
  };

  return (
    <div className="create-base">
      <div className="title">基础信息</div>
      <Form
        labelCol={{ span: 4, offset: 4 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
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
        <Form.Item label="课程介绍" name="courseIntroduction" rules={[{ required: true, message: '请输入课程介绍!', }]}>
          <Input.TextArea placeholder="请输入课程介绍" />
        </Form.Item>
        <Form.Item label="标签添加" name="tagIndex" rules={[{ required: true, message: '请选择课程标签!', }]}>
          <Select>
            {tagList}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          {/* <Button type="primary" htmlType="submit">保存</Button> */}
          <Button type="primary" htmlType="submit">下一步</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateBase;