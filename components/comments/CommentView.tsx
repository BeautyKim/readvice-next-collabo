import { useState } from "react"
import { useDispatch } from "react-redux"
import { CommentList } from "./CommentList"
import { CommentWrite } from "./CommentWrite"

const CommentView = () => {
  return (
    <div>
        <CommentWrite />
        <CommentList />
    </div>
  )
}

export default CommentView