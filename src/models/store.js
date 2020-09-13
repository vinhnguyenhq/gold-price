import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth'
import exchangeRatesReducer from './exchange-rates'
import goldReducer from './gold'

export default configureStore({
  reducer: {
    auth: authReducer,
    exchangeRates: exchangeRatesReducer,
    gold: goldReducer,
  },
})
