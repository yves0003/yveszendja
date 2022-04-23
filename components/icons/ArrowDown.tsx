import { FC, HTMLAttributes } from "react"
import styled from "styled-components"

interface ArrowDown extends HTMLAttributes<SVGElement> {
  height?: string
  width?: string
}
const SVG = styled.svg`
  //fill: var(--text2);
`
const ArrowDown: FC<ArrowDown> = ({ height, width, ...props }) => {
  return (
    <>
      <SVG
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </SVG>
    </>
  )
}
ArrowDown.defaultProps = {
  height: "1.5rem",
  width: "1.5rem",
}

export default ArrowDown
