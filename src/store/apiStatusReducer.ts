import { createSlice } from '@reduxjs/toolkit'


export const apiStatusSlice = createSlice({
  name: 'apiStatus',
  initialState: {
    usersIsLoading: false,
    albumsIsLoading: false,
    photosIsLoading: false
  },
  reducers: {
    toggleUsersIsLoading: (state, action) => {
      state.usersIsLoading = action.payload
    },
    toggleAlbumsIsLoading: (state, action) => {
      state.albumsIsLoading = action.payload
    },
    togglePhotosIsLoading: (state, action) => {
      state.photosIsLoading = action.payload
    },
  },
})

export const {
  toggleUsersIsLoading,
  toggleAlbumsIsLoading,
  togglePhotosIsLoading
} = apiStatusSlice.actions

export default apiStatusSlice.reducer