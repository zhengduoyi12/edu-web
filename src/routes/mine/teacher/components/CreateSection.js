import React, { useEffect, useState } from "react";

const CreateSection = () => {
    const classList = [
        {
            title: '大课时1',
            class: [
                {
                    id: '0101',
                    type: '录播',
                    title: '小课时1',
                    time: 74
                }, {
                    id: '0102',
                    type: '录播',
                    title: '小课时1',
                    time: 81
                }
            ]
        }, {
            title: '大课时2',
            class: [
                {
                    id: '0201',
                    type: '录播',
                    title: '小课时1',
                    time: 74
                }
            ]
        }
    ];
    return (
        <div className="create-section">
            <div className="title">课程内容</div>
            <div style={{ width: '80%', margin: '0 auto' }}>
                {
                    classList.map((item, index) => (
                        <div key={index}>
                            <div className="title-first">第{index + 1}章： {item.title}</div>
                            {
                                item.class.map((it, i) => (
                                    <div key={i} className="title-second">
                                        <span>课时{i + 1}</span>
                                        <span>{it.title}</span>
                                        <span>({it.time}分钟)</span>
                                        <span>({it.type})</span>
                                    </div>
                                ))
                            }
                            <div className="title-second" style={{textAlign:'center'}}>
                                <span>+ 添加新课时</span>
                            </div>
                        </div>
                    ))
                }
                <div className="title-first" style={{textAlign:'center'}}>+ 添加新章节</div>
            </div>

        </div>
    );
};

export default CreateSection;