import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './index.scss'

import { Spinner } from 'components'
import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'

const onFilterHandler = (rates = [], filterObj = {}) => {
  return rates.filter((rate) => {
    for (const [key, val] of Object.entries(filterObj)) {
      if (rate[key] === val) {
        return true
      }
    }

    return false
  })
}

const ExchangeRatesTable = ({ rates = [], filterObj = {}, loading }) => {
  const filteredRates = React.useMemo(() => onFilterHandler(rates, filterObj), [filterObj, rates])

  if (loading) {
    return <Spinner isLoading={loading} />
  }

  return (
    <Table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <Thead>
        <Tr>
          <Th>USD</Th>
          <Th>EUR</Th>
          <Th>Source</Th>
          <Th>Exchange Rate Id</Th>
          <Th>Created</Th>
          <Th>Updated</Th>
        </Tr>
      </Thead>

      <Tbody>
        {filteredRates.map((rate) => {
          const { Usd, Eur, Src, ExchangeRateId, CreatedAt, UpdatedAt } = rate

          return (
            <Tr key={ExchangeRateId}>
              <Td>{Usd.rate}</Td>
              <Td>{Eur.rate}</Td>
              <Td>{Src}</Td>
              <Td>{ExchangeRateId}</Td>
              <Td>{CreatedAt}</Td>
              <Td>{UpdatedAt}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default ExchangeRatesTable
