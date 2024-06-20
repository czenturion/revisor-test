import { FC, useEffect, useState } from 'react'
import { fetchAlbums } from '../api/api.service.ts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { AlbumListPropsT, AlbumT } from '../types/catalogTypes.ts'
import styled from 'styled-components'
import AlbumItem from './AlbumItem.tsx'
import Loader from './Loader.tsx'


const AlbumsWrapper = styled.div`
    width: 100%;
`

const AlbumList: FC<AlbumListPropsT> = ({ userId, onImageClick }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.apiStatus.albumsIsLoading)
  const [albums, setAlbums] = useState<AlbumT[]>([])

  useEffect(() => {
    fetchAlbums(userId, dispatch).then(setAlbums)
  }, [userId])

  return (
    <AlbumsWrapper>
      {
        !isLoading || albums.length > 0
          ? albums.map((album, index) => (
            <AlbumItem key={index} album={album} onImageClick={onImageClick} />
          ))
          : <Loader />
      }
    </AlbumsWrapper>
  )
}

export default AlbumList