import React, { Component } from 'react'
import { CaretDownOutlined } from '@ant-design/icons';

import './style.css'
import TrainCard from '../../components/trainCard'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'

export default class intelligence extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classList: [{
                "name": "MyAQL基础入门-数据库概述",
                "content": "南京大学基础课程",
                "img": require("../../assets/u161_a.png"),
                "member": "380"
            }, {
                "name": "MyAQL基础入门-数据库概述",
                "content": "南京大学基础课程",
                "img": require("../../assets/u169_a.png"),
                "member": "380"

            }, {
                "name": "全技能数据人才培养方案：第一课理论基础",
                "content": "湖南大学基础课程",
                "img": require("../../assets/u177_a.png"),
                "member": "380"
            }, {
                "name": "MyAQL基础入门-数据库概述",
                "content": "南京大学基础课程",
                "img": require("../../assets/u161_a.png"),
                "member": "380"
            }],
            trainCard: [{
                "title": "虚拟仿真训练",
                "cardInfo": [{
                    "name": "线上VR训练",
                    "desc": "4万人已加入",
                    "img": require("../../assets/u810_a.jpg"),
                }, {
                    "name": "学生学习评价",
                    "desc": "3000最新企业岗位",
                    "img": require("../../assets/zzz.JPG"),
                }, {
                    "name": "培训监管",
                    "desc": "4万人已加入",
                    "img": require("../../assets/aaa.JPG"),
                }, {
                    "name": "成绩更新",
                    "desc": "4万人已加入",
                    "img": require("../../assets/u187_div.JPG"),
                }]
            }, {
                "title": "VR虚拟训练",
                "cardInfo": [{
                    "name": "线上VR训练",
                    "desc": "4万人已加入",
                    "img": require("../../assets/u810_a.jpg"),
                }, {
                    "name": "学习之星",
                    "desc": "3000最新企业岗位",
                    "img": require("../../assets/zzz.JPG"),
                }, {
                    "name": "培训监管",
                    "desc": "4万人已加入",
                    "img": require("../../assets/u865_a.png"),
                }, {
                    "name": "成绩更新",
                    "desc": "4万人已加入",
                    "img": require("../../assets/u875_a.png"),
                }]
            }],
            rightInfo: [{
                "state": "正在直播",
                "info": "沈金义楠金大学教授：人工智能快速掌握"
            }, {
                "state": "正在直播",
                "info": "沈金义楠金大学教授：人工智能快速掌握"
            }, {
                "state": "17:00",
                "info": "沈金义楠金大学教授：人工智能快速掌握"
            }, {
                "state": "18:00",
                "info": "沈金义楠金大学教授：人工智能快速掌握"
            }, {
                "state": "19:00",
                "info": "沈金义楠金大学教授：人工智能快速掌握"
            }, {
                "state": "20:00",
                "info": "沈金义楠金大学教授：人工智能快速掌握"
            }, {
                "state": "21:00",
                "info": "沈金义楠金大学教授：人工智能快速掌握"
            }
            ]
        }
    }
    render() {
        const { rightInfo, classList, trainCard } = this.state;
        return (
            <div className="App">
                <Header props={this.props} crtIndex={3} />
                <div className="banner">
                </div>

                    <div className="insideCont">
                        <div className="title">
                            在线直播课程
                        </div>
                        <div className="topList">
                            <div className="leftImg">
                            </div>
                            <div className="rightInfo">
                                {
                                    rightInfo.map((item, index) => {
                                        return (
                                            <div key={`rightInfo_`+index} style={{  display: 'flex', padding:'8px'}}>
                                                <div style={{ width:'72px', textAlign:'center'}}>
                                                    <CaretDownOutlined  style={{ color:index===0||index===1? "#0099FF":"#999999"}}/>
                                                </div>
                                                <div style={{ width:'72px',  textAlign:'center', fontSize:'18px', color: index===0||index===1? '#0099FF':'#000000'}}>
                                                    {item.state}
                                                </div>
                                                <div style={{ width:'324px', marginLeft:'37px', textAlign:'center', fontSize:'18px', color:'#000000'}}>
                                                    {item.info}
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        {
                            classList.map((item, index) => {
                                return (
                                    <div key={`classList_`+index} style={{ marginTop: '35px', marginBottom: "69px", height: '300px', width: '277px', display: 'inline-block', marginLeft: index === 0 ? '0px' : '30px' }}>
                                        <div style={{ height: '300px', width: '280px', display: 'inline-block', borderColor: '#999', borderWidth: '1px', borderStyle: 'solid' }}>
                                            <img src={item.img} style={{ height: '172px', width: '100%' }} alt="" />
                                            <div style={{ padding: '8px' }}>
                                                <div style={{ height: '60px', fontSize: '18px' }}>
                                                    {item.name}
                                                </div>
                                                <div style={{ height: '20px', fontSize: '14px', color: '#999' }}>
                                                    {item.content}
                                                </div>
                                                <div style={{ marginTop: '10px' }}>
                                                    <div style={{ textAlign: 'left', width: '30%', display: 'inline-block' }}>
                                                        <span style={{ background: '#13B5B1', color: '#fff', width: '50px', height: '22px', lineHeight: '18px', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>免费</span>
                                                    </div>
                                                    <div style={{ textAlign: 'right', width: '60%', display: 'inline-block' }}>380人已完成学习</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            trainCard.map((item, index) => {
                                return (
                                    <div key={`trainCard_`+index}>
                                        <TrainCard arr={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                <Footer />
            </div>
        )
    }
}
