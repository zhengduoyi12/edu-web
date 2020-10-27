import React, { useEffect, useState } from "react";
import { Input, Form, Cascader, Select, Radio,Button } from 'antd';
import ChapterItem from './ChapterItem';
// import Form from "antd/lib/form/Form";
const { Search } = Input;
const CreateSection = (props = {}) => {
  const { courseId } = props;
  const [chapter, setChapter] = useState(true);
  const classList = [
    {
      title: '大课时1',
      class: [
        {
          id: '0101',
          type: '录播',
          title: '小课时1',
          time: 74
        }, {
          id: '0102',
          type: '录播',
          title: '小课时1',
          time: 81
        }
      ]
    }, {
      title: '大课时2',
      class: [
        {
          id: '0201',
          type: '录播',
          title: '小课时1',
          time: 74
        }
      ]
    }
  ];
  const onSearchChapter = (value) => {
    console.log('value', value + chapter);
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