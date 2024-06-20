import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { FavoritesPropsT } from '../types/favoritesTypes.ts'
import styled from 'styled-components'
import Photo from '../components/Photo.tsx'


const FavPhotosWrapper = styled.div`
    position: relative;
    gap: 42px;
    padding: 32px 32px 32px 32px;
    display: flex;
    justify-content: center;
`

const FavPhotosContent = styled.div`
    gap: 42px;
    display: flex;
    text-align: left;
    flex-wrap: wrap;
    max-width: 534px;
    width: 100%;
`

const FavPhoto = styled.div`
    width: 150px;
    text-align: left;
`

const TextWrapper = styled.p`
    font-size: 14px;
    line-height: 21px;
    color: #787878;
`

const IllustrationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 206px;
`

const IllustrationTitleWrapper = styled.h1`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    margin-top: 32px;
    margin-bottom: 8px;
`

const IllustrationTextWrapper = styled.h1`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin: 0;
`

const Favorites: FC<FavoritesPropsT> = ({ onImageClick }) => {
  const favPhotos = useSelector((state: RootState) => state.fav)

  return (
    <FavPhotosWrapper>
      {
        favPhotos.value.length !== 0
          ? <FavPhotosContent>
            {favPhotos.value.map((photo, index) => (
              <FavPhoto key={index}>
                <Photo
                  index={index}
                  url={photo.url}
                  title={photo.title}
                  isFav
                  onImageClick={onImageClick}
                />
                <TextWrapper>{photo.title}</TextWrapper>
              </FavPhoto>
            ))}
          </FavPhotosContent>
          : <IllustrationWrapper>
              <img src="/src/assets/Illustration.svg" alt=""/>
            <IllustrationTitleWrapper>
              Список избранного пуст
            </IllustrationTitleWrapper>
            <IllustrationTextWrapper>
              Добавляйте изображения, нажимая на звездочки
            </IllustrationTextWrapper>
          </IllustrationWrapper>
      }
    </FavPhotosWrapper>
  )
}

export default Favorites
