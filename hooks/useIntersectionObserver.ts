import { useEffect, useRef } from "react"

const useIntersectionObserver = (setActiveId: any) => {
  const headingElementsRef = useRef<{ [x: string]: IntersectionObserverEntry }>(
    {}
  )
  useEffect(() => {
    const callback = (headings: any) => {
      headingElementsRef.current = headings.reduce(
        (map: any, headingElement: any) => {
          map[headingElement.target.id] = headingElement
          return map
        },
        headingElementsRef.current
      )
      const visibleHeadings: any = []
      Object.keys(headingElementsRef.current).forEach((key: string) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id: string) =>
        headingElements.findIndex(heading => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: any, b: any) =>
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        )
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 1.0,
    })
    const headingElements = Array.from(document.querySelectorAll("h2, h3"))
    headingElements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
/*
const observer = new IntersectionObserver(callback, {
      rootMargin: "-64px 0px -10% 0px",
    })

*/
export default useIntersectionObserver
