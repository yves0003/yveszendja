import { FC, HTMLAttributes } from "react"
import styled from "styled-components"

const Heading2 = styled.h2`
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: var(--brand);
`

export const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <Heading2 {...props}>{children}</Heading2>
}
