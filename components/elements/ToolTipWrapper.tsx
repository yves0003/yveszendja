import { FC, InputHTMLAttributes, ReactNode } from "react"
import styled, { keyframes } from "styled-components"

const displayTooltip = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

interface TootTips extends InputHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  tooltiptext?: string
  posRelativBottomPercent?: string
  posRelativLeftPixel?: string
  positionArrowPercent?: string
  widthTooltip?: string | null
  classNameTooltip?: string
}

const Div = styled.div`
  cursor: pointer;
  &:hover {
    .${props => props.theme.classNameTooltip} {
      visibility: visible;
      //opacity: 1;
      animation-name: ${displayTooltip};
      animation-duration: 1.2s;
      animation-iteration-count: 1;
    }
  }
  position: relative;
  user-select: none;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  .${props => props.theme.classNameTooltip} {
    width: ${props => props.theme.widthTooltip};
    font-size: 11px;
    visibility: hidden;
    background-color: var(--text2);
    color: var(--surface2);
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: ${props => props.theme.posRelativBottomPercent};
    left: 70%;
    margin-left: ${props => props.theme.posRelativLeftPixel};
    opacity: 0;
    transition: opacity 0.3s;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: ${props => props.theme.positionArrowPercent};
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--text2) transparent transparent transparent;
    }
  }
`

const ToolTipWrapper: FC<TootTips> = ({
  children,
  tooltiptext,
  posRelativBottomPercent,
  posRelativLeftPixel,
  positionArrowPercent,
  widthTooltip,
  classNameTooltip,
  ...props
}) => {
  return (
    <Div
      {...props}
      theme={{
        posRelativLeftPixel,
        positionArrowPercent,
        widthTooltip,
        classNameTooltip,
        posRelativBottomPercent,
      }}
    >
      {children}
      <span className={classNameTooltip}>{tooltiptext}</span>
    </Div>
  )
}

//<span className="tooltiptext">{tooltiptext}</span>

ToolTipWrapper.defaultProps = {
  tooltiptext: "Modifier",
  posRelativBottomPercent: "125%",
  posRelativLeftPixel: "-43px",
  positionArrowPercent: "60%",
  widthTooltip: null,
  classNameTooltip: "tooltiptext",
}

export default ToolTipWrapper
