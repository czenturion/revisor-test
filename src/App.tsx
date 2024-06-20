import { FC, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchUsers } from './api/api.service.ts'
import { useDispatch } from 'react-redux'
import { add } from './store/usersReducer.ts'
import './App.css'
import styled from 'styled-components'
import Catalog from './pages/Catalog.tsx'
import Favorites from './pages/Favorites.tsx'
import Header from './components/Header.tsx'
import Modal from './components/Modal.tsx'

const AppContainer = styled.div`
    max-width: 744px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 64px 8px;
`

const App: FC = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const openModal = (url: string) => {
    setModalImage(url)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setModalImage('')
    setIsModalOpen(false)
  }

  useEffect(() => {
    fetchUsers(dispatch)
      .then(users => {
        dispatch(add(users))
      })
  }, [dispatch])

  return (
    <AppContainer>
      <Header/>
      <Routes>
        <Route path='/' element={<Catalog onImageClick={openModal}/>}/>
        <Route path='/favorites' element={<Favorites onImageClick={openModal} />}/>
      </Routes>
      <Modal show={isModalOpen} onClose={closeModal}>
        {modalImage && <img src={modalImage} alt="" style={{ width: '100%', height: '100%' }} />}
      </Modal>
    </AppContainer>
  )
}

export default App
