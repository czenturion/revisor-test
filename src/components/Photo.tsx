import { FC, useState, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addPhoto, removePhoto } from '../store/favReducer.ts'
import styled from 'styled-components'
import { PhotoPropsT } from '../types/catalogTypes.ts'


const PhotoWrapper = styled.div`
`

const ImageContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`

const Image = styled.img`
    z-index: -10;
`

const Tooltip = styled.div<{ x: number; y: number }>`
    display: ${({x, y}) => (x && y ? 'block' : 'none')};
    position: fixed;
    top: ${({y}) => y}px;
    left: ${({x}) => x}px;
    background-color: #000000;
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
    font-weight: 400;
    width: 150px;
    color: #FFFFFF;
    z-index: 9999;
    transform: translate(-70px, 30px);
`

const FavStarWrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 10;
    cursor: pointer;
`

const Photo: FC<PhotoPropsT> = ({ index, url, title, isFav = false, onImageClick }) => {
  const dispatch = useDispatch()
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setTooltipPosition(null)
  }

  return (
    <PhotoWrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <ImageContainer>
        <Image key={index} src={url} alt={'Photo' + index} onClick={() => onImageClick(url)}/>
        {tooltipPosition && <Tooltip x={tooltipPosition.x} y={tooltipPosition.y}>{title}</Tooltip>}
        <FavStarWrapper>
          {
            !isFav
              ? <img
                src="/src/assets/FavInactive.svg"
                alt="FavInactive"
                title="Добавить в избраное"
                onClick={() => dispatch(addPhoto({url: url, title: title}))}
              />
              : <img
                src="/src/assets/FavAdded.svg"
                alt="FavAdded"
                title="Убрать из избранного"
                onClick={() => dispatch(removePhoto(index))}
              />
          }
        </FavStarWrapper>
      </ImageContainer>
    </PhotoWrapper>
  )
}

export default Photo
