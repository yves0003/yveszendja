import { FC, ForwardedRef, forwardRef, HTMLAttributes, RefAttributes } from "react"
import styled from "styled-components"
import { ModalBoxInt } from "../../@types"
import { useModal } from "../../context/modalAction"
import CloseIcon from "../icons/Close"

const ModalBoxContainer = styled.div`
  background-color: var(--surface1);
  margin: auto;
  border: 1px solid var(--surface3);
  border-radius: 1rem;
  //min-height: 85vh;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
`
const CloseDiv = styled.div`
  display: inline-flex;
  justify-content: space-between;
  border-bottom: solid 1px var(--surface3);
`

const ModalBox: FC<ModalBoxInt> = ({ children, refObject, refControler, ...props }) => {
  const { modalValues } = useModal()
  return (
    <ModalBoxContainer ref={refObject} className={modalValues.isPopUp ? "popup" : "action"}>
      <CloseDiv ref={refControler} {...props} className="pr-2 pl-2 pt-1 pb-1">
        <span>Se connecter</span>
        <CloseIcon />
      </CloseDiv>
      {children}
    </ModalBoxContainer>
  )
}

export default ModalBox
