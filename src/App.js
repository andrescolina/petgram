import React from 'react'
import { DetailPhotoCard } from './components/DetailPhotoCard'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })

}

export const App = () => {
    
    return (
      <>
        <GlobalStyles />
        <Logo />
        <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            <Detail path='/detail/:detailId' />
        </Router>
        <UserLogged>
          {
            ({ isAuth }) => 
              isAuth 
                ?
              <Router>
                    <Favs path='/favs' />
                    <User path='/user' />
              </Router>
                :
              <Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
              </Router>
          }
        </UserLogged>
        <NavBar />
      </>
  )
}
