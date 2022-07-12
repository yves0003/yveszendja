import styled from "styled-components"
import Image from "next/image"

export const CommentActions = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  button {
    border: none;
    user-select: none;
    font-family: inherit;
    margin: 0.2rem 0.3rem 0.2rem 0.3rem;
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    letter-spacing: 0.8px;
    cursor: pointer;
  }
`
export const CommentContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    background-color: var(--surface2);
    position: absolute;
    min-height: 100%;
    width: 1px;
    left: -${props => props.theme.ecart};
  }
`
export const CommentGroup = styled.div`
  position: relative;
  ${props => (props.theme.selected ? "background-color: var(--surface3);" : null)}
  border: solid 1px var(--surface2);
  ${props => (!props.theme.withReplies ? null : "cursor: pointer;")}
  &:hover {
    ${props => (!props.theme.withReplies ? null : "background-color: var(--surface2)")};
  }
  transition: background-color var(--speed) ease-in;
`
export const CommentInfos = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`
export const ImageContainer = styled.div`
  display: grid;
  align-items: center;
`

export const ImageStyled = styled(Image)`
  border-radius: 50%;
  background-color: var(--surface2);
`

export const CommentTextArea = styled.textarea`
  cursor: pointer;
  background-color: transparent;
  width: 100%;
  font-family: inherit;
  resize: none;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  border: solid ${props => (props.theme.modif ? "1px" : "0px")} var(--surface3);
  padding: 0.5rem;
  padding-right: 2.3rem;
  outline: solid 0px transparent;
  outline-offset: 2px;
  transition: outline 0.1s ease-in-out, border-size 0.1s ease-in-out;
  &:disabled {
    color: var(--text1);
  }
  &:focus {
    outline: solid 2px var(--brand);
  }
`

export const Button = styled.button`
  background-color: ${props => (props.theme.color ? props.theme.color : "var(--surface3)")};
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;
  }
`

export const CommentUserImage = styled.div``
export const CommentUserName = styled.div``
export const CommentUserDateUpdate = styled.div``
export const CommentRepliesContainer = styled.div``
