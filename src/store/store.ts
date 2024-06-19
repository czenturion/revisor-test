import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersReducer.ts'
import favReducer from './favReducer.ts'

const store = configureStore({
  reducer: {
    users: usersReducer,
    fav: favReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
