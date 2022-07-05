import React, { FC } from "react"
import { Modal } from "../../@types"
import { useModal } from "../../context/modalAction"
import ModalConnect from "./ModalConnect"

const Modals: FC<Modal> = props => {
  const { modalValues } = useModal()
  if (modalValues.selectedModal === "connect") {
    return <ModalConnect {...props} />
  }
  return null
}

export default Modals
