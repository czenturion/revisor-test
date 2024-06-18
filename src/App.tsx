import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Catalog from './pages/Catalog.tsx'
import Favorites from './pages/Favorites.tsx'
import Header from './components/Header.tsx'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    max-width: 744px;
    text-align: center;
    justify-content: center;
    padding: 64px 8px;
`

const App: FC = () => {

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
