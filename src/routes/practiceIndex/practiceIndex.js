// 首页
import React from "react"
import { Button } from 'antd'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import bannerUrl from 'assets/images/prac_banner1.jpg'
import cardrUrl from 'assets/images/prac_card.jpg'

import './index.css'
import NewJob from "./components/NewJob"
import HotCmp from "./components/HotCmp"
import TypeModule from 'components/TypeModule'

const PracticeIndex = (props) => {
    const stuResume = [
        { name: '杨虹', job: '财务', school: '四川长江职业学院', major: '财务管理', color: "#0099ff" },
        { name: '王曦', job: 'UI设计师', school: '四川长江职业学院', major: 'UI设计', color: "#0099ff" },
        { name: '李阳', job: 'Java', school: '四川长江职业学院', major: '计算机科学与技术', color: "#0099ff" },
        { name: '王金萍', job: '产品经理', school: '四川长江职业学院', major: '财务管理' },
        { name: '郑和', job: '市场营销', school: '四川长江职业学院', major: '财务管理' },
        { name: '安顺', job: '算法工程师', school: '四川长江职业学院', major: '计算机科学与技术' },
    ]
    const jobList = [
        { name: '数据治理', cmp: "浙江大华", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '测试工程师', cmp: "e签宝", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
        { name: '安全研发工程师', cmp: "货拉拉科技", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '产品运营', cmp: "乐刻运动健身", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
        { name: 'Java', cmp: "鲸灵", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '信贷/保险销售', cmp: "阿思拓", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
        { name: '结构工程师', cmp: "基准方中", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '课程顾问', cmp: "华尔街英语", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" }, { name: '主播', cmp: "乐娱文化", money: "4000-5999", site: "浙江杭州", week: "6天/周", month: "3个月", meeting: "米秋集团秋季招聘", type: "认证企业" },
    ]
    const cmpList = [
        { name: '蚂蚁金服', site: "浙江杭州", week: "6天/周", month: "3个月", num: 100,url:require('assets/images/prac_cpy01.jpg')},
        { name: '海康威视', site: "浙江杭州", week: "6天/周", month: "3个月", num: 100 ,url:require('assets/images/prac_cpy02.jpg')},
        { name: '滴滴出行', site: "浙江杭州", week: "6天/周", month: "3个月", num: 100 ,url:require('assets/images/prac_cpy03.jpg')},
        { name: '博彦科技', site: "浙江杭州", week: "6天/周", month: "3个月", num: 100 ,url:require('assets/images/prac_cpy04.jpg')},
        { name: '涂鸦智能', site: "浙江杭州", week: "6天/周", month: "3个月", num: 100 ,url:require('assets/images/prac_cpy05.jpg')},
        { name: '麦当劳', site: "浙江杭州", week: "6天/周", month: "3个月", num: 100 ,url:require('assets/images/prac_cpy06.jpg')},
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
                                return <div key={index} style={{ padding: "8px 0", color: item.color || "#000" }}><span style={{ marginLeft: 10, width: 120 }}>{item.name}</span><span style={{ width: 180 }}>{item.job}</span><span style={{ width: 230 }}>{item.school}</span><span style={{ width: 230 }}>{item.major}</span></div>
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
                <TypeModule />

            </div>
            <Footer></Footer>
        </div>
    )
}

export default PracticeIndex;