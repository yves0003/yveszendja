import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { metaArticles } from "../@types"
import ListArticles from "../components/elements/ListArticles"
import ListTags from "../components/elements/ListTags"
import { slugify } from "../helpers/slugify"
import { getAllArticlesByDirectory } from "../lib/mdx"

const ListArticlesContainer = styled.div`
  @media (min-width: 36rem) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }
`
const Div = styled.div`
  min-height: 85vh;
`
const Codes: NextPage<{ docs: metaArticles[] }> = ({ docs }) => {
  const [selectedDocs, setSelectedDocs] = useState(docs)
  const router = useRouter()
  const allTags = docs
    .map(doc => doc.meta.tags)
    .flat()
    .filter((x, i, a) => a.indexOf(x) == i)

  useEffect(() => {
    if (router.query.tag) {
      let tag = router.query.tag as string
      setSelectedDocs(() => {
        const filteredDocs = docs.filter(doc => {
          const allTagStrip = doc.meta.tags.map(tag => slugify(tag))
          return allTagStrip.includes(tag)
        })
        return filteredDocs
      })
    } else setSelectedDocs(docs)
  }, [router, docs])
  return (
    <Div className="container">
      <ListTags className="pb-6 pt-4" allTags={allTags} directory="voyages" />
      <ListArticlesContainer className="pb-6 pt-4">
        <ListArticles docs={selectedDocs} directory="voyages" />
      </ListArticlesContainer>
    </Div>
  )
}

export default Codes

export async function getStaticProps() {
  const docs = getAllArticlesByDirectory("voyages")
  return {
    props: { docs },
  }
}
