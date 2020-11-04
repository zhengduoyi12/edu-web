// 创建课程-创建章节-章节课时组件
import React, { useState, useEffect } from "react";
import { Input, Form, Cascader, Select, Radio, Button, DatePicker } from 'antd';
import moment from 'moment';
import { getCourseTag } from 'apis/course';
const { Option } = Select;
const { RangePicker } = DatePicker;
const ChapterItem = (props = {}) => {
  const { item, index,courseList,setCourseList } = props;
  const [tagList, setTagList] = useState([]);

  const [typeOption, setTypeOption] = useState([]);
  const [selectList, setSelectList] = useState([]);

  const [lesson, setLesson] = useState(true);
  
  useEffect(() => {
    const tfType = (tag) => {
      let arr = [];
      tag.forEach(el => {
        if (el.parentId == 0 && el.grandpaId == 0) 
        {
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
    getCourseTag().then(res => {
      const { code, data } = res;
      if (code == '00000') {
        setTypeOption(tfType(data));
        setSelectList(data);
      }
    });
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
    let lessonForm = {
      lessonType: value.lessonType,
      lessonName: value.lessonName,
      tagIndex: value.tagIndex,
      liveEndTime,
      liveStateTime,
      lessonFilePath:'',
      referenceFilePath: '',
    };
    setCourseList(()=>{
      let arr = courseList;
      arr[index].children.push(lessonForm);
      return arr;
    });
    setLesson(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <div className="title-first">第{index + 1}章： {item.chapterName}</div>
      {
        item.children.map((it, i) => (
          <div key={i} className="title-second">
            <span>课时{i + 1}</span>
            <span>{it.lessonName}</span>
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
            <Form.Item label="课时类型" name="lessonType" initialValue={2} rules={[{ required: true, message: '请选择课时类型!', }]}>
              <Radio.Group>
                <Radio value={0} disabled>视频</Radio>
                <Radio value={1} disabled>文档</Radio>
                <Radio value={2}>直播</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="课时名称" name="lessonName" rules={[{ required: true, message: '请输入课时名称!', }]}>
              <Input placeholder="请输入课时名称" />
            </Form.Item>
            <Form.Item label="课时分类">
              <Cascader options={typeOption} onChange={changeSelect} allowClear={false} placeholder="请选择课时分类" />
            </Form.Item>
            <Form.Item label="标签添加" name="tagIndex" rules={[{ required: true, message: '请选择课程标签!', }]}>
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
    </div>
  );
};

export default ChapterItem;