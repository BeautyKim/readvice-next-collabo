import Link from "next/link"

type Props = {
    BookHref: string,
    BookName: string,
    BookInfo: string,
    author: string,
    BookImg: string
}


const SearchCard = ({BookHref, BookName, BookInfo, author, BookImg}: Props) => {
    return (
        <div className="text-gray-600 body-font overflow-hidden">
            <div className="container px-2 py-4 mx-auto">
                <Link href={BookHref}><a>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" 
                            className="h-full lg:w-48 md:w-36 object-cover object-center rounded"
                            src={BookImg} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{author}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{BookName}</h1>
                            <p className="leading-relaxed">{BookInfo}</p>
                        </div>
                    </div>
                </a></Link>
                <div className="relative ">
                    <button className="h-20 absolute bottom-0 right-0 text-white bg-indigo-500 text-sm border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">찜하기</button>
                </div>
            </div>
        </div>
        )
}
export default SearchCard