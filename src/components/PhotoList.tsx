import { FC, useEffect, useState } from 'react'
import { fetchPhotos } from '../api/api.service'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { PhotoListPropsT, PhotoT } from '../types/catalogTypes.ts'
import styled from 'styled-components'
import Photo from './Photo.tsx'
import Loader from './Loader.tsx'


const PhotoListWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 42px;
    padding: 32px 0 32px 105px;
`

const PhotoList: FC<PhotoListPropsT> = ({ albumId, onImageClick }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.apiStatus.photosIsLoading)
  const [photos, setPhotos] = useState<PhotoT[]>([])

  useEffect(() => {
    fetchPhotos(albumId, dispatch)
      .then(setPhotos)
  }, [albumId])

  return (
    <PhotoListWrapper>
      {
        !isLoading || photos.length > 0
          ? photos.map((photo, index) => (
            <Photo
              key={index}
              index={index}
              url={photo.url}
              title={photo.title}
              onImageClick={onImageClick}
            />
          ))
          : <Loader />
      }
    </PhotoListWrapper>
  )
}

export default PhotoList