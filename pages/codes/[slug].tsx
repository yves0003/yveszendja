import { MDXRemote } from "next-mdx-remote"
import "highlight.js/styles/atom-one-dark.css"
import { MDXDoc } from "../../@types"
import styled from "styled-components"
import { getStaticPathsFunc, getStaticPropsFunc } from "../../lib/nextProps"
import "highlight.js/styles/atom-one-dark.css"

const Div = styled.div`
  min-height: 80vh;
`

const slug = ({ doc }: { doc: MDXDoc }) => {
  return (
    <Div className="container mt-6">
      <h1>{doc.meta.title}</h1>
      <MDXRemote {...doc.source} />
    </Div>
  )
}

export default slug

export const getStaticProps = getStaticPropsFunc("codes")
export const getStaticPaths = getStaticPathsFunc("codes")
