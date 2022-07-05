import { ReactNode } from "react"
import styled from "styled-components"
import Portal from "../HOC/Portal"

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  overflow-y: auto;
  background-color: ${props =>
    props.theme.isBlur
      ? `hsla(var(--brand-h), var(--brand-s), var(--brand-l), ${props.theme.opacityBackground})`
      : "hsla(var(--text1-hsl))"};
  backdrop-filter: ${props => (props.theme.isBlur ? `blur(${props.theme.valBlur})` : "")};
`

const ModalContainer = ({
  isOpen,
  isBlur,
  valBlur,
  children,
  opacityBackground,
}: {
  isOpen: boolean
  isBlur?: boolean
  valBlur?: string
  children: ReactNode
  opacityBackground?: number
}) => {
  if (!isOpen) return null
  return (
    <Portal selector="#portal-root">
      <Background theme={{ isBlur, valBlur, opacityBackground }}>{children}</Background>
    </Portal>
  )
}

ModalContainer.defaultProps = {
  isBlur: false,
  valBlur: "4px",
  opacityBackground: 0.5,
}

export default ModalContainer
