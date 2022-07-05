import { FC } from "react"
import styled from "styled-components"
import { ModalBoxInt } from "../../@types"
import { useAuth } from "../../context/auth"
import ModalBox from "../elements/ModalBox"
const ModalContainer = styled.div``

const ButtonContainer = styled.div``
const CardContainer = styled.div``
const InfoContainer = styled.div``
const Button = styled.button`
  position: relative;
  width: 100%;
  height: 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  border: none;
`

const ModalConnect: FC<ModalBoxInt> = props => {
  const { user } = useAuth()
  console.log(user, "user")
  return (
    <ModalBox {...props}>
      <ModalContainer>
        <CardContainer></CardContainer>
        <ButtonContainer className="pl-2 pr-2 pt-2">
          <Button className="">Se connecter avec Google</Button>
        </ButtonContainer>
        <ButtonContainer className="p-2">
          <Button className="">Se connecter avec Twitter</Button>
        </ButtonContainer>
        <InfoContainer className="p-1 mb-2">
          <span className="small text2">
            Supprimez votre compte à tout moment. Je recupère uniquement les informations publiques
            de twitter ou google.
          </span>
        </InfoContainer>
      </ModalContainer>
    </ModalBox>
  )
}

export default ModalConnect
