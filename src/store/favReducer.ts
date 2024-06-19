import { createSlice } from '@reduxjs/toolkit'

export type FavPhotoT = {
  url: string
}

export const favSlice = createSlice({
  name: 'favPhotos',
  initialState: {
    value: [] as FavPhotoT[],
  },
  reducers: {
    addPhotoUrl: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    remove: (state, action) => {
      state.value = [...state.value.filter(photoUrl => photoUrl !== action.payload)]
    }
  },
})

export const { addPhotoUrl, remove} = favSlice.actions

export default favSlice.reducer