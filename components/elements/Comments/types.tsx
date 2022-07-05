export type TypeComments = {
  articleId: string
  ecart: string
  //allComments: TypeComment[]
}

export type TypeComment = {
  _id: string
  body: string
  username: string
  userId: string
  parentId: null | string
  createdAt: string
  updatedAt: string
  linkImageUser: string
}
