import React, { Component } from 'react'

import MainPage from '../routers/HomePageRouter'
import LinksPage from '../base/HomePage'

class HomePage extends Component{
  render(){
    return(
      <div>
          <LinksPage />
            <hr/>
          <MainPage />
      </div>
    )
  }
}

export default HomePage
