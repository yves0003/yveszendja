import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react"

const useOnScreen: () => [RefObject<HTMLDivElement>, boolean] = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
  }, [])

  return [elementRef, isIntersecting]
}

export default useOnScreen
