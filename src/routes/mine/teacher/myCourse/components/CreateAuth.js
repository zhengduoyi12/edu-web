// 创建课程-权限设置
import React from "react";
import { Form, Button, Radio,DatePicker,Input } from 'antd';
import { addCourseAuth } from 'apis/course';

const { RangePicker } = DatePicker;

const CreateAuth = (props = {}) => {
  const { courseId,courseForm,setCourseForm} = props;

  const onFinish = (value) => {
    setCourseForm({
      ...courseForm,
      ...value
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='create-base'>
      <div className="title">设置权限</div>
      <Form
        labelCol={{ span: 4, offset: 4 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="课程权限" name="authedFlag" rules={[{ required: true, message: '请选择课程权限!', }]}>
          <Radio.Group>
            <Radio value={0}>公开</Radio>
            <Radio value={1}>仅个人可见</Radio>
            <Radio value={2}>对个别人可见</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="开放时间">
          <RangePicker placeholder={['开始时间','结束时间']} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 9 }}>
          <Button type="primary" htmlType="submit">保存</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAuth;