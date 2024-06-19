import { FC, useEffect, useState } from 'react'
import { fetchPhotos } from '../api/api.service'
import styled from 'styled-components'
import Photo from './Photo.tsx'

type PhotoT = {
  url: string
}

type Props = {
  albumId: string
}

const PhotoListWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 42px;
    padding: 32px 0 32px 105px;
`

const PhotoList: FC<Props> = ({ albumId }) => {
  const [photos, setPhotos] = useState<PhotoT[]>([])

  useEffect(() => {
    fetchPhotos(albumId).then(setPhotos)
  }, [albumId])

  return (
    <PhotoListWrapper>
      {photos.map((photo, index) => (
        <Photo key={index} url={photo.url} index={index} />
      ))}
    </PhotoListWrapper>
  )
}

export default PhotoList