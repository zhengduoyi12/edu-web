// 创建课程-创建章节
import React, { useEffect, useState } from "react";
import { Input, Form, Cascader, Select, Radio, Button } from 'antd';
import ChapterItem from './ChapterItem';
import { getChapterList, addChapter } from 'apis/course';

// import Form from "antd/lib/form/Form";
const { Search } = Input;
const CreateSection = (props = {}) => {
  const { courseId } = props;
  const [chapter, setChapter] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const classList = [
    {
      chapterName: '大课时1',
      class: [
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
      class: [
        {
          chapterId: '0201',
          type: '录播',
          chapterName: '小课时1',
          time: 74
        }
      ]
    }, {
      chapterName: '大课时3',
      class: []
    }
  ];
  useEffect(() => {
    const tfCourseList = (data) => {
      let arr = [];
      data.forEach(el => {
        if (!el.lessonId) {
          arr.push({
            chapterId: el.chapterId,
            chapterName: el.chapterName,
            class: []
          });
        }
      });
      data.forEach(el => {
        if (el.lessonId) {
          arr.forEach(it => {
            if (it.chapterId == el.chapterId) {
              it.class.push(el);
            }
          });
        }
      });
      return arr;
    };
    let params = {
      chapterId: 4
    };
    getChapterList(params).then(res => {
      const { code, data } = res;
      if (code == '00000') {
        setCourseList(tfCourseList(data));
      }
    });
  }, []);
  console.log('courseList', courseList);
  const onSearchChapter = (value) => {
    console.log('value', value + chapter);
    let params = {
      chapterId: 1,
      chapterName: value,
      courseId: 4
    };
    addChapter(params).then(res => {
      const { code, data } = res;
      if (code == '00000') {
        console.log('data', data);
      }
    });
    setChapter(true);
  };
  return (
    <div className="create-section">
      <div className="title">课程内容</div>
      <div style={{ width: '80%', margin: '0 auto' }}>
        {
          classList.map((item, index) => (
            <div key={index}>
              <ChapterItem item={item} index={index} />
            </div>

          ))
        }
        {
          chapter == true ? (<div className="title-first" style={{ textAlign: 'center' }} onClick={() => setChapter(false)}>+ 添加新章节</div>) :
            (<div className="title-first-edit"><div className="edit-title">第{classList.length + 1}章：</div><Search placeholder="请输入章节名称" enterButton="新建" onSearch={onSearchChapter} /></div>)
        }

      </div>

    </div>
  );
};

export default CreateSection;