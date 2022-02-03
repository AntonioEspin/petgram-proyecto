import { useQuery, gql } from '@apollo/client'

const useGetFavs = () => {
  const getFavs = gql`
    query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
  `

  const { loading, error, data } = useQuery(getFavs, {
    fetchPolicy: 'cache-and-network'
  })

  return { loading, error, data }
}

export { useGetFavs }
