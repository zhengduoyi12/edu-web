import React, { Component } from 'react';
import Panel from './panel';
import './style.scss';
export default class Login extends Component {
  render() {
    return (
      <div style={{width:"1920px", height:"100%",left:0,right:0,marginLeft: 'auto', marginRight:'auto'}}>  
        <div style={{height:"70px",width:"1920px",background:"white", fontSize:"24px", color:"#000000" ,paddingLeft:"380px",lineHeight:"65px"}}>
          长三角产教融合智慧云平台
        </div>
        <div className='loginPanel' style={{background: "linear-gradient(90deg, #0BBAFB 0%, #4285EC 100%)", width:"1920px", height:"90%", display:'flex', justifyContent:'center',alignItems:'center'}}>
          <Panel/>
        </div>   
      </div>
    );
        
  }

}
