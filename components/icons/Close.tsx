import { FC, HTMLAttributes } from "react"
import styled from "styled-components"

interface Close extends HTMLAttributes<SVGElement> {
  height?: string
  width?: string
}

const Svg = styled.svg`
  cursor: pointer;
`

const CloseIcon: FC<Close> = ({ height, width, ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      height={height}
      width={width}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </Svg>
  )
}

CloseIcon.defaultProps = {
  height: "1.5rem",
  width: "1.5rem",
}

export default CloseIcon
