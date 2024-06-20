import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  show: boolean
  onClose: () => void
  children: ReactNode
}

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    width: 600px;
    height: 600px;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`

const CloseButton = styled.div`
    position: absolute;
    top: 32px;
    right: 40px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`

const Modal: FC<Props> = ({ show, onClose, children }) => {
  if (!show) {
    return null
  }

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src="/src/assets/CloseModalIcon.svg" alt=""/>
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal