import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import AntDesign from './pages/AntDesign'
import ReactBootstrap from './pages/ReactBootstrap'

function App () {
  return (
      <>
      <Router>
        <Switch>
          <Route path="/react-bootstrap" component={ReactBootstrap}></Route>
          <Route path="/ant-design" component={AntDesign}></Route>
        </Switch>
      </Router>
      </>
  )
}

export default App
