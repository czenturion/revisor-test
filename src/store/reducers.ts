import { createSlice } from '@reduxjs/toolkit'

type User = {
  email: string
  id: string
  name: string
  username: string
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [] as User[],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, ...action.payload]
    },
    swap: (state, action) => {
      state.value = [...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, swap } = usersSlice.actions

export default usersSlice.reducer