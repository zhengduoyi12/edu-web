import React, { Component } from 'react'
import Panel from './panel'

export default class Login extends Component {
    render() {
        return (
            <div style={{width:"1920px", height:"720px"}}>  
                <div style={{height:"70px",width:"1920px",background:"white", fontSize:"24px", color:"#000000" ,paddingLeft:"720px",lineHeight:"65px"}}>
                    长三角产教融合智慧云平台
                </div>
                <div style={{background: "linear-gradient(90deg, #0BBAFB 0%, #4285EC 100%)", width:"1920px", height:"650px", display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <Panel/>
                 </div>   
            </div>
        )
        
    }

}
