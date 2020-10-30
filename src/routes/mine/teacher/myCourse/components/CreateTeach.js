// 创建课程-讲师信息
import React from 'react';
import {Form,Input,Button} from 'antd';
import {addPersonIntro} from 'apis/course';

const CreateTeach = (props={}) => {
  const {createTeachKey,courseId} = props;
  // const nextStep = () => {
  //   createTeachKey();
  // };
  const onFinish = (value) => {
    const params = value;
    params.id = courseId;
    addPersonIntro(params).then(res => {
      const { code } = res;
      if (code == '00000') {
        createTeachKey();
      }
    }, err => {
      console.log(err);
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="create-base">
      <div className="title">讲师信息</div>
      <Form
        labelCol={{ span: 4,offset:4 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="讲师昵称">
          <Input />
        </Form.Item>
        <Form.Item label="个人介绍" name="personalIntroduction" rules={[{ required: true, message: '请输入个人介绍!', }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8,offset:8}}>
          <Button type="primary" htmlType="submit">保存</Button>
          <Button type="primary" htmlType="submit">下一步</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTeach;