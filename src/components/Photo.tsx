import { FC } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addPhotoUrl } from "../store/favReducer.ts";

type Props = {
  index: number
  url: string
}

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
`

const FavStarWrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 10;
    cursor: pointer;
`

const Photo: FC<Props> = ({index, url}) => {
  const dispatch = useDispatch()

  // dispatch(addPhotoUrl(url)
  return (
    <PhotoWrapper>
      <img key={index} src={url} alt={'Photo' + index}/>
      <FavStarWrapper onClick={() => dispatch(addPhotoUrl(url))}>
        <img src="/src/assets/FavInactive.svg" alt=""/>
      </FavStarWrapper>
    </PhotoWrapper>
  )
}

export default Photo
