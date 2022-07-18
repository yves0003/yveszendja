import { MDXRemote } from "next-mdx-remote"
import "highlight.js/styles/atom-one-dark.css"
import { MDXDoc } from "../../@types"
import styled from "styled-components"
import TabMatiere from "../../components/elements/TabMatiere"
import { getStaticPathsFunc, getStaticPropsFunc } from "../../lib/nextProps"
import Playground from "../../components/elements/Playground/Playground"
import Comments from "../../components/elements/Comments/Comments"
import { useAuth } from "../../context/auth"
import { slugify } from "../../helpers/slugify"
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter"

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

  h2,
  h3 {
    scroll-margin-top: 60px;
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
  const snippet = {
    markup: `<div id=app />`,
    css: ``,
    javascript: `import { h, Component, render } from 'preact';
      import htm from 'htm';

      const html = htm.bind(h);

      const app = html\`<div>Hello World from Playground!</div>\`

      render(app, document.getElementById('app'));`,
  }

  return (
    <Div className="container mt-6">
      <h1 className="mb-3">{capitalizeFirstLetter(doc.meta.title)}</h1>
      <ArticleContainer className="articleView">
        <TabMatiere />
        <TextContainer>
          <MDXRemote {...doc.source} />
          <Playground
            mode="dark"
            id="exampled"
            initialSnippet={snippet}
            defaultEditorTab="javascript"
            transformJs
          />
          {/* <PlaygroundCode /> */}
        </TextContainer>
      </ArticleContainer>
      <Comments articleSlug={slugify(doc.meta.title)} ecart="10px" user={user} />
    </Div>
  )
}

export default slug
export const getStaticProps = getStaticPropsFunc("articles")
export const getStaticPaths = getStaticPathsFunc("articles")
