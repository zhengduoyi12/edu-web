import React, { useState } from "react";
import { Input, Form, Cascader, Select, Radio, Button } from 'antd';

const ChapterItem = (props = {}) => {
  const { item, index } = props;
  const [lesson, setLesson] = useState(true);

  return (
    <div>
      <div className="title-first">第{index + 1}章： {item.title}</div>
      {
        item.class.map((it, i) => (
          <div key={i} className="title-second">
            <span>课时{i + 1}</span>
            <span>{it.title}</span>
            <span>({it.time}分钟)</span>
            <span>({it.type})</span>
          </div>
        ))
      }
      {
        lesson ? (<div className="title-second" key={item.title} style={{ textAlign: 'center' }} onClick={() => setLesson(false)}>
          <span>+ 添加新课时</span>
        </div>) : (<div className="title-second-edit">
          <Form labelCol={{ span: 4, offset: 4 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal">
            <Form.Item label="课时类型">
              <Radio.Group>
                <Radio value={0}>视频</Radio>
                <Radio value={1}>文档</Radio>
                <Radio value={2}>直播</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="课时名称">
              <Input placeholder="请输入课时名称" />
            </Form.Item>
            <Form.Item label="课时分类">
              <Cascader placeholder="请选择课时分类" />
            </Form.Item>
            {/* <Form.Item label="标签添加" name="tagIndex" rules={[{ required: true, message: '请选择课程标签!', }]}>
                      <Select>
                        {tagList}
                      </Select>
                    </Form.Item> */}
            <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
              <Button type="primary" htmlType="submit">保存</Button>
              <Button onClick={() => setLesson(true)}>取消</Button>
            </Form.Item>
          </Form>
        </div>)
      }
      {/* <div className="title-second" style={{ textAlign: 'center' }}>
                <span>+ 添加新课时</span>
              </div> */}
    </div>
  );
};

export default ChapterItem;