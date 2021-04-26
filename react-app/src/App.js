import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ReactBootstrap from './pages/ReactBootstrap'

function App () {
  return (
      <>
      <Router>
        <Switch>
          <Route path="/react-bootstrap" component={ReactBootstrap}></Route>
        </Switch>
      </Router>
      </>
  )
}

export default App
