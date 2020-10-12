import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'

import Home from 'routes/home/home'
import Intelligence from 'routes/intelligence/intelligence'
import Test from 'routes/test/test'
import Practice from 'routes/practice'
import PracticeIndex from 'routes/practiceIndex'
import TrainIndex from 'routes/trainIndex'
import JobIndex from 'routes/jobIndex'
import Not from 'routes/not/index'
import Mine from 'routes/mine/index'


import Login from 'routes/login/login'
import Register from 'routes/login/register'
import Register2 from 'routes/login/register2'
import RegisterFinal from 'routes/login/registerFinal'
const Routes = () => (
  <HashRouter>
    
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/intelligence" component={Intelligence} />
        <Route path="/test" component={Test} />
        <Route path="/practice" component={Practice} />
        <Route path="/practiceIndex" component={PracticeIndex} />
        <Route path="/trainIndex" component={TrainIndex} />
        <Route path="/jobIndex" component={JobIndex} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/register2" component={Register2} />
        <Route path="/register3" component={RegisterFinal} />
        <Route path="/404" component={Not} />
        <Route path="/mine" component={Mine} />
        <Route path="*" component={Not} />
      </Switch>
   
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App