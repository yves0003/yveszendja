import { useEffect, useRef, useState } from "react"

export const useClickAway = (initialVal: boolean) => {
  const refControler = useRef<HTMLDivElement & HTMLButtonElement>(null)
  const refObject = useRef<HTMLDivElement>(null)
  let [open, setOpen] = useState(initialVal)
  let [actifClickAway, setActifClickAway] = useState(true)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refControler.current &&
        !refControler.current.contains(event.target as Node) &&
        refObject.current &&
        !refObject.current.contains(event.target as Node)
      ) {
        if (actifClickAway) setOpen(false)
      }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (open) {
          if (actifClickAway) setOpen(false)
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside, true)
    document.addEventListener("keydown", handleKeyPress, true)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true)
      document.removeEventListener("keydown", handleKeyPress, true)
    }
  }, [open, actifClickAway])
  return { open, setOpen, refControler, refObject, actifClickAway, setActifClickAway }
}
