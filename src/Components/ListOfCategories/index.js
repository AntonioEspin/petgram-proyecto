import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const useListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-curso-avanzado.vercel.app/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
    setLoading(false)
  }, [])
  return { categories, loading }
}

const ListOfCategories = () => {
  const { categories, loading } = useListOfCategories()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowfixed = window.scrollY > 200
      showFixed !== newShowfixed && setShowFixed(newShowfixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? <div>...Loading</div>
        : categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)}
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export { ListOfCategories }
