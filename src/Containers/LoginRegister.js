import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

const getLoginMutation = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN)

  return { loginMutation, data, loading, error }
}

export { getLoginMutation }
