import "../styles/style.scss"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import Navbar from "../components/elements/Navbar"
import Footer from "../components/sections/footer"
import { ViewportlProvider } from "../context/viewportMob"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <ViewportlProvider breakpoint={760}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ViewportlProvider>
    </ThemeProvider>
  )
}

export default MyApp
