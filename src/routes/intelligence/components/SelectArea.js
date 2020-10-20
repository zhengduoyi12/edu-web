// js， hooks写法
import React from "react"

const SelectArea = () => {
  const classTabs = [
    {
        "name": "MyAQL基础入门-数据库概述",
        "content": "南京大学基础课程",
        "img": require("assets/u161_a.png"),
        "member": "380"
    }, {
        "name": "MyAQL基础入门-数据库概述",
        "content": "南京大学基础课程",
        "img": require("assets/u169_a.png"),
        "member": "380"

    }, {
        "name": "全技能数据人才培养方案：第一课理论基础",
        "content": "湖南大学基础课程",
        "img": require("assets/u177_a.png"),
        "member": "380"
    }, {
        "name": "MyAQL基础入门-数据库概述",
        "content": "南京大学基础课程",
        "img": require("assets/u161_a.png"),
        "member": "380"
    }
  ];

  return (
    <div>
    {
        classTabs.map((item, index) => {
            return (
                <div key={`classList_`+index} style={{ marginBottom: "69px", height: '300px', width: '277px', display: 'inline-block', marginLeft: index === 0 ? '0px' : '30px' }}>
                    <div style={{ height: '300px', width: '280px', display: 'inline-block', borderColor: '#999', borderWidth: '1px', borderStyle: 'solid' }}>
                        <img src={item.img} style={{ height: '172px', width: '100%' }} alt="" />
                        <div style={{ padding: '8px' }}>
                            <div style={{ height: '60px', fontSize: '18px' }}>
                                {item.name}
                            </div>
                            <div style={{ height: '20px', fontSize: '14px', color: '#999' }}>
                                {item.content}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <div style={{ textAlign: 'left', width: '30%', display: 'inline-block' }}>
                                    <span style={{ background: '#13B5B1', color: '#fff', width: '50px', height: '22px', lineHeight: '18px', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>免费</span>
                                </div>
                                <div style={{ textAlign: 'right', width: '60%', display: 'inline-block' }}>380人已完成学习</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}

export default SelectArea;