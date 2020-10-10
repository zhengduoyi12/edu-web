import React, { Component } from 'react'


import './style2.css'

export default class trainCard extends Component {
    render() {
        return (
            <div>
                <p>12312321</p>
                <div className="trainRow">
                    {
                        this.props.arr.cardInfo.map(item => { 
                            return (
                                <div className="trainCard">
                                    <img alt="sadsad" src={require("./u161_a.png")}>
                                    </img>
                                    <div>
                                        asdsadsa
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
