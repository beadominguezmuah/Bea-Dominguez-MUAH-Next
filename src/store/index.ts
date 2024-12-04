import { configureStore } from '@reduxjs/toolkit'

import  dataApiSlice from './dataApi/dataApiSlice'

export const store = configureStore({
  reducer: {
    dataApiSlice 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch