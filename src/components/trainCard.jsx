import React, { Component } from 'react'


import './style2.css'

export default class trainCard extends Component {
    render() {
        return (
            <div>
                <div className="trainRowTit">{this.props.arr.title}</div>
                <div className="trainRow">
                    {
                        this.props.arr.cardInfo.map((item,index) => { 
                            return (
                                <div className="trainCard" style={{ marginRight: index === 3 ? '0px' : '30px'}}>
                                    <img src={item.img} style={{ height: '172px', width:'279px' }} alt="" />
                                    <div style={{ padding: '8px' }}>
                                        <div style={{ fontSize: '32px', color:'#000000' }}>
                                            {item.name}
                                        </div>
                                        <div style={{ fontSize: '14px', color:'#CCCCCC' }}>
                                            {item.desc}
                                        </div>
                                    </div>   
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )   
    }
}
