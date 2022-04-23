import Link from "next/link"
import React, { AnchorHTMLAttributes, FC, useState } from "react"
import styled from "styled-components"
import { getMouseDirectionX } from "../../helpers/getMouseDirection"

interface LinkA extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active: Boolean
}

const A = styled.a`
  ${props => (props.theme.active ? "font-weight: 700" : "font-weight: 400")};
  ${props => (props.theme.active ? "color: var(--text1)" : "color: var(--text2)")};
  position: relative;
  background-color: transparent;
  letter-spacing: 0.8px;
`

const LinkA: FC<LinkA> = ({ children, href, active, ...props }) => {
  const [mousePos, setMousePos] = useState<number>()
  return (
    <Link passHref href={href!}>
      <A
        {...props}
        theme={{ active, mousePos }}
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
