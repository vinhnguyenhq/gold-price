import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: true,
  },
})

export const selectAuth = (state) => state.auth.isLoggedIn

export default authSlice.reducer
