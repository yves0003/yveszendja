import { FC, HTMLAttributes } from "react"
import styled from "styled-components"

const Anchor = styled.a`
  font-weight: 500;
  color: var(--secondary-bg);
`

export const A: FC<HTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => {
  return <Anchor {...props}>{children}</Anchor>
}
