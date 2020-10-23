import React from 'react';
import {Form,Input,Button} from 'antd';


const CreateTeach = (props={}) => {
    const {createTeachKey} = props;
    return (
        <div className="create-base">
            <div className="title">基础信息</div>
            <Form
                labelCol={{ span: 4,offset:4 }}
                wrapperCol={{ span: 8 }}
                layout="horizontal"
            >
                <Form.Item label="讲师昵称">
                    <Input />
                </Form.Item>
                <Form.Item label="个人介绍">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 8,offset:8}}>
                    <Button type="primary" htmlType="submit">保存</Button>
                    <Button type="primary" htmlType="submit" onClick={createTeachKey}>下一步</Button>
                    <Button>取消</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateTeach;