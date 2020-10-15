// 首页
import React from "react"
// import Header from 'components/header.js'
import { Button, Input, Card } from 'antd'
import { Link } from 'react-router-dom'

import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import TypeModule from 'components/TypeModule'
import './index.css'

const { Search } = Input
const Practice = (props = {}) => {
    const jobTop = [' 人力资源经理', ' 视频编辑', ' 售后客服']
    const hotJobTop = [
        { name: '销售经理', num: 1306, color: "#0099FF" },
        { name: '销售代表', num: 897, color: "#0099FF" },
        { name: '产品经理', num: 574, color: "#0099FF" },
        { name: '销售专员', num: 563 },
        { name: '项目经理', num: 552 },
        { name: 'java开发工程师', num: 550 },
        { name: '会计', num: 547 },
        { name: '销售工程师', num: 546 },
        { name: '销售助理', num: 480 },
        { name: '区域销售经理', num: 479 }
    ]
    const hotCmpTop = [
        { name: '阿里巴巴集团', num: 13896, color: "#0099FF" }, { name: '华为', num: 8829, color: "#0099FF" }, { name: '网易', num: 2325, color: "#0099FF" }, { name: '星巴克咖啡', num: 453 }, { name: '京东', num: 407 }, { name: '智云健康', num: 210 }, { name: '个推', num: 223 }, { name: '顺网科技', num: 98 }, { name: '九阳', num: 66 }, { name: '贝贝集团', num: 26 }
    ]
    return (
        <div className="App">
            {/* <div className="left"></div> */}
            <Header crtIndex={2} />
            <div className="body">
                <div className="pbanner">
                    <div className="pbanner-area">
                        <img src={'http://cdn.qjycloud.com/prictise_banner.jpg'} alt="" />
                    </div>
                </div>
                <div className="enter">
                    <Button><Link to="/practiceIndex">实习入口</Link></Button>
                    <Button><Link to="/trainIndex">实训入口</Link></Button>
                    <Button><Link to="/jobIndex">求职入口</Link></Button>
                </div>
                <div className="enter-title">为你匹配新工作</div>
                <div className="job-search">
                    <div className="area">
                        <Search
                            enterButton="搜索"
                            size="large"
                        />
                        <div className="key">{jobTop.map((item, index) => {
                            return <span key={index} style={{ marginRight: 8 }}>{item}</span>
                        })}</div>
                    </div>
                </div>
                <div className="hot-top">
                    <div className="hot-item">
                        <Card title="热门岗位榜单" extra={<span style={{ color: '#3FB9FF', fontSize: 18 }}>24h热门</span>} bordered={false}>
                            {hotJobTop.map((item, index) => {
                                return <div className="job-item" key={index} style={{ color: item.color || "#000" }}>
                                    <span style={{ marginRight: 40 }}>{index + 1}</span>
                                    <span>{item.name}</span><span style={{ float: 'right' }}>{item.num}</span>
                                </div>
                            })}
                        </Card>
                    </div>
                    <div className="hot-item">
                        <Card title="企业就业最佳榜单" extra={<span style={{ color: '#3FB9FF', fontSize: 18 }}>一周热门</span>} bordered={false}>
                            {hotCmpTop.map((item, index) => {
                                return <div className="job-item" key={index} style={{ color: item.color || "#000" }}>
                                    <span style={{ marginRight: 40 }}>{index + 1}</span>
                                    <span>{item.name}</span><span style={{ float: 'right' }}>{item.num}</span>
                                </div>
                            })}
                        </Card>
                    </div>
                </div>
                <TypeModule />
            </div>
            <Footer />
        </div>
    )
}

export default Practice;