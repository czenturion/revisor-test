import { FC, useState } from 'react'
import { AlbumItemsPropsT } from '../types/catalogTypes.ts'
import styled from 'styled-components'
import PhotoList from './PhotoList'


const AlbumItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const AlbumExpandBar = styled.div`
    padding-left: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    cursor: pointer;
`

const TextWrapper = styled.h2`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-left: 24px;
`

const AlbumItem: FC<AlbumItemsPropsT> = ({ album, onImageClick }) => {
  const [expanded, setExpanded] = useState(false)


  return (
    <AlbumItemWrapper>
      <AlbumExpandBar onClick={() => setExpanded(!expanded)}>
      {
        expanded
          ? <img src="/src/assets/CloseIcon.svg" alt="CloseIcon" />
          : <img src="/src/assets/OpenIcon.svg" alt="OpenIcon" />
      }
      <TextWrapper>
        {album.title}
      </TextWrapper>
      </AlbumExpandBar>
      {expanded && <PhotoList albumId={album.albumId} onImageClick={onImageClick} />}
    </AlbumItemWrapper>
  )
}

export default AlbumItem