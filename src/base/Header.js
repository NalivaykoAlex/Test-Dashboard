import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import LinkCard from './LinkCard'
import links from './links'

const images = {
  height: '100px',
  width: '100%'
}

export default () =>
  <div>
    <Image src='../static/images/header.jpg' style={images} />
    <br />
    <Card.Group>
      {links.map(link =>
        <LinkCard key={link.name} link={link} />)}
    </Card.Group>
  </div>