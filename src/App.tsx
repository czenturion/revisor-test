import {FC, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchUsers } from './api/api.service.ts'
import { useDispatch } from 'react-redux'
import { add } from './store/usersReducer.ts'
import './App.css'
import styled from 'styled-components'
import Catalog from './pages/Catalog.tsx'
import Favorites from './pages/Favorites.tsx'
import Header from './components/Header.tsx'

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

  useEffect(() => {
    fetchUsers()
      .then(users => {
        dispatch(add(users))
      })
  }, [dispatch])

  return (
    <AppContainer>
      <Header/>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </AppContainer>
  )
}

export default App
