import './index.scss'

import dayjs from 'dayjs'
import * as React from 'react'
import { useAsyncFn } from 'react-use'

import { DayPicker, SourcePicker, Table } from './components'
import { currentToDateMomentObject, DATE_FORMAT, fetchExchangeRates } from './enhanced'

const SOURCE_OPTIONS = [
  {
    label: 'State Bank Of Vietnam',
    value: 'sbv.com.vn',
  },
  {
    label: 'Vietcombank',
    value: 'vcb.com.vn',
  },
]

const HomePage = () => {
  const [selectedDate, setSelectedDate] = React.useState(currentToDateMomentObject)
  const [filterObj, setFilterObj] = React.useState({
    Src: SOURCE_OPTIONS[1].value,
  })

  const [exchangeRates, fetch] = useAsyncFn((dateStr) => fetchExchangeRates(dateStr), [])

  React.useEffect(() => {
    const dateStr = dayjs(selectedDate).format(DATE_FORMAT)
    fetch(dateStr)
  }, [fetch, selectedDate])

  const onDatePickerChange = React.useCallback((value) => {
    setSelectedDate(value)
  }, [])

  const onSourcePickerChange = React.useCallback(
    (selectedObj) => {
      const newSelectedSource = { ...filterObj, Src: selectedObj.value }
      setFilterObj(newSelectedSource)
    },
    [filterObj]
  )

  return (
    <React.Fragment>
      <div className="box">
        <div className="columns">
          <div className="column">
            <DayPicker value={selectedDate} onChange={onDatePickerChange} />
          </div>
          <div className="column">
            <SourcePicker value={filterObj['Src']} onChange={onSourcePickerChange} options={SOURCE_OPTIONS} />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>

      <Table
        rates={exchangeRates.value && exchangeRates.value.rates}
        filterObj={filterObj}
        loading={exchangeRates.loading}
      />
    </React.Fragment>
  )
}

export default HomePage
