import { BookNav, ReadingBooks } from "@/components";
import { NextPage } from "next";

const ReadingBooksPage: NextPage = () => {
  return (
    <>
        <BookNav />
        <ReadingBooks />
    </>
  )
}
export default ReadingBooksPage