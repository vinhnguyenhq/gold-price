import { DatePicker, Table } from 'antd'
import { fetchExchangeRates, selectExchangeRates } from 'models/exchange-rates'
import moment from 'moment'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const columns = [
  {
    title: 'USD',
    dataIndex: 'Usd',
    key: 'Usd',
    render: (Usd) => Usd.rate,
  },
  {
    title: 'EUR',
    dataIndex: 'Eur',
    key: 'Eur',
    render: (Eur) => Eur.rate,
  },
  {
    title: 'Source',
    dataIndex: 'Src',
    key: 'Src',
    filters: [
      {
        text: 'State Bank Of Vietnam',
        value: 'sbv.com.vn',
      },
      {
        text: 'Vietcombank',
        value: 'vcb.com.vn',
      },
    ],
    onFilter: (value, record) => record.Src.indexOf(value) === 0,
  },
  {
    title: 'Exchange Rate Id',
    dataIndex: 'ExchangeRateId',
    key: 'ExchangeRateId',
  },
  {
    title: 'Created',
    dataIndex: 'CreatedAt',
    key: 'CreatedAt',
  },
  {
    title: 'Updated',
    dataIndex: 'UpdatedAt',
    key: 'UpdatedAt',
  },
]

const currentToDateMomentObject = moment()

const Currency = () => {
  const dispatch = useDispatch()
  const exchangeRates = useSelector(selectExchangeRates)

  const [selectedDate, setSelectedDate] = React.useState(currentToDateMomentObject)

  React.useEffect(() => {
    dispatch(fetchExchangeRates(selectedDate))
  }, [dispatch, selectedDate])

  const onDatePickerChange = React.useCallback(
    (value) => {
      const dateStr = value.format('YYYY-MM-DD')
      dispatch(fetchExchangeRates(dateStr))
      setSelectedDate(value)
    },
    [dispatch]
  )

  return (
    <React.Fragment>
      <DatePicker
        size="large"
        style={{ marginBottom: '24px' }}
        onChange={onDatePickerChange}
        defaultPickerValue={selectedDate}
        value={selectedDate}
      />

      <Table
        rowKey="ExchangeRateId"
        loading={exchangeRates.status === 'loading'}
        columns={columns}
        dataSource={exchangeRates.data}
        size="small"
        pagination={false}
      />
    </React.Fragment>
  )
}

export default Currency
