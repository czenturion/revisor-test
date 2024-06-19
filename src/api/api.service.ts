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
export const fetchAlbums = async (userId: string) => {
  try {
    const res = await instance.get(`/albums/${userId}`)
    return res.data
  } catch (er) {
    console.error(er)
    return []
  }
}
export const fetchPhotos = async (albumId: string) => {
  try {
    const res = await instance.get(`/photos/${albumId}`)
    return res.data
  } catch (er) {
    console.error(er)
    return []
  }
}

