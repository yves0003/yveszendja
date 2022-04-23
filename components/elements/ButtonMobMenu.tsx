import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

const MenuMobWrapper = styled.div`
  cursor: pointer;

  @media (min-width: 48rem) {
    .btn-mob-nav {
      display: none;
    }
  }
  .menu_burger {
    width: 1.4rem;
    height: 2.5px;
    background: ${props => (props.theme.nbLignes === 3 ? "var(--text1)" : "transparent")};
    transition: all var(--speed) ease-in-out;
  }

  .menu_burger::before,
  .menu_burger::after {
    content: "";
    position: absolute;
    width: 1.4rem;
    height: 2.5px;
    background: var(--text1);
    transition: all var(--speed) ease-in-out;
    border-radius: 2px;
  }

  .menu_burger::before {
    transform: ${props => (props.theme.nbLignes === 3 ? "translateY(-6px)" : "translateY(-4px)")};
  }
  .menu_burger::after {
    transform: ${props => (props.theme.nbLignes === 3 ? "translateY(6px)" : "translateY(4px)")};
  }

  .btn-mob-nav.open .menu_burger {
    background: transparent;
  }

  .btn-mob-nav.open .menu_burger::before {
    transform: rotate(45deg);
  }
  .btn-mob-nav.open .menu_burger::after {
    transform: rotate(-45deg);
  }
`

const ButtonMobMenu = ({
  nbLignes,
  openMenu,
  setOpenMenu,
}: {
  nbLignes?: 2 | 3
  selectorMenuMob?: string
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <>
      <MenuMobWrapper theme={{ nbLignes }}>
        <div
          className={`btn-mob-nav m-1 ${openMenu ? "open" : ""}`}
          onClick={e => {
            setOpenMenu(prev => !prev)
          }}
        >
          <div className="br-1 menu_burger"></div>
        </div>
      </MenuMobWrapper>
    </>
  )
}

ButtonMobMenu.defaultProps = {
  nbLignes: 3,
}

export default ButtonMobMenu
