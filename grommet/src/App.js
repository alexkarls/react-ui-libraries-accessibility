import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Grommet } from 'grommet'
import index from './pages/index'

function App () {
  return (
      <Grommet plain>
      <Router>
        <Switch>
          <Route path="/" component={index} />
        </Switch>
      </Router>
      </Grommet>
  )
}

export default App
