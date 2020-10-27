// 创建课程-价格设置
import React from "react";
import { Form, Input, Button,Radio } from 'antd';
import { addCoursePrice } from 'apis/course';

const CreatePrice = (props = {}) => {
  const { courseId } = props;

  const onFinish = (value) => {
    const params = value;
    params.id = courseId;
    addCoursePrice(params).then(res => {
      const { code } = res;
      if (code == '00000') {
        console.log('success');
      }
    }, err => {
      console.log(err);
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='create-base'>
      <div className="title">价格</div>
      <Form
        labelCol={{ span: 4, offset: 7 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="课程价格" name="priceFlag" rules={[{ required: true, message: '请选择课程价格!', }]}>
          <Radio.Group>
            <Radio value={0}>免费</Radio>
            <Radio value={1}>收费</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 10 }}>
          <Button type="primary" htmlType="submit">保存</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePrice;