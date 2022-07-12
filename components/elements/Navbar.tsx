import styled from "styled-components"
import { useDarkMode } from "../../hooks/useDarkMode"
import ButtonLight from "./ButtonLight"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { useRouter } from "next/router"
import { isSelectedRoute } from "../../helpers/isSelectedRoute"
import LinkA, { DivNav } from "./LinkA"
import { animated, config, useTransition } from "react-spring"
import { useClickAway } from "../../hooks/useClickAway"
import Link from "next/link"
import ButtonMobMenu from "./ButtonMobMenu"
import { useModal } from "../../context/modalAction"
import { useAuth } from "../../context/auth"
import ButtonMonCompte from "./ButtonCompte"

const Header = styled.header`
  height: 4rem;
  position: sticky;
  top: 0;
  //backdrop-filter: blur(10px);
  z-index: 1;
`
const DivMenuDesktop = styled.div`
  flex-grow: 1;
`
const ContainerNav = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  backdrop-filter: blur(20px);
`

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  height: 100%;
  a,
  div {
    cursor: pointer;
    display: grid;
    align-items: center;
    ${props => (props.theme.active ? "color: var(--primary-bg)" : "")};
    ${props => (props.theme.active ? "font-weight: 500" : "")};
    border-radius: 0.5rem;
    :hover {
      background-color: hsla(var(--brand-hsl) / 0.2);
    }
  }
`

const MenuMobWrapper = styled(animated.div)`
  z-index: -1;
  width: 100%;
  position: fixed;
  backdrop-filter: blur(20px);
  background-color: hsla(var(--surface2-hsl) / 0.8);
  @media (min-width: 48rem) {
    & {
      display: none;
    }
  }
`
const MenuMob = styled.div`
  left: 0;
  width: 100%;
  margin: auto;

  ul {
    width: 100%;
  }
`
const MenuMobNav = styled.ul`
  font-weight: 400;
`

const LinkPage = styled.li`
  font-weight: ${props => (props.theme.active ? "600" : null)};
  ${props => (props.theme.compte ? "border: solid 1px var(--surface3);" : null)};
`

const DivButtonLight = styled.div`
  @media (max-width: 48rem) {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }
`

const DivButtonMobMenu = styled.div`
  display: none;
  @media (max-width: 48rem) {
    display: block;
    //flex-grow: 1;
  }
`

const Span = styled.span`
  white-space: nowrap;
`

const Navbar: FC<{ setOpenModal: Dispatch<SetStateAction<boolean>> }> = ({ setOpenModal }) => {
  const { user } = useAuth()
  const router = useRouter()
  let [statusDark, setStatusDark] = useDarkMode("", "statusDark")
  let { refControler, open, setOpen, refObject } = useClickAway(false)
  const { setModalValues } = useModal()
  const transitions = useTransition(open, {
    from: { top: "-18rem" },
    enter: { top: "4rem" },
    leave: { top: "-18rem" },
    config: config.stiff,
    delay: 0,
  })
  return (
    <>
      <Header>
        <ContainerNav className="pr-2 pl-2 container ">
          <DivMenuDesktop className="menu-desktop">
            <Nav aria-label="navigation principale">
              <LinkA href="/" rel="noopener noreferrer" active={isSelectedRoute("/", router, "id")}>
                <span className="m-1">Accueil</span>
              </LinkA>
              <LinkA
                href="/articles"
                rel="noopener noreferrer"
                active={isSelectedRoute("/articles", router)}
              >
                <span className="m-1">Articles</span>
              </LinkA>
              <LinkA
                href="/codes"
                rel="noopener noreferrer"
                active={isSelectedRoute("/codes", router)}
              >
                <span className="m-1">Codes</span>
              </LinkA>
              <LinkA
                href="/inspirations"
                rel="noopener noreferrer"
                active={isSelectedRoute("/inspirations", router)}
              >
                <span className="m-1">Inspirations</span>
              </LinkA>
              <LinkA
                href="/voyages"
                rel="noopener noreferrer"
                active={isSelectedRoute("/voyages", router)}
              >
                <span className="m-1">Découvertes</span>
              </LinkA>
              {!user && (
                <DivNav
                  active={isSelectedRoute("/compte", router)}
                  id="navConnect"
                  onClick={() => {
                    setOpenModal(true)
                    setModalValues(prev => {
                      return { ...prev, isPopUp: true, selectedModal: "connect" }
                    })
                  }}
                  compte
                >
                  <Span className="m-1 br-2">Se connecter</Span>
                </DivNav>
              )}
              {user && (
                <ButtonMonCompte active={isSelectedRoute("/account", router)}>
                  <Span style={{}}>Mon compte</Span>
                </ButtonMonCompte>
              )}
            </Nav>
          </DivMenuDesktop>
          <DivButtonLight>
            <ButtonLight
              className="m-1 br-4 button"
              statusDark={statusDark}
              setStatusDark={setStatusDark}
            />
          </DivButtonLight>

          <DivButtonMobMenu ref={refControler}>
            <ButtonMobMenu nbLignes={2} openMenu={open} setOpenMenu={setOpen} />
          </DivButtonMobMenu>
        </ContainerNav>
        {transitions(
          (styles, item) =>
            item && (
              <MenuMobWrapper className="box-shadow-1" style={styles} ref={refObject}>
                <MenuMob className="container-navMob">
                  <MenuMobNav aria-haspopup="true">
                    <Link passHref href="/">
                      <LinkPage
                        className="pt-2 pb-2 navLink br-4 mt-2"
                        onClick={() => setOpen(false)}
                        theme={{ active: isSelectedRoute("/", router, "id") }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          <span>Accueil</span>
                        </a>
                      </LinkPage>
                    </Link>

                    <Link passHref href="/articles">
                      <LinkPage
                        className="pt-2 pb-2 navLink br-4"
                        onClick={() => setOpen(false)}
                        theme={{ active: isSelectedRoute("/articles", router) }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          <span>Articles</span>
                        </a>
                      </LinkPage>
                    </Link>

                    <Link passHref href="/codes">
                      <LinkPage
                        className="pt-2 pb-2 navLink br-4"
                        onClick={() => setOpen(false)}
                        theme={{ active: isSelectedRoute("/codes", router) }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          <span>Codes</span>
                        </a>
                      </LinkPage>
                    </Link>

                    <Link passHref href="/inspirations">
                      <LinkPage
                        className="pt-2 pb-2 navLink br-4"
                        onClick={() => setOpen(false)}
                        theme={{ active: isSelectedRoute("/inspirations", router) }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          <span>Inspirations</span>
                        </a>
                      </LinkPage>
                    </Link>
                    <Link passHref href="/voyages">
                      <LinkPage
                        className="pt-2 pb-2 navLink br-4"
                        onClick={() => setOpen(false)}
                        theme={{ active: isSelectedRoute("/voyages", router) }}
                      >
                        <a className="m-3" rel="noopener noreferrer">
                          <span>Découvertes</span>
                        </a>
                      </LinkPage>
                    </Link>
                    {!user && (
                      <Link passHref href="/compte">
                        <LinkPage
                          className="pt-2 pb-2 navLink br-4 ml-2 mr-2 mb-2"
                          onClick={() => setOpen(false)}
                          theme={{ active: isSelectedRoute("/compte", router), compte: true }}
                        >
                          <a className="m-3" rel="noopener noreferrer">
                            <span>Se connecter</span>
                          </a>
                        </LinkPage>
                      </Link>
                    )}
                    {user && (
                      <ButtonMonCompte active={isSelectedRoute("/account", router)}>
                        <Span style={{}}>Mon compte</Span>
                      </ButtonMonCompte>
                    )}
                  </MenuMobNav>
                </MenuMob>
              </MenuMobWrapper>
            )
        )}
      </Header>
    </>
  )
}

export default Navbar
