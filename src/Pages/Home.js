import React from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { ListOfPhotoCars } from '../Components/ListOfPhotoCards'

const Home = () => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCars />
    </>
  )
}

export { Home }
