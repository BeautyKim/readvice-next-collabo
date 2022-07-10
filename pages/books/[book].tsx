import { useRouter } from "next/router"

// 책 api를 받아오는 페이지 입니다.

function BookPage() {
    const router = useRouter()

    console.log(router.query.book)
  return<h1>book detail page</h1>
}

export default BookPage