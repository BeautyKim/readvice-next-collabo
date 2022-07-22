import { CommentWrite } from "@/components/comments/CommentWrite"
import { addComment } from "@/modules/slices/commentSlice"
import { Comment } from "@/modules/types"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"

const CommentDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  const [ comments, setComments ] = useState<Comment>({
    comment: ""
  })
  const dispatch = useDispatch()
  const hanleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.currentTarget;
    setComments({...comments, [name]: value})
  }
  const hanleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addComment(comments))
  }
  return (    
    <>
    <h1>상세페이지 들어옴</h1>
    <CommentWrite onChange={hanleChange} onSubmit={hanleSubmit} />
    </>
  )
}

export default CommentDetail