import CommentWrite from "@/components/comments/CommentWrite"
import { addComment } from "@/modules/comments"
import React, { useState } from "react"
import { useDispatch } from "react-redux"

function CommentWritePage() {
  const [ comment, setComment ] = useState({})

  const dispatch = useDispatch()
  const commentHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.currentTarget;
    setComment({...comment, [name]: value})
  }
  const commentHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addComment(comment))
  }
  
  return (
    <></>
  )
}
export default CommentWritePage