import { useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import styled from "styled-components";
import Photo from "../components/Photo.tsx";

const FavPhotosWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 42px;
    padding: 32px 0 32px 105px;
`

const Favorites = () => {
  const favPhotos = useSelector((state: RootState) => state.fav)

  console.log(favPhotos)

  return (
    <FavPhotosWrapper>
      {
        favPhotos
          ? favPhotos.value.map((url, index) => <Photo key={index} index={index} url={url} />)
          : <></>
      }
    </FavPhotosWrapper>
  )
}

export default Favorites
