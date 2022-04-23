import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { useViewport } from "../../context/viewportMob"
import CloseTabMat from "./CloseTabMat"

const Accordion = styled.div`
  --rad: 0.2rem;
  width: 100%;
  @media (min-width: 36rem) {
    position: sticky;
    top: 5rem;
  }

  //margin: 1rem auto;
  .accordionHeading {
    cursor: pointer;
    background: hsla(var(--secondary-fg-hsl) / 0.3);
    padding: 0.5rem;
    border-radius: var(--rad);
    transition: border-radius 600ms ease-in-out;
    .containerTab {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }
  }
  .accordionContent {
    background: hsla(var(--surface3-hsl) / 0.3);
    //max-height: 0;
    //opacity: 0;
    opacity: 1;
    display: flex;
    overflow: hidden;
    //transition: max-height 600ms linear, opacity 600ms ease-in-out;
    border-radius: 0 0 var(--rad) var(--rad);
    * {
      transition: opacity 300ms, font-size 100ms, margin 400ms, padding 400ms;
    }
  }
  &.hide {
    .accordionContent {
      * {
        font-size: 0;
        margin: 0;
        opacity: 0;
        padding: 0;
        /* fade out, then shrink */
      }
    }
  }
`

const AccordionElement: FC = ({ children }) => {
  const { width, breakpoint } = useViewport()
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (width && width < breakpoint) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [width])

  return (
    <Accordion className={`br-2 ${active ? "" : "hide"}`}>
      <div className="accordionHeading" onClick={() => setActive(!active)}>
        <div className="containerTab">
          <p>Table des matières</p>
          <span>
            <CloseTabMat openTab={active} />
          </span>
        </div>
      </div>
      <div className={`accordionContent pl-2 pr-2`}>
        <div className="containerTab">{children}</div>
      </div>
    </Accordion>
  )
}

export default AccordionElement
