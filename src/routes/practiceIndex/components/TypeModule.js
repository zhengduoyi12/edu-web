import React from "react"
import { Card } from 'antd'

const { Meta } = Card
const TypeModule = () => {
    return (
        <div className="type">
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt="example" src={require('../img/u187_div.JPG')} />}
            >
                <Meta title="学生简历" description="4万人已加入" />
            </Card>
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt="example" src={require('../img/u197_div.JPG')} />}
            >
                <Meta title="企业岗位" description="3000最新企业岗位" />
            </Card>
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt="example" src={require('../img/u202_div.JPG')} />}
            >
                <Meta title="就业在线匹配" description="4万人已加入" />
            </Card>
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt="example" src={require('../img/u192_div.JPG')} />}
            >
                <Meta title="智慧推荐" description="4万人已加入" />
            </Card>
        </div>
    )
}

export default TypeModule