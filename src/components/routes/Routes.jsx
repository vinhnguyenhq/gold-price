import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const About = React.lazy(() => import('pages/about'))
const Currency = React.lazy(() => import('pages/currency'))
const Gold = React.lazy(() => import('pages/gold'))
const Home = React.lazy(() => import('pages/home'))

const RouteConfig = function () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/gold" render={() => <Gold />} />
        <Route path="/currency" render={() => <Currency />} />
      </Switch>
    </Router>
  )
}

export default RouteConfig
