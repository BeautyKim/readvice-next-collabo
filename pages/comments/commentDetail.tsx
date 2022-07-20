import { CommentList, CommentWrite } from "@/components"
import { addComment } from "@/modules/comments"
import { CommentType } from "@/types/comments"
import { NextPage } from "next"
import React, { useState } from "react"
import { useDispatch } from "react-redux"

const CommentDetail: NextPage = () => {
  const [ comments, setComments ] = useState<CommentType>({
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
    <CommentList />
    <CommentWrite onChange={hanleChange} onSubmit={hanleSubmit} />
    </>
  )
}

export default CommentDetail