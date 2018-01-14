import React from 'react'
import { Button } from 'semantic-ui-react'

const TableButton = ({ oneTable, twoTable, active }) => {
  return (
    <div>
        <Button.Group>
          <Button onClick={oneTable} active={!active}>Таблица 1</Button>
          <Button.Or />
          <Button onClick={twoTable} active={active}>Таблица 2</Button>
        </Button.Group>
    </div>
  )
}

export default TableButton