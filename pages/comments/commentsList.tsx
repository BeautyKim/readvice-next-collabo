import { NextPage } from "next"
import Link from "next/link"


const CommentsList: NextPage = () => {
  const list = "라우팅 확인"
  return (    
  <>
    <Link href={`/comments/${list}`}><a>한줄평 작성할 책카드</a></Link>
  </>
  )
}

export default CommentsList