import { FC } from "react"
import styled from "styled-components"
import { useClickAway } from "../../hooks/useClickAway"
import Dropdown from "./Dropdown"

const ButtonCompte = styled.button`
  &:hover {
    background-color: hsla(var(--brand-hsl) / 0.2);
  }
  position: relative;
  background-color: transparent;
  letter-spacing: 0.8px;
  border: solid 1px var(--surface2);
  height: 100%;
  cursor: pointer;
  ${props => (props.theme.active ? "font-weight: 700" : "font-weight: 400")};
  ${props => (props.theme.active ? "color: var(--text1)" : "color: var(--text2)")};
`

const ButtonMonCompte: FC<{ active: boolean }> = ({ children, active }) => {
  let { open, setOpen, refControler, refObject } = useClickAway(false)
  return (
    <div style={{ position: "relative" }} ref={refControler}>
      <ButtonCompte className="br-2" onClick={() => setOpen(true)} theme={{ active }}>
        {children}
      </ButtonCompte>
      {!open ? null : <Dropdown refObject={refObject} setOpen={setOpen} open={open} />}
    </div>
  )
}

export default ButtonMonCompte
