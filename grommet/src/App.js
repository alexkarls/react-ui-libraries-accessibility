import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Grommet } from 'grommet'
import index from './pages/index'

/* https://github.com/grommet/grommet-starter-new-app
Note: Grommet relies a lot on the creation of a custom theme.
However, the components have a default style.
*/
function App () {
  return (
    <Grommet plain>
      <Router>
        <Switch>
          <Route path='/' component={index} />
        </Switch>
      </Router>
    </Grommet>
  )
}

export default App
