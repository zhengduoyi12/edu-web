// 首页
import React from "react"
import { Card, Input, Carousel,Button } from 'antd'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'

import bannerUrl from 'assets/images/prac_banner1.jpg'

import './index.css'
import NewJob from "./components/NewJob"
import HotCmp from "./components/HotCmp"
import TypeModule from 'components/TypeModule'

const { Search } = Input
const JobIndex = (props) => {
    const typeList = [
        { name: 'IT互联网', includes: '软件 运营 硬件', color: "#0099ff" },
        { name: 'IT互联网', includes: '商务 销售 公关', color: "#0099ff" },
        { name: '市场商务', includes: '市场营销' }, { name: 'IT互联网', includes: '软件 运营 硬件' },
        { name: 'IT互联网', includes: '商务 销售 公关' },
        { name: '市场商务', includes: '市场营销' }, { name: 'IT互联网', includes: '软件 运营 硬件' },
    ]
    const jobTop = ['计算机', '算法', '大数据']
    const carouselList = [
        {
            url: require('assets/images/prac_crs6.jpg'),
        },{
            url: require('assets/images/prac_crs6.jpg'),
        },{
            url: require('assets/images/prac_crs6.jpg'),
        },{
            url: require('assets/images/prac_crs6.jpg'),
        },
    ]
    const siteList = [
        { url: require('assets/images/prac_site1.jpg') },
        { url: require('assets/images/prac_site1.jpg') },
        { url: require('assets/images/prac_site1.jpg') },
        { url: require('assets/images/prac_site1.jpg') },
        { url: require('assets/images/prac_site1.jpg') },
        { url: require('assets/images/prac_site1.jpg') },
        { url: require('assets/images/prac_site1.jpg') },
        { url: require('assets/images/prac_site1.jpg') },
    ]
    const jobList = [
        { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },{ name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
        { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
        { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
        { name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },{ name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },{ name: '储备干部', cmp: "实验室", money: "4000-5999", site: "浙江宁波", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
    ]
    const cmpList = [
        {name:'电器集团有限公司',site: "浙江宁波", week: "6天/周", month: "3个月",num:100},
        {name:'电器集团有限公司',site: "浙江宁波", week: "6天/周", month: "3个月",num:100},
        {name:'电器集团有限公司',site: "浙江宁波", week: "6天/周", month: "3个月",num:100},
        {name:'电器集团有限公司',site: "浙江宁波", week: "6天/周", month: "3个月",num:100},
        {name:'电器集团有限公司',site: "浙江宁波", week: "6天/周", month: "3个月",num:100},
        {name:'电器集团有限公司',site: "浙江宁波", week: "6天/周", month: "3个月",num:100},
    ]

    return (
        <div className="App">
            <Header props={props}></Header>
            <div className="body">
                <div className="pbanner">
                    <div className="pbanner-area">
                        <img src={bannerUrl} alt="" />
                    </div>
                </div>
                <div className="type-area">
                    <div className="type-top">
                        <Card title="全部分类" extra={<span style={{ color: '#999', fontSize: "18px" }}>更多</span>} bordered={false}>
                            {typeList.map((item, index) => {
                                return <div key={index} style={{ fontSize: "18px", height: "35px", color: item.color || "#333" }}>
                                    <span style={{ width: "173px", display: "inline-block" }}>{item.name}</span>
                                    <span style={{ width: "173px", display: "inline-block" }}>{item.includes}</span>
                                </div>
                            })}
                        </Card>
                    </div>
                    <div className="type-carousel">
                        <div className="search-area"><Search
                            enterButton="搜索"
                            size="large"
                        /></div>

                        <div className="key">热门搜索：{jobTop.map((item, index) => {
                            return <span key={index} style={{ marginRight: 8 }}>{item}</span>
                        })}
                        </div>
                        <div className="carousel-area">
                            <Carousel autoplay>
                                {carouselList.map((item, index) => (
                                    <div key={index} >
                                        <img src={item.url} style={{ width: "770px", height: "276px" }} alt=""></img>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="psite">
                    {siteList.map((item, index) => {
                        return <div key={index}><img src={item.url} style={{ width: "86px", height: "77px" }} alt=""></img></div>
                    })}
                </div>
                <div className="job-title">最新职位</div>
                <NewJob jobList={jobList} />
                <Button className="know-more">了解更多</Button>
                <div className="job-title">热门企业</div>
                <HotCmp cmpList={cmpList} />
                <Button className="know-more">了解更多</Button>
                <TypeModule/>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default JobIndex;