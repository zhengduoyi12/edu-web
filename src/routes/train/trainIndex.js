// 首页
import React from "react";
import { Card, Carousel } from "antd";
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';

import './index.css';
import bannerUrl from 'assets/images/prac_banner1.jpg';

const TrainIndex = (props) => {
    const artList = ['20级技能班学生教学实训返校方案', '2019-2020学年第二学期实训工作计划', '关于实训带队老师安排的通知', '20级技能班学生教学实训返校方案', '20级技能班学生教学实训返校方案', '2019-2020学年第二学期实训工作计划', '关于实训带队老师安排的通知', '20级技能班学生教学实训返校方案'];
    const bannerList = [
        {
            url: require('assets/images/prac_crs1.jpg'),
        },
        {
            url: require('assets/images/prac_crs2.jpg'),
        },
        {
            url: require('assets/images/prac_crs3.jpg'),
        },
        {
            url: require('assets/images/prac_crs4.jpg'),
        }
    ];
    const planList = [
        { name: '实训计划', url: require('assets/images/prac_plan1.jpg') },
        { name: '历史实训成绩查询', url: require('assets/images/prac_plan2.jpg') },
        { name: '实训打卡', url: require('assets/images/prac_plan3.jpg') },
        { name: '实训自评', url: require('assets/images/prac_plan4.jpg') },
    ];
    const achivList = [
        { month: "2020.09", day: "29", content: "师范学院：全员动员 多措并举 推进实训" },
        { month: "2020.09", day: "27", content: "大数据+城建特色人才培养——学院大数据协同创新中心" },
        { month: "2020.09", day: "20", content: "创新体制机制，引领工程教育改革——看职业技术师范大学如何建设工程实训中心" },
        { month: "2020.09", day: "17", content: "学院：机械工程学院培养高素质应用创新型工程技术人才纪实" },
        { month: "2020.09", day: "15", content: "工程学院机器人学院智能制造实训基地：多专业融合的智能制造人才摇篮" },
    ];
    const cpyPicList = [
        { url: require('assets/images/prac_crs3.jpg') },
        { url: require('assets/images/prac_crs4.jpg') },
        { url: require('assets/images/prac_crs2.jpg') },
        { url: require('assets/images/prac_crs5.jpg') },
        { url: require('assets/images/prac_crs3.jpg') },
        { url: require('assets/images/prac_crs4.jpg') },
        { url: require('assets/images/prac_crs2.jpg') },
        { url: require('assets/images/prac_crs5.jpg') },
    ];
    const basePicList = [
        { url: require('assets/images/prac_crs3.jpg') },
        { url: require('assets/images/prac_crs4.jpg') },
        { url: require('assets/images/prac_crs2.jpg') },
        { url: require('assets/images/prac_crs5.jpg') },
    ];
    return (
        <div className="App">
            <Header props={props}></Header>
            <div className="body">
                <div className="pbanner">
                    <div className="pbanner-area">
                        <img src={bannerUrl} alt="" />
                    </div>
                </div>
                <div className="about">
                    <div className="background">
                        <div className="about-article">
                            <Card title="实训要文" bordered={false}>
                                {artList.map((item, index) => {
                                    return <div key={index} style={{ fontSize: "18px", height: "30px" }}>{item}</div>;
                                })}
                            </Card>
                        </div>
                        <div className="about-carousel">
                            <Carousel autoplay>
                                {bannerList.map((item, index) => (
                                    <div key={index} >
                                        <img src={item.url} style={{ height: "360px" }} alt=""></img>
                                        {/* <div style={{ backgroundImage: `url('${item.url}')`, height: '360px', color: '#fff' }}>{index}</div> */}
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="train-plan">
                    {planList.map((item, index) => {
                        return <div key={index} style={{ width: "280px", height: "118px", position: "relative" }}>
                            <img src={item.url} style={{ width: "280px", height: "118px" }} alt=""></img>
                            <div style={{ width: "280px", position: "absolute", top: "0", left: "0", fontSize: "30px", color: "#fff", lineHeight: "118px", textAlign: "center" }}>{item.name}</div>
                        </div>;
                    })}
                </div>
                <div className="train-achiv">
                    <Card title="实训合作成果" extra={<span style={{ color: '#9a9a9a', fontSize: "18px" }}>更多</span>}>
                        {achivList.map((item, index) => {
                            return <div key={index} style={{ fontSize: "18px", height: "42px", marginBottom: "12px" }}>
                                <div style={{ float: "left", width: "60px", height: "42px", textAlign: "center", color: "#fff", background: "linear-gradient(0deg, #0099FF 2%, #66CCFF 100%)" }}>
                                    <div style={{ fontSize: "16px", height: "24px" }}>{item.day}</div><div style={{ fontSize: "12px", height: "18px" }}>{item.month}</div>
                                </div>
                                <div style={{ float: "left", marginLeft: "30px", lineHeight: "42px" }}>{item.content}</div>
                            </div>;
                        })}
                    </Card>
                </div>
                <div className="train-achiv">
                    <Card title="实训合作企业" extra={<span style={{ color: '#9a9a9a', fontSize: "18px" }}>更多</span>}>
                        <div className="cpy-area">
                            {cpyPicList.map((item, index) => {
                                return <div key={index} style={{ width: "240px", height: "120px" }}>
                                    <img src={item.url} style={{ width: "240px", height: "120px" }} alt=""></img>
                                </div>;
                            })}
                        </div>

                    </Card>
                </div>
                <div className="train-achiv">
                    <Card title="优秀校内校外基地" extra={<span style={{ color: '#9a9a9a', fontSize: "18px" }}>更多</span>}>
                        <div className="base-area">
                            {basePicList.map((item, index) => {
                                return <div key={index} style={{ width: "240px", height: "120px" }}>
                                    <img src={item.url} style={{ width: "240px", height: "120px" }} alt=""></img>
                                    <div style={{ textAlign: "center", fontSize: "18px", lineHeight: "36px" }}>{item.name}</div>
                                </div>;
                            })}
                        </div>

                    </Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TrainIndex;