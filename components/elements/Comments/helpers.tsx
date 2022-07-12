import { CommentaireApi, TypeComment, Commentaire } from "./types"
import axios from "axios"

export const getReplies = (commentId: string, comments: TypeComment[]) => {
  return (
    comments
      .filter(comment => comment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) || []
  )
}

export const getAllCommentToDelete = (commentId: string, allComments: TypeComment[]) => {
  let allCommentsToDelete: string[] = []
  const getChildrenByComment = (commentId: string, allComments: TypeComment[]) => {
    let children = allComments
      .filter(comment => comment.parentId === commentId)
      .map(child => child._id)
    return children
  }
  const getAllChildren = (commentId: string, allComments: TypeComment[]) => {
    allCommentsToDelete.push(commentId)
    let children = getChildrenByComment(commentId, allComments)
    for (let i = 0; i < children.length; i++) {
      const element = children[i]
      getAllChildren(element, allComments)
    }
  }
  getAllChildren(commentId, allComments)
  return allCommentsToDelete
}

export const getCommentsByArticle = async (commentaireId: string) => {
  const comments = await axios(`http://localhost:3001/comments/${commentaireId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
  const data = comments.data as CommentaireApi[]
  return data
}

export const createCommentByArticle = async (commentaire: Commentaire) => {
  const newComment = await axios("http://localhost:3001/comment", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: { valToSave: { appId: "yveszendja", ...commentaire } },
  })
  const comment = newComment.data.comment as CommentaireApi
  return comment
}

export const updateCommentByArticle = (commentaireId: string) => {
  return async (body: string) => {
    const newComment = await axios(`http://localhost:3001/comment/${commentaireId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      data: { valToUpdate: { body } },
    })
    const comment = newComment.data.comment as CommentaireApi
    return comment
  }
}

export const deleteMultiplesCommentsByArticle = async (listIds: string[]) => {
  const statusDelete = await axios(`http://localhost:3001/comments`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    data: { listIds },
  })
  const status = statusDelete.data.status as boolean
  return status
}
