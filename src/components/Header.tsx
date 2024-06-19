import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`

const ButtonWrapper = styled.div`
    width: 50%;
    height: 55px;
`

const NavButton = styled.button`
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: #1C1C1C;
    border-radius: 16px;
    background: none;
    cursor: pointer;
    
    &&:active,
    &&:focus,
    &&:hover {
        border: none;
        outline: none;
        background: #EDF9FF !important;
        color: #117DC1;
    };
`

const TextWrapper = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`


const Header: FC = () => {
  return (
    <HeaderWrapper>
      <ButtonWrapper>
        <Link to='/' type='text'>
          <NavButton>
            <TextWrapper>Каталог</TextWrapper>
          </NavButton>
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link to='/favorites'>
          <NavButton>
            <TextWrapper>Избранное</TextWrapper>
          </NavButton>
        </Link>
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

export default Header
