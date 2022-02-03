import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [valueItem, setValueItem] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocaleStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValueItem(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [valueItem, setLocaleStorage]
}

export { useLocalStorage }
