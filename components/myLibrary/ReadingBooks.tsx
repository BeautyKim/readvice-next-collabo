import {SEO} from "@/components";
import booksData from "@/data/book.json"
import Link from "next/link";
import tw from "tailwind-styled-components";

export function ReadingBooks() {
    return (
        <> 
        <SEO title = "읽은 책" />
        <Box>
            <Container className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                {booksData.map(book =>
                    <div key={book.isbn} className="p-4 md:w-1/4">
                        <ImgBox>
                            <Img src={book.book_img} alt={book.book_title}/>
                            <div className="p-6">
                                <AuthorName>{book.author}</AuthorName>
                                <BookName>{book.book_title}</BookName>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={`/comments/${book.book_title}`}>
                                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">한줄평
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    </Link>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </ImgBox>
                    </div>
                    )}
                </div>
            </Container>
            </Box>
        </>
    );
}

const Box = tw.section`
    text-gray-600
    body-font
`
const Container = tw.div`
    container
    px-5
    py-24
    mx-auto
`
const ImgBox = tw.div`
    h-full 
    border-2 
    border-gray-200 
    border-opacity-60 
    rounded-lg 
    overflow-hidden
`
const Img = tw.img`
    lg:h-48
    md:h-36
    w-full
    object-cover 
    object-center
`
const AuthorName = tw.h2`
    tracking-widest 
    text-xs 
    title-font 
    font-medium 
    text-gray-400 
    mb-1
`
const BookName = tw.h1`
    title-font 
    text-lg 
    font-medium 
    text-gray-900 
    mb-3
`