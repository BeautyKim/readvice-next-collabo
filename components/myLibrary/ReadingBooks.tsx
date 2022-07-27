import booksData from "@/data/book.json"
import tw from "tailwind-styled-components";
import { SEO } from "../common/SEO";
import BookCard from "../ui/BookCard";
import MyLibraryLayout from "./MyLibraryLayout";

export function ReadingBooks() {
    return (
        <MyLibraryLayout>
        <SEO title ="읽은 책" />
        <Box>
            <Container className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                {booksData.map(book =>
                    <BookCard 
                        key={book.isbn} 
                        src={book.book_img} 
                        alt={book.book_title} 
                        title={book.book_title} 
                        author={book.author} 
                        href={`/comments/${book.book_title}`} />
                    )}
                </div>
            </Container>
            </Box>
        </MyLibraryLayout>
    );
}

const Box = tw.div`
    text-gray-600
    body-font
`
const Container = tw.div`
    container
    px-5
    py-24
    mx-auto
`