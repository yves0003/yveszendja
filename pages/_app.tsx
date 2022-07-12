import "../styles/style.scss"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import Navbar from "../components/elements/Navbar"
import Footer from "../components/sections/footer"
import { ViewportlProvider } from "../context/viewportMob"
import { AuthContextProvider } from "../context/auth"
import { ModalValProvider } from "../context/modalAction"
import ModalContainer from "../components/elements/ModalContainer"
import { useClickAway } from "../hooks/useClickAway"
import Modals from "../components/Modals/Modals"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const { open, setOpen, refControler, refObject, setActifClickAway } = useClickAway(false)
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <ViewportlProvider breakpoint={760}>
        <AuthContextProvider>
          <ModalValProvider>
            <Navbar setOpenModal={setOpen} />
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
            <Footer />
            <ModalContainer isOpen={open} isBlur opacityBackground={0.2}>
              <Modals
                onClick={() => {
                  setOpen(false)
                }}
                setOpen={setOpen}
                refControler={refControler}
                refObject={refObject}
              />
            </ModalContainer>
          </ModalValProvider>
        </AuthContextProvider>
      </ViewportlProvider>
    </ThemeProvider>
  )
}

export default MyApp
