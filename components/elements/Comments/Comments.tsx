import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import useSWR from "swr"
import useOnScreen from "../../../hooks/useOnScreen"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import { getReplies } from "./helpers"
import { TypeComments, TypeComment } from "./types"

const CommentsContainer = styled.div`
  position: relative;
`
const ListMessages = styled.div`
  padding-left: ${props => props.theme.ecart};
`

const Comments: FC<TypeComments> = ({ articleId, ecart }) => {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data = [], error } = useSWR(`http://localhost:3001/comments/${articleId}`, fetcher)
  const [articleComments, setArticleComments] = useState<TypeComment[]>([])
  const [elementRef, isIntersecting] = useOnScreen()
  const rootComments = articleComments.filter(comments => comments.parentId === null)
  const [isChildRef, setIsChildRef] = useState(false)
  useEffect(() => {
    if (articleComments.length === 0 && data.allComments) {
      setArticleComments(data.allComments)
    }
    if (!isChildRef) {
      setIsChildRef(isIntersecting)
    }
  }, [isIntersecting, data])
  return (
    <CommentsContainer>
      <h3>Commentaires</h3>
      <ListMessages ref={elementRef} theme={{ ecart }}>
        {isChildRef && !data.allComments && <div>chargement...</div>}
        {isChildRef && error && <div>Erreur chargement des messages</div>}
        {isChildRef &&
          data.allComments &&
          rootComments.map(rootComment => (
            //si plusiers reponse, penser à lazyloading
            <Comment
              key={rootComment._id}
              comment={rootComment}
              replies={getReplies(rootComment._id, articleComments)}
              AllComments={articleComments}
              ecart={ecart}
            />
          ))}
      </ListMessages>
      <CommentForm />
    </CommentsContainer>
  )
}

export default Comments
