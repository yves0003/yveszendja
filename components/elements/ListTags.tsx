import { useRouter } from "next/router"
import { FC, HTMLAttributes } from "react"
import styled from "styled-components"
import { directory } from "../../@types"
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter"
import { isSelectedRoute } from "../../helpers/isSelectedRoute"
import { routerDir } from "../../helpers/routerDir"
import { slugify } from "../../helpers/slugify"

const ItemContainer = styled.div`
  user-select: none;
  width: auto;
  flex: 1 0 auto;
  text-align: center;
  //margin: 0 0.5rem 0 0;
`
const TagDiv = styled.div`
  grid-area: tags;
  display: flex;
  //justify-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  //gap: 0.5rem;
`
const Item = styled.div`
  span {
    padding: 0rem 0.6rem;
  }
  //margin: 0 0 0.5rem 0;
  height: 2.2rem;
  border: solid 1px var(--surface2);
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color var(--speed) cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  background-color: ${props =>
    props.theme.active ? "hsla(var(--brand-hsl) / 0.5)" : "transparent"};

  color: var(--text2);
  &:hover {
    background-color: hsla(var(--brand-hsl) / 0.5);
    color: var(--text1);
  }
  display: grid;
  align-content: center;
`

interface ListTags extends HTMLAttributes<HTMLDivElement> {
  allTags: string[]
  home?: boolean
  directory: directory
}
const ListTags: FC<ListTags> = ({ allTags, home, directory, ...props }) => {
  const router = useRouter()
  return (
    <TagDiv {...props}>
      {!home && (
        <ItemContainer onClick={e => routerDir(router, `${directory}`, false)}>
          <Item theme={{ active: isSelectedRoute("", router, "tag") }}>
            <span>Tous</span>
          </Item>
        </ItemContainer>
      )}
      {allTags.map(tag => (
        <ItemContainer
          key={tag}
          onClick={e => routerDir(router, `${directory}?tag=${slugify(tag)}`)}
        >
          <Item theme={{ active: isSelectedRoute(slugify(tag), router, "tag") }}>
            <span>{capitalizeFirstLetter(tag)}</span>
          </Item>
        </ItemContainer>
      ))}
    </TagDiv>
  )
}

export default ListTags
