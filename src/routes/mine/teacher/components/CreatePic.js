import React from 'react';
import { Upload, message, Button,Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CreatePic = (props={}) => {
    const {createPicKey} = props;
    const up = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div className="create-pic">
            <div className="title">课程图片</div>
            <Row>
                <Col span={4} offset={4}>课程封面图片：</Col>
                <Col span={8} offset={1}>
                    <Upload {...up}>
                        <Button icon={<UploadOutlined />}>上传图片</Button>
                    </Upload>
                </Col>
            </Row>
            <Row>
                <Col span={4} offset={4}>预览：</Col>
                <Col span={8} offset={1}>
                    <div className="img-area"></div>
                </Col>
            </Row>
            <Row>
                <Col offset={9}>
                    <Button type="primary" htmlType="submit">保存</Button>
                    <Button type="primary" htmlType="submit" onClick={createPicKey}>下一步</Button>
                    <Button>取消</Button>
                </Col>
            </Row>

        </div>
    );
};

export default CreatePic;