import React, { useState }from "react";
import { Form , Cascader , Select, Input, Button, Checkbox, InputNumber } from 'antd';
import { addPosition } from 'apis/company';
const MyPosition = () => {
  const [contentDisplay, setContentDisplay] = useState(false);

  const { Option } = Select;
  const { TextArea } = Input;
  const CheckboxGroup = Checkbox.Group;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function handleDisplay(contentDisplay){
    // console.log('contentDisplay',contentDisplay);
    setContentDisplay(!contentDisplay);
  }
  const plainOptions = ['五险一金', '住房补贴', '交通补贴','节日福利', '专业培训', '绩效奖金'];
  const onFinish = (value) => {
    let data= {};
    data={...value,benefits: value.benefits.join(',')};
    data.enterpriseOrgId=0;
    //console.log(data);
    addPosition(data).then(res => {
      const { code, data } = res;
      if (code == '00000') {
        alert('success');
        setContentDisplay(!contentDisplay);
      }
    }, err => {
      console.log(err);
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='MyPosition'>
      <div className="title">发布岗位</div>
      <div className="buttonArea">
        <Button onClick={()=>{handleDisplay(contentDisplay);}} >+ 发布新岗位</Button>
        <p>取消发布</p>
      </div>
      <div className="content-container" style={{display:contentDisplay?'none':'block'}}>
        <div className="titleRow">
          <div className="titleIcon"></div>
            岗位要求
        </div>
        <div className="form-container">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
              ['headcount']: 3
            }}
          >
            <Form.Item
              label="招聘类型"
              name="type"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select //defaultValue="graduate" 
                style={{ width: 200 }} onChange={handleChange}
              >
                <Option value="general">社会招聘</Option>
                <Option value="graduate">应届毕业生招聘</Option>
                <Option value="internship">实习岗位招聘</Option>
                <Option value="part-time">兼职招聘</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="岗位名称"
              name="title"
              rules={[{ required: true, message: 'Please input your positionName!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="经验要求"
              name="experience"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select //defaultValue="noRequire"
                style={{ width: 200 }} onChange={handleChange}
              >
                <Option value="noRequire">无要求</Option>
                <Option value="13">1-3年</Option>
                <Option value="35">3-5年</Option>
                <Option value="5more">5年以上</Option>
                <Option value="10more">10年以上</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="学历要求"
              name="education"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select //defaultValue="noRequire"
                style={{ width: 200 }} onChange={handleChange}
              >
                <Option value="0">无要求</Option>
                <Option value="1">大专</Option>
                <Option value="2">本科</Option>
                <Option value="3">硕士</Option>
                <Option value="4">博士</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="薪资范围"
              name="payRange"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select //defaultValue="05" 
                style={{ width: 200 }} onChange={handleChange}
              >
                <Option value="0">0-5k</Option>
                <Option value="1">5k-10k</Option>
                <Option value="2">10-15k</Option>
                <Option value="3">15k-20k</Option>
                <Option value="4">20k-25k</Option>
                <Option value="5">25k-30k</Option>
                <Option value="6">30k-35k</Option>
                <Option value="7">35k-40k</Option>
                <Option value="8">40k以上</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="招聘人数"
              name="headcount"
              rules={[{ required: true, message: 'Please input your headcount!' }]}
            >
              <InputNumber min={1} onChange={handleChange}></InputNumber >
            </Form.Item>

            <Form.Item
              label="职位描述"
              name="description"
              rules={[{ required: true, message: 'Please input your description!' }]}
            >
              <TextArea rows={6} maxLength={500} showCount></TextArea>
            </Form.Item>

            <Form.Item
              label="福利待遇"
              name="benefits"
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
              name="location"
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
              <div style={{textAlign:'center'}}>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </div>
              {/* <Button style={{marginLeft:'20px'}}>
                保存待发布
              </Button> */}
            </Form.Item>

          </Form>
        </div>
      </div>
    </div>
    
  );
};

export default MyPosition;