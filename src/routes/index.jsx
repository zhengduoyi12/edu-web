import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'

import Home from 'routes/home/home'
import Test from 'routes/test/test'
import Practice from 'routes/practice'
import PracticeIndex from 'routes/practiceIndex'
import TrainIndex from 'routes/trainIndex'
import JobIndex from 'routes/jobIndex'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/practice" component={Practice} />
        <Route path="/practiceIndex" component={PracticeIndex} />
        <Route path="/trainIndex" component={TrainIndex} />
        <Route path="/jobIndex" component={JobIndex} />
        
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App