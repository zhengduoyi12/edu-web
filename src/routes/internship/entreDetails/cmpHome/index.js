import React from "react"
import { withRouter , useHistory } from 'react-router-dom';

const HotRoleInfo=[
    {key:1,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
    {key:2,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
    {key:3,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
]
const CmpHome = () => {
    const history = useHistory();
    function goRoleDetails(){
        history.push("/roleDetails");
    }
    return (
    <div className="App" style={{textAlign:'left'}}>
        <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000", marginBottom:"20px"}}>热招职位</div>
        <div style={{height:'220px', display:"flex",justifyContent:"space-around"}}>
            {
                HotRoleInfo.map((item,index)=>(
                    <div  onClick={() => { goRoleDetails() }}  key={`HotRoleInfo_`+index} style={{width:"382px",height:"182px", border:"1px solid #cccccc", borderRadius:'8px',display:'flex',flexWrap: "wrap"}}>
                        <div style={{width:"300px",height:'100px',  lineHeight:"100px", fontSize:'24px', color:"#666666",paddingLeft:'20px'}}>
                            {item.name}
                        </div>
                        <div style={{width:"80px",height:'100px', fontSize:'24px',color:'#FF8C00',lineHeight:'100px'}}>
                            {item.salary}
                        </div>
                        <div style={{width:"380px",height:'80px',  lineHeight:'80px',paddingLeft:'20px', fontSize:'18px', color:"#666666"}}>
                            <span>{item.education}</span><span style={{marginLeft:'20px'}}>{item.year}工作经验</span>
                        </div>
                    </div>
                ))
            }

        </div>
        <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000",marginBottom:"20px"}}>企业简介</div>
        <div style={{fontSize:'16px'}}>
            <p>https://blog.csdn.net/</p>
            <p style={{marginTop:'20px'}}>公司简介</p>
            <p style={{marginTop:'40px'}}>之江实验室是由浙江省委、省政府重点打造的科研机构，位于余杭未来科技城的中国（杭州）人工智能小镇。于2017年9月6日上午正式揭牌成立。2018年9月27日获悉，之江实验室的组织架构、建章立制及三年发展规划的编制已完成，首批5个重大攻关项目启动。之江实验室是由浙江省委、省政府重点打造的科研机构，位于余杭未来科技城的中国（杭州）人工智能小镇。于2017年9月6日上午正式揭牌成立。2018年9月27日获悉，之江实验室的组织架构、建章立制及三年发展规划的编制已完成，首批5个重大攻关项目启动。</p>
        </div>

        <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000",marginBottom:"20px"}}>工商信息</div>
            <div style={{fontSize:'16px'}}>
                <p>杭州光云科技股份有限公司</p>
            </div>
        <div style={{ fontSize:'18px',fontWeight:'bold',color:"#000000", marginBottom:"20px"}}>公司地址</div>
        <div style={{fontSize:'16px', marginBottom:"20px"}}>
            <p>杭州市 滨江区 杭州云光汽车有限公司 XX大厦11楼</p>
        </div>
        <div style={{width:"1200px", height:'400px', marginBottom:"20px"}}>
            <img alt="11" src={require('assets/map.png')} />
        </div>

        
        
    </div>
    
  )
}

export default CmpHome;