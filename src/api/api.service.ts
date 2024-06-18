import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})


export const fetchUsers = async () => {
  try {
    const res = await instance.get('/users')
    return res.data
  } catch (er) {
    console.error(er)
    return []
  }
}
export const fetchAlbums = (userId: number) => instance.get(`/users/${userId}/albums`)
export const fetchPhotos = (albumId: number) => instance.get(`/albums/${albumId}/photos`)

