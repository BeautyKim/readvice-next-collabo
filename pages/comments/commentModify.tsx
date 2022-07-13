import BookCard from "@/components/UI/Card"
import { CommentModify } from "@/components/comments/CommentModify"
import { NextPage } from "next"

const CommentModifyPage: NextPage = () => {
  return (
    <>
    <BookCard />
    <CommentModify />
    </>
  )
}

export default CommentModifyPage