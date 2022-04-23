import { NextRouter } from "next/router"

export const routerDir = (
  router: NextRouter,
  link: string,
  shallow = true,
  locale?: string
) => {
  if (locale) {
    router.push(link, undefined, {
      shallow: shallow,
      locale,
    })
  } else {
    router.push(link, undefined, {
      shallow: shallow,
    })
  }
}
