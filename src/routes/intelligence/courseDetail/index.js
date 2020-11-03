import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DetailBase from './components/DetailBase';
import DetailCatalog from './components/DetailCatalog';
import DetailTeacher from './components/DetailTeacher';
import DetailContact from './components/DetailContact';
import DetailComment from './components/detailComment';
import { Tabs, Tag } from 'antd';
import '../index.scss';

import { getClassInfo } from 'apis/class';

const { TabPane } = Tabs;

const imgSheet = require('assets/sheet.png');
const ClassDetails = (props = {}) => {
  const [teacher, setTeacher] = useState({});
  const [classBase, setClassBase] = useState({});
  const [classList, setClassList] = useState([]);
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    function addColorTag(tag) {
      const color = ['red', 'gold', 'green', 'blue'];
      let i = 0;
      return tag.map(it => {
        i++;
        return {
          tag: it,
          color: color[i]
        };
      });
    }
    getClassInfo().then((res) => {
      setTeacher(res.teacher);
      setClassBase(res.classBase);
      setClassList(res.classList);
      setTagList(addColorTag(res.classBase.tag));
    }, (err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="App">
      <Header crtIndex={3} />
      <div className="body">
        <div style={{ height: '600px' }}>
          <img src={imgSheet} style={{ width: '1200px', height: '600px' }}></img>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <div style={{ width: '850px', textAlign: 'left' }}>
            <Tabs defaultActiveKey="3">
              <TabPane tab="课程概况" key="1">
                <DetailBase classBase={classBase} />
              </TabPane>
              <TabPane tab="目录" key="2">
                <DetailCatalog classList={classList} />
              </TabPane>
              <TabPane tab="评论" key="3">
                <DetailComment />
              </TabPane>
              <TabPane tab="作业" key="4">

              </TabPane>
            </Tabs>
          </div>
          <div style={{ width: '330px' }}>
            <Link to='/teacherDetails'>
              <DetailTeacher teacher={teacher} />
            </Link>
            <DetailContact teacher={teacher} />
            <div style={{ textAlign: 'left', fontSize: '16px', fontWeight: 700, marginTop: '20px' }}>标签：</div>
            <div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default ClassDetails;