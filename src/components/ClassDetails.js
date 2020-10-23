import React, { useEffect, useState } from "react";
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Tabs,Tag } from 'antd';


import { getClassInfo } from 'apis/class';

const { TabPane } = Tabs;

const imgSheet = require('assets/sheet.png');
const ClassDetails = () => {
    const [teacher, setTeacher] = useState({});
    const [classBase, setClassBase] = useState({});
    const [classList, setClassList] = useState([]);
    const [tagList,setTagList] = useState([]);
    useEffect(() => {
        function addColorTag(tag){
            const color = ['red','gold','green','blue'];
            let i = 0;
            return tag.map(it=>{
                i++;
                return {
                    tag:it,
                    color:color[i]
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
                        <Tabs defaultActiveKey="2">
                            <TabPane tab="课程概况" key="1">
                                <div style={{ fontSize: '20px', fontWeight: '700' }}>简介：{classBase.title}</div>
                                <div style={{ fontSize: '18px', }}>简介：{classBase.content}</div>
                            </TabPane>
                            <TabPane tab="目录" key="2">
                                {
                                    classList.map((item, index) => (
                                        <div key={index}>
                                            <div style={{ fontSize: '16px', height: '46px', lineHeight: '46px', fontWeight: '700' }}>{index + 1} {item.title}</div>
                                            {
                                                item.class.map((it, i) => (
                                                    <div key={i} style={{ fontSize: '16px', height: '46px', lineHeight: '46px', marginBottom: '20px', backgroundColor: '#dcdcdc' }}>
                                                        <span style={{ marginLeft: '20px' }}>【{it.type}】</span>
                                                        <span style={{ marginLeft: '10px' }}>{it.title}</span>
                                                        <span style={{ marginLeft: '10px' }}>({it.time}分钟)</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </TabPane>
                            <TabPane tab="评论" key="3">

                            </TabPane>
                            <TabPane tab="作业" key="4">

                            </TabPane>
                        </Tabs>
                    </div>
                    <div style={{ width: '330px' }}>
                        <div style={{ textAlign: 'left', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: "#dcdcdc" }}>
                            <img src={teacher.selfImg} style={{ width: '100px', height: "140px",padding:'20px 0' }} alt=""></img>
                            <div style={{ height: '100px', width: '170px',padding:'20px 0' }}>
                                <div style={{ height: '60px', lineHeight: '60px', fontSize: '22px' }}>老师：{teacher.name}</div>
                                <div style={{ height: '40px', fontSize: '18px' }}>{teacher.school}</div>
                            </div>
                            <div style={{ width: '290px', height: '90px',padding:'10px 0', display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                                <div style={{ borderRight: '1px solid #000', width: '90px' }}>
                                    <div>课程数</div><div>{teacher.classNumber}</div>
                                </div>
                                <div style={{ width: '90px' }}>
                                    <div>学习人数</div><div>{teacher.studyNumber}</div>
                                </div>
                                <div style={{ borderLeft: '1px solid #000', width: '90px' }}>
                                    <div>评分</div><div>{teacher.rate}</div>
                                </div>
                            </div>
                            <div style={{ width: '290px',padding:'20px 0' }}>讲师介绍：{teacher.intro}</div>
                        </div>
                        <div style={{textAlign:'left',backgroundColor: "#dcdcdc",marginTop:'20px',fontSize:'16px' }}>
                            <div style={{padding:'10px 20px'}}>联系方式</div>
                            <div style={{padding:'10px 20px'}}>{teacher.name}老师emails：{teacher.email}</div>
                            <div style={{padding:'10px 20px'}}>助教老师emails：{teacher.supEmail}</div>
                            <div style={{padding:'10px 20px'}}>微信号：{teacher.wechat}</div>
                        </div>
                        <div style={{textAlign:'left',fontSize:'16px',fontWeight:700,marginTop:'20px'}}>标签：</div>
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            {
                                tagList.map((item,index)=>(
                                    <div key={index} style={{marginTop:'10px'}}><Tag color={item.color}>{item.tag}</Tag></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default ClassDetails;