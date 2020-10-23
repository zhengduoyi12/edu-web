import React from "react";
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { List } from "antd/lib/form/Form";

const categoryList = [
  {
    key:"city",
    name:'热门城市',
    subList:[
      { key:'1', name:'不限'},
      { key:'2', name:'全国'},
      { key:'3', name:'杭州'},
      { key:'4', name:'上海'},
      { key:'5', name:'广州'},
      { key:'6', name:'深圳'},
      { key:'7', name:'苏州'},
    ]
  },
  {
    key:"area",
    name:'地区',
    subList:[
      { key:'1', name:'不限'},
      { key:'2', name:'西湖区'},
      { key:'3', name:'上城区'},
      { key:'4', name:'余杭区'},
      { key:'5', name:'下城区'},
      { key:'6', name:'江干区'},
      { key:'7', name:'黄山区'},
    ]
  },

];

const yearList =[
  { key:'1' , name: '不限'},
  { key:'2' , name: '在校生'},
  { key:'3' , name: '应届生'},
  { key:'4' , name: '1年以内'},
  { key:'5' , name: '1-3年'},
  { key:'6' , name: '3-5年'},
  { key:'7' , name: '5年以上'},
];
const educationList=[
  { key:'1' , name: '不限'},
  { key:'2' , name: '初中及以下'},
  { key:'3' , name: '中专/终中技'},
  { key:'4' , name: '高中'},
  { key:'5' , name: '大专'},
  { key:'6' , name: '本科'},
  { key:'7' , name: '硕士'},
  { key:'8' , name: '博士'},
];
const salaryList =[
  { key:'1' , name: '不限'},
  { key:'2' , name: '3k以下'},
  { key:'3' , name: '3-5k'},
  { key:'4' , name: '5-10k'},
  { key:'5' , name: '10-15k'},
  { key:'6' , name: '15-20k'},
  { key:'7' , name: '20-30k'},
  { key:'8' , name: '30-50k'},
  { key:'9' , name: '50k以上'},
];
const sizeList =[
  { key:'1' , name: '不限'},
  { key:'2' , name: '0-20人'},
  { key:'3' , name: '20-99人'},
  { key:'4' , name: '100-499人'},
  { key:'5' , name: '500-999人'},
  { key:'6' , name: '1000-9999人'},
  { key:'7' , name: '10000人以上'},
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

const SearchTag = () => {
  return (
    <div>
      {
        categoryList.map((item)=>(
          <div key={item.name} style={{width:'1160px', borderBottom:'1px solid #DDDDDD', backgroundColor:'white', height:'40px', textAlign:'left', lineHeight:'40px', display:'flex', justifyContent:'flex-start'}}>
            {item.name} : {
              item.subList.map((subitem)=>(
                <div key ={item.name+subitem.key} style={{width:'60px',textAlign:'center'}}>
                  {subitem.name}
                </div>
              ))
            }
          </div>
        ))
      }
      <div style={{width:'1160px', borderBottom:'1px solid #DDDDDD', backgroundColor:'white', height:'40px', textAlign:'left', lineHeight:'40px', display:'flex', justifyContent:'flex-start'}}>
        <div style={{width:'100px'}}>    
          <Dropdown overlay={menu(yearList)} >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        工作经验<DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div style={{width:'100px'}}>  
          <Dropdown overlay={menu(educationList)} >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        学历要求<DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div style={{width:'100px'}}>  
          <Dropdown overlay={menu(salaryList)} >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        薪资要求<DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div style={{width:'100px'}}>  
          <Dropdown overlay={menu(sizeList)} >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        公司规模<DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default SearchTag;