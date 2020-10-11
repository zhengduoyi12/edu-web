// 首页
import React from "react"
// import Header from 'components/header.js'
import { Button, Input, Card } from 'antd'
import { Link } from 'react-router-dom'

import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import TypeModule from './components/TypeModule'
import './index.css'

const { Search } = Input
const Practice = (props = {}) => {
    const jobTop = ['计算机', '算法', '大数据']
    const hotJobTop = [
        { name: '计算机数据分析', num: 1233,color:"#0099FF" },
        { name: '人工智能算法研究', num: 897,color:"#0099FF" },
        { name: '数据分析', num: 687,color:"#0099FF" }, { name: '计算机数据分析', num: 1233 },
        { name: '人工智能算法研究', num: 897 },
        { name: '数据分析', num: 687 }, { name: '计算机数据分析', num: 1233 },
        { name: '人工智能算法研究', num: 897 },
        { name: '数据分析', num: 687 }, { name: '计算机数据分析', num: 1233 }
    ]
    const hotCmpTop = [
        { name: '企业名称', num: 213,color:"#0099FF" }, { name: '企业名称', num: 213,color:"#0099FF" }, { name: '企业名称', num: 213,color:"#0099FF" }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }
    ]
    return (
        <div className="App">
            {/* <div className="left"></div> */}
            <Header props={props} crtIndex={2} />
            <div className="body">
                <div className="ad">
                    <div className="ad-area">
                        <img src={'http://cdn.qjycloud.com/prictise_banner.jpg'} alt=""/>
                    </div>
                </div>
                <div className="enter">
                    <Button><Link to="/practiceIndex">实习入口</Link></Button>
                    <Button><Link to="/trainInde">实训入口</Link></Button>
                    <Button><Link to="/jobInde">求职入口</Link></Button>
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
                        <Card title="热门岗位榜单" extra={<span style={{color:'#3FB9FF',fontSize:18}}>24h热门</span>} bordered={false}>
                            {hotJobTop.map((item, index) => {
                                return <div className="job-item" key={index} style={{color:item.color||"#000"}}>
                                    <span style={{ marginRight: 40 }}>{index + 1}</span>
                                    <span>{item.name}</span><span style={{ float: 'right' }}>{item.num}</span>
                                </div>
                            })}
                        </Card>
                    </div>
                    <div className="hot-item">
                        <Card title="企业就业最佳榜单" extra={<span style={{color:'#3FB9FF',fontSize:18}}>一周热门</span>} bordered={false}>
                            {hotCmpTop.map((item, index) => {
                                return <div className="job-item" key={index} style={{color:item.color||"#000"}}>
                                    <span style={{ marginRight: 40 }}>{index + 1}</span>
                                    <span>{item.name}</span><span style={{ float: 'right' }}>{item.num}</span>
                                </div>
                            })}
                        </Card>
                    </div>
                </div>
                <TypeModule/>
            </div>
            <Footer />
        </div>
    )
}

export default Practice;