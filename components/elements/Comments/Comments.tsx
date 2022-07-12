import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
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

const Comments: FC<TypeComments> = ({ articleSlug, ecart, user }) => {
  let idComment = "commentsId"
  const router = useRouter()
  const {
    isLoading,
    error,
    data = { allComments: [] },
  } = useQuery<{ allComments: TypeComment[] }>(`getComments_${articleSlug}`, () =>
    fetch(`http://localhost:3001/comments/${articleSlug}`).then(res => res.json())
  )
  const [parentId, setParentId] = useState<string | null>(null)
  const [elementRef, isIntersecting] = useOnScreen()
  const [isChildRef, setIsChildRef] = useState(false)
  const [textToModif, setTextToModif] = useState("")
  useEffect(() => {
    if (!isChildRef) {
      setIsChildRef(isIntersecting)
    }
  }, [isIntersecting, data, router])

  return (
    <CommentsContainer>
      <h2 className="mb-1 mt-2">Commentaires</h2>
      <ListMessages ref={elementRef} theme={{ ecart }} id={idComment}>
        {isChildRef && isLoading && <div>chargement...</div>}
        {isChildRef && error && <div>Erreur chargement des messages</div>}
        {isChildRef &&
          data.allComments &&
          data.allComments
            .filter(comments => comments.parentId === null)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map(rootComment => (
              <Comment
                articleSlug={articleSlug}
                key={rootComment._id}
                comment={rootComment}
                replies={getReplies(rootComment._id, data.allComments)}
                AllComments={data.allComments}
                ecart={ecart}
                parentId={parentId}
                setParentId={setParentId}
                withReplies
                user={user}
                idComment={idComment}
                setTextToModif={setTextToModif}
                textToModif={textToModif}
              />
            ))}
      </ListMessages>
      <CommentForm
        articleSlug={articleSlug}
        parentId={parentId}
        AllComments={data.allComments}
        setParentId={setParentId}
        textToModif={textToModif}
      />
    </CommentsContainer>
  )
}

export default Comments
