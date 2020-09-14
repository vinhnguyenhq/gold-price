import 'react-day-picker/lib/style.css'
import './index.scss'

import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'

const DayPicker = ({ value, onChange }) => {
  const onDayChangeHandler = React.useCallback(
    (selectedDay) => {
      onChange(selectedDay)
    },
    [onChange]
  )

  return (
    <DayPickerInput
      style={{ width: '100%', height: '100%' }}
      value={value ? value : ''}
      onDayChange={onDayChangeHandler}
    />
  )
}

export default DayPicker
