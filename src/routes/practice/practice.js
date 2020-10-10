// 首页
import React from "react"
// import Header from 'components/header.js'
import { Button, Input, Card } from 'antd'
import { Link } from 'react-router-dom'

import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import bannerUrl from './img/banner-ad.jpg'
import './index.css'

const { Search } = Input
const { Meta } = Card
const Practice = (props = {}) => {
    const jobTop = ['计算机', '算法', '大数据']
    const hotJobTop = [
        { name: '计算机数据分析', num: 1233 },
        { name: '人工智能算法研究', num: 897 },
        { name: '数据分析', num: 687 }, { name: '计算机数据分析', num: 1233 },
        { name: '人工智能算法研究', num: 897 },
        { name: '数据分析', num: 687 }, { name: '计算机数据分析', num: 1233 },
        { name: '人工智能算法研究', num: 897 },
        { name: '数据分析', num: 687 }, { name: '计算机数据分析', num: 1233 }
    ]
    const hotCmpTop = [
        { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }, { name: '企业名称', num: 213 }
    ]
    return (
        <div className="App">
            {/* <div className="left"></div> */}
            <Header props={props} />
            <div className="body">
                <div className="ad">
                    <div className="ad-area">
                        <img src={bannerUrl} />
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
                        <Card title="热门岗位榜单" extra={<a>24h热门</a>} bordered={false}>
                            {hotJobTop.map((item, index) => {
                                return <div className="job-item" key={index}>
                                    <span style={{ marginRight: 40 }}>{index + 1}</span>
                                    <span>{item.name}</span><span style={{ float: 'right' }}>{item.num}</span>
                                </div>
                            })}
                        </Card>
                    </div>
                    <div className="hot-item">
                        <Card title="企业就业最佳榜单" extra={<a>一周热门</a>} bordered={false}>
                            {hotCmpTop.map((item, index) => {
                                return <div className="job-item" key={index}>
                                    <span style={{ marginRight: 40 }}>{index + 1}</span>
                                    <span>{item.name}</span><span style={{ float: 'right' }}>{item.num}</span>
                                </div>
                            })}
                        </Card>
                    </div>
                </div>

                <div className="type">
                    <Card
                        hoverable
                        style={{ width: 280 }}
                        cover={<img alt="example" src={require('./img/u187_div.JPG')} />}
                    >
                        <Meta title="学生简历" description="4万人已加入" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 280 }}
                        cover={<img alt="example" src={require('./img/u197_div.JPG')} />}
                    >
                        <Meta title="企业岗位" description="3000最新企业岗位" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 280 }}
                        cover={<img alt="example" src={require('./img/u202_div.JPG')} />}
                    >
                        <Meta title="就业在线匹配" description="4万人已加入" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 280 }}
                        cover={<img alt="example" src={require('./img/u192_div.JPG')} />}
                    >
                        <Meta title="智慧推荐" description="4万人已加入" />
                    </Card>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Practice;