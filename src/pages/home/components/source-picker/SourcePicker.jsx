import React from 'react'
import Select from 'react-select'

const SourcePicker = ({ value, onChange, options = [] }) => {
  const selectedValue = options.filter((option) => option.value === value)[0]
  return <Select value={selectedValue ? selectedValue : null} onChange={onChange} options={options} />
}

export default SourcePicker
