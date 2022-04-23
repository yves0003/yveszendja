import React, { useState } from "react"
import styled from "styled-components"
import useHeadingsData from "../../hooks/useHeadingsData"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const Sub = styled.ul`
  position: relative;
  > li {
    padding-left: 1rem;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    border-left: solid 1px var(--surface3);
    height: 100%;
  }
`

const HeadingH2 = styled.a`
  font-weight: 400;
`

const Headings = ({
  headings,
  activeId,
}: {
  headings: {
    id: string
    title: string
    items: {
      id: string
      title: string
    }[]
  }[]
  activeId: any
}) => (
  <ul style={{ display: "block" }}>
    {headings.map(heading => (
      <li key={heading.id} className={`${heading.id === activeId ? "active" : ""} pt-1`}>
        <HeadingH2 href={`#${heading.id}`}>
          <p className="pb-1">{heading.title}</p>
        </HeadingH2>
        {heading.items.length > 0 && (
          <Sub>
            {heading.items.map(child => (
              <li key={child.id} className={child.id === activeId ? "active" : ""}>
                <a href={`#${child.id}`}>
                  <p>{child.title}</p>
                </a>
              </li>
            ))}
          </Sub>
        )}
      </li>
    ))}
  </ul>
)

const NavArticle = styled.nav`
  overflow: auto;
  li.active > a {
    color: var(--brand);
  }
  li > a:hover {
    color: var(--brand);
  }
`
const TableOfContent = () => {
  const [activeId, setActiveId] = useState()
  const { nestedHeadings } = useHeadingsData()
  useIntersectionObserver(setActiveId)

  return (
    <NavArticle aria-label="Table des matières">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </NavArticle>
  )
}

export default TableOfContent
