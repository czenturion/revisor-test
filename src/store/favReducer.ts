import { createSlice } from '@reduxjs/toolkit'

export type FavPhotoT = {
  url: string
  title: string
}

export const favSlice = createSlice({
  name: 'favPhotos',
  initialState: {
    value: [] as FavPhotoT[],
  },
  reducers: {
    addPhoto: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    removePhoto: (state, action) => {
      state.value = state.value.filter((_photo, index) => index!== action.payload)
    }
  },
})

export const { addPhoto, removePhoto} = favSlice.actions

export default favSlice.reducer