import { useState, useEffect, useRef, MutableRefObject } from 'react'

interface UseNearScreenProps {
  rootMargin?: string
  threshold?: number
  externalRef?: MutableRefObject<HTMLElement | null> | null
  once?: boolean
}

interface UseNearScreenReturn {
  isNearScreen: boolean
  fromRef: MutableRefObject<HTMLElement | null>
}

export const useNearScreen = ({
  rootMargin = '0px',
  threshold = 0.5,
  externalRef = null,
  once = true,
}: UseNearScreenProps = {}): UseNearScreenReturn => {
  const [show, setShow] = useState(false)
  const fromRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let observer: IntersectionObserver | undefined

    const element = externalRef ? externalRef.current : fromRef.current

    const onObserver: IntersectionObserverCallback = (entries, observer) => {
      const [{ isIntersecting }] = entries
      if (isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer'),
    ).then(() => {
      observer = new IntersectionObserver(onObserver, {
        rootMargin: rootMargin,
        threshold: threshold,
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return {
    isNearScreen: show,
    fromRef,
  }
}
