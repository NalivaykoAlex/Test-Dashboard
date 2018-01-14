import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'

export default ({ link }) =>
  <Card as={Link} to={link.to}>
    <Card.Content>
      <Card.Header><Icon name={link.icon}/>{link.name}</Card.Header>
      <Card.Description>{link.description}</Card.Description>
    </Card.Content>
  </Card>