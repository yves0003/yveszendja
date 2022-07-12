import { FC, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { capitalizeFirstLetter } from "../../../helpers/capitalizeFirstLetter"
import { transformDate } from "../../../helpers/dateFunction"
import { expandableTextArea } from "../../../helpers/expandableTextArea"
import { CommentContainer, ImageStyled, ImageContainer, CommentUserName } from "./Comments.style"
import { CommentUserImage, CommentUserDateUpdate, CommentTextArea } from "./Comments.style"
import { CommentInfos, CommentGroup, CommentActions, Button } from "./Comments.style"
import { CommentRepliesContainer } from "./Comments.style"
import {
  deleteMultiplesCommentsByArticle,
  getAllCommentToDelete,
  getReplies,
  updateCommentByArticle,
} from "./helpers"
import { CommentTypes } from "./types"

const Comment: FC<CommentTypes> = ({
  articleSlug,
  comment,
  replies,
  AllComments,
  ecart,
  parentId,
  setParentId,
  withReplies,
  user,
  idComment,
  textToModif,
  setTextToModif,
  ...props
}) => {
  const queryClient = useQueryClient()
  const mutationDelAllComments = useMutation(deleteMultiplesCommentsByArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(`getComments_${articleSlug}`)
    },
  })

  const mutation = useMutation(updateCommentByArticle(comment._id), {
    onSuccess: () => {
      queryClient.invalidateQueries(`getComments_${articleSlug}`)
    },
  })
  const selected = parentId === comment._id
  const [textToModif2, setTextToModif2] = useState(capitalizeFirstLetter(comment.body))
  const [modif, setModif] = useState(false)

  return (
    <CommentContainer theme={{ ecart }} {...props}>
      <CommentGroup id={comment._id} className="p-1 br-2 mb-2" theme={{ selected, withReplies }}>
        <div
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            if (withReplies && setParentId && setTextToModif) {
              setModif(false)
              setParentId(comment._id)
              setTextToModif(textToModif2)
              document.getElementById("textareaId")?.focus()
            }
          }}
        >
          <CommentInfos className="pb-2">
            <CommentUserImage>
              {comment.linkImageUser && (
                <ImageContainer className="pr-1">
                  <ImageStyled
                    src={comment.linkImageUser || ""}
                    alt="Image utilisateur"
                    width={30}
                    height={30}
                  ></ImageStyled>
                </ImageContainer>
              )}
            </CommentUserImage>
            <CommentUserName className="pr-1">
              <p style={{ fontWeight: 600 }}>{capitalizeFirstLetter(comment.userName)}</p>
              {/* <p style={{ fontWeight: 600 }}>{comment.userName.split(" ")[0]}</p> */}
            </CommentUserName>
            <CommentUserDateUpdate>
              <p className="text2">· {transformDate(comment.updatedAt, true).replace(".", "")}</p>
            </CommentUserDateUpdate>
          </CommentInfos>
          {/* <CommentUserComment>{capitalizeFirstLetter(comment.body)}</CommentUserComment> */}
          {withReplies && setTextToModif && (
            <CommentTextArea
              value={textToModif2}
              onChange={e => {
                e.preventDefault()
                expandableTextArea(e)
                setTextToModif2(e.target.value)
                setTextToModif(e.target.value)
              }}
              rows={1 + (textToModif2.match(/\r|\n/g)?.length || 0)}
              className="br-2"
              id="textareaForModif"
              disabled={!modif}
              theme={{ modif }}
            ></CommentTextArea>
          )}

          {!withReplies && (
            <CommentTextArea
              value={capitalizeFirstLetter(textToModif)}
              rows={1 + (textToModif?.match(/\r|\n/g)?.length || 0)}
              className="br-2"
              id="textareaForModif"
              disabled={!modif}
              theme={{ modif }}
            ></CommentTextArea>
          )}
        </div>

        <CommentActions className="m-1">
          {withReplies && !modif && !selected && (
            <Button
              className="small br-2"
              onClick={() => {
                if (withReplies && setParentId && setTextToModif) {
                  setModif(false)
                  setParentId(comment._id)
                  setTextToModif(textToModif2)
                  document.getElementById("textareaId")?.focus()
                }
              }}
            >
              Répondre
            </Button>
          )}
          {withReplies && user && user.uid === comment.userId && !modif && (
            <>
              <Button
                className="small br-2"
                theme={{ color: "var(--warning)" }}
                onClick={e => {
                  if (setParentId) {
                    setParentId(null)
                    setModif(true)

                    //disable all textarea in list of message
                    if (idComment) {
                      const allTextArea = document
                        .getElementById(idComment)
                        ?.querySelectorAll("textarea")

                      allTextArea?.forEach(textarea => {
                        if (!textarea.disabled) {
                          textarea.disabled = true
                          textarea.style.cursor = "pointer"
                        }
                      })
                      const prevTextArea = e.currentTarget.parentElement?.previousSibling
                        ?.childNodes[1] as HTMLTextAreaElement
                      if (prevTextArea) {
                        const end = prevTextArea.value.length
                        prevTextArea.disabled = false
                        prevTextArea.style.cursor = "text"
                        prevTextArea.setSelectionRange(end, end)
                        prevTextArea.focus()
                      }
                    }
                  }
                }}
              >
                Modifier
              </Button>
              <Button
                className="small br-2"
                theme={{ color: "var(--failure)" }}
                onClick={async () => {
                  let allCommentsToDelete: string[] = []
                  if (AllComments) {
                    allCommentsToDelete = getAllCommentToDelete(comment._id, AllComments)
                    console.log(allCommentsToDelete, "allCommentsToDelete")
                    const status = await mutationDelAllComments.mutateAsync(allCommentsToDelete)
                  }
                }}
              >
                Supprimer
              </Button>
            </>
          )}

          {withReplies && user && user.uid === comment.userId && modif && (
            <>
              <Button
                className="small br-2"
                theme={{ color: "var(--success)" }}
                disabled={textToModif === "" || textToModif === comment.body}
                onClick={async () => {
                  const newComment = await mutation.mutateAsync(textToModif)
                  setModif(false)
                  if (idComment) {
                    const allTextArea = document
                      .getElementById(idComment)
                      ?.querySelectorAll("textarea")

                    allTextArea?.forEach(textarea => {
                      if (!textarea.disabled) {
                        textarea.disabled = true
                        textarea.style.cursor = "pointer"
                      }
                    })
                  }
                }}
              >
                Enregistrer
              </Button>
              <Button
                className="small br-2"
                theme={{ color: "var(--warning)" }}
                onClick={() => {
                  setModif(false)
                  const result = AllComments?.find(x => x._id == comment._id)?.body || ""
                  if (setTextToModif) {
                    setTextToModif(result)
                  }
                  setTextToModif2(result)
                  if (idComment) {
                    const allTextArea = document
                      .getElementById(idComment)
                      ?.querySelectorAll("textarea")

                    allTextArea?.forEach(textarea => {
                      if (!textarea.disabled) {
                        textarea.disabled = true
                        textarea.style.cursor = "pointer"
                      }
                    })
                  }
                }}
              >
                Annuler
              </Button>{" "}
            </>
          )}
        </CommentActions>
      </CommentGroup>

      {withReplies && replies && AllComments && replies.length > 0 && (
        <CommentRepliesContainer className="ml-2">
          {replies.map(reply => (
            <Comment
              articleSlug={articleSlug}
              key={reply._id}
              comment={reply}
              replies={getReplies(reply._id, AllComments)}
              AllComments={AllComments}
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
        </CommentRepliesContainer>
      )}
    </CommentContainer>
  )
}

Comment.defaultProps = {
  ecart: "10px",
}

export default Comment
