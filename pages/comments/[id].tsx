import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import CommentView from "@/components/comments/CommentView"
import bookData from "@/data/book.json"
import { SEO } from "@/components"

const CommentDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [ book, setBook ] = useState({
    isbn: "", author: "", book_title: "", book_info:"", book_img: ""
  })

  useEffect(() => {
    const bookId = bookData.find(element => element.isbn)
    console.log(">>>>>>>>>>>"+(JSON.stringify(bookId)))
    // setBook()

  }, [])

  return (    
    <>
    <SEO title={id} />
    <h1>{id}상세페이지</h1>
    <div className="flex">
      <h1>{book.book_title}</h1>
      <div>
        <CommentView />
      </div>
    </div>
    </>
  )
}

export default CommentDetail