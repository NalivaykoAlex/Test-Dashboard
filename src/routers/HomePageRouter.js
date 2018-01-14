import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home  from '../components/HomeComponent'
import Vacancy from '../components/VacancyComponent'

export default () =>
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/vacancy' component={Vacancy}/>
    </Switch>
  </div>
  