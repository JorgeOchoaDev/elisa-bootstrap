import React, {Component} from 'react'
import './App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Landing from './views/Landing'
import Treatments from './views/Treatments'
import Myths from './views/Myths'
import Care from './views/Care'


import Navbar from './components/NavBar'
import BotNav from './components/BotNav'

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route path="/" exact>
                <Landing/>
              </Route>
            </Switch>
            <Switch>
                <Route path="/tratamientos">
                  <Treatments/>
                </Route>
                <Route path="/mitos">
                  <Myths />
                </Route>
                <Route path="/cuidados">
                  <Care />
                </Route>
            </Switch>
          <BotNav/>
        </div>
      </Router>
    );
  }
}

export default App;
