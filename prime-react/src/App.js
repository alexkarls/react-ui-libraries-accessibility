import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// https://www.primefaces.org/primereact/showcase/#/setup (theme used in setup)
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

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
