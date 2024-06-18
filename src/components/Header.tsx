import { FC } from 'react'
import { Button, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled(Row)`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`

const ButtonWrapper = styled(Col)`
    width: 50%;
    height: 55px;
`

const NavButton = styled(Button)`
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: #1C1C1C;
    border-radius: 16px;
    
    &&:active,
    &&:focus,
    &&:hover {
        border: none;
        outline: none;
        background: #EDF9FF !important;
        color: #117DC1;
    };
`

const TextWrapper = styled.text`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`


const Header: FC = () => {
  return (
    <HeaderWrapper>
      <ButtonWrapper>
        <Link to='/' type='text'>
          <NavButton type='link'>
            <TextWrapper>Каталог</TextWrapper>
          </NavButton>
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link to='/favorites'>
          <NavButton type='link'>
            <TextWrapper>Избранное</TextWrapper>
          </NavButton>
        </Link>
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

export default Header
