import React from 'react'
import { Button } from './styles'

const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>{children}</Button>
  )
}

export { SubmitButton }
