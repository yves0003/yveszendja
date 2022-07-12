import { useEffect, useState } from "react"
import getNestedHeadings from "../helpers/getNestedHeadings"
//import setIdArticles from "../helpers/setIdArticles"

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<
    {
      id: string
      title: string
      items: {
        id: string
        title: string
      }[]
    }[]
  >([])
  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll(".articleView h2, .articleView h3")
    )
    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])
  return { nestedHeadings }
}

export default useHeadingsData
