import { TypeComment } from "./types"

export const getReplies = (commentId: string, comments: TypeComment[]) => {
  return (
    comments
      .filter(comment => comment.parentId === commentId)
      .sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()) || []
  )
}
