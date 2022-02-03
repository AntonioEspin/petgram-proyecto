import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton/index.js'

const UserForm = ({ handleIsLogged, title, setError, disable }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleIsLogged({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disable} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disable} type='email' placeholder='email' {...email} />
        <Input disabled={disable} type='password' placeholder='password' {...password} />
        <SubmitButton disabled={disable}>{title}</SubmitButton>
      </Form>
      <Error>{setError}</Error>
    </>
  )
}

export { UserForm }
