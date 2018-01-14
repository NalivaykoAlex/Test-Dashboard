import React from 'react'
import { Table } from 'semantic-ui-react'

import CheckDuplicate from '../utils/сheckDuplicate'

const WordsList = ({ words }) => {
  const word = CheckDuplicate(words)
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
            {word.map((item, index) =>
            <Table.Row key={index}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.count}</Table.Cell>
            </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    )
}

export default WordsList