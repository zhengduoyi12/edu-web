import React from "react"

const TitleRow = (props) => {
    const { params }= props
    return (
    <div style={{height:"100px",position:'relative'}}>
        <div style={{height:'30px', width:'8px', backgroundColor:'#00BBFF',position:'absolute',top:'70px'}}/>
        <div style={{ fontSize:'24px', fontWeight:'bold', color:'#000000', position:'absolute',top:'62px', left:'20px'}}>
            {params}
        </div>
    </div>
  )
}

export default TitleRow;