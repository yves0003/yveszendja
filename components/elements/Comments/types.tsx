import { User } from "firebase/auth"
import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export type TypeComments = {
  articleSlug: string
  ecart: string
  user?: User | undefined
  //allComments: TypeComment[]
}

export interface CommentTypes extends HTMLAttributes<HTMLDivElement> {
  articleSlug: string
  comment: TypeComment
  replies?: TypeComment[]
  AllComments?: TypeComment[]
  ecart?: string
  parentId: string | null
  setParentId?: Dispatch<SetStateAction<string | null>>
  withReplies?: boolean
  user?: User
  idComment?: string
  setTextToModif?: Dispatch<SetStateAction<string>>
  textToModif: string
}

export type TypeComment = {
  _id: string
  body: string
  userName: string
  userId: string | null
  parentId: null | string
  createdAt: string
  updatedAt: string
  linkImageUser?: string | undefined
}

export type CommentaireApi = {
  _id: any
  createdAt: string
  updatedAt: string
  appId: string
  userName: string
  articleId: string
  userId: string | null
  body: string
  parentId: string | null
  linkImageUser?: string | undefined
}

export type Commentaire = {
  articleId: string
  userName: string
  body: string
  userId: string
  parentId: string | null
  linkImageUser: string | undefined
}
