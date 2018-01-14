import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import Home from './containers/HomePageContainer'

ReactDOM.render(
  <Router>
    <Home />
  </Router>, document.getElementById('root'))
registerServiceWorker();