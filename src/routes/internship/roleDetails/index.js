import React from "react"

import bannerUrl from 'assets/images/prac_banner1.jpg'
import Header from 'components/Header'
import Footer from 'components/Footer'
import TopCard from './TopCard'
import TitleRow from './components/TitleRow'
import { useHistory } from 'react-router-dom';
const roleDetails = () => {
    const jobinfo=
    `工作内容：
    1、 按派工单项目或用户现场要求进行维修作业，不得漏项； 
    2、 严格执行汽车维护工艺规范和修理技术标准进行维修作业；
    3、 修理过程中严格执行自检、互检和专职检验为内容的“三检制”进行；
    4、 在就车维修作业时，如发现安全关键部位存在隐患或故障，应及时向客户说明，不得擅自处理；
    5、 严格按照各工位工序安全操作规程进行作业，杜绝事故发生；
    6、 节约用料，随用随领；
    7、 管理好修理现场，做到零部件按规定摆放整齐有序，现场环境卫生清洁；
    8、 尽量满足用户提出的工期要求，必要时安排加班加点；
    9、 完成好交办的各项临时性工作；
    10、 文明施工，客户至上，严格执行维修纪律，自觉做好现场收尾工作，保持公共场所
    的环境，注意“工完场清，物尽其用”节约用料，避免浪费；
    11、 努力学习，刻苦钻研，不断总结维修经验，努力提高自身思想素质和业务技术水平；
    12、 发扬主人翁精神，开动脑筋，积极提出合理化建议，为公司多做贡献；
    13、 搞好团结，加强合作，积极配合、完成其他工作。`

    const address=
    `上班地址：景林路1239号敖德萨多大厦501`

    const cmpDetail=
    `跨越速运集团成立于2007年，注册资金4.67亿元，是一家主营“限时速运”服务的大型现代化综合速运企业，拥有AAAAA级物流企业资质。
    在北京、上海、天津、浙江、江苏、福建等二十几个省市设7个关联公司、32个子公司，
    全国各大经济城市，建立专业一体化的自动化机场操作分拨基地，拥有13架货运包机，5万余员工，
    1.5万多台运输车辆，服务网络遍布全国32个省级行政区域500多个城市，覆盖率达90%以上。
    跨越速运率先推出三大时效产品：当天达、次日达、隔日达，同时更为客户推出独具特色的贴心服务：24小时上门取派件。`

    const HotRoleInfo=[
      {key:1,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
      {key:2,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
      {key:3,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
      {key:4,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
      {key:5,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
      {key:6,name:'汽车发动机维修工',salary:'5-10K', education:'大专', year:'1-3年'},
    ]

    const history = useHistory();
    function goRoleDetails(){
        history.push("/roleDetails");
    }

    return (
    <div style={{textAlign:'left'}}>
      <Header/>
      <img src={bannerUrl} alt="" style={{width:'1920px',height:'220px'}}/>
      <div style={{width:'1200px', margin:'0 auto'}}>
        <TopCard/>
        <TitleRow params={'职位信息'}/>
        <div style={{fontSize:'18px',padding:'20px',borderBottom:'1px solid #AAAAAA'}}>
        {jobinfo}
        </div>
        <TitleRow params={'联系方式'}/>
        <div style={{fontSize:'18px',padding:'20px', borderBottom:'1px solid #AAAAAA'}}>
        {address}
        </div>
        <TitleRow params={'公司信息'}/>
        <div style={{fontSize:'18px', padding:'20px', borderBottom:'1px solid #AAAAAA'}}>
        {cmpDetail}
        </div>
        <div style={{fontSize:'18px', padding:'20px', borderBottom:'1px solid #AAAAAA'}}>
          <div style={{color:'#00BBFF'}}>智能推荐</div>
          <div style={{width:'1200px', display:"flex",justifyContent:"space-around", flexWrap:'wrap'}}>
            {
                HotRoleInfo.map((item,index)=>(
                  <div  onClick={() => { goRoleDetails() }}  key={`HotRoleInfo_`+index} style={{width:"382px",height:"182px", border:"1px solid #cccccc", borderRadius:'8px',display:'flex',flexWrap: "wrap", margin:'8px'}}>
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
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default roleDetails;