import { FC } from "react"
import styled from "styled-components"
import ArrowDown from "../icons/ArrowDown"

const Div = styled.div`
  display: grid;
  transform: ${props => (props.theme.openTab ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: transform var(--speed) linear;
`

const CloseTabMat: FC<{ openTab: boolean }> = ({ openTab }) => {
  return (
    <Div theme={{ openTab }}>
      <ArrowDown />
    </Div>
  )
}

export default CloseTabMat
