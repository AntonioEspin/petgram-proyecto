/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppContext } from './Context/AppContext'
import { Logo } from './Components/Logo'
import { PhotoCardWithQuery } from './Containers/PhotoCardWithQuery'
import { Home } from './Pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './Components/NavBar'
import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisteredUser } from './Pages/NotRegisteredUser'

const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  const { isLogged } = useContext(AppContext)

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<PhotoCardWithQuery />} />
        <Route path='/favs' element={isLogged ? <Favs /> : <NotRegisteredUser />} />
        <Route path='/user' element={isLogged ? <User /> : <NotRegisteredUser />} />
        <Route path='/notregistereduser' element={<NotRegisteredUser />} />
      </Routes>
      <NavBar />
    </>
  )
}

export { App }
