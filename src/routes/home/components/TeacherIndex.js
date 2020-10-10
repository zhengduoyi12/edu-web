// js， hooks写法
import React from "react"

const ResumeIndex = () => {
  const teacherTabs = [
    {
      img: require('styles/images/u69_a.jpg'),
    },
    {
      img: require('styles/images/u70_a.jpg')
    },
    {
      img: require('styles/images/u71_a.jpg')
    },
    {
      img: require('styles/images/u39_a.jpg')
    },
  ];

  return (
    <div style={{ height: '210x', marginTop: '28px' }}>
      <div style={{ fontSize: '18px', color: '#999', textAlign: 'left', height: '95px' }}>
        <span style={{ fontSize: '32px', marginRight: '20px', color: '#000', display: 'inline-block' }}>双师互聘</span>
        <span style={{ marginTop: '53px', display: 'inline-block' }}>智能配对，提升教学效率</span>
        <span style={{ marginTop: '53px', float: 'right' }}>查看更多</span>
      </div>
      {teacherTabs.map((item, index) => (
          <div key={index} style={{ height: '170px', width:'280px', display:'inline-block',marginLeft: index === 0 ? '0px' : '25px'}}>
            <img src={item.img} style={{ height: '170px',width:'280px' }} alt="" />
          </div>
        ))}
    </div>
  )
}

export default ResumeIndex;