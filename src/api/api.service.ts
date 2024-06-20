import axios from 'axios'
import {
  toggleUsersIsLoading,
  toggleAlbumsIsLoading,
  togglePhotosIsLoading
} from '../store/apiStatusReducer.ts'
import { AppDispatch } from '../store/store.ts'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

export const fetchUsers = async (dispatch: AppDispatch) => {
  dispatch(toggleUsersIsLoading(true))

  try {
    const res = await instance.get('/users')
    return res.data
  } catch (er) {
    console.error(er)
    return []
  } finally {
    dispatch(toggleUsersIsLoading(false))
  }
}

export const fetchAlbums = async (userId: string, dispatch: AppDispatch) => {
  dispatch(toggleAlbumsIsLoading(true))

  try {
    const res = await instance.get(`/albums/${userId}`)
    return res.data
  } catch (er) {
    console.error(er)
    return []
  } finally {
    dispatch(toggleAlbumsIsLoading(false))
  }
}
export const fetchPhotos = async (albumId: string, dispatch: AppDispatch) => {
  dispatch(togglePhotosIsLoading(true))

  try {
    const res = await instance.get(`/photos/${albumId}`)
    return res.data
  } catch (er) {
    console.error(er)
    return []
  } finally {
    dispatch(togglePhotosIsLoading(false))
  }
}

