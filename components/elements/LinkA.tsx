import Link from "next/link"
import React, { AnchorHTMLAttributes, FC, HTMLAttributes, useState } from "react"
import styled from "styled-components"
import { getMouseDirectionX } from "../../helpers/getMouseDirection"

interface LinkA extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active: Boolean
  compte?: Boolean
}
interface DivNav extends HTMLAttributes<HTMLDivElement> {
  active: Boolean
  compte?: Boolean
}

const A = styled.a`
  ${props => (props.theme.active ? "font-weight: 700" : "font-weight: 400")};
  ${props => (props.theme.active ? "color: var(--text1)" : "color: var(--text2)")};
  position: relative;
  background-color: transparent;
  letter-spacing: 0.8px;
  ${props => (props.theme.compte ? "border: solid 1px var(--surface2);" : null)};
`

export const Div = styled.div`
  ${props => (props.theme.active ? "font-weight: 700" : "font-weight: 400")};
  ${props => (props.theme.active ? "color: var(--text1)" : "color: var(--text2)")};
  position: relative;
  background-color: transparent;
  letter-spacing: 0.8px;
  ${props => (props.theme.compte ? "border: solid 1px var(--surface2);" : null)};
`

export const DivNav: FC<DivNav> = ({ children, active, compte, ...props }) => {
  return (
    <Div {...props} theme={{ active, compte }}>
      {children}
    </Div>
  )
}

const LinkA: FC<LinkA> = ({ children, href, active, compte, ...props }) => {
  const [mousePos, setMousePos] = useState<number>()
  return (
    <Link passHref href={href!}>
      <A
        {...props}
        theme={{ active, mousePos, compte }}
        onMouseEnter={e => {
          setMousePos(getMouseDirectionX(e, e.currentTarget))
        }}
        onMouseLeave={e => {
          setMousePos(getMouseDirectionX(e, e.currentTarget))
        }}
      >
        {children}
      </A>
    </Link>
  )
}

export default LinkA
