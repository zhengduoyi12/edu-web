import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import Home from 'routes/home/home'
import Test from 'routes/test/test'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App