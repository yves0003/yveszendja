import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import styled from "styled-components"
import { directory, metaArticles } from "../../@types"
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter"
import { routerDir } from "../../helpers/routerDir"
import { slugify } from "../../helpers/slugify"
import transformDate from "../../helpers/transformDateLong"

const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h6 {
    color: var(--text2);
    font-weight: 500;
  }
  p {
    @media (max-width: 36rem) {
      line-clamp: 3;
      box-orient: vertical;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  border: solid 1px var(--surface2);
  cursor: default;
  :hover {
    h5 {
      color: var(--brand);
    }
    .arrow {
      opacity: 1;
    }
  }
  background-color: hsla(var(--brand-hsl) / 0.01);
  transition: background-color var(--speed) ease-in-out;
`
const DivTitle = styled.div`
  //box-shadow: inset 0px -0.5px 0px var(--brand);
`
const DivTitleContainer = styled.a`
  cursor: pointer;
`

const HashtagContainer = styled.div`
  position: relative;
  overflow-wrap: normal;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow-wrap: break-word;
`
const Hashtag = styled.div`
  color: var(--info);
`

const HashtagDiv = styled.a`
  border-radius: 20px;
  border: solid 1px var(--surface4);
  text-align: center;
  display: flex;
  cursor: pointer;
  color: var(--text2);
  transition: color var(--speed) ease-in-out, border var(--speed) ease-in-out;
  :hover {
    color: var(--text1);
    border: solid 1px var(--surface2);
  }
`

const Space = styled.div`
  margin-top: auto;
`

const ListArticles: FC<{ docs: metaArticles[]; directory: directory }> = ({ docs, directory }) => {
  const router = useRouter()
  return (
    <>
      {docs.map((doc, index) => (
        <ArticleInfoContainer key={index} className="mb-3 br-3 p-2">
          <Link passHref href={`${directory}/${slugify(doc.meta.title)}`}>
            <DivTitleContainer>
              <DivTitle>
                <h5>{capitalizeFirstLetter(doc.meta.title)}</h5>
                <h6>
                  <p className="small text2">
                    {`${
                      doc.meta.tags.length > 1 && doc.meta.tags[0]
                        ? `${capitalizeFirstLetter(doc.meta.tags[0])} - `
                        : ""
                    }${transformDate(doc.meta.datePublication, true)}`}
                  </p>
                </h6>
              </DivTitle>
              <p className="pt-2">{doc.meta.extrait}</p>
            </DivTitleContainer>
          </Link>

          <Space />
          <HashtagContainer>
            {doc.meta.tags.slice(0, 4).map((tag, index) => (
              <HashtagDiv
                key={index}
                className="pl-1 pr-1 mr-1 mt-2"
                onClick={e => routerDir(router, `${directory}?tag=${slugify(tag)}`, false)}
              >
                <Hashtag>#</Hashtag>
                {capitalizeFirstLetter(tag)}
              </HashtagDiv>
            ))}
          </HashtagContainer>
        </ArticleInfoContainer>
      ))}
    </>
  )
}

export default ListArticles
