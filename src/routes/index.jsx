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

import Login from 'routes/login/login'
import Register from 'routes/login/login'
const Routes = () => (
  <HashRouter>
    <div>
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
        <Route path="*" component={Not} />
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App