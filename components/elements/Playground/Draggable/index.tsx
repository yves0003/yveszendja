import React, { FC, ReactNode, useRef, forwardRef } from "react";
import { styled } from "goober";

import useDrag from "./useDrag";
import { useTheme } from "../utils/ThemeProvider";

const Container = styled("div", forwardRef)`
  display: flex;
  align-items: stretch;
`;

const DividerContainer = styled("div", forwardRef)`
  width: ${(props) => props.theme.divider.containerWidth}px;
  background-color: ${(props) => props.theme.divider.dividerBackground};
`;

const Divider = styled("div", forwardRef)`
  width: ${(props) => props.theme.divider.width}px;
  cursor: col-resize;
  background-color: ${(props) => props.theme.divider.background};
  margin: 0 auto;
  height: 100%;
`;

interface IProps {
  className?: string;
  leftChild: (width: number) => ReactNode;
  rightChild: (width: number) => ReactNode;
}

const Draggable: FC<IProps> = ({ className = "", leftChild, rightChild }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const themeContext = useTheme();

  const { leftWidth, rightWidth } = useDrag({
    containerRef,
    dividerRef,
    dividerWidth: themeContext.divider.width,
  });

  return (
    <Container className={className} ref={containerRef}>
      {leftChild(leftWidth)}
      <DividerContainer>
        <Divider ref={dividerRef} />
      </DividerContainer>
      {rightChild(rightWidth)}
    </Container>
  );
};

export default Draggable;
