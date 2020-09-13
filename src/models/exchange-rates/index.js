import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchByDate } from 'services/exchangeRate'

export const fetchExchangeRates = createAsyncThunk('exchangeRates/fetchByDate', async (dateStr) => {
  const response = await fetchByDate(dateStr)
  return response
})

const exchangeRates = createSlice({
  name: 'exchangeRates',
  initialState: { data: [], status: 'idle', date: '', error: null },
  reducers: {},
  extraReducers: {
    [fetchExchangeRates.fulfilled]: (state, action) => {
      state.data = action.payload.rates && [...action.payload.rates]
      state.status = 'succeeded'
      state.date = action.payload.date
    },
    [fetchExchangeRates.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchExchangeRates.rejected]: (state) => {
      state.status = 'failed'
      state.error = 'error message'
    },
  },
})

export const selectExchangeRates = (state) => state.exchangeRates
export default exchangeRates.reducer
