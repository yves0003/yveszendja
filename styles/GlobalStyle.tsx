import { createGlobalStyle } from "styled-components"

//variables
const ratioMargin = "0.5rem"
const ratioPadding = "0.5rem"
const ratioBorderRadius = "2px"
const ratioBorderRadiusPer = "25%"

const GlobalStyle = createGlobalStyle`

scroll-behavior: smooth;
//gap
.gap-1 {gap: calc(${ratioMargin} * 1)}
.gap-2 {gap: calc(${ratioMargin} * 2)}
.gap-3 {gap: calc(${ratioMargin} * 3)}
.gap-4 {gap: calc(${ratioMargin} * 4)}
.gap-5 {gap: calc(${ratioMargin} * 5)}
.gap-6 {gap: calc(${ratioMargin} * 6)}

//margin
.m-1 {margin: calc(${ratioMargin} * 1)}
.m-2 {margin: calc(${ratioMargin} * 2)}
.m-3 {margin: calc(${ratioMargin} * 3)}
.m-4 {margin: calc(${ratioMargin} * 4)}
.m-5 {margin: calc(${ratioMargin} * 5)}
.m-6 {margin: calc(${ratioMargin} * 6)}

//marginTop
.mt-1 {margin-top: calc(${ratioMargin} * 1)}
.mt-2 {margin-top: calc(${ratioMargin} * 2)}
.mt-3 {margin-top: calc(${ratioMargin} * 3)}
.mt-4 {margin-top: calc(${ratioMargin} * 4)}
.mt-5 {margin-top: calc(${ratioMargin} * 5)}
.mt-6 {margin-top: calc(${ratioMargin} * 6)}

//marginBottom
.mb-1 {margin-bottom: calc(${ratioMargin} * 1)}
.mb-2 {margin-bottom: calc(${ratioMargin} * 2)}
.mb-3 {margin-bottom: calc(${ratioMargin} * 3)}
.mb-4 {margin-bottom: calc(${ratioMargin} * 4)}
.mb-5 {margin-bottom: calc(${ratioMargin} * 5)}
.mb-6 {margin-bottom: calc(${ratioMargin} * 6)}

//marginLeft
.ml-1 {margin-left: calc(${ratioMargin} * 1)}
.ml-2 {margin-left: calc(${ratioMargin} * 2)}
.ml-3 {margin-left: calc(${ratioMargin} * 3)}
.ml-4 {margin-left: calc(${ratioMargin} * 4)}
.ml-5 {margin-left: calc(${ratioMargin} * 5)}
.ml-6 {margin-left: calc(${ratioMargin} * 6)}

//marginRight
.mr-1 {margin-right: calc(${ratioMargin} * 1)}
.mr-2 {margin-right: calc(${ratioMargin} * 2)}
.mr-3 {margin-right: calc(${ratioMargin} * 3)}
.mr-4 {margin-right: calc(${ratioMargin} * 4)}
.mr-5 {margin-right: calc(${ratioMargin} * 5)}
.mr-6 {margin-right: calc(${ratioMargin} * 6)}

//padding
.p-1 {padding: calc(${ratioPadding} * 1)}
.p-2 {padding: calc(${ratioPadding} * 2)}
.p-3 {padding: calc(${ratioPadding} * 3)}
.p-4 {padding: calc(${ratioPadding} * 4)}
.p-5 {padding: calc(${ratioPadding} * 5)}
.p-6 {padding: calc(${ratioPadding} * 6)}

//paddingTop
.pt-1 {padding-top: calc(${ratioMargin} * 1)}
.pt-2 {padding-top: calc(${ratioMargin} * 2)}
.pt-3 {padding-top: calc(${ratioMargin} * 3)}
.pt-4 {padding-top: calc(${ratioMargin} * 4)}
.pt-5 {padding-top: calc(${ratioMargin} * 5)}
.pt-6 {padding-top: calc(${ratioMargin} * 6)}

//paddingBottom
.pb-1 {padding-bottom: calc(${ratioMargin} * 1)}
.pb-2 {padding-bottom: calc(${ratioMargin} * 2)}
.pb-3 {padding-bottom: calc(${ratioMargin} * 3)}
.pb-4 {padding-bottom: calc(${ratioMargin} * 4)}
.pb-5 {padding-bottom: calc(${ratioMargin} * 5)}
.pb-6 {padding-bottom: calc(${ratioMargin} * 6)}

//paddingLeft
.pl-1 {padding-left: calc(${ratioMargin} * 1)}
.pl-2 {padding-left: calc(${ratioMargin} * 2)}
.pl-3 {padding-left: calc(${ratioMargin} * 3)}
.pl-4 {padding-left: calc(${ratioMargin} * 4)}
.pl-5 {padding-left: calc(${ratioMargin} * 5)}
.pl-6 {padding-left: calc(${ratioMargin} * 6)}

//paddingRight
.pr-1 {padding-right: calc(${ratioMargin} * 1)}
.pr-2 {padding-right: calc(${ratioMargin} * 2)}
.pr-3 {padding-right: calc(${ratioMargin} * 3)}
.pr-4 {padding-right: calc(${ratioMargin} * 4)}
.pr-5 {padding-right: calc(${ratioMargin} * 5)}
.pr-6 {padding-right: calc(${ratioMargin} * 6)}

//border-radius px
.br-1 {border-radius: calc(${ratioBorderRadius}*1)}
.br-2 {border-radius: calc(${ratioBorderRadius}*2)}
.br-3 {border-radius: calc(${ratioBorderRadius}*3)}
.br-4 {border-radius: calc(${ratioBorderRadius}*4)}
.br-5 {border-radius: calc(${ratioBorderRadius}*5)}

//border-radius px
.br-per-1 {border-radius: calc(${ratioBorderRadiusPer}*1)}
.br-per-2 {border-radius: calc(${ratioBorderRadiusPer}*2)}
.br-per-3 {border-radius: calc(${ratioBorderRadiusPer}*3)}
.br-per-4 {border-radius: calc(${ratioBorderRadiusPer}*4)}

//background
.back {
  z-index: -100;
  position: absolute;
  top: 0;
}
.spacer {
  
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.layer {
  background-image: url("/background/waves.svg");
}

//line
.line-shadow {
  box-shadow: inset 0px 0px 1px var(--text2);
}

.button {
  outline: 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  border: solid 1px var(--surface4);
  font-size:1.5rem;
  background-color: var(--surface1);
  transition: background-color var(--speed) cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.navLink {
  background-color: transparent;
  transition: background-color var(--speed) cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
}

.navLink:hover {
  background-color: var(--surface3);
}

.button:hover {
  background-color: var(--surface3);
}

//Container
.container {
  width: 100%;
  //min-height: 80vh;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-right: auto;
  margin-left: auto;
}

.container-nav {
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  //font-weight: 500;
}

.container-navMob {
  width: 100%;
  height: 100%;
  display: flex;
}


.space-nav {
  margin-left: auto;
}

.btn-mob-nav {
  display: block;
  cursor: pointer;
}

/* .menu_burger{
  width:1.4rem;
  height:2.5px;
  background: var(--text1);
  transition: all var(--speed) ease-in-out;
}

.menu_burger::before,.menu_burger::after {
  content: "";
  position: absolute;
  width:1.4rem;
  height:2.5px;
  background: var(--text1);
  transition: all var(--speed) ease-in-out;
  border-radius: 2px
}

.menu_burger::before {
  transform:translateY(-6px)
}
.menu_burger::after {
  transform:translateY(6px)
} */

.btn-search-nav {
  display: none;
}

.popup {
  width: 18rem;
  margin-top: 10rem;
}
.action {
  width: 90%;
  margin-top: 3rem;
}
.menu-desktop {
  display: none;
}

@media (min-width: 24rem) {
  .action {
    width: 80%;
  }
  .container,
  .container-nav, .container-navMob {
    max-width: 24em;
  }
  
}

@media (min-width: 36rem) {
  .action {
    width: 70%;
  }
  .card1, .card2 {
    display: block;
  }
  .container,
  .container-nav, .container-navMob {
    max-width: 36rem;
  }
  .btn-search-nav {
    display: flex;
    height: 2.2rem;
    align-items: center;
  }
}

@media (min-width: 48rem) {
  .action {
    width: 65%;
  }
  .menu-desktop {
    display: block;
  }
}

@media (min-width: 70rem) {
  .action {
    width: 60%;
  }
  
  .container,
  .container-nav, .container-navMob {
    max-width: 60rem;
  }
}

//center div

.card1, .card2, .card3, .card4, .card5 {
    display: none;
}

@media (min-width: 24rem) {
  .myCollection {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card1, .card2 {
    display: block;
  }
}

@media (min-width: 58rem) {
  .myCollection {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .card1, .card2, .card3 {
    display: block;
  }
}

@media (min-width: 84rem) {
  .myCollection {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .card1, .card2, .card3, .card4 {
    display: block;
  }
}

@media (min-width: 110rem) {
  .myCollection {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .card1, .card2, .card3, .card4, .card5 {
    display: block;
  }
}
`

export default GlobalStyle
