import { FC, HTMLAttributes } from "react"
import styled from "styled-components"

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`

export const P: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, ...props }) => {
  return <Paragraph {...props}>{children}</Paragraph>
}
