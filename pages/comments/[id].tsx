import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import bookData from "@/data/book.json"
import { CommentWrite, SEO } from "@/components"

const CommentDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [ book, setBook ] = useState([{
    isbn: "", author: "", book_title: "", book_info:"", book_img: ""
}])

  useEffect(() => {
    const bookId = bookData.find(element => element.isbn)
    console.log(">>>>>>>>>>>"+(JSON.stringify(bookId)))
    setBook(book)

  }, [book])

  return (    
    <>
    <SEO title={id} />
    <section className="container flex flex-col items-center justify-center max-w-screen-sm px-5 py-24 mx-auto min-w-max max-h-96">
      <div className="w-full text-center lg:w-2/3">
        <h1 className="mb-4 text-2xl font-bold title-font sm:text-2xl">{id} 한줄평</h1>
      </div>
        <div>
          <CommentWrite />
          {/* <CommentList /> */}
        </div>
    </section>
    </>
  )
}

export default CommentDetail