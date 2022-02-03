import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'

const ListOfPhotoCars = () => {
  const { id } = useParams()
  const categoryId = id
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return 'loading'
  if (error) return 'Inicia sesión para poder usar la aplicación'
  return (
    <ul>
      {data.photos.map(photo => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  )
}

export { ListOfPhotoCars }
