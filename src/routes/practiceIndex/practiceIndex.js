// 首页
import React from "react"
import {Button} from 'antd'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import bannerUrl from './img/banner1_u295.JPG'
import cardrUrl from './img/u359.JPG'

import './index.css'
import NewJob from "./components/NewJob"
import HotCmp from "./components/HotCmp"
import TypeModule from './components/TypeModule'

const PracticeIndex = (props) => {
    const stuResume = [
        { name: '杨虹', job: '物流电器', school: '四川长江职业学院', major: '电子商务',color:"#0099ff" },
        { name: '王曦', job: '物流电器', school: '四川长江职业学院', major: '电子商务',color:"#0099ff" },
        { name: '王曦', job: '计算机视觉', school: '四川长江职业学院', major: '电子商务',color:"#0099ff" },
        { name: '王曦', job: '物流电器', school: '四川长江职业学院', major: '电子商务' },
        { name: '王曦', job: '物流电器', school: '四川长江职业学院', major: '电子商务' },
        { name: '王曦', job: '物流电器', school: '四川长江职业学院', major: '电子商务' },
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
                <div className="ad">
                    <div className="ad-area">
                        <img src={bannerUrl} alt="" />
                    </div>
                </div>
                <div className="stu-about">
                    <div className="stu-resume">
                        <div className="top">
                            <span className="title">学生简历</span>
                            <span className="more">更多</span>
                        </div>
                        <div className="mid">
                            <span style={{ marginLeft: 10, width: 120 }}>姓名</span><span style={{ width: 180 }}>期望职位</span><span style={{ width: 230 }}>学校</span><span style={{ width: 230 }}>专业</span>
                        </div>
                        <div className="bot">
                            {stuResume.map((item, index) => {
                                return <div key={index} style={{ padding: "8px 0",color:item.color||"#000" }}><span style={{ marginLeft: 10, width: 120 }}>{item.name}</span><span style={{ width: 180 }}>{item.job}</span><span style={{ width: 230 }}>{item.school}</span><span style={{ width: 230 }}>{item.major}</span></div>
                            })}
                        </div>
                    </div>
                    <div className="per-card">
                        <div className="top">
                            <span className="title">岗位人才证书</span>
                            <span className="more">更多</span>
                        </div>
                        <div className="bot">
                            <div className="img-area"><img src={cardrUrl} width="100%" alt="" /></div>
                        </div>
                    </div>
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

export default PracticeIndex;