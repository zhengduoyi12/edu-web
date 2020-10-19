import React, { Component } from 'react'

import ClassIndex from './components/classIndex'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import StreamingIndex from './components/streaming';
import LiveInfo from './components/liveInfo'

const bannerUrl=require('assets/ibanner.jpg')
class intelligence extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        return (
            <div className="App">
                <Header/>
                <img src={bannerUrl} style={{width:'1920px',height:'220px'}}>
                </img>
                <div style={{width:'1200px', margin:'0 auto'}}>
                    <div style={{fontSize:'32px', fontWeight:'bold', height:'140px',lineHeight:'140px'}}>
                       在线直播
                    </div>
                    <LiveInfo/>
                    <StreamingIndex/>
                    <div>
                        <p style={{fontSize:'32px', fontWeight:'bold',textAlign:'left'}}>高级课程</p>
                        <ClassIndex/>
                    </div>
                    <div>
                        <p style={{fontSize:'32px', fontWeight:'bold',textAlign:'left'}}>精选课程</p>
                        <ClassIndex/>
                    </div>
                    <div>
                        <p style={{fontSize:'32px', fontWeight:'bold',textAlign:'left'}}>分类课程</p>
                        <ClassIndex/>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default intelligence;