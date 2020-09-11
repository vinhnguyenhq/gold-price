import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth'
import currencyReducer from './currency'
import goldReducer from './gold'

export default configureStore({
  reducer: {
    auth: authReducer,
    currency: currencyReducer,
    gold: goldReducer,
  },
})
