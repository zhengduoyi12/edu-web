import React from "react";
import { Form , Cascader , Select, Input, Button, Checkbox, InputNumber } from 'antd';
const MyPosition = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  const CheckboxGroup = Checkbox.Group;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const plainOptions = ['五险一金', '住房补贴', '交通补贴','节日福利', '专业培训', '绩效奖金'];
  return (
    <div className='MyPosition'>
      <div className="title">发布岗位</div>
      <div className="buttonArea">
        <Button disabled>+ 发布新岗位</Button>
        <p>取消发布</p>
      </div>
      <div className="titleRow">
        <div className="titleIcon"></div>
          岗位要求
      </div>
      <div className="container">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          //onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="招聘类型"
            name="recruitType"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select defaultValue="graduate" style={{ width: 200 }} onChange={handleChange}
            >
              <Option value="general">社会招聘</Option>
              <Option value="graduate">应届毕业生招聘</Option>
              <Option value="internship">实习岗位招聘</Option>
              <Option value="part-time">兼职招聘</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="岗位名称"
            name="positionName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="经验要求"
            name="experience"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select defaultValue="noRequire" style={{ width: 200 }} onChange={handleChange}
            >
              <Option value="noRequire">无要求</Option>
              <Option value="13">1-3年</Option>
              <Option value="35">3-5年</Option>
              <Option value="5more">5年以上</Option>
              <Option value="10more">10年以上</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="薪资范围"
            name="salary"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select defaultValue="05" style={{ width: 200 }} onChange={handleChange}
            >
              <Option value="05">0-5k</Option>
              <Option value="510">5k-10k</Option>
              <Option value="1020">10-15k</Option>
              <Option value="1520">15k-20k</Option>
              <Option value="2025">20k-25k</Option>
              <Option value="2530">25k-30k</Option>
              <Option value="3035">30k-35k</Option>
              <Option value="3540">35k-40k</Option>
              <Option value="40more">40k以上</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="招聘人数"
            name="numb"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputNumber min={1} defaultValue={3} onChange={handleChange}></InputNumber >
          </Form.Item>

          <Form.Item
            label="职位描述"
            name="description"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <TextArea rows={4} maxLength={500} showCount={true}></TextArea>
          </Form.Item>

          <Form.Item
            label="福利待遇"
            name="bonus"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <CheckboxGroup
              options={plainOptions}
              // value={this.state.checkedList}
              //  onChange={this.onChange}
            />
          </Form.Item>

          <Form.Item
            label="工作地点"
            name="place"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="所属部门"
            name="department"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              发布
            </Button>
            <Button style={{marginLeft:'20px'}}>
              保存待发布
            </Button>
          </Form.Item>

        </Form>
      </div>
      
    </div>
    
  );
};

export default MyPosition;