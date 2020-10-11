// js， components写法
import React, { Component } from "react"

class TrainIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainTabs: [],
    };
  }

  componentDidMount(){
    const trainTabs = [
      {
        img: require('styles/images/u28_a.jpg'),
      },
      {
        img: require('styles/images/u29_a.jpg')
      },
      {
        img: require('styles/images/u30_a.jpg')
      },
      {
        img: require('styles/images/u33_a.png')
      },
      {
        img: require('styles/images/u39_a.jpg')
      },
    ];
    this.setState({trainTabs})
  }

  onClick = () => {
    console.log('234')
  }

  render() {
    const { trainTabs } = this.state;
    return (
      <div style={{ height: '220px', marginTop: '28px' }}>
        <div style={{ fontSize: '18px', color: '#999', textAlign: 'left', height: '95px' }}>
          <span style={{ fontSize: '32px', marginRight: '20px', color: '#000', display: 'inline-block' }}>智慧培训</span>
          <span style={{ marginTop: '53px', display: 'inline-block' }}>线上线下结合的数字化课程</span>
          <a  href="#intelligence" style={{ marginTop: '53px', float: 'right', color:'#999999' }}>查看更多</a>
        </div>
        {trainTabs.map((item, index) => (
          <div key={index} style={{ height: '120px', width:'210px', display:'inline-block',marginLeft: index === 0 ? '0px' : '35px'}}>
            <img src={item.img} style={{ height: '120px',width:'210px' }} alt="" />
          </div>
        ))}
      </div>
    )
  }
}
export default TrainIndex