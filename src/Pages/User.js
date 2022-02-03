import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { SubmitButton } from '../Components/SubmitButton/index.js'

const User = () => {
  const { handleOutLogged } = useContext(AppContext)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={handleOutLogged}>Cerrar sesion</SubmitButton>
    </>
  )
}

export { User }
