import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

const images = {
  height: '40%',
  width: '50%'
}

class Home extends Component {

  render() {
    return (
      <div>
        <Image src='../static/images/barbrady.jpg' style={images}/>        
      </div>
    )
  }
}

export default Home