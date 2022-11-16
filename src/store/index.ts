import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './counterReducer'
import authReducer  from './authReducer'
import farmReducer  from './farmReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    farm:farmReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch