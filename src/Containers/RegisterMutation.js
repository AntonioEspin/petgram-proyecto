import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

const getRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER)

  return { registerMutation, data, loading, error }
}

export { getRegisterMutation }
