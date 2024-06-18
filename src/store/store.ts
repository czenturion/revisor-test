import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers'

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
