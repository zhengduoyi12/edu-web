import React from 'react';
import { Route, Redirect } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

// 首页
import Home from 'routes/home';
import Info from 'routes/home/info';

//搜索
import SearchResult from 'routes/search';

// 智慧课程
import Intelligence from 'routes/intelligence/intelligence';
import ClassDetails from 'routes/intelligence/classDetails';

// 实习
import Internship from 'routes/internship';
import TalentList from 'routes/internship/talentList';


//岗位
import positionDetails from 'routes/positionDetails';

//公司
import CmpDetails from 'routes/cmpDetails';

//公共老师页面
import TeacherDetails from 'routes/teacherDetails';

//实训
import TrainIndex from 'routes/train';

// 就业
import JobIndex from 'routes/job';

// 用户中心
import Mine from 'routes/mine';
import CreateCourse from 'routes/mine/teacher/myCourse/createCourse';

// 登录注册
import Login from 'routes/login/login';
import Register from 'routes/login/register';
import Register2 from 'routes/login/register2';

// 404
import NotFound from 'routes/404';



const Routes = () => (
  <HashRouter>
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/info" component={Info} />
      <Route path="/intelligence" component={Intelligence} />
      <Route path="/classDetails" component={ClassDetails} />
      <Route path="/internship" component={Internship} />
      <Route path="/talentList" component={TalentList} />
      <Route path="/positionDetails" component={positionDetails} />
      <Route path="/cmpDetails" component={CmpDetails} />
      <Route path="/teacherDetails" component={TeacherDetails} />
      <Route path="/search" component={SearchResult} />
      <Route path="/train" component={TrainIndex} />
      <Route path="/job" component={JobIndex} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/register2" component={Register2} />
      <Route path="/mine" component={Mine} />
      <Route path="/createCourse" component={CreateCourse} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

const App = () => (
  <Routes />
);

export default App;