import React, { Component } from 'react'
import {  Button } from 'antd'

import './style.css'


export default class classList extends Component {
    render() {
        return (
            <div className="courseCard">
                <img className="cardImg" alt="example" src={require('./u161_a.png')}/>
                <div className="cardDes">
                    <div className="cardTit">
                        {this.props.arr.name} 
                    </div>
                    <div className="courseName">
                        {this.props.arr.content} 
                    </div>
                    <div className="bottom">
                        <Button>
                            免费
                        </Button>
                        <div className="enroll">
                            {this.props.arr.member} 人已完成学习
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
