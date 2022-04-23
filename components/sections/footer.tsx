import Link from "next/link"
import { AnchorHTMLAttributes, FC } from "react"
import styled from "styled-components"

const Container = styled.div`
  border-top: solid 1px var(--surface2);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 36rem) {
  }
`
interface LinkDiv extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

const LinkContainer = styled.div`
  a {
    color: var(--text2);
    transition: color var(--speed) ease-in-out;
  }
  :hover {
    a {
      color: var(--text1);
    }
  }
`
const LinkDiv: FC<LinkDiv> = ({ text, href, children, ...props }) => {
  return (
    <LinkContainer>
      <Link href={href!}>
        <a rel="noopener noreferrer" {...props}>
          <p className="pb-1">{text}</p>
        </a>
      </Link>
    </LinkContainer>
  )
}

const Footer = () => {
  return (
    <Container className="mt-6 pb-6 pt-3 container">
      <div>
        <h6 className="pb-2">Site</h6>
        <LinkDiv text="Accueil" href="/" rel="noopener noreferrer" />
        <LinkDiv text="Articles" href="/articles" rel="noopener noreferrer" />
        <LinkDiv text="Codes" href="/codes" rel="noopener noreferrer" />
      </div>
      <div>
        <h6 className="pb-2">Liens</h6>
        <LinkDiv text="Twitter" href="https://twitter.com/yveslez" rel="noopener noreferrer" />
        <LinkDiv
          text="Instagram"
          href="https://www.instagram.com/yvez_lez"
          rel="noopener noreferrer"
        />
        <LinkDiv text="Github" href="https://github.com/yves0003" rel="noopener noreferrer" />
      </div>
      <div>
        <h6 className="pb-2">Divers</h6>
        <LinkDiv text="Inspirations" href="/inspirations" rel="noopener noreferrer" />
        <LinkDiv text="Voyages" href="/articles?tag=voyage" rel="noopener noreferrer" />
      </div>
    </Container>
  )
}

export default Footer
