import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { UserForm } from '../Components/UserForm'
import { getRegisterMutation } from '../Containers/RegisterMutation'
import { getLoginMutation } from '../Containers/LoginRegister'

const NotRegisteredUser = () => {
  const { handleIsLogged } = useContext(AppContext)
  const { registerMutation, loading: loadingRegister, error: errorRegister } = getRegisterMutation()
  const { loginMutation, loading: loadingLogin, error: errorLoading } = getLoginMutation()

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then((data) => {
      const { signup } = data
      handleIsLogged(signup)
    })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      handleIsLogged(login)
    })
  }

  const setErrorRegister = errorRegister && 'El usuario ya está registrado o ha ocurrido un error'
  const setErrorLogin = errorLoading && 'Algún dato está incorrecto o el usuario no está registrado'
  return (
    <>
      <UserForm handleIsLogged={onSubmitRegister} title='Registrarse' setError={setErrorRegister} disable={loadingRegister} />
      <UserForm handleIsLogged={onSubmitLogin} title='Iniciar Sesión' setError={setErrorLogin} disable={loadingLogin} />
    </>
  )
}

export { NotRegisteredUser }
