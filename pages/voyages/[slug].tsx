import { MDXRemote } from "next-mdx-remote"
import "highlight.js/styles/atom-one-dark.css"
import { MDXDoc } from "../../@types"
import styled from "styled-components"
import TabMatiere from "../../components/elements/TabMatiere"
import { getStaticPathsFunc, getStaticPropsFunc } from "../../lib/nextProps"
import { slugify } from "../../helpers/slugify"
import Comments from "../../components/elements/Comments/Comments"
import { useAuth } from "../../context/auth"

const Div = styled.div`
  min-height: 80vh;
`

const ArticleContainer = styled.div`
  position: relative;
  p {
    max-width: 60ch;
  }

  h2 {
    max-width: 30ch;
  }

  h1,
  h2 {
    padding: 1rem 0;
  }

  @media (min-width: 36rem) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "content tabMatiere";
  }
`
const TextContainer = styled.div`
  grid-area: content;
`

const slug = ({ doc }: { doc: MDXDoc }) => {
  const { user } = useAuth()
  return (
    <Div className="container mt-6">
      <h1>{doc.meta.title}</h1>
      <ArticleContainer className="articleView">
        <TabMatiere />
        <TextContainer>
          <MDXRemote {...doc.source} />
        </TextContainer>
      </ArticleContainer>
      <Comments articleSlug={slugify(doc.meta.title)} ecart="10px" user={user} />
    </Div>
  )
}

export default slug

export const getStaticProps = getStaticPropsFunc("voyages")

export const getStaticPaths = getStaticPathsFunc("voyages")
