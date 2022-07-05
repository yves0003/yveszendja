import { createContext, Dispatch, FC, SetStateAction, useContext, useMemo, useState } from "react"
import { ModalVal } from "../@types"
import { initialValueModal } from "../data/initialValues"

interface ModalContextInterface {
  modalValues: ModalVal
  setModalValues: Dispatch<SetStateAction<ModalVal>>
}

export const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export const useModal = () => {
  return useContext(ModalContext)
}

export const ModalValProvider: FC = ({ children }) => {
  const [modalValues, setModalValues] = useState<ModalVal>(initialValueModal)
  const providerValue = useMemo(
    () => ({ modalValues, setModalValues }),
    [modalValues, setModalValues]
  )
  return <ModalContext.Provider value={providerValue}>{children}</ModalContext.Provider>
}
