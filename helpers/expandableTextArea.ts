import { ChangeEvent } from "react"

interface HTMLTextAreaElementExtends extends HTMLTextAreaElement {
  _baseScrollHeight?: number
}

function getScrollHeightVal(elm: EventTarget & HTMLTextAreaElementExtends) {
  var savedValue = elm.value
  elm.value = ""
  const _baseScrollHeight = elm.scrollHeight
  elm.value = savedValue
  return _baseScrollHeight
}

export function expandableTextArea(e: ChangeEvent<HTMLTextAreaElementExtends>) {
  e.preventDefault()
  const element = e.currentTarget
  const minRows = 1
  if (!element._baseScrollHeight) {
    element._baseScrollHeight = getScrollHeightVal(element)
    let rows: number
    element.rows = minRows
    rows = Math.ceil((element.scrollHeight - element._baseScrollHeight) / element._baseScrollHeight)
    element.rows = minRows + rows
  } else {
    let rows: number
    element.rows = minRows
    rows = Math.ceil((element.scrollHeight - element._baseScrollHeight) / element._baseScrollHeight)
    element.rows = minRows + rows
  }
}

export function resetTextArea() {
  const textarea = document.getElementById("textareaId") as HTMLTextAreaElementExtends
  if (textarea) {
    textarea.rows = 1
  }
}
