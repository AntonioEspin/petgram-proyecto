import React from 'react'
import { Link } from 'react-router-dom'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScream } from '../../hooks/useNearScream'
import { FavButton } from '../FavButton'
import { useLikePhoto } from '../../hooks/useLikePhoto'

const IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, liked, likes = 0, src = IMAGE }) => {
  const [show, element] = useNearScream()
  const [addLike, error] = useLikePhoto()

  const handleSetLiked = () => {
    addLike({ variables: { input: { id } } })
  }

  console.log(error)

  return (
    <Article ref={element}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='' />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleSetLiked} />
        </>}
    </Article>
  )
}

export { PhotoCard }
