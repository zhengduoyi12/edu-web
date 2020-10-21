import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'

import Home from 'routes/home/home'
import Intelligence from 'routes/intelligence/intelligence'
import Internship from 'routes/internship'
import TrainIndex from 'routes/train'
import JobIndex from 'routes/job'
import NotFound from 'routes/404/index'
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
        <Route path="/internship" component={Internship} />
        <Route path="/train" component={TrainIndex} />
        <Route path="/job" component={JobIndex} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/register2" component={Register2} />
        <Route path="/register3" component={RegisterFinal} />
        <Route path="/404" component={NotFound} />
        <Route path="/mine" component={Mine} />
        <Route path="*" component={NotFound} />
      </Switch>
   
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App