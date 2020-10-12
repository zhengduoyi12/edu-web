import React, { Component } from 'react'
import { Button} from 'antd';
import {withRouter} from 'react-router-dom'
import './register.css'
class registerFinal extends Component {

    handleClick = e => {
        this.props.history.replace('/login')
    };
   
    render() {
        return (
            <div style={{width:"1920px", height:"100%"}}>  
                <div style={{height:"70px",width:"1920px",background:"white", fontSize:"24px", color:"#000000" ,paddingLeft:"380px",lineHeight:"65px"}}>
                    长三角产教融合智慧云平台
                </div>
                <div style={{background: "linear-gradient(90deg, #0BBAFB 0%, #4285EC 100%)", width:"1920px", height:"100%", display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:"800px", height:'440px',background:"white",  borderRadius: "8px", position:"relative"}}>
                        <div style={{width:"240px",height:"60px",background:"white", borderRadius: "30px", position:"absolute", margin:'280px', marginTop:'-30px', boxShadow:"0px 3px 7px 0px #cccccc", fontSize: "32px", textAlign:"center"}}>
                            注册
                        </div>
                        <p style={{fontSize:'32px', color:"#333333",position:'absolute', marginTop:"170px", marginLeft:"220px"}}> 您已完成注册</p>
                        <Button type="primary" onClick={this.handleClick} size="large" style={{width:"340px",position:'absolute', marginTop:"330px", marginLeft:"220px"}}>
                            完成注册
                        </Button>
                    </div>
                 </div>
            </div>
        )
    }
}

export default (withRouter(registerFinal));