import React from 'react'
import { Link, Image } from './styles'

const IMAGE_URL = 'https://www.freepik.es/foto-gratis/gato-sobre-fondo-blanco_10962136.htm#query=gatos&position=0&from_view=keyword'

const Category = ({ cover = IMAGE_URL, path, emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} alt='cat' />
      {emoji}
    </Link>
  )
}

export { Category }
