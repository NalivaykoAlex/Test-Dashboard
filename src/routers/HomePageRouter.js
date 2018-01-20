import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../components/HomePageComponent'
import Vacancies from '../components/VacanciesComponent'

export default () =>
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/vacancy' component={Vacancies} />
  </Switch>