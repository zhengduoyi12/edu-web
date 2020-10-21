// 首页
import React from "react"
import { withRouter , useHistory } from 'react-router-dom';

import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import bannerUrl from 'assets/images/prac_banner1.jpg'
import Certificate from './components/certificate'
import Resume from './components/resume'
import NewJob from "./components/NewJob"
import HotCmp from "./components/HotCmp"


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
    const history = useHistory();
   
    function goSearchResult(){
      history.push("/search");
    }
    return (
        <div className="App">
            <Header/>    
            <img src={bannerUrl} alt="" style={{width:'1920px',height:'220px'}}/>
                <div style={{width:'1200px', margin:'0 auto'}}>
                    <div  style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
                        <Resume/> 
                        <Certificate/>
                    </div>
                    <div>
                        <p style={{fontSize:'32px', fontWeight:'bold',textAlign:'left'}}>最新职位</p>
                        <NewJob jobList={jobList}/>
                    </div>
                
                    <div style={{width:'140px',height:'40px', background:'#0099FF',color:'white',margin:'0 auto'}}>
                        <p onClick={() => { goSearchResult()}}style={{lineHeight:'40px', fontSize:'18px',fontWeight:'bold'}}>更多职位</p>
                    </div>
                   
                    <div>
                        <p style={{fontSize:'32px', fontWeight:'bold',textAlign:'left'}}>热门企业</p>
                        <HotCmp cmpList={cmpList}/>
                    </div>

                    <div style={{width:'140px',height:'40px', background:'#0099FF',color:'white',margin:'0 auto'}}>
                        <p onClick={() => { goSearchResult()}} style={{lineHeight:'40px', fontSize:'18px',fontWeight:'bold'}}>了解更多</p>
                    </div>
                </div>
                 
            <Footer></Footer>
        </div>
    )
}

export default PracticeIndex;