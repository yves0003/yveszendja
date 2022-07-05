import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import { getReplies } from "./helpers"
import { messagesExamples } from "./messagesExamples"
import { TypeComments, TypeComment } from "./types"

const CommentsContainer = styled.div``
const ListMessages = styled.div``

const Comments: FC<TypeComments> = ({ allComments }) => {
  const [articleComments, setArticleComments] = useState<TypeComment[]>([])
  const rootComments = articleComments.filter(comments => comments.parentId === null)
  useEffect(() => {
    messagesExamples().then(data => {
      setArticleComments(data)
    })
  }, [])
  return (
    <CommentsContainer>
      <h3>Commentaires</h3>
      <CommentForm />
      <ListMessages>
        {rootComments.map(rootComment => (
          //si plusiers reponse, penser à lazyloading
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id, articleComments)}
            AllComments={articleComments}
          />
        ))}
      </ListMessages>
    </CommentsContainer>
  )
}

export default Comments
