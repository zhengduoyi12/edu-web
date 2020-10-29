import React from "react";
import { Form , Upload, message , Input, Button, Cascader } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
const MyInfor = () => {
  const { loading, imageUrl } = [];
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  function onChange(value) {
    console.log(value);
  }
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  function handleChange(info){
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    // if (info.file.status === 'done') {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, imageUrl =>
    //     this.setState({
    //       imageUrl,
    //       loading: false,
    //     }),
    //   );
    // }
  }
  return (
    <div className='MyInfor'>
      <div className="title">基础资料</div>
      <div className="container">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          //onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="会员类型"
            name="recruitType"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            企业会员
          </Form.Item>
          <Form.Item
            label="身份类型"
            name="positionName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="头像选择"
            name="experience"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={()=>{handleChange();}}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            label="用户名"
            name="salary"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="手机号"
            name="numb"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="真实姓名"
            name="description"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="身份证号码"
            name="bonus"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="身份证正面"
            name="place"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="身份证正面反面"
            name="department"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="企业全名"
            name="description"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="统一社会信用代码"
            name="description"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="所在地区"
            name="description"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Cascader
              defaultValue={['zhejiang', 'hangzhou', 'xihu']}
              options={options}
              onChange={()=>{onChange();}}
            />
          </Form.Item>

          <Form.Item
            label="电子邮箱"
            name="description"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              保存
            </Button>
            <Button style={{marginLeft:'20px'}}>
              提交审核
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};

export default MyInfor;