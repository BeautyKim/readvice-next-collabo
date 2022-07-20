import { NextPage } from "next"
import { useRouter } from "next/router"

const BookPage: NextPage = () => {
    const router = useRouter()

    console.log(router.query.book)
  return<h1>book detail page</h1>
}

export default BookPage