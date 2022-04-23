import { NextRouter } from "next/router"

export const isSelectedRoute = (link: string, router: NextRouter, key = "id") => {
  let selected = false
  let keyVal = router.query[key]
  if (link !== "" && keyVal && keyVal[0] === link) {
    selected = true
    return selected
  }
  if (link !== "" && router.pathname === link) {
    selected = true
    return selected
  }
  if (link !== "" && link !== "/" && router.asPath.includes(link)) {
    selected = true
    return selected
  }
  if (link === "" && key && !router.asPath.includes(key)) {
    selected = true
    return selected
  }
  return selected
}
