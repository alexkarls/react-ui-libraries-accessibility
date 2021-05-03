import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css'

import index from './pages/index'

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
