import type { NextPage } from "next"
import Image from "next/image"
import styled from "styled-components"
import { metaArticles } from "../@types"
import Comments from "../components/elements/Comments/Comments"
import ListArticles from "../components/elements/ListArticles"
import ListTags from "../components/elements/ListTags"
import Subscribe from "../components/sections/subscribe"
import { getAllArticlesByDirectory } from "../lib/mdx"
import useSWR from "swr"

const ImageStyled = styled(Image)`
  border-radius: 50%;
  background-color: var(--surface2);
`

const ImageContainerDiv = styled.div`
  margin-bottom: 1rem;
  grid-area: imageProfile;
  display: flex;
  align-content: center;
  justify-content: center;
  @media (max-width: 36rem) {
    justify-content: flex-start;
  }
`

const ImageContainer = styled.div`
  display: grid;
  align-items: center;
`

const DivIntro = styled.div`
  position: relative;
  p {
    max-width: 60ch;
  }

  @media (min-width: 36rem) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "textIntro imageProfile";
  }
`

const TextIntro = styled.div`
  grid-area: textIntro;
  p {
    color: var(--text2);
  }
`

const DivPubTags = styled.div`
  position: relative;

  @media (min-width: 36rem) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: "listArticles tags";
  }
`
const ListArticlesContainer = styled.div`
  grid-area: listArticles;
  @media (min-width: 36rem) {
    padding-right: 3rem;
  }
`

const TagContainer = styled.div`
  h4 {
    display: none;
  }
  @media (max-width: 36rem) {
    h4 {
      display: block;
    }
  }
`
const Div = styled.div`
  min-height: 80vh;
`

const H4 = styled.h4`
  color: var(--primary-fg);
`
const Home: NextPage<{ docs: metaArticles[] }> = ({ docs }) => {
  const docHomePage = docs.slice(0, 4)
  const allTags = docs
    .map(doc => doc.meta.tags)
    .flat()
    .filter((x, i, a) => a.indexOf(x) == i)
  return (
    <Div className="container mt-6">
      <DivIntro>
        <ImageContainerDiv>
          <ImageContainer>
            <ImageStyled
              alt="profile"
              src="https://res.cloudinary.com/lokalistic/image/upload/v1650481419/yveszendja/xpywaomeq7rwdu0gp1fr_i9tvxv.png"
              width={150}
              height={150}
            />
          </ImageContainer>
        </ImageContainerDiv>
        <TextIntro className="text pb-4">
          <h2 className="pb-4">Hello, je suis Yves.</h2>
          <p className="pb-2">
            Un data-analyste et développeur full-stack. J&apos;écris des articles à propos des
            nouvelles technologies du web, web3, cloud computing, et des bases de données.
          </p>
          <p>
            J&apos;utilise également cette page comme aide mémoire pour les codes que j&apos;écris
            afin les retrouver facilement. Il y&apos;a également de fortes chances que vous trouviez
            aussi des articles de voyages.
          </p>
        </TextIntro>
      </DivIntro>
      <DivPubTags>
        <ListArticlesContainer>
          <H4 className="pb-3">Dernières publications</H4>
          <ListArticles docs={docHomePage} directory="articles" />
        </ListArticlesContainer>
        <TagContainer>
          <h4 className="pb-3">Les mots-clés</h4>
          <ListTags className="pb-3" allTags={allTags} home directory="articles" />
        </TagContainer>
      </DivPubTags>
      <Subscribe />
      <Comments articleId="article001" ecart="10px" />
    </Div>
  )
}

export default Home

export async function getStaticProps() {
  const docs = getAllArticlesByDirectory("articles")
  return {
    props: { docs },
  }
}
