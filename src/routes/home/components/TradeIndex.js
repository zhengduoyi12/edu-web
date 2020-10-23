// js， components写法
import React, { Component } from "react";

class TradeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradeTabs: [],
    };
  }

  componentDidMount(){
    const tradeTabs = [
      {
        title:'分布式计算机构架师',
        desc:'昆仑国际集团秋季招聘',
        desc2:'算法，设计，咨询等300岗位招聘',
        img: require('assets/images/joblogo-1.jpg'),
      },
      {
        title:'分布式计算机构架师',
        desc:'米秋集团秋季招聘',
        desc2:'算法，设计，咨询等300岗位招聘',
        img: require('assets/images/joblogo-2.jpg'),
      },
      {
        title:'分布式计算机构架师',
        desc:'南通市政秋季招聘',
        desc2:'算法，设计，咨询等300岗位招聘',
        img: require('assets/images/joblogo-3.jpg'),
      },
    ];
    this.setState({tradeTabs});
  }

  render() {
    const { tradeTabs } = this.state;
    return (
      <div style={{ height: '260px', marginTop: '28px' }}>
        <div style={{ fontSize: '18px', color: '#999', textAlign: 'left', height: '95px' }}>
          <span style={{ fontSize: '32px', marginRight: '20px', color: '#000', display: 'inline-block' }}>数字媒体交易</span>
          <span style={{ marginTop: '53px', display: 'inline-block' }}>对接学校和企业，完培训就业一体化</span>
          <span style={{ marginTop: '53px', float: 'right' }}>查看更多</span>
        </div>
        {tradeTabs.map((item, index) => (
          <div key={index} style={{ height: '174px', width:'384px', display:'inline-block',marginLeft: index === 0 ? '0px' : '22px', borderColor: '#999', borderWidth: '1px', borderStyle: 'solid' }}>
            <img style={{float:'left',height: '100px', width:'100px',marginLeft:'18px', marginTop:'37px'}} src={item.img} alt="" />
            <div style={{float:'left',marginLeft:'25px', textAlign:'left',width:'220px'}}>
              <div style={{fontSize:'22px',lineHeight:'90px'}}>{item.title}</div>
              <div style={{fontSize:'18px',lineHeight:'24px', color:'#333'}}>{item.desc}</div>
              <div style={{fontSize:'14px',lineHeight:'20px', color:'#ccc',marginTop:'12px'}}>{item.desc2}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default TradeIndex;