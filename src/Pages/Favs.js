import React from 'react'
import { useGetFavs } from '../hooks/useGetFavs'
import { ListOfFavs } from '../Components/ListOfFavs'

const Favs = () => {
  const { loading, error, data = {} } = useGetFavs()
  const { favs = [] } = data
  console.log(favs)
  if (error) {
    return 'Inicias sesion'
  }
  if (loading) {
    return 'Cargando...'
  }
  return (
    <>
      <h1>favs</h1>
      <ListOfFavs favs={favs} />
    </>
    // {data.map(fav => (
    //   <div>
    //     <img src={fav.src} alt="" />
    //   </div>
    // ))}
  )
}

export { Favs }
