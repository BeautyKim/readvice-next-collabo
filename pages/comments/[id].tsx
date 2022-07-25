import { CommentList, CommentWrite } from "@/components"
import BookCard from "@/components/UI/bookCard"
import { addComment } from "@/modules/slices/commentSlice"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import bookData from "@/data/book.json"
import { Book } from "@/modules/types"

const CommentDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  const [ comments, setComments ] = useState({})
  const [ book, setBook ] = useState({
    isbn: "", author: "", book_title: "", book_info:"", book_img: ""
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
  useEffect(() => {
    const bookId = bookData.find(element => element.isbn)
    console.log(JSON.stringify(bookId))
    setBook(bookId)

  }, [id])
  console.log(">>>>>>>>>>>"+(JSON.stringify(book)))

  return (    
    <>
    <h1>상세페이지 들어옴</h1>
    <div className="flex">
      <h1>{book.book_title}</h1>
      <div>
        <CommentList />
        <CommentWrite onChange={hanleChange} onSubmit={hanleSubmit} />
      </div>
    </div>
    </>
  )
}

export default CommentDetail