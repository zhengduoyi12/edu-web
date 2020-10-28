import React, { useState, useEffect } from "react";
import { Input, Form, Cascader, Select, Radio, Button, DatePicker } from 'antd';
import moment from 'moment';
import { addChapter, addLesson } from 'apis/course';
const { Option } = Select;
const { RangePicker } = DatePicker;
const ChapterItem = (props = {}) => {
  const { item, index } = props;
  const [tagList, setTagList] = useState([]);
  const [lesson, setLesson] = useState(true);
  const [typeOption, setTypeOption] = useState([
    {
      "id": 1,
      "tagName": "计算机",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 2,
      "tagName": "编程语言",
      "parentId": 1,
      "grandpaId": 0,
      "tagPath": "2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 3,
      "tagName": "java",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "3/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 4,
      "tagName": "python",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "4/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 5,
      "tagName": "go",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "5/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 6,
      "tagName": "工程",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 7,
      "tagName": "机械维修",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 8,
      "tagName": "小汽车发动机维修",
      "parentId": 7,
      "grandpaId": 6,
      "tagPath": "8/7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 9,
      "tagName": "室内设计",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "9/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    }
  ]);
  const selectList = [
    {
      "id": 1,
      "tagName": "计算机",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 2,
      "tagName": "编程语言",
      "parentId": 1,
      "grandpaId": 0,
      "tagPath": "2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 3,
      "tagName": "java",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "3/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 4,
      "tagName": "python",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "4/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 5,
      "tagName": "go",
      "parentId": 2,
      "grandpaId": 1,
      "tagPath": "5/2/1",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 6,
      "tagName": "工程",
      "parentId": 0,
      "grandpaId": 0,
      "tagPath": "6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 7,
      "tagName": "机械维修",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 8,
      "tagName": "小汽车发动机维修",
      "parentId": 7,
      "grandpaId": 6,
      "tagPath": "8/7/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    },
    {
      "id": 9,
      "tagName": "室内设计",
      "parentId": 6,
      "grandpaId": 0,
      "tagPath": "9/6",
      "isDeleted": null,
      "createTime": null,
      "createUserId": null,
      "updateTime": null,
      "updateUserId": null
    }
  ];
  useEffect(() => {
    const tfType = (tag) => {
      let arr = [];
      tag.forEach(el => {
        if (el.parentId == 0 && el.grandpaId == 0) {
          arr.push({
            id: el.id,
            value: el.tagName,
            label: el.tagName,
          });
        }
      });
      tag.forEach(el => {
        if (el.grandpaId == 0) {
          arr.forEach(it => {
            if (it.id == el.parentId) {
              if (it.children) {
                it.children.push({
                  id: el.id,
                  value: el.tagName,
                  label: el.tagName,
                });
              } else {
                it.children = [{
                  id: el.id,
                  value: el.tagName,
                  label: el.tagName,
                }];
              }
            }
          });
        }
      });
      return arr;
    };
    setTypeOption(tfType(typeOption));
  }, []);
  const tfTag = (id) => {
    let arr = [];
    selectList.forEach(el => {
      if (el.parentId == id) {
        arr.push({
          tag: el.id,
          tagName: el.tagName
        });
      }
    });
    arr = arr.map((item) => (<Option key={item.tag}>{item.tagName}</Option>));
    return arr;
  };
  const changeSelect = (value, selectedOptions) => {
    const { id } = selectedOptions[1];
    setTagList(tfTag(id));
  };
  const onFinish = (value) => {
    let {liveTime} = value;
    let liveEndTime = moment(liveTime[0]).format('YYYY-MM-DD hh:mm:ss');
    let liveStateTime = moment(liveTime[1]).format('YYYY-MM-DD hh:mm:ss');
    let params = {
      chapterId: 1,
      chapterType: value.chapterType,
      lessonName: value.lessonName,
      lessonTag: value.lessonTag,
      liveEndTime,
      liveStateTime
    };
    console.log('params',params);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  return (
    <div>
      <div className="title-first">第{index + 1}章： {item.chapterName}</div>
      {
        item.class.map((it, i) => (
          <div key={i} className="title-second">
            <span>课时{i + 1}</span>
            <span>{it.lessonName}</span>
            <span>({it.time}分钟)</span>
            <span>({it.type})</span>
          </div>
        ))
      }
      {
        lesson ? (<div className="title-second" key={item.lessonId} style={{ textAlign: 'center' }} onClick={() => setLesson(false)}>
          <span>+ 添加新课时</span>
        </div>) : (<div className="title-second-edit">
          <Form labelCol={{ span: 4, offset: 4 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item label="课时类型" name="chapterType" rules={[{ required: true, message: '请选择课时类型!', }]}>
              <Radio.Group>
                <Radio value={0}>视频</Radio>
                <Radio value={1}>文档</Radio>
                <Radio value={2}>直播</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="课时名称" name="lessonName" rules={[{ required: true, message: '请输入课时名称!', }]}>
              <Input placeholder="请输入课时名称" />
            </Form.Item>
            <Form.Item label="课时分类">
              <Cascader options={typeOption} onChange={changeSelect} allowClear={false} placeholder="请选择课时分类" />
            </Form.Item>
            <Form.Item label="标签添加" name="lessonTag" rules={[{ required: true, message: '请选择课程标签!', }]}>
              <Select>
                {tagList}
              </Select>
            </Form.Item>
            <Form.Item label="直播时间" name="liveTime" rules={[{ required: true, message: '请选择直播时间!', }]}>
              <RangePicker placeholder={['开始时间', '结束时间']} showTime={{ format: 'HH:mm' }} format='YYYY/MM/DD' />
            </Form.Item>
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