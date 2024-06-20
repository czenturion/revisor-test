import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersReducer.ts'
import favReducer from './favReducer.ts'
import apiStatusReducer from './apiStatusReducer.ts'

const store = configureStore({
  reducer: {
    users: usersReducer,
    fav: favReducer,
    apiStatus: apiStatusReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
