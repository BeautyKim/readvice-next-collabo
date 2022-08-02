import Link from "next/link"
import tw from "tailwind-styled-components"

interface Props {
    src: string,
    alt: string,
    title: string,
    author: string,
    href: string

}

const BookCard = ({ src ,alt, title, author, href}: Props) => {
    return (
    <div className="p-4 md:w-1/4">
        <ImgBox>
            <Img src={src} alt={alt}/>
            <div className="p-3">
                <AuthorName>{author}</AuthorName>
                <BookName>{title}</BookName>
                <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed
                    sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex flex-wrap items-center ">
                    <Link href={href}>
                        <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">한줄평</a>
                    </Link>
                </div>
            </div>
        </ImgBox>
    </div>
              
    )
}

export default BookCard

const ImgBox = tw.div`
    h-full 
    border-2 
    border-gray-200 
    border-opacity-60 
    rounded-lg 
    overflow-hidden
    bg-white
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