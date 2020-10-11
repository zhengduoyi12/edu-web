import React from 'react'
import {Button} from 'antd'

const Not = (props={}) => {
    const back = ()=> {
        props.history.push({
            pathname: '/home'
          });
    }
    return (
        <div className="App">
            <div style={{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>
                <div style={{fontSize:60,color:'#0099ff',height:160}}>即将推出   敬请期待</div>
                <Button onClick={back} style={{fontSize:30,height:60,color:'#0099ff',borderColor:"#0099ff"}}>返回首页</Button>
            </div>
        </div>
    )
}
  
export default Not