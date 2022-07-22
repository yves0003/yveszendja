import { FC, HTMLAttributes } from "react"
import styled from "styled-components"

const Heading3 = styled.h3`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text1);
`

export const H3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <Heading3 {...props}>{children}</Heading3>
}
