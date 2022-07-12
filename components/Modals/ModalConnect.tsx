import { FC } from "react"
import styled from "styled-components"
import { Modal, ModalBoxInt } from "../../@types"
import { useAuth } from "../../context/auth"
import ModalBox from "../elements/ModalBox"
import GoogleIcon from "../icons/GoogleIcon"
import TwitterIcon from "../icons/TwitterIcon"
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

const ModalConnect: FC<Modal> = ({ setOpen, ...props }) => {
  const { user, loginGoogle, loginTwitter } = useAuth()
  console.log(user, "user")
  return (
    <ModalBox {...props}>
      <ModalContainer>
        <CardContainer></CardContainer>
        <ButtonContainer className="pl-2 pr-2 pt-2">
          <Button
            style={{ backgroundColor: "var(--surface4)" }}
            onClick={() => {
              loginGoogle()
              setOpen(false)
            }}
          >
            <GoogleIcon className="mr-1" />
            <span>Se connecter avec Google</span>{" "}
          </Button>
        </ButtonContainer>
        <ButtonContainer className="p-2">
          <Button
            style={{ backgroundColor: "#03A9F4" }}
            onClick={() => {
              loginTwitter()
              setOpen(false)
            }}
          >
            <TwitterIcon className="mr-1" />
            <span style={{ color: "white" }}>Se connecter avec Twitter</span>{" "}
          </Button>
        </ButtonContainer>
        <InfoContainer className="pl-2 pr-2  mb-2">
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
