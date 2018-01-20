import React from 'react'
import { Table } from 'semantic-ui-react'

const RubricList = ({ rubric }) => {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Рублика</Table.HeaderCell>
            <Table.HeaderCell>Количество вакансий</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rubric.map(item => item.map(item =>
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.count}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default RubricList