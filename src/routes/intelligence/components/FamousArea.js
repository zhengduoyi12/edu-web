// js， hooks写法
import { Card } from "antd";
import React from "react";

const FamousArea = () => {
  const streamingTabs = [
    {
      "time": "今天 20：00",
      "name": "十年老鸟分享他的设计模式经验",
      "hoster": "AA",
      "title": "网易Java高级架构师",
      "img": require("assets/profile1.png"),
    }, {
      "time": "今天 20：00",
      "name": "听完这次课，从此再也不怕面试问分布式锁",
      "hoster": "BB",
      "title": "网易Java高级架构师",
      "img": require("assets/profile2.jpg"),
    }, {
      "time": "今天 20：00",
      "name": "千万流量下的分布式限流原理及实战",
      "hoster": "CC",
      "title": "网易Java高级架构师",
      "img": require("assets/profile3.jpg"),
    }, {
      "time": "今天 20：00",
      "name": "【量化金融入门】利用python玩转A股投资",
      "hoster": "DD",
      "title": "网易Java高级架构师",
      "img": require("assets/profile4.jpg"),
    }, {
      "time": "今天 20：00",
      "name": "网易项目:0基础快速搞定高级图标设计",
      "hoster": "RR",
      "title": "网易Java高级架构师",
      "img": require("assets/profile5.jpg"),
    }, {
      "time": "今天 20：00",
      "name": "UI设计师最关注的5大问题全解析",
      "hoster": "EE",
      "title": "网易Java高级架构师",
      "img": require("assets/profile1.png"),
    }
  ];

  return (
    <div style={{ width: '1200px', margin: '40px 0' }}>
      <div style={{ height: '100px', fontSize: "32px", fontWeight: 'bold', textAlign: 'left', lineHeight: '100px' }} >
                名师直播
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-between',height:'320px'}}>
        {
          streamingTabs.map((item, index) => {
            return (
              <div key={`streamingTabs_` + index} style={{ width: '390px', height: '148px'}}>
                <Card hoverable bordered={false} style={{ width: '390px', height: '148px' }}>
                  <div style={{ width: '80px', height: '100px', display: 'inline-block',float:'left'}}>
                    <img src={item.img} style={{ width: '80px', height: '80px', borderRadius: '50%' }} alt='' />
                  </div>
                  <div style={{ width: '250px',height: '100px', display: 'inline-block',float:'left',marginLeft:'10px', textAlign: 'left' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <span>{item.time}</span>
                      <span style={{ margin: '0 15px' }}>|</span>
                      <span style={{ color: '#49af4f' }}>开播提醒 </span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>{item.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      <span style={{ marginRight: '15px' }}>{item.hoster}</span>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </Card>

              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default FamousArea;