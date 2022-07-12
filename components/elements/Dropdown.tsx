import { animated, useTransition, config } from "react-spring"
import React, { Dispatch, ReactChild, RefObject, SetStateAction } from "react"
import styled from "styled-components"
import { useAuth } from "../../context/auth"
import { useRouter } from "next/router"

const Div = styled(animated.div)`
  position: absolute;
  top: 2.8rem;
  width: 8rem;
  transform: translateX(0%);
  background-color: var(--surface2);
  padding: 0rem;
  overflow: hidden;
  a {
    border-radius: 0px;
  }
`
const MenuItemDrop = styled.a`
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: background-color var(--speed) linear;
  letter-spacing: 0.8px;
  font-size: inherit;
  padding: 1rem;
  border-bottom: 1px solid var(--surface3);
  :hover {
    background-color: var(--surface3);
    opacity: 0.8;
  }
`

const Dropdown = ({
  refObject,
  setOpen,
  open,
}: {
  refObject: RefObject<HTMLDivElement>
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}) => {
  const router = useRouter()
  const { logout } = useAuth()
  const transitions = useTransition(open, {
    from: { opacity: "0" },
    enter: { opacity: "1" },
    leave: { opacity: "0" },
    config: config.stiff,
  })
  const DropDownItem = (props: {
    children: ReactChild | string
    leftIcon?: Element
    rightIcon?: Element
    onClick?: () => void
    style?: any
  }) => {
    return (
      <MenuItemDrop
        rel="noopener noreferrer"
        style={props.style}
        onClick={() => {
          setOpen(false)
          if (props.onClick) {
            props.onClick()
          }
        }}
      >
        {props.leftIcon && <span className="icon-button">{props.leftIcon}</span>}
        {props.children}
        {props.rightIcon && <span className="icon-button">{props.rightIcon}</span>}
      </MenuItemDrop>
    )
  }
  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <Div style={styles} className="br-4" ref={refObject}>
              <DropDownItem
                onClick={() => {
                  router.push(`/account`, undefined, {
                    shallow: true,
                  })
                }}
              >
                Mon Espace
              </DropDownItem>
              <DropDownItem style={{ backgroundColor: "var(--failure)" }} onClick={logout}>
                Déconnexion
              </DropDownItem>
            </Div>
          )
      )}
    </>
  )
}

export default Dropdown
