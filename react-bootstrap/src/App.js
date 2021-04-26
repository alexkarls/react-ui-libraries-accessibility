import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import index from './pages/index'
import 'bootstrap/dist/css/bootstrap.css'

function App () {
  return (
      <>
      <Router>
        <Switch>
          <Route path="/" component={index} />
        </Switch>
      </Router>
      </>
  )
}

export default App
