import React, { MouseEvent } from "react"

//https://css-tricks.com/direction-aware-hover-effects/
export const getMouseDirectionY = function (ev: MouseEvent<HTMLAnchorElement>, obj: HTMLElement) {
  const w = obj.offsetWidth,
    h = obj.offsetHeight,
    y = ev.pageY - obj.offsetTop - (h / 2) * (h > w ? w / h : 1)
  return y
}

export const getMouseDirectionX = function (ev: MouseEvent<HTMLAnchorElement>, obj: HTMLElement) {
  const w = obj.offsetWidth,
    h = obj.offsetHeight,
    x = ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? h / w : 1)
  return x
}
