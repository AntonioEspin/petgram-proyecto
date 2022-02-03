import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import { PhotoCard } from '../Components/PhotoCard'

const PhotoCardWithQuery = () => {
  const { id } = useParams()
  const { loading, error, data = { photo: {} } } = useGetSinglePhoto(id)
  if (loading) <h1>...Loading</h1>
  if (error) console.log(error.message)
  return (
    <PhotoCard {...data.photo} />
  )
}

export { PhotoCardWithQuery }
