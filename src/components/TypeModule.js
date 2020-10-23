import React from "react";
import { Card } from 'antd';

const { Meta } = Card;
const TypeModule = () => {
  return (
    <div className="type">
      <Card
        hoverable
        style={{ width: 280 }}
        cover={<img alt="example" src={require('assets/images/prac_type1.jpg')} />}
      >
        <Meta title="学生简历" description="4万人已加入" />
      </Card>
      <Card
        hoverable
        style={{ width: 280 }}
        cover={<img alt="example" src={require('assets/images/prac_type2.jpg')} />}
      >
        <Meta title="企业岗位" description="3000最新企业岗位" />
      </Card>
      <Card
        hoverable
        style={{ width: 280 }}
        cover={<img alt="example" src={require('assets/images/prac_type3.jpg')} />}
      >
        <Meta title="就业在线匹配" description="4万人已加入" />
      </Card>
      <Card
        hoverable
        style={{ width: 280 }}
        cover={<img alt="example" src={require('assets/images/prac_type4.jpg')} />}
      >
        <Meta title="智慧推荐" description="4万人已加入" />
      </Card>
    </div>
  );
};

export default TypeModule;