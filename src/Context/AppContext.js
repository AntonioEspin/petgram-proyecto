import React, { createContext, useState } from 'react'
import { useApolloClient } from '@apollo/client'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const client = useApolloClient()
  const [isLogged, setIsLogged] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const handleIsLogged = (token) => {
    setIsLogged(true)
    window.sessionStorage.setItem('token', token)
  }

  const handleOutLogged = () => {
    setIsLogged(false)
    window.sessionStorage.removeItem('token')
    client.resetStore()
  }
  return (
    <AppContext.Provider value={{ isLogged, handleIsLogged, handleOutLogged }}>
      {children}
    </AppContext.Provider>
  )
}

export {
  AppProvider,
  AppContext
}
