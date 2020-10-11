import React, { Component } from 'react'


import './style.css'


export default class classList extends Component {
    render() {
        return (
            <div className="courseCard">
                <div style={{ height: '300px', width:'280px', display:'inline-block', borderColor: '#999', borderWidth: '1px', borderStyle: 'solid' }}>
                    <img src={this.props.arr.img} style={{ height: '172px',width:'100%' }} alt="" />
                    <div style={{ padding: '8px' }}>
                    <div style={{ height: '60px', fontSize: '18px' }}>
                        {this.props.arr.name}
                    </div>
                    <div style={{ height: '20px', fontSize: '14px', color: '#999' }}>
                        {this.props.arr.content}
                        </div>
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ textAlign: 'left', width: '30%', display: 'inline-block' }}>
                        <span style={{ background: '#13B5B1', color: '#fff', width: '50px', height: '22px', lineHeight: '18px', fontSize: '12px', paddingLeft: '5px', paddingRight: '5px' }}>免费</span>
                        </div>
                        <div style={{ textAlign: 'right', width: '60%', display: 'inline-block' }}>380人已完成学习</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
