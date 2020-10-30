import React from "react";
import { Input, Button, Form , Divider, Select, DatePicker, Cascader } from 'antd';


const Resume = () => {
    const { Option } = Select;
    const { TextArea } = Input;
    const { RangePicker } = DatePicker;
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
      const educationList=[
        { value:'1' , label: '不限'},
        { value:'2' , label: '初中及以下'},
        { value:'3' , label: '中专/终中技'},
        { value:'4' , label: '高中'},
        { value:'5' , label: '大专'},
        { value:'6' , label: '本科'},
        { value:'7' , label: '硕士'},
        { value:'8' , label: '博士'},
      ];
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    function onChange(value) {
    console.log(`selected ${value}`);
    }
  return (
    <div className="Resume">
        <div className='title'>简历导入 </div>
        <div className='importArea' >
            <Input placeholder='请选择简历，只能识别word，pdf。文件大小不可超过500K' style={{width:600}}/>
            <Button>导入简历</Button>
            </div>
        <div className='title'>简历增加 </div>
        <div className="container">
            <div className="containerTitle">简历信息（必填）</div>
        <Form
            labelCol={{span: 6}}
            name="basic"
            initialValues={{ remember: true }}
            >
            <Form.Item
                label="简历头像"
                name="photo"
            >
            </Form.Item>

            <Form.Item
                label="简历名称"
                name="resumeName"
            >
                <Input placeholder='请输入简历名称'/>
            </Form.Item>

            <Form.Item label="姓名" name="name">
                <Input placeholder='请输入姓名'/>
            </Form.Item>

            <Form.Item label="性别" name="gender">
                <Select defaultValue="male" onChange={handleChange}>
                    <Option value="male">男</Option>
                    <Option value="female">女</Option>
                </Select>
            </Form.Item>
            <Form.Item label="出生日期" name="birthday">
                <DatePicker placeholder='选择日历' onChange={onChange} />
            </Form.Item>
            <Form.Item label="手机号码" name="phone">
                <Input placeholder='请输入手机号'/>
            </Form.Item>
            <Form.Item label="电子邮箱" name="mail">
                <Input placeholder='请输入电子邮箱'/>
            </Form.Item>
            <Form.Item label="现居住地" name="liveplace">
                <Cascader
                    placeholder='请输入现居住地'
                    options={options}
                    onChange={onChange}
                />
            </Form.Item>
            <Form.Item label="期望地区" name="workplace">
                <Cascader
                    placeholder='请输入期望地区'
                    options={options}
                    onChange={onChange}
                />
            </Form.Item>
            <Form.Item label="期望职位" name="position">
                <Input placeholder='请输入期望职位'/>
            </Form.Item>
            <Form.Item label="期望薪资" name="salary">
                <Select placeholder='请选择期望薪资' options={educationList} onChange={handleChange}>
                </Select>
            </Form.Item>
            <Form.Item label="自我评价" name="commend">
                <TextArea rows={4} />
            </Form.Item>

            <Divider/>
            <div className="containerTitle">
                <p>教育信息</p>
                <p>(请填写您的最高学历)</p>
                </div>    
            <Form.Item label="学校" name="school">
                <Input placeholder='请输入学校全名'/>
            </Form.Item>
            <Form.Item label="学历" name="education">
                <Select placeholder='请选择期望薪资' onChange={handleChange}>
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
            <Form.Item label="专业" name="major">
                <Input placeholder='请输入专业'/>
            </Form.Item>
            <Form.Item label="毕业时间" name="gradate">
                <RangePicker />
            </Form.Item>
                <div>+增加教育信息</div>

            <Divider/>
            <div className="containerTitle">
            <p>实习工作经验</p>
            <p>(请填写最近的3段实习工作经验)</p></div>
            <Form.Item label="公司名称" name="password">
            </Form.Item>
            <Form.Item label="工作时间" name="password">
            </Form.Item>
            <Form.Item label="职位名称" name="password">
            </Form.Item>
            <Form.Item label="工作内容" name="password">
            </Form.Item>
                <div>+增加实习工作经历</div>

            <Divider/>
            <div className="containerTitle">
            <p>获得证书</p>
            <p>(请上传您的证书等，最多3项)</p></div>
            <Form.Item label="证书名称" name="password">
            </Form.Item>
            <Form.Item label="证书上传" name="password">
            </Form.Item>
            <div>+增加证书</div>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
                </div>
        </div>
  );
};

export default Resume;