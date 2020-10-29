import React from "react";
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { List } from "antd/lib/form/Form";

const categoryList = [
  {
    key:"type",
    name:'类型',
    subList:[
      { key:'1', name:'课程'},
      { key:'2', name:'直播'},
    ]
  },
  {
    key:"direction",
    name:'方向',
    subList:[
      { key:'1', name:'全部'},
      { key:'2', name:'IT计算机'},
      { key:'3', name:'人力资源'},
      { key:'4', name:'汽车汽修'},
      { key:'5', name:'运维管理'},
    ]
  },
  {
    key:"sort",
    name:'排序',
    subList:[
      { key:'1', name:'综合'},
      { key:'2', name:'学习人数'},
      { key:'3', name:'发布时间 '},
      { key:'4', name:'收藏/关注数'},
    ]
  }
];

const menu=((List)=>(
  <Menu>
    {
      List.map((item)=>(
        <Menu.Item key={item.name}>
          {item.name}
        </Menu.Item>
      ))
    }
  </Menu>
) );

const CourseTag = () => {
  return (
    <div>
      {
        categoryList.map((item)=>(
          <div key={item.name} style={{borderBottom:'1px solid #DDDDDD', backgroundColor:'white', height:'40px', textAlign:'left', lineHeight:'40px', display:'flex', justifyContent:'flex-start'}}>
            {item.name} : {
              item.subList.map((subitem)=>(
                <div key ={item.name+subitem.key} style={{padding:'0 10px'}}>
                  {subitem.name}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default CourseTag;