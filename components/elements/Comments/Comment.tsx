import { FC } from "react"
import styled from "styled-components"
import { getReplies } from "./helpers"
import { TypeComment } from "./types"
const CommentActions = styled.div``
const CommentContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    background-color: var(--surface2);
    position: absolute;
    min-height: 100%;
    width: 1px;
    left: -${props => props.theme.ecart};
  }
`
const CommentGroup = styled.div`
  //background-color: var(--surface2);
  border: solid 1px var(--surface2);
`
const CommentInfos = styled.div`
  display: inline-flex;
`
const CommentUserImage = styled.div``
const CommentUserName = styled.div``
const CommentUserComment = styled.p``
const CommentUserDateUpdate = styled.div``
const CommentRepliesContainer = styled.div``

const Comment: FC<{
  comment: TypeComment
  replies: TypeComment[]
  AllComments: TypeComment[]
  ecart: string
}> = ({ comment, replies, AllComments, ecart }) => {
  return (
    <CommentContainer className="" theme={{ ecart }}>
      <CommentGroup className="p-1 br-2 mb-2">
        <CommentInfos>
          <CommentUserImage>{comment.linkImageUser}</CommentUserImage>
          <CommentUserName>
            <h6>{comment.username}</h6>
          </CommentUserName>
          <CommentUserDateUpdate>
            <h6>{comment.updatedAt}</h6>
          </CommentUserDateUpdate>
        </CommentInfos>
        <CommentUserComment>{comment.body}</CommentUserComment>
        <CommentActions></CommentActions>
      </CommentGroup>

      {replies.length > 0 && (
        <CommentRepliesContainer className="ml-2">
          {replies.map(reply => (
            <Comment
              key={reply._id}
              comment={reply}
              replies={getReplies(reply._id, AllComments)}
              AllComments={AllComments}
              ecart={ecart}
            />
          ))}
        </CommentRepliesContainer>
      )}
    </CommentContainer>
  )
}

export default Comment
