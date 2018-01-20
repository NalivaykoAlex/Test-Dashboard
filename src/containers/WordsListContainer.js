import React from 'react'
import { Table, Button } from 'semantic-ui-react'

import { checkduplicates, checklength } from '../utils/checkduplicates'

const WordsList = ({ words, count, loadword, offset }) => {
  const word = checkduplicates(words)
  const lenghtoffset = checklength(offset, count)
  return (
    <div>
      <Button disabled={lenghtoffset} onClick={loadword}>Загрузить еще данные...</Button>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Рублика</Table.HeaderCell>
            <Table.HeaderCell>Количество вакансий</Table.HeaderCell>
            <Table.HeaderCell>Всего:{count}</Table.HeaderCell>
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