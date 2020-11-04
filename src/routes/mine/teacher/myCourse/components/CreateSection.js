// 创建课程-创建章节
import React, { useEffect, useState } from "react";
import { Input, Form, Cascader, Select, Radio, Button, message, Row, Col } from 'antd';
import ChapterItem from './ChapterItem';

// import Form from "antd/lib/form/Form";
const { Search } = Input;
const CreateSection = (props = {}) => {
  const { courseId, courseForm, setCourseForm,createSectionKey } = props;
  const [chapter, setChapter] = useState(true);
  const [chapterName, setChapterName] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [lessonList, setLessonList] = useState([]);


  const classList = [
    {
      chapterName: '大课时1',
      children: [
        {
          chapterId: '0101',
          type: '录播',
          chapterName: '小课时1',
          time: 74
        }, {
          chapterId: '0102',
          type: '录播',
          chapterName: '小课时1',
          time: 81
        }
      ]
    }, {
      chapterName: '大课时2',
      children: [
        {
          chapterId: '0201',
          type: '录播',
          chapterName: '小课时1',
          time: 74
        }
      ]
    }, {
      chapterName: '大课时3',
      children: []
    }
  ];
  useEffect(() => {
    const tfLessonList = (data) => {
      let arr = [];
      data.forEach(el => {
        if (!el.lessonId) {
          arr.push({
            chapterId: el.chapterId,
            chapterName: el.chapterName,
            children: []
          });
        }
      });
      data.forEach(el => {
        if (el.lessonId) {
          arr.forEach(it => {
            if (it.chapterId == el.chapterId) {
              it.children.push(el);
            }
          });
        }
      });
      return arr;
    };
  }, []);
  const createChapter = (value) => {
    if (value) {
      setChapterName(value);
      setCourseList(() => {
        let arr = courseList;
        arr.push({ chapterName: value, children: [] });
        return arr;
      });
      setChapter(true);
    } else {
      message.warning('请输入章节名称！');
    }
  };
  const clickAdd = () => {
    if (courseList.length > 0 && courseList[courseList.length - 1].children.length == 0) {
      message.warning('请添加上一章节的课时！');
    } else {
      setChapter(false);
    }
  };
  const nextStep = () => {
    let courseArr = courseList;
    courseArr = courseArr.map((item, index) => {
      return {
        chapterName,
        children: item.children.map((it, i) => {
          return {
            ...it,
            lessonNum: i + 1,
            chapterNum: index + 1,
            chapterName: item.chapterName
          };
        })
      };
    });
    let arr = [];
    courseArr.forEach(item=>{
      item.children.forEach(it=> {
        arr.push(it);
      });
    });
    console.log('课时表单=>',arr);
    // 提交表单
    
  };
  return (
    <div className="create-section">
      <div className="title">课程内容</div>
      <div style={{ width: '80%', margin: '0 auto' }}>
        {
          courseList.map((item, index) => (
            <div key={index}>
              <ChapterItem item={item} index={index} courseList={courseList} setCourseList={setCourseList} />
            </div>
          ))
        }
        {
          chapter == true ? (<div className="title-first" style={{ textAlign: 'center' }} onClick={clickAdd}>+ 添加新章节</div>) :
            (<div className="title-first-edit"><div className="edit-title">第{courseList.length + 1}章：</div><Search placeholder="请输入章节名称" enterButton="新建" onSearch={createChapter} /></div>)
        }
      </div>
      <Row>
        <Col offset={10}>
          <Button type="primary" htmlType="submit" onClick={nextStep}>保存</Button>
          <Button>取消</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreateSection;