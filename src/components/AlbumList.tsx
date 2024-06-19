import { FC, useEffect, useState } from 'react'
import { fetchAlbums } from '../api/api.service.ts'
import AlbumItem from './AlbumItem'
import styled from "styled-components";

type AlbumT = {
  albumId: string
  title: string
  userId: string
}

type Props = {
  userId: string
}

const AlbumsWrapper = styled.div`
    width: 100%;
`

const AlbumList: FC<Props> = ({ userId }) => {
  const [albums, setAlbums] = useState<AlbumT[]>([])

  useEffect(() => {
    fetchAlbums(userId).then(setAlbums)
  }, [userId])

  return (
    <AlbumsWrapper>
      {albums.map((album, index) => (
        <AlbumItem key={index} album={album} />
      ))}
    </AlbumsWrapper>
  )
}

export default AlbumList