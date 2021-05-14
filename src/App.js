// packages
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// style
import './App.scss';
// pages
import BadRequest from './pages/BadRequest'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Integrations from './pages/Integrations'

const Routing = () => {
  return(
    <Switch>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/features' render={() => <Features />} />
      <Route exact path='/pricing' render={() => <Pricing />} />
      <Route exact path='/integrations' render={() => <Integrations />} />
      <BadRequest />
    </Switch>
  )
}

const App = () => {
  return <div class="App">
    <Router>
      <Routing />
    </Router>
  </div>
}

export default App;
