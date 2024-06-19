import { createSlice } from '@reduxjs/toolkit'

export type UserT = {
  email: string
  id: string
  name: string
  username: string
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [] as UserT[],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, ...action.payload]
    },
  },
})

export const { add } = usersSlice.actions

export default usersSlice.reducer