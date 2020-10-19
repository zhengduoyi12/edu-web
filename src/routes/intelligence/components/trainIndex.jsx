import React from 'react'

import './style.css'


const TrainIndex = () => {
    const trainTabs= [
        {
        "title": "虚拟仿真训练",
        "cardInfo": [{
            "name": "线上VR训练",
            "desc": "4万人已加入",
            "img": require("assets/u810_a.jpg"),
        }, {
            "name": "学生学习评价",
            "desc": "3000最新企业岗位",
            "img": require("assets/zzz.JPG"),
        }, {
            "name": "培训监管",
            "desc": "4万人已加入",
            "img": require("assets/aaa.JPG"),
        }, {
            "name": "成绩更新",
            "desc": "4万人已加入",
            "img": require("assets/u187_div.JPG"),
        }]
    }, {
        "title": "VR虚拟训练",
        "cardInfo": [{
            "name": "线上VR训练",
            "desc": "4万人已加入",
            "img": require("assets/u810_a.jpg"),
        }, {
            "name": "学习之星",
            "desc": "3000最新企业岗位",
            "img": require("assets/zzz.JPG"),
        }, {
            "name": "培训监管",
            "desc": "4万人已加入",
            "img": require("assets/u865_a.png"),
        }, {
            "name": "成绩更新",
            "desc": "4万人已加入",
            "img": require("assets/u875_a.png"),
        }]
    }]

    return (
      <div>
      {
          trainTabs.map((item, index) => {
              return (
                  <div key={`trainTabs_`+index} >
                      111
                  </div>
              )
          })
      }
      </div>
    )
}

export default TrainIndex