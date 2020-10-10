// 首页
import React from "react"
import { Button, Input, Card } from 'antd'

import './index.css'

const { Search } = Input
const { Meta } = Card
const PracticeIndex = () => {
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
        <div className="container">
            <div className="left"></div>
            <div className="center">
                
                <div className="footer">
                    <div className="footer-area"></div>
                </div>
            </div>
            <div className="left"></div>
        </div>
    )
}

export default PracticeIndex;