import { createSlice } from '@reduxjs/toolkit'

export const goldSlice = createSlice({
  name: 'gold',
  initialState: {
    value: 0,
  },
  reducers: {},
})

export const { increment, decrement } = goldSlice.actions

export const selectCount = (state) => state.gold.value

export default goldSlice.reducer
