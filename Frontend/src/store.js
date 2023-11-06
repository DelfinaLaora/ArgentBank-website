import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import modalReducer from './features/modalSlice'

export const store = configureStore({
   reducer: {
      auth: authReducer,
      modal: modalReducer,
   },
})
