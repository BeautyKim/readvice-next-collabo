import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { CommentWrite, Comment, SEO } from "@/components"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { commentData } from "@/data/comment"


const CommentDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  const MySwal = withReactContent(Swal)
  const [ text, setText ] = useState('')
  
  const addCommentSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const data = Math.floor(Math.random() * commentData.length)
    setText(commentData[data])
  }
  const addCommentChange = () => {
    
  }

  const commentCopy = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text).then(() => MySwal.fire({
            title:"복사 성공",
            icon: "success",
            text: `책 제목: ${id}`+ `복사 내용: ${text}`,
          }))
        
      } catch (error) {
        MySwal.fire({
          title:"복사 실패"
        })
      }  
    }

  return (    
    <>
    <SEO title={`독서기록장_${id}`} />
    <section className="container justify-center max-w-screen-lg px-5 py-24 mx-auto flexitems-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold title-font sm:text-2xl">{id} 독서기록장 생성</h1>
      </div>
        <div>
          <CommentWrite onSubmit={addCommentSubmit} onChange={addCommentChange} />
          <Comment onClick={() => commentCopy(text)} text={text} />
        </div>
    </section>
    </>
  )
}

export default CommentDetail