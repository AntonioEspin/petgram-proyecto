import { gql, useMutation } from '@apollo/client'

const useLikePhoto = () => {
  const likePhoto = gql`
    mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `

  const [addLike, { loading, error, data }] = useMutation(likePhoto)

  return [addLike, loading, error, data]
}

export { useLikePhoto }
