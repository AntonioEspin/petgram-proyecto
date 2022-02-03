import { useEffect, useState, useRef } from 'react'

const useNearScream = () => {
  const [show, setShow] = useState(false)
  const element = useRef(null)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [])

  return [show, element]
}

export { useNearScream }
