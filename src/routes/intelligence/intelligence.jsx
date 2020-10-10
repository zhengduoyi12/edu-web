import React, { Component } from 'react'
import { Layout } from 'antd'

import './style.css'
import ClassList from '../../components/classList'
import TrainCard from '../../components/trainCard'
const { Header, Content, Footer } = Layout;

export default class intelligence extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classList: [{
                "name": "MyAQL基础入门-数据库概述",
                "content": "南京大学基础课程",
                "img":require("../../assets/u161_a.png"),
                "member":"380"
            }, {
                "name": "MyAQL基础入门-数据库概述",
                "content": "南京大学基础课程",
                "img":require("../../assets/u169_a.png"),
                "member":"380"
                
            }, {
                "name": "全技能数据人才培养方案：第一课理论基础",
                "content": "湖南大学基础课程",
                "img":require("../../assets/u177_a.png"),
                "member":"380"
            }, {
                "name": "MyAQL基础入门-数据库概述",
                "content": "南京大学基础课程",
                "img":require("../../assets/u161_a.png"),
                "member":"380"
            }],
            trainCard:[{
                "title":"虚拟仿真训练",
                "cardInfo":[{
                    "name":"线上VR训练",
                    "desc":"4万人已加入"
                },{
                    "name":"学生学习评价",
                    "desc":"3000最新企业岗位"
                },{
                    "name":"培训监管",
                    "desc":"4万人已加入"
                },{
                    "name":"成绩更新",
                    "desc":"4万人已加入"
                }]
            },{
                "title":"VR虚拟训练",
                "cardInfo":[{
                    "name":"线上VR训练",
                    "desc":"4万人已加入"
                },{
                    "name":"学习之星",
                    "desc":"3000最新企业岗位"
                },{
                    "name":"培训监管",
                    "desc":"4万人已加入"
                },{
                    "name":"成绩更新",
                    "desc":"4万人已加入"
                }]
            }]
        }
    }
    render() {
        return (
            <Layout>
                <Header>
                    <div className="banner">
                    </div>
                </Header>
                <Content>
                    <div className="insideCont">
                        <div className="title">
                            在线直播课程
                        </div>
                        <div className="topList">
                            <div className="leftImg">
                            </div>
                            <div className="rightInfo">
                                <p>
                                    直播中   啊啊啊啊啊啊啊啊  不不不不不不不
                                </p>
                                <p>
                                    直播中   啊啊啊啊啊啊啊啊  不不不不不不不
                                </p>
                                <p>
                                    直播中   啊啊啊啊啊啊啊啊  不不不不不不不
                                </p>
                                <p>
                                    直播中   啊啊啊啊啊啊啊啊  不不不不不不不
                                </p>
                                <p>
                                    直播中   啊啊啊啊啊啊啊啊  不不不不不不不
                                </p>
                                <p>
                                    直播中   啊啊啊啊啊啊啊啊  不不不不不不不
                                </p>
                            </div>
                        </div>
                        {
                            this.state.classList.map(item => { 
                                return (
                                    <ClassList arr={item}>
                                    </ClassList>
                                )
                            })
                        }   
                        {
                            this.state.trainCard.map(item => { 
                                return (
                                    <div>
                                        
                                        <TrainCard arr={item}>
                                        </TrainCard>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Content>
                <Footer>
                </Footer>
            </Layout>
        )
    }
}
