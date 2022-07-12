import { Dispatch, FC, SetStateAction, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import styled from "styled-components"
import { useAuth } from "../../../context/auth"
import { expandableTextArea, resetTextArea } from "../../../helpers/expandableTextArea"
import SendIcon from "../../icons/SendIcon"
import Comment from "./Comment"
import { createCommentByArticle } from "./helpers"
import { TypeComment } from "./types"

const CommentFormContainer = styled.form`
  background-color: var(--surface2);
  position: sticky;
  bottom: 0;
  display: grid;
  justify-items: center;
  &:hover {
    textarea {
      border-color: var(--surface4);
    }
  }
`

const TextArea = styled.textarea`
  background-color: var(--surface1);
  width: 100%;
  font-family: inherit;
  resize: none;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  border: solid 1px var(--surface3);
  padding: 0.5rem;
  padding-right: 2.3rem;
  outline: solid 0px transparent;
  outline-offset: 2px;
  transition: outline 0.1s ease-in-out;
  &:focus {
    outline: solid 2px var(--brand);
  }
`

const SendButton = styled.button`
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  border: none;
  background-color: ${props =>
    props.theme.comment
      ? props.theme.comment.trim() !== ""
        ? "var(--brand)"
        : "var(--surface4)"
      : "var(--surface4)"};
  cursor: pointer;
`

const ResponseTo = styled.div`
  position: relative;
  width: 100%;
`

const CommentForm: FC<{
  articleSlug: string
  parentId: string | null
  AllComments: TypeComment[]
  setParentId: Dispatch<SetStateAction<string | null>>
  textToModif: string
}> = ({ articleSlug, parentId, AllComments, setParentId, textToModif }) => {
  const queryClient = useQueryClient()
  const mutation = useMutation(createCommentByArticle, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(`getComments_${articleSlug}`)
    },
  })
  const selectedComment = AllComments.filter(comment => comment._id === parentId)
  const [comment, setComment] = useState("")
  const { user } = useAuth()
  return (
    <CommentFormContainer
      className="p-2"
      onSubmit={async e => {
        e.preventDefault()
        if (!user) {
          openConnectModal()
        } else {
          const newComment = await mutation.mutateAsync({
            articleId: articleSlug,
            body: comment.trim(),
            linkImageUser: user.photoURL || "",
            parentId,
            userId: user.uid,
            userName: user.displayName || "anonyme",
          })
          setComment("")
          resetTextArea()
          setParentId(null)
          //Aller vers le commentaire
          document.getElementById(newComment._id)?.scrollIntoView()
        }
      }}
    >
      {parentId && (
        <ResponseTo>
          <Comment
            articleSlug={articleSlug}
            parentId={parentId}
            comment={selectedComment[0]}
            ecart="2px"
            textToModif={textToModif}
          ></Comment>
          <SendButton className="p-1 ml-2 mb-2 br-2" onClick={() => setParentId(null)}>
            <span>Annuler</span>
          </SendButton>
        </ResponseTo>
      )}
      <TextArea
        id="textareaId"
        placeholder="Commentaire..."
        value={comment}
        className="br-2"
        name=""
        rows={1}
        onChange={e => {
          e.preventDefault()
          expandableTextArea(e)
          setComment(e.target.value)
        }}
        required={user ? true : false}
      ></TextArea>

      <SendButton type="submit" className="m-2 br-2" theme={{ comment }}>
        <SendIcon />
      </SendButton>
    </CommentFormContainer>
  )
}

function openConnectModal() {
  const connectButton = document.getElementById("navConnect")
  console.log(connectButton)
  connectButton?.click()
}

export default CommentForm
