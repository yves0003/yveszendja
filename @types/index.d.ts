declare module "@agney/react-inspector"
import { Dispatch, ForwardedRef, HTMLAttributes, SetStateAction } from "react"

export interface articlesMeta {
  title: string
  photoUrl: string
  seoTitle: string
  extrait: string
  isPublished: boolean
  datePublication: string
  tags: string[]
  langue: string
}

export type metaArticles = {
  content: string
  meta: articlesMeta
}

export type directory = "codes" | "articles" | "inspirations" | "voyages"

export interface MDXDoc {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: articlesMeta
}

export type ModalVal = {
  selectedModal: "" | "connect" | "share"
  actifClickAway: boolean
  isPopUp: boolean
  linkToShare: string
}

export interface Modal extends ModalBoxInt {
  setOpen: Dispatch<SetStateAction<boolean>>
}

export interface ModalBoxInt extends HTMLAttributes<HTMLDivElement> {
  refObject?: ForwardedRef<HTMLDivElement>
  refControler?: ForwardedRef<HTMLDivElement>
}
